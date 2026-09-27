/**
 * Textos de la interfaz en español. Los componentes nunca hardcodean
 * copy: lo importan de aquí. El contenido largo vive en src/data/.
 */
export const t = {
  a11y: {
    skipLink: 'Saltar al contenido principal',
  },
  siteName: 'Craftland',

  nav: [
    { label: 'Modalidades', href: '/#modalidades' },
    { label: 'Cómo entrar', href: '/#como-entrar' },
    { label: 'Comunidad', href: '/#comunidad' },
    { label: 'Preguntas', href: '/#faq' },
  ],
  joinCta: 'Unirme al servidor',
  openMenu: 'Abrir menú de navegación',
  closeMenu: 'Cerrar menú de navegación',

  hero: {
    overline: 'Servidor de Minecraft · Java 1.8 – 1.26',
    titleTop: 'Tu próxima',
    titleAccent: 'aventura',
    titleBottom: 'empieza aquí',
    subtitle:
      'Survival, Creativo y Skyblock con una comunidad que lleva años construyendo juntos. Entra con cualquier versión desde la 1.8.',
    ipLabel: 'IP del servidor',
    ipValue: 'play.craftlandmc.com',
    copyIp: 'Copiar IP',
    ipCopied: '¡IP copiada!',
    primaryCta: 'Unirme ahora',
    primaryCtaHref: '#como-entrar',
    secondaryCta: 'Discord',
    secondaryCtaHref: 'https://discord.gg/rvfmDv5dcU',
  },

  modes: {
    title: 'Tres mundos, un servidor',
    subtitle: 'Elige cómo quieres jugar. Cambia de modalidad cuando quieras sin perder tu progreso.',
    items: [
      {
        id: 'survival',
        name: 'Survival',
        tagline: 'El clásico, bien hecho',
        description:
          'Mundo persistente sin resets, economía estable, protecciones de parcelas y eventos semanales. Sobrevive, comercia y construye tu base con jugadores de toda España y Latinoamérica.',
        points: ['Mundo persistente', 'Economía y tiendas de jugadores', 'Protección de parcelas'],
      },
      {
        id: 'creativo',
        name: 'Creativo',
        tagline: 'Límite: tu imaginación',
        description:
          'Parcelas gigantes con WorldEdit para construir lo que quieras. Comparte tus creaciones con la comunidad y participa en concursos de construcción con premios.',
        points: ['Parcelas amplias', 'WorldEdit incluido', 'Concursos mensuales'],
      },
      {
        id: 'skyblock',
        name: 'Skyblock',
        tagline: 'De cero a isla legendaria',
        description:
          'Empieza en una isla flotante con lo mínimo y conviértela en un imperio. Misiones progresivas, islas cooperativas y ranking de las mejores islas del servidor.',
        points: ['Misiones y progresión', 'Islas cooperativas', 'Ranking de islas'],
      },
    ],
  },

  howTo: {
    overline: 'Cómo entrar',
    title: 'Jugando en menos de 2 minutos',
    steps: [
      {
        n: '01',
        title: 'Abre Minecraft Java',
        description: 'Sirve cualquier versión desde la 1.8 hasta la 1.26. La que tengas instalada vale.',
      },
      {
        n: '02',
        title: 'Añade el servidor',
        description: 'Multijugador → Añadir servidor → pega la IP: play.craftlandmc.com',
      },
      {
        n: '03',
        title: 'Conecta y elige mundo',
        description: 'Al entrar, selecciona Survival, Creativo o Skyblock desde el menú del hub.',
      },
    ],
  },

  community: {
    title: 'La comunidad es el servidor',
    subtitle:
      'Eventos cada semana, staff activo y un Discord donde se decide el futuro del servidor. Los jugadores proponen, los jugadores votan.',
    discordTitle: 'Únete al Discord',
    discordDescription: 'Anuncios, soporte, eventos y gente con la que jugar. Nos vemos dentro.',
    discordCta: 'Entrar al Discord',
    stats: [
      { value: '+50', label: 'jugadores diarios', count: 50 },
      { value: '24/7', label: 'servidor online' },
      { value: '3', label: 'modalidades', count: 3 },
    ],
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Necesito premium para entrar?',
        answer:
          'No es obligatorio: el servidor soporta cuentas premium y no premium. Solo necesitas Minecraft Java Edition en cualquiera de sus versiones soportadas (1.8 a 1.26).',
      },
      {
        question: '¿Puedo jugar desde Bedrock (móvil/consola)?',
        answer:
          'De momento el servidor es solo Java Edition. Si juegas desde móvil o consola, puedes unirte al Discord para enterarte de las novedades sobre soporte Bedrock.',
      },
      {
        question: '¿Se borra mi progreso alguna vez?',
        answer:
          'El mundo Survival es persistente y no se resetea. Skyblock mantiene tu isla indefinidamente mientras juegues al menos una vez cada 60 días.',
      },
      {
        question: '¿Cómo reporto a un jugador o pido ayuda?',
        answer:
          'El staff responde en el Discord en el canal de soporte. También puedes usar el comando /report dentro del juego estando conectado.',
      },
      {
        question: '¿Puedo donar al servidor?',
        answer:
          'Sí, hay rangos de apoyo que dan ventajas cosméticas y de comodidad. Toda la información está en el Discord, en el canal de la tienda.',
      },
    ],
  },

  cta: {
    title: '¿Te esperamos dentro o qué?',
    subtitle: 'Copia la IP, entra y saluda. La primera vez siempre mola.',
    button: 'Copiar IP y jugar',
  },

  footer: {
    description: 'Servidor de Minecraft Survival, Creativo y Skyblock. No afiliado a Mojang Studios ni Microsoft.',
    madeBy: 'Hecho con ♥️ por noxell.dev',
  },

  notFound: {
    title: 'Chunk no generado',
    body: 'La página que buscas no existe… o se ha caído al vacío.',
    cta: 'Volver al spawn',
  },
} as const;
