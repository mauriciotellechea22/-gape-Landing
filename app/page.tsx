'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/hero-section';
import { ProductGrid } from '@/components/product-grid';
import { FloatingCartButton } from '@/components/floating-cart-button';
import { CartSheet } from '@/components/cart-sheet';
import Image from 'next/image';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductGrid />
      <FloatingCartButton onClick={() => setIsCartOpen(true)} />
      <CartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-700 to-green-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="ágape cocina saludable"
              width={200}
              height={66}
              className="w-auto h-16"
            />
          </div>
          <h3 className="text-3xl font-handwritten mb-4">
            ágape
          </h3>
          <p className="text-green-100 font-rounded mb-6">
            Cocina saludable hecha con amor
          </p>
          <p className="text-sm text-purple-200 font-rounded">
            © {new Date().getFullYear()} Ágape Cocina Saludable • Todos los derechos reservados
          </p>
        </div>
      </footer>
    </main>
  );
}
