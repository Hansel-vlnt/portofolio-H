import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis: Lenis | null = null;

if (!prefersReducedMotion) {
  lenis = new Lenis({
    duration: 1.05,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
}

// Route in-page anchor links through Lenis while preserving keyboard focus transfer.
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const targetEl = document.querySelector<HTMLElement>(targetId);
    if (!targetEl) return;

    event.preventDefault();
    if (lenis) {
      lenis.scrollTo(targetEl, { offset: -64 });
    } else {
      targetEl.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }

    if (!targetEl.hasAttribute('tabindex')) {
      targetEl.setAttribute('tabindex', '-1');
    }
    targetEl.focus({ preventScroll: true });
    history.pushState(null, '', targetId);
  });
});

// Fallback for browsers without native CSS scroll-driven animation timeline support.
if (!CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)')) {
  const dockHeader = document.querySelector<HTMLElement>('.aero-dock-header');
  if (dockHeader) {
    const syncHeaderShadow = () => {
      dockHeader.classList.toggle('is-condensed', window.scrollY > 36);
    };
    window.addEventListener('scroll', syncHeaderShadow, { passive: true });
    syncHeaderShadow();
  }
}
