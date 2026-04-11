'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    youtubeId: string;
}

export default function VideoModal({ isOpen, onClose, youtubeId }: VideoModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-sm"
                onClick={onClose}
            >
                <div className="absolute top-6 right-6 z-[110]">
                    <button 
                        onClick={onClose}
                        className="w-12 h-12 bg-white/10 hover:bg-naranja rounded-full flex items-center justify-center text-white transition-all text-2xl"
                    >
                        ✕
                    </button>
                </div>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black"
                    onClick={(e) => e.stopPropagation()}
                >
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
