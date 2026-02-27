export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category?: string;
    image: string;
    priceNote?: string;
}

export const products: Product[] = [
    {
        id: 'barras',
        name: 'Barra Energética Ágape',
        description: 'Avena tostada, miel pura y mix de semillas para energía real y duradera.',
        price: 90,
        image: '/images/new-agape/pack5.jpeg',
        priceNote: '$400 Pack x5'
    },
    {
        id: 'granola',
        name: 'Granola Casera "Crunchy"',
        description: 'Horneada lentamente con miel, coco en escamas y lluvia de frutos secos. Disponible para stock.',
        price: 350,
        image: '/images/new-agape/pack6.jpeg',
        priceNote: 'Paquete 500g'
    },
    {
        id: 'chipa',
        name: 'Chipá',
        description: 'Horneados / congelados. Ingredientes: Fécula de mandioca, Queso gouda, Queso mozzarella, Leche, Manteca, Huevo, Sal, Polvo de hornear. 🔥 Cómo prepararlos: Precalentar horno a 180°C. Colocar sin descongelar en una bandeja (no es necesario enmantecar). Cocinar 15 a 20 minutos, hasta dorar. También quedan perfectos en freidora de aire ✨',
        price: 420,
        image: '/images/new-agape/chipa-destacado.jpeg',
        priceNote: 'x Docena'
    },
    {
        id: 'scones',
        name: 'Scones de la Tarde',
        description: 'Masa tierna y mantecosa, ideales para acompañar el mate o el té. Encargo con 24hs de anticipación.',
        price: 380,
        image: '/images/new-agape/pack7.jpeg',
        priceNote: 'x Docena'
    },
    {
        id: 'alfajores',
        name: 'Alfajores Saludables',
        description: 'Deliciosos alfajores artesanales con dulce de leche casero. Perfectos para endulzar tu día.',
        price: 120,
        image: '/images/new-agape/agape-new-1.jpeg',
        priceNote: 'x 3 unidades'
    }
];

export interface Pack {
    id: string;
    name: string;
    description: string;
    items: string[];
    price: number | 'consultar';
    shipping?: string;
    extras?: string;
    image?: string;
}

export const packs: Pack[] = [
    {
        id: 'pack-1',
        name: 'Pack 1 – Salado',
        description: 'Ideal para compartir a cualquier hora.',
        items: ['7 chipas', '3 cuadraditos dulces'],
        price: 500,
        extras: 'Dentro de la fortuna, gratis',
        shipping: 'Envíos: $45',
        image: '/images/new-agape/pack1.jpeg'
    },
    {
        id: 'pack-2',
        name: 'Pack 2 – Merienda',
        description: 'Para acompañar el mate o té de la tarde.',
        items: ['4 scones', '2 pastafrolas (Opción: dulce de membrillo o dulce de leche)'],
        price: 370,
        image: '/images/new-agape/pack2.jpeg'
    },
    {
        id: 'pack-3',
        name: 'Pack 3 – Alfajor de maicena',
        description: 'Clásicos y artesanales, hechos con mucho amor.',
        items: ['Caja de 10 unidades'],
        price: 1100,
        image: '/images/new-agape/pack3.jpeg'
    },
    {
        id: 'pack-4',
        name: 'Pack 4 – Especial milanesa',
        description: 'Listos para hornear y disfrutar en familia.',
        items: ['2 prepizzas', '1 tortillón', '1 pastel de carne'],
        price: 'consultar',
        image: '/images/new-agape/pack4.jpeg'
    }
];

export interface VeganItem {
    id: string;
    name: string;
    description?: string;
}

export const veganMenu: VeganItem[] = [
    { id: 'v-1', name: 'Seitán' },
    { id: 'v-2', name: 'Hamburguesas de la casa' },
    { id: 'v-3', name: 'Leche de almendras' },
    { id: 'v-4', name: 'Tofu' },
    { id: 'v-5', name: 'Quesos veganos' }
];
