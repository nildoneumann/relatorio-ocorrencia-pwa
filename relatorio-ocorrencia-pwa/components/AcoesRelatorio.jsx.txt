import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import { toast } from 'sonner';

export default function AcoesRelatorio() {
  const handlePrint = () => {
    toast.info("Use 'Salvar como PDF'");
    window.print();
  };

  return (
    <div className="mt-6">
      <Button
        onClick={handlePrint}
        className="w-full bg-blue-600 text-white flex gap-2"
      >
        <Printer className="w-4 h-4" />
        Gerar PDF
      </Button>
    </div>
  );
}
