/**
 * Animaciones de entrada al hacer scroll.
 * - Entrada al hacer scroll: `.reveal` (fade + translateY 12px), una sola
 *   variante en toda la página, con IntersectionObserver nativo.
 * - Stagger en parrillas: `--reveal-delay` en línea (60 ms por elemento).
 * - Count-up en `[data-countup]` (Stats): 1000 ms con easing ease-out.
 * - Fade-in de imágenes `[data-fade]` al cargar (aspect-ratio reservado en el HTML).
 * Sin JS el contenido es visible (gate `html.js` en el CSS) y con
 * `prefers-reduced-motion` todo queda en su estado final al instante.
 * Sin librerías externas: solo IntersectionObserver, CSS y rAF.
 */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Entrada al hacer scroll */
const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
if (reduceMotion || !("IntersectionObserver" in window)) {
  revealEls.forEach((el) => el.classList.add("is-visible"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );
  revealEls.forEach((el) => io.observe(el));
}

/* Count-up de cifras (Stats) */
function parseStat(raw: string): {
  prefix: string;
  target: number;
  decimals: number;
  suffix: string;
} | null {
  const m = raw.match(/^([^0-9]*?)([0-9]+(?:,[0-9]+)?)([^0-9]*)$/);
  if (!m) return null;
  const decimals = m[2].includes(",") ? m[2].split(",")[1].length : 0;
  return {
    prefix: m[1],
    target: Number(m[2].replace(",", ".")),
    decimals,
    suffix: m[3],
  };
}

function formatStat(prefix: string, value: number, decimals: number, suffix: string): string {
  return `${prefix}${value.toFixed(decimals).replace(".", ",")}${suffix}`;
}

document.querySelectorAll<HTMLElement>("[data-countup]").forEach((el) => {
  const parsed = parseStat(el.textContent?.trim() ?? "");
  if (!parsed || reduceMotion) return; // sin animación ya se ve el valor final
  const { prefix, target, decimals, suffix } = parsed;
  const duration = 1000;
  let started: number | null = null;
  const step = (now: number): void => {
    if (started === null) started = now;
    const t = Math.min((now - started) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = formatStat(prefix, target * eased, decimals, suffix);
    if (t < 1) requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(step);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
  } else {
    requestAnimationFrame(step);
  }
});

/* Fade-in de imágenes al cargar */
document.querySelectorAll<HTMLImageElement>("img[data-fade]").forEach((img) => {
  if (reduceMotion || (img.complete && img.naturalWidth > 0)) {
    img.classList.add("is-loaded");
    return;
  }
  img.addEventListener("load", () => img.classList.add("is-loaded"), { once: true });
  img.addEventListener("error", () => img.classList.add("is-loaded"), { once: true });
});
