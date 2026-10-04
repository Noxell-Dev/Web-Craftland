/**
 * Datos globales del servidor. Si cambia la IP, el Discord o el dominio,
 * este es el único fichero que hay que tocar.
 */
export const site = {
  name: 'Craftland',
  url: 'https://craftlandmc.com',
  locale: 'es_ES',
  language: 'es',
  description:
    'Servidor de Minecraft Survival, Creativo y Skyblock. Compatible con Java desde 1.8 hasta 1.26. Únete a la comunidad en play.craftlandmc.com.',
  serverIp: 'play.craftlandmc.com',
  discordUrl: 'https://discord.gg/rvfmDv5dcU',
  versions: 'Java 1.8 – 1.26',
  modes: [
    { id: 'survival', label: 'Survival' },
    { id: 'creativo', label: 'Creativo' },
    { id: 'skyblock', label: 'Skyblock' },
  ],
  ranks: [
    { id: 'eterno', label: 'Eterno', tagline: 'El rango definitivo', color: 'rose', spot: 'rgba(244,63,94,0.35)', featured: true },
    { id: 'leyenda', label: 'Leyenda', tagline: 'Tu nombre en el hall', color: 'amber', spot: 'rgba(245,158,11,0.35)', featured: false },
    { id: 'heroe', label: 'Héroe', tagline: 'Leyenda del servidor', color: 'sky', spot: 'rgba(14,165,233,0.35)', featured: false },
    { id: 'vip', label: 'VIP', tagline: 'El primero de todos', color: 'emerald', spot: 'rgba(16,185,129,0.35)', featured: false },
  ],
} as const;

export type Site = typeof site;
