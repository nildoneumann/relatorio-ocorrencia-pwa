'use client';

import { useEffect } from 'react';
import './globals.css';

export const metadata = {
  title: 'Relatório de Ocorrência',
  description: 'PWA Relatório de Atendimento',
};

export default function RootLayout({ children }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  }, []);

  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
