/**
 * PRSYS Educational Site — Main JavaScript
 * Ensō animation · Calculator · Scroll effects · Mobile nav
 */

'use strict';

/* ══ ENSŌ BRUSH ANIMATION ════════════════════════════════════════════════ */
function initEnso() {
  const container = document.querySelector('.enso-container');
  if (!container) return;

  // Trigger draw after brief delay (page paint settles)
  requestAnimationFrame(() => {
    setTimeout(() => container.classList.add('drawn'), 300);
  });

  // Reveal hero text after ensō completes
  const heroText = document.querySelector('.hero-text');
  if (heroText) {
    setTimeout(() => heroText.classList.add('visible'), 1800);
  }
}

/* ══ STICKY NAV ══════════════════════════════════════════════════════════ */
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // set initial state

  // Mobile toggle
  const toggle = nav.querySelector('.nav-toggle');
  const menu   = nav.querySelector('.nav-links');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.setAttribute('aria-label', isOpen ? 'Menu sluiten' : 'Menu openen');
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      }
    });
  }
}

/* ══ SCROLL REVEAL ═══════════════════════════════════════════════════════ */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    // Fallback: just show everything
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

/* ══ CALCULATOR ══════════════════════════════════════════════════════════ */
function initCalculator() {
  const slTau   = document.getElementById('sl-tau');
  const slOmega = document.getElementById('sl-omega');
  const slTi    = document.getElementById('sl-ti');

  if (!slTau || !slOmega || !slTi) return;

  const valTau   = document.getElementById('val-tau');
  const valOmega = document.getElementById('val-omega');
  const valTi    = document.getElementById('val-ti');

  const outR        = document.getElementById('out-r');
  const outBand     = document.getElementById('out-band');
  const outDominant = document.getElementById('out-dominant');

  const gaugeArc    = document.querySelector('.gauge-arc');
  const gaugeNeedle = document.querySelector('.gauge-needle');

  // PRSYS risk model — mirrors src/prsys/model.py
  function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }

  function compute(tau, omega, ti) {
    tau   = clamp(tau,   0,    2.0);
    omega = clamp(omega, 0,    50);
    ti    = clamp(ti,    0.05, 1.0);

    const r = tau * omega * (1.0 / ti);

    let band;
    if (r < 15)      band = 'LOW';
    else if (r < 35) band = 'MED';
    else             band = 'HIGH';

    const cTau   = tau;
    const cOmega = omega / 10;
    const cTi    = 1.0 / ti;

    const candidates = [
      { name: 'τ',  val: cTau   },
      { name: 'ω',  val: cOmega },
      { name: 'TI', val: cTi    },
    ];

    const dominant = candidates.reduce(
      (prev, curr) => curr.val > prev.val ? curr : prev
    ).name;

    return { r, band, dominant };
  }

  // Gauge: R=0→0%, R≥50→100% (capped for visual)
  // Arc path length = 1000 (pathLength). Full arc = dashoffset 0.
  // Empty = dashoffset 1000.
  function rToGaugePct(r) {
    return Math.min(r / 50, 1); // 0..1
  }

  // Needle: -90° (left/LOW) → 0° (top/MED) → +90° (right/HIGH)
  // Mapped from pct 0→1
  function pctToNeedleDeg(pct) {
    return -90 + pct * 180;
  }

  function updateDisplay(tau, omega, ti) {
    const { r, band, dominant } = compute(tau, omega, ti);

    // Values display
    valTau.textContent   = tau.toFixed(2);
    valOmega.textContent = Math.round(omega);
    valTi.textContent    = ti.toFixed(2);

    // R output
    outR.textContent = r.toFixed(1);

    // Band
    outBand.textContent        = band;
    outBand.dataset.band       = band;

    // Dominant
    outDominant.textContent = dominant;

    // Gauge arc (stroke-dashoffset: 1000 = empty, 0 = full)
    const pct = rToGaugePct(r);
    if (gaugeArc) {
      gaugeArc.style.strokeDashoffset = (1000 - pct * 1000).toFixed(0);
    }

    // Needle rotation
    if (gaugeNeedle) {
      const deg = pctToNeedleDeg(pct);
      gaugeNeedle.style.transform = `rotate(${deg}deg)`;
    }

    // Color-code R value by band
    const colors = { LOW: '#7AC99A', MED: '#DFC07E', HIGH: '#E07070' };
    outR.style.color = colors[band] || 'var(--washi)';

    // aria
    slTau.setAttribute('aria-valuenow',   tau);
    slOmega.setAttribute('aria-valuenow', omega);
    slTi.setAttribute('aria-valuenow',    ti);
  }

  function onInput() {
    updateDisplay(
      parseFloat(slTau.value),
      parseFloat(slOmega.value),
      parseFloat(slTi.value)
    );
  }

  slTau.addEventListener('input',   onInput);
  slOmega.addEventListener('input', onInput);
  slTi.addEventListener('input',    onInput);

  // Initial render
  onInput();
}

/* ══ ACTIVE NAV LINKS (highlight on scroll) ══════════════════════════════ */
function initActiveLinks() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach(link => {
          const active = link.getAttribute('href') === `#${id}`;
          link.style.color      = active ? 'var(--indigo)' : '';
          link.style.borderBottomColor = active ? 'var(--gold)' : '';
        });
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(s => observer.observe(s));
}

/* ══ SMOOTH SCROLL POLYFILL (for older iOS Safari) ═══════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ══ RANGE SLIDER FILL TRACK (visual feedback) ═══════════════════════════ */
function initSliderFill() {
  document.querySelectorAll('.calc-slider').forEach(slider => {
    const update = () => {
      const min = parseFloat(slider.min);
      const max = parseFloat(slider.max);
      const val = parseFloat(slider.value);
      const pct = ((val - min) / (max - min)) * 100;
      const isInverted = slider.classList.contains('calc-slider--inverted');
      const color = isInverted ? '#4A7C59' : '#C9A84C';
      slider.style.background =
        `linear-gradient(90deg, ${color} ${pct}%, rgba(247,243,236,0.15) ${pct}%)`;
    };
    slider.addEventListener('input', update);
    update();
  });
}

/* ══ BOOT ════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initEnso();
  initNav();
  initScrollReveal();
  initCalculator();
  initActiveLinks();
  initSmoothScroll();
  initSliderFill();
});
