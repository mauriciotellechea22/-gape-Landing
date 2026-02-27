'use client';

import { QRCodeSVG } from 'qrcode.react';
import { Smartphone, Utensils } from 'lucide-react';
import Image from 'next/image';

export default function CartelPrintPage() {
    // Configuración actual (a confirmar con Fiama)
    // TODO: Update to actual URL when available
    const WEB_URL = 'https://agape.com.uy';
    // Para Mercado Pago vamos a dejar un placeholder grande o un QR de prueba

    return (
        <div className="min-h-screen bg-gray-100 p-8 print:p-0 print:bg-white text-black flex items-center justify-center">
            {/* Controles de Impresión (No visibles al imprimir) */}
            <div className="fixed top-8 left-8 bg-white p-6 rounded-xl shadow-md space-y-4 print:hidden z-50 max-w-sm">
                <h1 className="text-2xl font-bold font-rounded">🖨️ Cartel Mostrador</h1>
                <p className="text-gray-600 text-sm">Tamaño ideal: A4 o A5 impreso a color. Podés pegarlo en el mostrador para cobros rápidos.</p>
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => window.print()}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-bold transition-colors w-full"
                    >
                        Imprimir Cartel
                    </button>
                    <button
                        onClick={() => window.history.back()}
                        className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-md font-bold transition-colors w-full"
                    >
                        Volver al Sitio
                    </button>
                </div>
            </div>

            {/* Cartel A4 Portrait */}
            <div className="bg-white mx-auto print:shadow-none shadow-2xl print:m-0 overflow-hidden relative flex flex-col" style={{ width: '210mm', height: '297mm' }}>

                {/* Header decorativo */}
                <div className="h-48 bg-agape-purple-50 flex items-center justify-center relative border-b-8 border-agape-yellow">
                    {/* Placeholder para el Logo si hiciera falta, pero usamos texto grande */}
                    <div className="flex flex-col items-center">
                        <Image
                            src="/images/logo.png"
                            alt="Logo Agapé"
                            width={250}
                            height={80}
                            className="w-auto h-24 drop-shadow-sm opacity-90"
                        />
                        <h1 className="text-4xl font-handwritten text-agape-purple font-bold mt-2">Cocina Saludable</h1>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 px-12 py-16 flex flex-col items-center justify-start space-y-12 text-center text-gray-800">

                    {/* Header Instruction */}
                    <div className="flex items-center gap-4 text-4xl font-rounded font-bold text-gray-800 mb-4 bg-gray-50 px-12 py-4 rounded-full border-2 border-gray-200 shadow-sm">
                        <Smartphone className="w-10 h-10 text-agape-purple" />
                        Escaneá el QR
                    </div>

                    {/* QRs Container */}
                    <div className="flex w-full justify-between items-start gap-12 mt-8">

                        {/* QR Mercado Pago */}
                        <div className="flex-1 flex flex-col items-center">
                            <div className="bg-[#009EE3] text-white w-full py-4 rounded-t-3xl border-4 border-b-0 border-[#009EE3]">
                                <h2 className="text-3xl font-bold font-rounded tracking-wide">PAGÁ CON</h2>
                                <h3 className="text-xl font-bold font-rounded">MERCADO PAGO</h3>
                            </div>
                            <div className="bg-white p-8 border-4 border-t-0 border-[#009EE3] rounded-b-3xl shadow-xl w-full flex flex-col items-center justify-center aspect-square text-center">
                                {/* Placeholder de Mercado Pago - idealmente se reemplaza con el scan real */}
                                <div className="border-4 border-dashed border-gray-300 w-full h-full rounded-xl flex items-center justify-center flex-col gap-4">
                                    <div className="text-gray-400">PEGAR AQUÍ QR</div>
                                    <div className="text-gray-400">DE MERCADO PAGO</div>
                                </div>
                            </div>
                        </div>

                        {/* Separator */}
                        <div className="hidden">
                            <div className="w-[2px] h-64 bg-gray-200 rounded-full mt-24"></div>
                        </div>

                        {/* QR Web */}
                        <div className="flex-1 flex flex-col items-center">
                            <div className="bg-agape-green text-white w-full py-4 rounded-t-3xl border-4 border-b-0 border-agape-green">
                                <h2 className="text-3xl font-bold font-rounded tracking-wide">NUESTRA WEB</h2>
                                <h3 className="text-xl font-bold font-rounded">VER MENÚ</h3>
                            </div>
                            <div className="bg-white p-8 border-4 border-t-0 border-agape-green rounded-b-3xl shadow-xl w-full flex flex-col items-center justify-center aspect-square text-center">
                                {/* Generado en vivo */}
                                <QRCodeSVG
                                    value={WEB_URL}
                                    size={200}
                                    level="H"
                                    fgColor="#7CA35C"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-4xl mt-12 font-rounded font-bold text-gray-700 bg-white shadow-sm border border-gray-100 rounded-full px-12 py-6 flex items-center gap-4">
                        <Utensils className="w-10 h-10 text-agape-yellow-600" />
                        Conocé nuestros productos
                    </div>
                </div>

                {/* Footer Decorativo */}
                <div className="h-12 bg-agape-purple w-full mt-auto"></div>
            </div>

        </div>
    );
}
