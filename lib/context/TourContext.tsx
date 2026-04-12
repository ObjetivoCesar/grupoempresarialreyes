"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export interface TourStep {
  path: string;
  label: string;
  message: string;
}

const steps: TourStep[] = [
  { 
    path: '/', 
    label: 'Bienvenida', 
    message: 'Estás a punto de auditar un activo de 23.5 hectáreas en el corazón de Loja.' 
  },
  { 
    path: '/hacienda', 
    label: 'El Patrimonio', 
    message: 'Conoce la tierra virgen, los cultivos de café y la visión de Ramiro Castro.' 
  },
  { 
    path: '/retire', 
    label: 'El Estilo de Vida', 
    message: 'Así vivirán quienes elijan este santuario para su retiro o inversión.' 
  },
  { 
    path: '/modelo-negocio', 
    label: 'Los Números', 
    message: 'Proyecciones financieras claras y un modelo de sociedad 50/50.' 
  },
  { 
    path: '/seguridad', 
    label: 'La Seguridad', 
    message: 'Blindaje jurídico internacional para proteger tu patrimonio.' 
  },
  { 
    path: '/oportunidad', 
    label: 'El Cierre', 
    message: '¿Hacemos una llamada esta semana para asegurar tu participación?' 
  },
];

interface TourContextType {
  isActive: boolean;
  currentStep: number;
  totalSteps: number;
  activeStep: TourStep;
  startTour: () => void;
  nextStep: () => void;
  prevStep: () => void;
  closeTour: () => void;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

export function TourProvider({ children }: { children: React.ReactNode }) {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  // Sync currentStep with pathname if tour is active
  useEffect(() => {
    if (isActive) {
      const stepIndex = steps.findIndex(step => step.path === pathname);
      if (stepIndex !== -1 && stepIndex !== currentStep) {
        setCurrentStep(stepIndex);
      }
    }
  }, [pathname, isActive, currentStep]);

  const startTour = () => {
    setIsActive(true);
    setCurrentStep(0);
    router.push(steps[0].path);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      const next = currentStep + 1;
      setCurrentStep(next);
      router.push(steps[next].path);
    } else {
      closeTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      const prev = currentStep - 1;
      setCurrentStep(prev);
      router.push(steps[prev].path);
    }
  };

  const closeTour = () => {
    setIsActive(false);
    setCurrentStep(0);
  };

  return (
    <TourContext.Provider value={{
      isActive,
      currentStep,
      totalSteps: steps.length,
      activeStep: steps[currentStep],
      startTour,
      nextStep,
      prevStep,
      closeTour
    }}>
      {children}
    </TourContext.Provider>
  );
}

export function useTour() {
  const context = useContext(TourContext);
  if (context === undefined) {
    throw new Error('useTour must be used within a TourProvider');
  }
  return context;
}
