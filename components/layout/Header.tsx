'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
    { name: 'HOME', href: '#home' },
    { name: 'PRODUCTO', href: '#producto' },
    { name: 'ACTIVO', href: '#activo' },
    { name: 'NEGOCIO', href: '#negocio' },
    { name: 'OPORTUNIDAD', href: '#oportunidad' },
    { name: 'SEGURIDAD', href: '#seguridad' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navigation.map(nav => nav.href.replace('#', ''));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-cremita/95 backdrop-blur-md shadow-md-custom'
                    : 'bg-transparent'
                }`}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between h-20 md:h-24">
                    {/* Logo */}
                    <Link href="#home" onClick={() => handleNavClick('#home')} className="flex items-center">
                        <Image
                            src="/Logos/AromaDeMontana Logo_4@4x.png"
                            alt="Aroma de Montaña"
                            width={180}
                            height={60}
                            className="h-12 md:h-16 w-auto hover:scale-105 transition-transform duration-300"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navigation.map((item) => {
                            const isActive = activeSection === item.href.replace('#', '');
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.href)}
                                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                                            ? 'bg-naranja text-white'
                                            : 'text-gris-oscuro hover:bg-naranja/10 hover:text-naranja'
                                        }`}
                                >
                                    {item.name}
                                </button>
                            );
                        })}
                    </div>

                    {/* CTA Button - Desktop */}
                    <div className="hidden lg:block">
                        <button className="btn-primary">
                            Descargar Dossier
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-naranja/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-gris-oscuro"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-2">
                                {navigation.map((item) => {
                                    const isActive = activeSection === item.href.replace('#', '');
                                    return (
                                        <button
                                            key={item.name}
                                            onClick={() => handleNavClick(item.href)}
                                            className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive
                                                    ? 'bg-naranja text-white'
                                                    : 'text-gris-oscuro hover:bg-naranja/10 hover:text-naranja'
                                                }`}
                                        >
                                            {item.name}
                                        </button>
                                    );
                                })}
                                <button className="btn-primary w-full mt-4">
                                    Descargar Dossier
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
