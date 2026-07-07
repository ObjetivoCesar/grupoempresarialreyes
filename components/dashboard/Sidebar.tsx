"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { getAssetUrl } from '@/lib/assets';
const navGroups = [
    {
        title: 'Inicio',
        items: [
            {
                name: 'Inicio', href: '/', icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                )
            },
        ]
    },
    {
        title: 'El Patrimonio',
        items: [
            {
                name: 'El Patrimonio', href: '/hacienda', icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            },
        ]
    },
    {
        title: 'El Negocio',
        items: [
            {
                name: 'El Negocio', href: '/el-negocio', icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                )
            },
        ]
    },
    {
        title: 'La Prueba',
        items: [
            {
                name: 'La Prueba', href: '/la-prueba', icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                )
            },
        ]
    },
    {
        title: 'La Oferta',
        items: [
            {
                name: 'La Oferta', href: '/la-oferta', icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            },
        ]
    },
    {
        title: 'Contacto',
        items: [
            {
                name: 'Contacto', href: '/contacto', icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                )
            },
            {
                name: 'Galería', href: '/galeria', icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                )
            },
        ]
    },
];


export default function AppSidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

    // Auto-open group containing current path
    useEffect(() => {
        const currentGroup = navGroups.find(group => 
            group.items.some(item => item.href === pathname)
        );
        if (currentGroup) {
            setOpenGroups(prev => ({ ...prev, [currentGroup.title]: true }));
        }
    }, [pathname]);

    const toggleGroup = (title: string, isSingleItem: boolean) => {
        if (isSingleItem) return;
        setOpenGroups(prev => ({
            ...prev,
            [title]: !prev[title]
        }));
    };

    // Cerrar sidebar al cambiar de ruta en móvil
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            {/* Mobile Header / Hamburger Toggle */}
            <div className={`lg:hidden fixed top-0 left-0 right-0 h-16 bg-verde-oscuro/95 backdrop-blur-md z-[60] flex items-center justify-between px-6 border-b border-white/10 transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-0'}`}>
                <Image
                    src={getAssetUrl('/Logos/AromaDeMontana Logo_5@4x.png')}
                    alt="Aroma de Montaña"
                    width={120}
                    height={40}
                    className="h-8 w-auto brightness-0 invert"
                />
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-cremita hover:bg-white/10 rounded-lg transition-colors"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar content */}
            <aside className={`fixed left-0 top-0 h-full w-64 bg-verde-oscuro text-cremita z-50 flex flex-col shadow-xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 border-b border-white/10 hidden lg:block">
                    <Image
                        src={getAssetUrl('/Logos/AromaDeMontana Logo_5@4x.png')}
                        alt="Aroma de Montaña"
                        width={150}
                        height={50}
                        className="h-10 w-auto brightness-0 invert"
                    />
                    <p className="text-[10px] mt-2 opacity-50 tracking-widest font-semibold uppercase">
                        Ecosistema GER
                    </p>
                </div>

                <nav className="flex-1 px-4 py-8 lg:py-8 pt-20 lg:pt-8 space-y-1 overflow-y-auto custom-scrollbar">
                    {navGroups.map((group) => {
                        return group.items.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                                    <motion.div
                                        whileHover={{ x: 4 }}
                                        className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm ${
                                            isActive
                                                ? 'bg-naranja text-white shadow-lg'
                                                : 'text-cremita/70 hover:bg-white/10 hover:text-cremita'
                                        }`}
                                    >
                                        {item.name}
                                    </motion.div>
                                </Link>
                            );
                        });
                    })}
                </nav>


                {/* Badge de Precio Persistente */}
                <Link href="/la-oferta" onClick={() => setIsOpen(false)}>
                    <div className="mx-4 mb-3 p-4 rounded-2xl bg-naranja/15 border border-naranja/30 hover:bg-naranja/25 transition-all cursor-pointer group">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-naranja/70 font-poppins mb-0.5">Precio de Venta</p>
                        <div className="flex items-center justify-between">
                            <p className="text-xl font-black text-white group-hover:text-naranja transition-colors">USD 230.000</p>
                            <span className="text-naranja text-sm font-bold">→</span>
                        </div>
                        <p className="text-[10px] text-cremita/40 font-poppins mt-0.5">100% empresa • Ver oferta</p>
                    </div>
                </Link>

                <div className="p-4 border-t border-white/10 m-4 mt-0 rounded-2xl bg-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-cafe-acento flex items-center justify-center font-bold text-xs text-white">
                            AM
                        </div>
                        <div>
                            <p className="text-xs font-bold">Comprador</p>
                            <p className="text-[10px] opacity-50">Acceso Privado</p>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
