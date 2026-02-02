'use client';

import { motion } from 'framer-motion';
import { products } from '@/lib/products';
import { ProductCard } from './product-card';

export function ProductGrid() {
    return (
        <section id="products" className="py-20 px-4 bg-gradient-to-b from-cream via-yellow-50 to-green-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-purple-700 mb-4 font-handwritten">
                        Nuestros Productos
                    </h2>
                    <p className="text-xl text-green-700 font-rounded font-light max-w-2xl mx-auto">
                        Cada producto es elaborado con dedicación y los mejores ingredientes naturales
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
