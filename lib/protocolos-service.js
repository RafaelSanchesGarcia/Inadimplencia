const MOCK_PROTOCOLOS = [
  { protocolo: '2026-00142', cliente: 'Comércio Silva Ltda',       status: 'Aberto',    atualizacao: '2026-04-17 14:22' },
  { protocolo: '2026-00141', cliente: 'Maria Aparecida Souza',     status: 'Pendente',  atualizacao: '2026-04-17 10:05' },
  { protocolo: '2026-00140', cliente: 'João Pereira ME',           status: 'Resolvido', atualizacao: '2026-04-16 18:41' },
  { protocolo: '2026-00139', cliente: 'Transportes Aurora S.A.',   status: 'Aberto',    atualizacao: '2026-04-16 09:12' },
  { protocolo: '2026-00138', cliente: 'Carlos Eduardo Ribeiro',    status: 'Cancelado', atualizacao: '2026-04-15 17:30' },
  { protocolo: '2026-00137', cliente: 'Padaria Pão Dourado',       status: 'Pendente',  atualizacao: '2026-04-15 11:47' },
  { protocolo: '2026-00136', cliente: 'Fernanda Lima Arquitetura', status: 'Resolvido', atualizacao: '2026-04-14 16:08' },
  { protocolo: '2026-00135', cliente: 'Auto Peças Veloz',          status: 'Aberto',    atualizacao: '2026-04-14 08:55' },
  { protocolo: '2026-00134', cliente: 'Ricardo Mendes',            status: 'Pendente',  atualizacao: '2026-04-13 19:20' },
  { protocolo: '2026-00133', cliente: 'Clínica Vida Saudável',     status: 'Resolvido', atualizacao: '2026-04-13 13:14' },
  { protocolo: '2026-00132', cliente: 'Mercado Central Ltda',      status: 'Aberto',    atualizacao: '2026-04-12 10:33' },
  { protocolo: '2026-00131', cliente: 'Ana Beatriz Rocha',         status: 'Cancelado', atualizacao: '2026-04-12 09:02' },
  { protocolo: '2026-00130', cliente: 'Construtora Horizonte',     status: 'Pendente',  atualizacao: '2026-04-11 15:58' },
  { protocolo: '2026-00129', cliente: 'Livraria Saber & Cia',      status: 'Resolvido', atualizacao: '2026-04-11 11:40' },
  { protocolo: '2026-00128', cliente: 'Oficina Turbo Motor',       status: 'Aberto',    atualizacao: '2026-04-10 17:25' },
  { protocolo: '2026-00127', cliente: 'Paulo Henrique Costa',      status: 'Pendente',  atualizacao: '2026-04-10 08:17' },
  { protocolo: '2026-00126', cliente: 'Restaurante Sabor Mineiro', status: 'Resolvido', atualizacao: '2026-04-09 20:03' },
  { protocolo: '2026-00125', cliente: 'Tech Solutions BR',         status: 'Aberto',    atualizacao: '2026-04-09 14:49' },
  { protocolo: '2026-00124', cliente: 'Juliana Moreira',           status: 'Cancelado', atualizacao: '2026-04-08 10:22' },
  { protocolo: '2026-00123', cliente: 'Farmácia BemEstar',         status: 'Pendente',  atualizacao: '2026-04-08 09:11' },
  { protocolo: '2026-00122', cliente: 'Gráfica Impressão Rápida',  status: 'Resolvido', atualizacao: '2026-04-07 16:37' },
  { protocolo: '2026-00121', cliente: 'Bruno Alves Consultoria',   status: 'Aberto',    atualizacao: '2026-04-07 13:05' },
  { protocolo: '2026-00120', cliente: 'Supermercado Família',      status: 'Pendente',  atualizacao: '2026-04-06 18:28' },
  { protocolo: '2026-00119', cliente: 'Escola Aprender +',         status: 'Resolvido', atualizacao: '2026-04-06 10:14' },
  { protocolo: '2026-00118', cliente: 'Posto São Jorge',           status: 'Aberto',    atualizacao: '2026-04-05 15:50' },
];

async function listProtocolos() {
  if (process.env.PROTOCOLOS_API_URL) {
    const res = await fetch(process.env.PROTOCOLOS_API_URL, {
      headers: process.env.PROTOCOLOS_API_TOKEN
        ? { Authorization: `Bearer ${process.env.PROTOCOLOS_API_TOKEN}` }
        : {},
    });
    if (!res.ok) throw new Error(`Upstream ${res.status}`);
    return res.json();
  }

  return MOCK_PROTOCOLOS;
}

module.exports = { listProtocolos };
