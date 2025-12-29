import '../styles/globals.css';

export const metadata = {
  title: 'Relatório de Ocorrência',
  description: 'PWA Relatório de Atendimento'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}