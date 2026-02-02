'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
    const scrollToProducts = () => {
        const productsSection = document.getElementById('products');
        productsSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-50 via-green-50 to-purple-50">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiIGZpbGw9IiNBODY1OUYiLz48L2c+PC9zdmc+')]"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {/* Logo */}
                    <motion.div
                        className="mb-8 flex justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        <Image
                            src="/images/logo.png"
                            alt="ágape cocina saludable"
                            width={300}
                            height={100}
                            priority
                            className="w-auto h-16 md:h-24 lg:h-32"
                        />
                    </motion.div>

                    {/* ⚠️ TODO: Update with actual brand messaging */}
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-agape-purple mb-4 md:mb-6 leading-tight font-handwritten"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Cocina saludable
                        <br />
                        <span className="text-agape-green">hecha con amor</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-12 font-rounded font-light max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Ingredientes naturales, recetas creativas, y el sabor de lo auténtico
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <Button
                            size="lg"
                            onClick={scrollToProducts}
                            className="bg-agape-yellow hover:bg-agape-yellow-600 text-gray-900 px-6 py-4 md:px-8 md:py-6 text-base md:text-lg font-rounded font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            Ver Menú
                            <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <ArrowDown className="w-6 h-6 text-agape-purple opacity-50" />
            </motion.div>
        </section>
    );
}
