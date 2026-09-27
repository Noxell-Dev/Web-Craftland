# Craftland · Web del servidor

Landing page de **Craftland**, servidor de Minecraft (Java 1.8 – 1.26) con
modalidades Survival, Creativo y Skyblock: IP copiable, guía de acceso,
comunidad en Discord y preguntas frecuentes.

## Tecnologías

- **Astro 7** (contenido estático) + **TypeScript**
- **Tailwind CSS 4** (vía plugin de Vite; tokens en `@theme`)
- Tipografías de Google Fonts (Lilita One + Rubik)
- Sin librerías de JS en cliente: dos scripts propios (`main.ts` y `reveal.ts`)

## Requisitos

- Node.js 20 o superior
- npm

## Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:4321
```

## Scripts

| Comando           | Acción                                    |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Servidor de desarrollo                    |
| `npm run build`   | Build de producción en `dist/`            |
| `npm run preview` | Previsualiza el build de producción       |
| `npm run check`   | Diagnóstico de tipos (astro check)        |
| `npm run sync`    | Genera tipos de Astro                     |

## Estructura de carpetas

```
├── public/
│   ├── images/brand/  # logo original + logo-hero optimizado
│   └── favicons + manifest
├── src/
│   ├── components/    # Header, Hero, Modes, HowTo, Community, Faq, Footer
│   ├── data/          # site.ts (IP, Discord, versiones)
│   ├── i18n/          # es.ts — todos los textos de la interfaz
│   ├── layouts/       # BaseLayout.astro (SEO, OG, JSON-LD)
│   ├── pages/         # index.astro, aviso-legal.astro, 404.astro
│   ├── scripts/       # main.ts (interacción + copiar IP), reveal.ts
│   └── styles/        # global.css (tokens @theme + estilos blocky)
└── .agents/skills/    # skills del agente (ver skills-lock.json)
```

## Cómo modificar contenido

- **IP / Discord / versiones / modalidades**: `src/data/site.ts`.
- **Textos de la interfaz** (hero, modalidades, pasos, FAQ): `src/i18n/es.ts`.
- **Colores y tipografías**: bloque `@theme` en `src/styles/global.css`.
- **Logo**: `public/images/brand/` (el original pesa 1,3 MB; se usa
  `logo-hero.webp` optimizado de 800px).

## Verificación antes de publicar

1. `npm run check` → cero errores.
2. `npm run build` → compila sin avisos graves.
3. Revisar: menú móvil, copiado de IP, acordeón FAQ y contraste.
