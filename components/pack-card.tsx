import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Pack } from '@/lib/products';
import { useCart } from '@/lib/store';
import { ShoppingBag, Star, Package } from 'lucide-react';
import { toast } from 'sonner';

interface PackCardProps {
    pack: Pack;
    index: number;
}

export function PackCard({ pack, index }: PackCardProps) {
    const addItem = useCart(state => state.addItem);

    const handleAddToCart = () => {
        if (pack.price === 'consultar') {
            // Logic for inquiring pack 4 could be redirect to whatsapp
            const message = encodeURIComponent(`Hola, quiero consultar el precio del ${pack.name}.`);
            window.open(`https://wa.me/59899123456?text=${message}`, '_blank');
            return;
        }

        addItem({
            id: pack.id,
            name: pack.name,
            price: pack.price as number,
            image: pack.image || '/images/products/barras.jpg', // fallback image
            description: pack.description
        });
        toast.success(`${pack.name} agregado al carrito!`, {
            icon: '🛒',
            style: {
                background: '#f6f9f3',
                color: '#7CA35C',
                border: '1px solid #d5e5ca',
            }
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="h-full"
        >
            <Card className="overflow-hidden h-full flex flex-col bg-white border-agape-yellow-300 shadow-md hover:shadow-xl transition-all duration-300 relative group">
                {/* Ribbon for Packs */}
                <div className="absolute top-4 -right-12 bg-agape-yellow text-gray-900 font-bold px-12 py-1 rotate-45 z-10 shadow-sm border-y border-agape-yellow-600">
                    <span className="flex items-center gap-1 font-rounded">
                        <Star className="w-3 h-3 fill-current" /> PACK <Star className="w-3 h-3 fill-current" />
                    </span>
                </div>

                <div className="relative h-48 md:h-56 lg:h-64 w-full overflow-hidden bg-agape-yellow-50">
                    <Image
                        src={pack.image || '/images/products/barras.jpg'}
                        alt={pack.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                <CardHeader className="bg-gradient-to-b from-agape-yellow-50/50 to-transparent">
                    <CardTitle className="text-2xl md:text-3xl text-gray-900 font-handwritten">{pack.name}</CardTitle>
                    <CardDescription className="text-gray-600 font-rounded text-base">
                        {pack.description}
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                    <div className="mb-4">
                        <h4 className="font-bold text-gray-800 font-rounded flex items-center gap-2 mb-2">
                            <Package className="w-4 h-4 text-agape-green" /> Incluye:
                        </h4>
                        <ul className="space-y-1 pl-6">
                            {pack.items.map((item, i) => (
                                <li key={i} className="text-gray-700 font-rounded text-sm list-disc marker:text-agape-yellow-500">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {pack.extras && (
                        <div className="bg-agape-purple-50 p-2 rounded-md border border-agape-purple-200 mt-2">
                            <p className="text-sm font-rounded text-agape-purple font-semibold flex items-center gap-1">
                                <Plus className="w-4 h-4" /> {pack.extras}
                            </p>
                        </div>
                    )}

                    <div className="flex items-baseline gap-2 mt-4">
                        <p className="text-3xl font-bold text-gray-900">
                            {pack.price === 'consultar' ? 'Consultar precio' : `$${pack.price}`}
                        </p>
                    </div>
                </CardContent>

                <CardFooter className="pt-0">
                    <Button
                        onClick={handleAddToCart}
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white font-rounded font-semibold shadow-md hover:shadow-lg transition-all"
                        size="lg"
                    >
                        {pack.price === 'consultar' ? 'Consultar vía WhatsApp' : (
                            <>
                                <ShoppingBag className="mr-2 w-5 h-5" />
                                Agregar Pack
                            </>
                        )}
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}

// Need to import Plus from lucide-react if using it, adding it at the top manually
import { Plus } from 'lucide-react';
