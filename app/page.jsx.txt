'use client';

import { useState } from 'react';
import CabecalhoInstitucional from '../components/CabecalhoInstitucional';
import AssinaturaDigital from '../components/AssinaturaDigital';
import AcoesRelatorio from '../components/AcoesRelatorio';

export default function Page() {
  const [assinaturas, setAssinaturas] = useState({});

  return (
    <div className="max-w-3xl mx-auto p-4">
      <CabecalhoInstitucional />

      <div className="grid gap-4 mt-4">
        <AssinaturaDigital
          label="Assinatura do Agente"
          onAssinaturaChange={(img) =>
            setAssinaturas({ ...assinaturas, agente: img })
          }
        />
      </div>

      <AcoesRelatorio numeroRelatorio="0001" />
    </div>
  );
}