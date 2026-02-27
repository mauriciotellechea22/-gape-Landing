import { motion } from 'framer-motion';
import { veganMenu } from '@/lib/products';
import { Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function VeganSection() {
    return (
        <section id="vegan-menu" className="py-24 px-4 bg-gradient-to-br from-agape-green-50 to-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="flex justify-center mb-4">
                        <div className="bg-agape-green-100 p-4 rounded-full">
                            <Leaf className="w-10 h-10 text-agape-green" />
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-agape-green mb-4 font-handwritten">
                        Opciones Veganas
                    </h2>
                    <p className="text-lg text-gray-700 font-rounded">
                        Alternativas 100% plant-based preparadas con el mismo amor.
                    </p>
                </motion.div>

                <div className="bg-white rounded-2xl shadow-xl border border-agape-green-200 overflow-hidden">
                    <div className="p-8 md:p-12">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {veganMenu.map((item, index) => (
                                <motion.li
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex items-center gap-3"
                                >
                                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-agape-green"></span>
                                    <span className="text-xl text-gray-800 font-rounded font-semibold">
                                        {item.name}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="mt-10 bg-agape-yellow-50 border-l-4 border-agape-yellow p-4 rounded-r-lg flex flex-col sm:flex-row items-center justify-between gap-4"
                        >
                            <p className="text-gray-700 font-rounded">
                                📌 <span className="font-semibold">Consultar disponibilidad y combinaciones</span>
                            </p>
                            <Button
                                onClick={() => window.open('https://wa.me/59899123456?text=Hola,%20quisiera%20consultar%20por%20las%20opciones%20veganas', '_blank')}
                                className="bg-agape-green hover:bg-agape-green-600 text-white font-rounded w-full sm:w-auto"
                            >
                                Consultar
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
