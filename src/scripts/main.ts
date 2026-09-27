/**
 * JS de cliente (progresivo): menú móvil, acordeón FAQ, copiar IP
 * y estado de la cabecera al hacer scroll. Todo funciona con
 * teclado; sin JS el contenido sigue visible.
 */

document.documentElement.classList.add('js');

function initMobileNav(): void {
  const toggle = document.getElementById('nav-toggle');
  const panel = document.getElementById('mobile-menu');
  if (!(toggle instanceof HTMLButtonElement) || !panel) return;

  const openLabel = toggle.dataset.openLabel ?? 'Abrir menú';
  const closeLabel = toggle.dataset.closeLabel ?? 'Cerrar menú';
  const iconOpen = toggle.querySelector('[data-icon-open]');
  const iconClose = toggle.querySelector('[data-icon-close]');

  const setOpen = (open: boolean): void => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? closeLabel : openLabel);
    panel.hidden = !open;
    iconOpen?.classList.toggle('hidden', open);
    iconClose?.classList.toggle('hidden', !open);
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
}

function initAccordion(): void {
  document.querySelectorAll('[data-accordion]').forEach((root) => {
    const button = root.querySelector('button');
    const panel = root.querySelector('[data-accordion-panel]');
    if (!(button instanceof HTMLButtonElement)) return;
    button.addEventListener('click', () => {
      const open = root.getAttribute('data-accordion') === 'open';
      root.setAttribute('data-accordion', open ? 'closed' : 'open');
      panel?.setAttribute('data-open', open ? 'false' : 'true');
      button.setAttribute('aria-expanded', String(!open));
    });
  });
}

function initHeaderScroll(): void {
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = (): void => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initCopyIp(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-copy-ip]').forEach((button) => {
    button.addEventListener('click', async () => {
      const ip = button.dataset.copyIp ?? '';
      const label = button.querySelector('[data-copy-label]');
      try {
        await navigator.clipboard.writeText(ip);
      } catch {
        const area = document.createElement('textarea');
        area.value = ip;
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        area.remove();
      }
      if (label) {
        const original = label.textContent;
        label.textContent = button.dataset.copiedLabel ?? '¡Copiada!';
        setTimeout(() => {
          label.textContent = original;
        }, 2000);
      }
    });
  });
}

function initCountUp(): void {
  const els = document.querySelectorAll<HTMLElement>('[data-count-up]');
  if (!els.length) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return; // sin JS de conteo: el valor final ya está en el HTML
  const animate = (el: HTMLElement): void => {
    const target = Number(el.dataset.countUp ?? '0');
    const prefix = el.dataset.countPrefix ?? '';
    const duration = 1000;
    const start = performance.now();
    const tick = (now: number): void => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cúbico
      el.textContent = `${prefix}${Math.round(target * eased)}`;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 },
  );
  els.forEach((el) => io.observe(el));
}

initMobileNav();
initAccordion();
initHeaderScroll();
initCopyIp();
initCountUp();
