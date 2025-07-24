
import supabase from '../../lib/supabase';

export default async function handler(req, res) {
  const { data: compras } = await supabase.from('compras').select('*');
  const { data: ventas } = await supabase.from('ventas').select('*');
  res.status(200).json({ historial: [...compras, ...ventas] });
}
