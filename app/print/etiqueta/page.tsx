'use client';

import { QRCodeSVG } from 'qrcode.react';
import { Flame, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function EtiquetaPrintPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Configuración
    const WEB_URL = 'https://agape.com.uy'; // TODO: Update to actual URL when available
    const LABEL_SIZE = '4cm';
    const COLS = 4;
    const ROWS = 6;
    const totalLabels = COLS * ROWS;

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-gray-100 p-8 print:p-0 print:bg-white text-black">
            {/* Controles de Impresión (No visibles al imprimir) */}
            <div className="max-w-4xl mx-auto mb-8 bg-white p-6 rounded-xl shadow-md space-y-4 print:hidden">
                <h1 className="text-2xl font-bold font-rounded">🖨️ Etiquetas Chipá (4x4 cm)</h1>
                <p className="text-gray-600">Configurá la impresora en tamaño A4, sin márgenes y escala 100%.</p>
                <div className="flex gap-4">
                    <button
                        onClick={() => window.print()}
                        className="bg-agape-purple hover:bg-agape-purple-700 text-white px-6 py-2 rounded-md font-bold transition-colors"
                    >
                        Imprimir Etiquetas
                    </button>
                    <button
                        onClick={() => window.history.back()}
                        className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-md font-bold transition-colors"
                    >
                        Volver
                    </button>
                </div>
            </div>

            {/* Hoja de Frente */}
            <div className="bg-white mx-auto print:shadow-none shadow-xl print:m-0" style={{ width: '210mm', minHeight: '297mm', padding: '10mm' }}>
                <h2 className="text-center font-bold text-gray-300 mb-4 print:hidden">--- FRENTE ---</h2>
                <div className="grid gap-[2mm]" style={{ gridTemplateColumns: `repeat(${COLS}, ${LABEL_SIZE})`, gridAutoRows: LABEL_SIZE, justifyContent: 'center' }}>
                    {Array.from({ length: totalLabels }).map((_, i) => (
                        <div key={`frente-${i}`}
                            className="border border-dashed border-gray-300 flex flex-col items-center justify-center p-2 text-center relative bg-white"
                            style={{ width: LABEL_SIZE, height: LABEL_SIZE }}>
                            <div className="absolute inset-x-0 top-0 h-1 bg-agape-yellow"></div>
                            <span className="font-handwritten text-xl text-agape-purple leading-tight mt-1">
                                Chipá con amor y mucho queso
                            </span>
                            <span className="text-2xl mt-1">🧀</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hoja de Dorso */}
            <div className="bg-white mx-auto print:shadow-none shadow-xl mt-8 print:mt-0 print:break-before-page" style={{ width: '210mm', minHeight: '297mm', padding: '10mm' }}>
                <h2 className="text-center font-bold text-gray-300 mb-4 print:hidden">--- DORSO ---</h2>
                <div className="grid gap-[2mm]" style={{ gridTemplateColumns: `repeat(${COLS}, ${LABEL_SIZE})`, gridAutoRows: LABEL_SIZE, justifyContent: 'center' }}>
                    {Array.from({ length: totalLabels }).map((_, i) => (
                        <div key={`dorso-${i}`}
                            className="border border-dashed border-gray-300 flex flex-col items-center justify-between p-[0.15rem] pb-1 text-center relative bg-white"
                            style={{ width: LABEL_SIZE, height: LABEL_SIZE }}>

                            <div className="text-[7px] leading-[1.1] font-rounded font-bold text-gray-800 w-full mb-[2px]">
                                Horneados / Congelados<br />
                                <span className="font-normal">Listos para cocinar</span>
                            </div>

                            <div className="flex items-center gap-1 text-[7px] font-bold text-agape-red bg-agape-purple-50 w-full justify-center py-[2px] mb-[2px]">
                                <Flame className="w-[8px] h-[8px]" /> Horno o freidora de aire
                            </div>

                            <QRCodeSVG
                                value={WEB_URL}
                                size={50}
                                level="M"
                                fgColor="#9e5f85"
                                className="my-[1px]"
                            />

                            <div className="flex items-center justify-center gap-[2px] text-[6px] text-gray-600 mt-[1px]">
                                <Smartphone className="w-[7px] h-[7px]" /> Escaneá y conocé más
                            </div>

                            <div className="text-[10px] font-handwritten text-agape-purple font-bold leading-none mt-[1px]">
                                Cocina Agapé
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
