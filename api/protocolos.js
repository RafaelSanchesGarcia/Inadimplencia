const { listProtocolos } = require('../lib/protocolos-service');

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const data = await listProtocolos();
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({ data, total: data.length });
  } catch (err) {
    res.status(502).json({ error: 'Falha ao buscar protocolos', detail: err.message });
  }
};
