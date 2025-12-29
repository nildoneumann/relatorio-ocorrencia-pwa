'use client';

import { useState } from 'react';

import CabecalhoInstitucional from '@/components/CabecalhoInstitucional';
import AssinaturaDigital from '@/components/AssinaturaDigital';
import AcoesRelatorio from '@/components/AcoesRelatorio';

export default function Page() {
  const [assinaturas, setAssinaturas] = useState({
    agente1: '',
    agente2: '',
    agente3: '',
    agente4: '',
  });

  return (
    <main className="max-w-4xl mx-auto p-3">
      <CabecalhoInstitucional />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <AssinaturaDigital
          label="Assinatura Agente 1"
          onAssinaturaChange={(img) =>
            setAssinaturas((prev) => ({ ...prev, agente1: img }))
          }
        />

        <AssinaturaDigital
          label="Assinatura Agente 2"
          onAssinaturaChange={(img) =>
            setAssinaturas((prev) => ({ ...prev, agente2: img }))
          }
        />

        <AssinaturaDigital
          label="Assinatura Agente 3"
          onAssinaturaChange={(img) =>
            setAssinaturas((prev) => ({ ...prev, agente3: img }))
          }
        />

        <AssinaturaDigital
          label="Assinatura Agente 4"
          onAssinaturaChange={(img) =>
            setAssinaturas((prev) => ({ ...prev, agente4: img }))
          }
        />
      </section>

      <div className="mt-6">
        <AcoesRelatorio numeroRelatorio="0001" />
      </div>
    </main>
  );
}
