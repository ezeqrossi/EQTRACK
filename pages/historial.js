
import { useEffect, useState } from 'react';
import supabase from '../lib/supabase';

export default function Historial() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data: compras } = await supabase.from('compras').select('*');
      const { data: ventas } = await supabase.from('ventas').select('*');
      setDatos([...compras, ...ventas]);
    }
    fetchData();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Historial de Operaciones</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Fecha</th><th>Cripto</th><th>Monto</th><th>Fiat</th>
            <th>Cotización</th><th>Cantidad</th><th>Banco</th><th>Contraparte</th><th>Notas</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((op, i) => (
            <tr key={i}>
              <td>{op.fecha}</td><td>{op.cripto}</td><td>{op.monto}</td><td>{op.fiat}</td>
              <td>{op.cotizacion}</td><td>{op.cantidad}</td><td>{op.banco}</td><td>{op.contraparte}</td><td>{op.notas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
