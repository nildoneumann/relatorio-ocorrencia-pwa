import { useRef, useState, useEffect } from 'react';

export default function AssinaturaDigital({ label, onAssinaturaChange }) {
  const canvasRef = useRef(null);
  const [desenhando, setDesenhando] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 120;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
  }, []);

  const iniciar = (e) => {
    setDesenhando(true);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const desenhar = (e) => {
    if (!desenhando) return;
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const parar = () => {
    setDesenhando(false);
    onAssinaturaChange(canvasRef.current.toDataURL());
  };

  return (
    <div>
      <p className="text-sm font-semibold mb-1">{label}</p>
      <canvas
        ref={canvasRef}
        onMouseDown={iniciar}
        onMouseMove={desenhar}
        onMouseUp={parar}
        className="border rounded w-full"
      />
    </div>
  );
}
