"use client";

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getAssetUrl } from '@/lib/assets';

interface LightboxProps {
    images: string[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function Lightbox({ images, currentIndex, isOpen, onClose, onNext, onPrev }: LightboxProps) {
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isOpen) return;
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') onNext();
        if (e.key === 'ArrowLeft') onPrev();
    }, [isOpen, onClose, onNext, onPrev]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, handleKeyDown]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
                >
                    {/* Background click to close */}
                    <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-naranja rounded-full text-white transition-all cursor-pointer hover:scale-110"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Prev Button */}
                    {images.length > 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); onPrev(); }}
                            className="absolute left-4 md:left-12 z-50 p-3 bg-white/10 hover:bg-naranja rounded-full text-white transition-all cursor-pointer hover:scale-110"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                    )}

                    {/* Image */}
                    <div className="relative z-10 w-full max-w-7xl h-[85vh] px-4 md:px-24 pointer-events-none">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="relative w-full h-full drop-shadow-2xl"
                            >
                                <Image
                                    src={getAssetUrl(images[currentIndex])}
                                    alt={`Galería Imagen ${currentIndex + 1}`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 90vw"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Next Button */}
                    {images.length > 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); onNext(); }}
                            className="absolute right-4 md:right-12 z-50 p-3 bg-white/10 hover:bg-naranja rounded-full text-white transition-all cursor-pointer hover:scale-110"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    )}

                    {/* Image Counter */}
                    {images.length > 1 && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-mono text-sm tracking-widest bg-white/10 px-5 py-2 rounded-full backdrop-blur-md">
                            {currentIndex + 1} / {images.length}
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
