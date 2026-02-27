import { motion } from 'framer-motion';
import { packs } from '@/lib/products';
import { PackCard } from './pack-card';

export function PacksSection() {
    return (
        <section id="packs" className="py-24 bg-agape-purple-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-agape-purple mb-4 font-handwritten">
                        Packs para Compartir
                    </h2>
                    <p className="text-xl text-gray-700 font-rounded font-light max-w-2xl mx-auto">
                        Opciones ideales armadas con nuestros mejores productos, listos para regalar o disfrutar en familia.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {packs.map((pack, index) => (
                        <PackCard key={pack.id} pack={pack} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
