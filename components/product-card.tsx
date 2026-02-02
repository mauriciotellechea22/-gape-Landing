'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/store';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ProductCardProps {
    product: Product;
    index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
    const addItem = useCart(state => state.addItem);
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = () => {
        setIsAdding(true);
        addItem(product);

        setTimeout(() => {
            setIsAdding(false);
        }, 600);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
        >
            <Card className="overflow-hidden h-full flex flex-col bg-white border-green-200 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 w-full overflow-hidden bg-purple-50">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                </div>

                <CardHeader>
                    <CardTitle className="text-2xl text-purple-700 font-handwritten">{product.name}</CardTitle>
                    <CardDescription className="text-gray-600 font-rounded">
                        {product.description}
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                    <div className="flex items-baseline gap-2">
                        <p className="text-3xl font-bold text-purple-600">
                            ${product.price}
                        </p>
                        {product.priceNote && (
                            <span className="text-sm text-green-600 font-rounded">
                                {product.priceNote}
                            </span>
                        )}
                    </div>
                </CardContent>

                <CardFooter>
                    <motion.div
                        className="w-full"
                        animate={isAdding ? { scale: [1, 0.95, 1.05, 1] } : {}}
                        transition={{ duration: 0.4 }}
                    >
                        <Button
                            onClick={handleAddToCart}
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-rounded font-semibold shadow-md hover:shadow-lg transition-all"
                            size="lg"
                        >
                            <ShoppingBag className="mr-2 w-5 h-5" />
                            Agregar al Carrito
                        </Button>
                    </motion.div>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
