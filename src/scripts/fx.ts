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

initSplitText();
initSpotlight();
initMagnet();
