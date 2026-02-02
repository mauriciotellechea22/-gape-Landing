'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';

interface FloatingCartButtonProps {
    onClick: () => void;
}

export function FloatingCartButton({ onClick }: FloatingCartButtonProps) {
    const itemCount = useCart(state => state.itemCount());
    const [pulse, setPulse] = useState(false);
    const [prevCount, setPrevCount] = useState(0);

    useEffect(() => {
        if (itemCount > prevCount) {
            setPulse(true);
            setTimeout(() => setPulse(false), 500);
        }
        setPrevCount(itemCount);
    }, [itemCount, prevCount]);

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        >
            <motion.div
                animate={pulse ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3 }}
            >
                <Button
                    onClick={onClick}
                    size="lg"
                    className="h-16 w-16 rounded-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 shadow-2xl hover:shadow-3xl relative group"
                >
                    <ShoppingBag className="w-7 h-7" />

                    <AnimatePresence>
                        {itemCount > 0 && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="absolute -top-2 -right-2"
                            >
                                <Badge className="h-7 w-7 flex items-center justify-center bg-red-700 text-white border-2 border-white rounded-full p-0 font-bold font-rounded">
                                    {itemCount}
                                </Badge>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Button>
            </motion.div>
        </motion.div>
    );
}
