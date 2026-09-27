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
} as const;

export type Site = typeof site;
