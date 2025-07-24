
import supabase from '../../lib/supabase';

export default async function handler(req, res) {
  const data = req.body;
  const tabla = data.tipoOperacion === 'compra' ? 'compras' : 'ventas';
  const { error } = await supabase.from(tabla).insert([data]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ status: 'ok' });
}
