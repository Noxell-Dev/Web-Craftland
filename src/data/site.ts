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
    { id: 'vip', label: 'VIP', tagline: 'El primero de todos', featured: false },
    { id: 'premium', label: 'Premium', tagline: 'Un paso más', featured: false },
    { id: 'elite', label: 'Élite', tagline: 'Para los que destacan', featured: false },
    { id: 'heroe', label: 'Héroe', tagline: 'Leyenda del servidor', featured: false },
    { id: 'paladin', label: 'Paladín', tagline: 'Defensor de Craftland', featured: false },
    { id: 'titan', label: 'Titán', tagline: 'Poder bruto', featured: true },
    { id: 'fenix', label: 'Fénix', tagline: 'Renace siempre', featured: true },
    { id: 'dragon', label: 'Dragón', tagline: 'Temido en PvP', featured: true },
    { id: 'leyenda', label: 'Leyenda', tagline: 'Tu nombre en el hall', featured: true },
    { id: 'eterno', label: 'Eterno', tagline: 'El rango definitivo', featured: true },
  ],
} as const;

export type Site = typeof site;
