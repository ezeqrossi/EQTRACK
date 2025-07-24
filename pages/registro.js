
import { useState } from 'react';

export default function Registro() {
  const [tipoOperacion, setTipoOperacion] = useState('');
  const [tipo, setTipo] = useState('');

  const handleSeleccion = (op) => setTipoOperacion(op);
  const handleTipo = (t) => setTipo(t);

  return (
    <div style={{ padding: 20 }}>
      <h2>Registrar Operación</h2>
      <button onClick={() => handleSeleccion('compra')}>Compra</button>
      <button onClick={() => handleSeleccion('venta')}>Venta</button>
      <br /><br />
      <span>Tipo:</span>
      {['P2P', 'F2F', 'OTC', 'SPOT', 'EXCHANGE'].map(t => (
        <button key={t} onClick={() => handleTipo(t)}>{t}</button>
      ))}
      <br/><br/>
      {tipoOperacion && tipo && (
        <a href={`/registro/${tipoOperacion}?tipo=${tipo}`}>Continuar</a>
      )}
    </div>
  );
}
