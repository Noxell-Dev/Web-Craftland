# AGENTS.md — Convenciones del proyecto Craftland

## Stack
- **Astro 7** + **TypeScript estricto** + **Tailwind CSS v4** (vía
  `@tailwindcss/vite`; tokens en `@theme` dentro de `src/styles/global.css`).
- Contenido 100 % estático, sin backend. Un solo idioma: **español**.

## Design read (declarado)
> Web de servidor de Minecraft para gamers jóvenes (12-25), lenguaje
> cartoon-blocky oscuro, acento morado de marca + verde "online", display
> redondeada (Lilita One) + cuerpo Rubik. Elemento memorable: la IP como
> entrada de lista de servidores con botón copiar.

- **Familia estética**: gaming nocturno blocky. El morado `#8A2BE2` es el
  color del LOGO (override legítimo del anti-default anti-indigo: aquí el
  brand manda). Verde `#33CC33` solo para estado online. Fondo noche
  `#0D0D0F` / paneles `#17171D`; texto `#F5F5F7` (nunca blanco puro).
- **Toques blocky**: retícula fantasma `.blocky-grid`, esquinas recortadas
  `.block-border`, chip de IP con glow `.ip-chip`, brillo gloss `.btn-gloss`
  (como las letras 3D del logo).
- Técnicas del catálogo artístico usadas: zigzag implícito hero (texto izq /
  logo dcha), aire vertical generoso, tracking extremo solo en overlines
  mono, elemento memorable (chip IP + botón copiar).

## Estructura (no mover piezas de sitio)
- `src/components/` → Header, Hero, Modes, HowTo, Community, Faq, Footer.
- `src/layouts/BaseLayout.astro` → `<head>` completo (SEO, OG/Twitter,
  canonical, JSON-LD `Organization`). Esqueleto estándar noxell.dev.
- `src/pages/` → `index.astro`, `aviso-legal.astro`, `404.astro`.
- `src/data/site.ts` → IP del servidor, Discord, versiones, modalidades.
- `src/i18n/es.ts` → **todos** los textos de la interfaz. Prohibido
  hardcodear copy en los componentes.
- `src/scripts/main.ts` → menú móvil, acordeón, header scroll y **copiar IP**
  (`[data-copy-ip]` con fallback execCommand). `reveal.ts` → estándar noxell.
- `public/images/brand/` → `logocraftland.webp` (original 1,3 MB, referencia)
  y `logo-hero.webp` (800px optimizado, el que se usa en la web).

## Accesibilidad (no romper)
- Un `H1` por página (Hero); secciones con `aria-labelledby`.
- Acordeón FAQ con `aria-expanded`/`aria-controls` + panel `role="region"`.
- Menú móvil: `aria-expanded`, cierre con Escape.
- Botón copiar IP anuncia su acción en `aria-label` y feedback visual
  ("¡IP copiada!") sin depender solo del color.

## Verificación antes de dar un cambio por terminado
1. `npm run check` → **cero errores**.
2. `npm run build` → compila sin avisos graves.
3. Revisar: menú móvil, copiado de IP, acordeón y contraste del morado
   sobre fondo oscuro (AA: 4.5:1 cuerpo).

## Decisiones registradas
- 2026-09-27: datos del servidor confirmados por Pablo: IP
  `play.craftlandmc.com`, Discord `discord.gg/rvfmDv5dcU`, modalidades
  Survival/Creativo/Skyblock, Java 1.8–1.26.
- 2026-09-27: logo original (fondo negro sólido) se usa tal cual sobre
  fondos noche — se funde sin necesidad de recorte.
- 2026-09-27: dominio `https://craftlandmc.com` provisional; cambiar en
  `astro.config.mjs` y `src/data/site.ts` al confirmar el real.
- 2026-09-27: cifras de comunidad (+50 jugadores, etc.) son placeholder
  razonable — ajustar a datos reales cuando el cliente confirme.
