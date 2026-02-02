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
        description: 'Horneada lentamente con miel, coco en escamas y lluvia de frutos secos.',
        price: 350,
        image: '/images/products/granola.jpg',
        priceNote: 'Paquete 500g'
    },
    {
        id: 'chipa',
        name: 'Chipás de Queso',
        description: 'La receta clásica: explosión de queso, crocantes por fuera y nube por dentro.',
        price: 420,
        image: '/images/products/chipa.jpg',
        priceNote: 'x Docena'
    },
    {
        id: 'scones',
        name: 'Scones de la Tarde',
        description: 'Masa tierna y mantecosa, ideales para acompañar el mate o el té.',
        price: 380,
        image: '/images/products/scones.jpg',
        priceNote: 'x Docena'
    }
];
