/**
 * FX vanilla (ports de React Bits): SplitText, SpotlightCard, Magnet.
 * ShinyText y StarBorder son solo CSS. Todo respeta
 * prefers-reduced-motion y funciona sin JS (contenido visible).
 */

const reducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** SplitText: parte [data-split] en caracteres con stagger al entrar en vista. */
function initSplitText(): void {
  const els = document.querySelectorAll<HTMLElement>('[data-split]');
  if (!els.length || reducedMotion()) return;
  els.forEach((el) => {
    const text = el.textContent ?? '';
    el.textContent = '';
    el.setAttribute('aria-label', text.trim());
    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.className = 'split-char';
      span.setAttribute('aria-hidden', 'true');
      span.style.setProperty('--char-index', String(i));
      span.textContent = char === ' ' ? '\u00A0' : char;
      el.appendChild(span);
    });
  });
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('split-in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 },
  );
  els.forEach((el) => io.observe(el));
}

/** SpotlightCard: brillo radial que sigue al cursor (port de React Bits). */
function initSpotlight(): void {
  const cards = document.querySelectorAll<HTMLElement>('[data-spotlight]');
  cards.forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
    });
  });
}

/** Magnet: el elemento atrae ligeramente al cursor (port de React Bits Magnet). */
function initMagnet(): void {
  if (reducedMotion()) return;
  const els = document.querySelectorAll<HTMLElement>('[data-magnet]');
  const strength = 18;
  els.forEach((el) => {
    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transition = 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)';
      el.style.transform = '';
      window.setTimeout(() => {
        el.style.transition = '';
      }, 450);
    });
  });
}

/** Arquero animado: al pasar el ratón tensa el arco y dispara una flecha hacia los rangos. */
function initArcherVideo(): void {
  const wrap = document.querySelector<HTMLElement>('[data-archer]');
  const anim = wrap?.querySelector<HTMLImageElement>('[data-archer-anim]');
  if (!wrap || !anim || reducedMotion()) return;
  // solo en dispositivos con hover real
  if (!window.matchMedia('(hover: hover)').matches) return;

  // precargar el APNG y la flecha en segundo plano cuando el navegador esté ocioso
  const preload = (): void => {
    for (const src of [anim.src, '/images/renders/flecha.png']) {
      const img = new Image();
      img.src = src;
    }
  };
  if ('requestIdleCallback' in window) {
    (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(preload);
  } else {
    window.setTimeout(preload, 1500);
  }

  let shootTimer: number | undefined;
  wrap.addEventListener('pointerenter', () => {
    // reiniciar la animación APNG
    const src = anim.src;
    anim.src = '';
    anim.src = src;
    wrap.classList.add('is-playing');
    // disparar la flecha cuando el arco está tensado (~0.65s)
    window.clearTimeout(shootTimer);
    shootTimer = window.setTimeout(() => {
      wrap.classList.add('is-shooting');
    }, 650);
  });
  wrap.addEventListener('pointerleave', () => {
    window.clearTimeout(shootTimer);
    wrap.classList.remove('is-playing', 'is-shooting');
  });
}

initSplitText();
initSpotlight();
initMagnet();
initArcherVideo();
