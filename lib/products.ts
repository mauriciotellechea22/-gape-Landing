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
        image: '/images/products/barras.jpg',
        priceNote: '$400 Pack x5'
    },
    {
        id: 'granola',
        name: 'Granola Casera "Crunchy"',
        description: 'Horneada lentamente con miel, coco en escamas y lluvia de frutos secos. Disponible para stock.',
        price: 350,
        image: '/images/products/granola.jpg',
        priceNote: 'Paquete 500g'
    },
    {
        id: 'chipa',
        name: 'Chipás de Queso',
        description: 'Congelados o recién horneados. Bandejas de 8 o 12 unidades. Encargo con 24hs de anticipación.',
        price: 420,
        image: '/images/products/chipa.jpg',
        priceNote: 'x Docena'
    },
    {
        id: 'scones',
        name: 'Scones de la Tarde',
        description: 'Masa tierna y mantecosa, ideales para acompañar el mate o el té. Encargo con 24hs de anticipación.',
        price: 380,
        image: '/images/products/scones.jpg',
        priceNote: 'x Docena'
    },
    {
        id: 'alfajores',
        name: 'Alfajores Saludables',
        description: 'Deliciosos alfajores artesanales con dulce de leche casero. Perfectos para endulzar tu día.',
        price: 120,
        image: '/images/products/alfajores.jpg',
        priceNote: 'x 3 unidades'
    }
];
