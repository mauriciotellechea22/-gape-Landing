import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Info, Flame } from 'lucide-react';
import { useCart } from '@/lib/store';
import { products } from '@/lib/products';
import { toast } from 'sonner';

export function ChipaHighlight() {
    const addItem = useCart(state => state.addItem);

    // Find the chipa product from our product list
    const chipaProduct = products.find(p => p.id === 'chipa');

    const handleAddToCart = () => {
        if (!chipaProduct) return;

        addItem({
            id: chipaProduct.id,
            name: chipaProduct.name,
            price: chipaProduct.price,
            image: chipaProduct.image,
            description: chipaProduct.description
        });

        toast.success(`Chipá agregado al carrito!`, {
            icon: '🧀',
            style: {
                background: '#fdf3c9',
                color: '#a96710',
                border: '1px solid #fbe68f',
            }
        });
    };

    return (
        <section className="py-24 px-4 bg-agape-yellow-50">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/images/products/chipa.jpg"
                                alt="Chipás horneados de Cocina Agapé"
                                fill
                                className="object-cover"
                            />
                            {/* "Estrella" Badge */}
                            <div className="absolute top-4 left-4 bg-agape-red text-white text-sm font-bold font-rounded px-4 py-2 rounded-full shadow-lg transform -rotate-12">
                                Producto Estrella ⭐
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div>
                            <h2 className="text-agape-purple font-handwritten text-5xl md:text-6xl mb-2">Nuestro Plato Fuerte</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 font-rounded">Chipá 🧀</h3>
                            <p className="text-xl text-gray-600 font-rounded mt-4 italic">
                                &quot;Chipá con amor y mucho queso&quot; - Horneados o Congelados
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-agape-yellow-200">
                            <h4 className="flex items-center gap-2 font-bold text-agape-purple font-rounded mb-3">
                                <Info className="w-5 h-5" /> Ingredientes Reales
                            </h4>
                            <p className="text-gray-700 font-rounded leading-relaxed">
                                Fécula de mandioca, Queso gouda, Queso mozzarella, Leche, Manteca, Huevo, Sal, Polvo de hornear.
                            </p>
                        </div>

                        <div className="bg-agape-purple-50 rounded-2xl p-6 border border-agape-purple-100">
                            <h4 className="flex items-center gap-2 font-bold text-agape-red font-rounded mb-3 text-lg">
                                <Flame className="w-5 h-5" /> 🔥 Cómo prepararlos
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-gray-800 font-rounded">
                                    <span className="font-bold text-agape-purple">1.</span>
                                    <span>Precalentar horno a 180°C</span>
                                </li>
                                <li className="flex gap-3 text-gray-800 font-rounded">
                                    <span className="font-bold text-agape-purple">2.</span>
                                    <span>Colocar sin descongelar en una bandeja (no es necesario enmantecar)</span>
                                </li>
                                <li className="flex gap-3 text-gray-800 font-rounded">
                                    <span className="font-bold text-agape-purple">3.</span>
                                    <span>Cocinar 15 a 20 minutos, hasta dorar</span>
                                </li>
                            </ul>
                            <div className="mt-4 pt-4 border-t border-agape-purple-200 text-center">
                                <span className="inline-block bg-white text-agape-purple font-bold px-4 py-1 rounded-full text-sm font-rounded shadow-sm">
                                    ✨ ¡También quedan perfectos en freidora de aire! ✨
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                size="lg"
                                onClick={handleAddToCart}
                                className="bg-agape-yellow hover:bg-agape-yellow-600 text-gray-900 font-bold font-rounded text-lg w-full sm:w-auto"
                            >
                                Agregar Docena (${chipaProduct?.price || 420})
                            </Button>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
