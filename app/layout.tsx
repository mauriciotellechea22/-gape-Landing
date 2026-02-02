import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ágape | Cocina Saludable',
  description: 'Descubre nuestra cocina saludable y deliciosa. Productos artesanales con ingredientes naturales. Pedí por WhatsApp.',
  keywords: ['cocina saludable', 'comida saludable', 'artesanal', 'natural', 'Uruguay', 'hummus', 'conservas', 'bowls saludables'],
  authors: [{ name: 'Ágape Cocina Saludable' }],
  openGraph: {
    title: 'Ágape | Cocina Saludable',
    description: 'Cocina saludable hecha con amor. Ingredientes naturales, recetas creativas.',
    type: 'website',
    locale: 'es_UY',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ágape | Cocina Saludable',
    description: 'Cocina saludable hecha con amor. Ingredientes naturales, recetas creativas.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-rounded antialiased">
        {children}
      </body>
    </html>
  );
}
