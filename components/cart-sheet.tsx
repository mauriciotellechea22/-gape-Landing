'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/lib/store';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import confetti from 'canvas-confetti';

interface CartSheetProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
    const { items, updateQuantity, removeItem, total, clearCart } = useCart();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [notes, setNotes] = useState('');

    const handleCheckout = () => {
        if (!name.trim() || !address.trim()) {
            alert('Por favor completa tu nombre y dirección');
            return;
        }

        // Trigger confetti with ágape colors
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#f4cc44', '#9e5f85', '#7CA35C', '#a40404'] // Saffron Yellow, Strikemaster Purple, Asparagus Green, Bright Red
        });

        // Generate WhatsApp link
        const whatsappUrl = generateWhatsAppLink(items, name, address, undefined, notes);

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        // Clear form and cart after a delay
        setTimeout(() => {
            setName('');
            setAddress('');
            setNotes('');
            clearCart();
            onOpenChange(false);
        }, 1000);
    };

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="w-full sm:max-w-lg bg-white overflow-y-auto border-l-4 border-purple-500">
                <SheetHeader className="border-b pb-4 mb-6">
                    <SheetTitle className="text-4xl font-handwritten text-purple-700">
                        Tu Carrito
                    </SheetTitle>
                    <SheetDescription className="text-gray-600 font-rounded text-base">
                        Revisa tu pedido antes de finalizar
                    </SheetDescription>
                </SheetHeader>

                <div className="space-y-6">
                    {items.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <div className="text-7xl mb-4">🛒</div>
                            <p className="text-2xl text-gray-700 font-handwritten mb-2">
                                Tu carrito está vacío
                            </p>
                            <p className="text-gray-500 font-rounded">
                                ¡Agrega algunos productos deliciosos!
                            </p>
                        </motion.div>
                    ) : (
                        <>
                            {/* Cart Items */}
                            <div className="space-y-4">
                                <AnimatePresence>
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.product.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="bg-gradient-to-br from-purple-50 to-green-50 rounded-xl p-4 shadow-sm border border-purple-200"
                                        >
                                            <div className="flex gap-4">
                                                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-white shadow-sm">
                                                    <Image
                                                        src={item.product.image}
                                                        alt={item.product.name}
                                                        fill
                                                        className="object-cover"
                                                        sizes="96px"
                                                    />
                                                </div>

                                                <div className="flex-grow min-w-0">
                                                    <h3 className="font-handwritten text-xl text-purple-800 mb-1 truncate">
                                                        {item.product.name}
                                                    </h3>
                                                    <p className="text-green-700 font-bold font-rounded text-lg">
                                                        ${item.product.price} c/u
                                                    </p>

                                                    <div className="flex items-center gap-2 mt-3">
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                            className="h-9 w-9 p-0 border-2 border-purple-300 hover:bg-purple-100 rounded-lg"
                                                        >
                                                            <Minus className="w-4 h-4 text-purple-700" />
                                                        </Button>

                                                        <span className="w-12 text-center font-rounded font-bold text-lg text-gray-800">
                                                            {item.quantity}
                                                        </span>

                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                            className="h-9 w-9 p-0 border-2 border-purple-300 hover:bg-purple-100 rounded-lg"
                                                        >
                                                            <Plus className="w-4 h-4 text-purple-700" />
                                                        </Button>

                                                        <Button
                                                            size="sm"
                                                            variant="ghost"
                                                            onClick={() => removeItem(item.product.id)}
                                                            className="h-9 w-9 p-0 ml-auto text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </div>

                                                <div className="text-right font-bold text-xl text-purple-700 font-rounded">
                                                    ${item.product.price * item.quantity}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            <Separator className="bg-purple-200" />

                            {/* Total */}
                            <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded-xl p-4 border-2 border-purple-300">
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-handwritten text-purple-800">Total:</span>
                                    <span className="text-3xl text-purple-700 font-bold font-rounded">${total()}</span>
                                </div>
                            </div>

                            <Separator className="bg-purple-200" />

                            {/* Checkout Form */}
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="name" className="text-lg text-gray-800 font-rounded font-semibold mb-2 block">
                                        Tu Nombre
                                    </Label>
                                    <Input
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Ej: María González"
                                        className="text-base border-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500 bg-white h-12 font-rounded text-gray-800 placeholder:text-gray-400"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="address" className="text-lg text-gray-800 font-rounded font-semibold mb-2 block">
                                        Dirección / Punto de Retiro
                                    </Label>
                                    <Input
                                        id="address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder="Ej: Av. Italia 2583"
                                        className="text-base border-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500 bg-white h-12 font-rounded text-gray-800 placeholder:text-gray-400"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="notes" className="text-lg text-gray-800 font-rounded font-semibold mb-2 block">
                                        Notas o Instrucciones <span className="text-gray-500 text-sm font-normal">(opcional)</span>
                                    </Label>
                                    <textarea
                                        id="notes"
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        placeholder="Ej: Sin azúcar, alergia a los frutos secos, entregar después de las 15hs..."
                                        rows={3}
                                        className="w-full text-base border-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500 bg-white p-3 font-rounded text-gray-800 placeholder:text-gray-400 rounded-md resize-none"
                                    />
                                </div>

                                {/* Delivery Notice */}
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-r-lg">
                                    <p className="text-sm text-gray-700 font-rounded">
                                        <span className="font-semibold">📦 Reparto:</span> Todos los pedidos se entregan en <span className="font-semibold">horario matutino</span>.
                                    </p>
                                </div>

                                <Button
                                    onClick={handleCheckout}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-rounded font-bold shadow-xl hover:shadow-2xl transition-all h-14"
                                    size="lg"
                                >
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Pedir por WhatsApp
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
}
