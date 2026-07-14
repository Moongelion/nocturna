const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

/* ──────────────────────────────────────────────────────
   CUSTOM CURSOR
   ────────────────────────────────────────────────────── */
(function initCursor() {
  const dot = $('#cursor-dot');
  const ring = $('#cursor-ring');
  if (!dot || !ring) return;

  // Skip on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) {
    dot.style.display = 'none';
    ring.style.display = 'none';
    return;
  }

  let mx = -100,
    my = -100;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
    ring.style.left = mx + 'px';
    ring.style.top = my + 'px';
  });

  const interactables =
    'a, button, .chamber, .art-card, .book, .tracklist__item';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactables)) {
      dot.classList.add('is-big');
      ring.classList.add('is-big');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactables)) {
      dot.classList.remove('is-big');
      ring.classList.remove('is-big');
    }
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });
})();

/* ──────────────────────────────────────────────────────
   HEADER — SCROLL STATE
   ────────────────────────────────────────────────────── */
(function initHeader() {
  const hdr = $('#site-header');
  if (!hdr) return;

  let last = 0;
  const update = () => {
    hdr.classList.toggle('is-scrolled', window.scrollY > 60);
    last = window.scrollY;
  };

  window.addEventListener('scroll', () => requestAnimationFrame(update), {
    passive: true
  });
  update();
})();

/* ──────────────────────────────────────────────────────
   NEWSLETTER FORMS
   ────────────────────────────────────────────────────── */
(function initForms() {
  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  // Main newsletter form
  const form = $('#nl-form');
  const input = $('#nl-email');
  const msgEl = $('#nl-msg');

  if (form && input) {
    input.addEventListener('input', () => {
      input.classList.remove('invalid');
      if (msgEl) {
        msgEl.textContent = '';
        msgEl.className = 'nl-form__msg';
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!isEmail(input.value)) {
        input.classList.add('invalid');
        input.focus();
        if (msgEl) {
          msgEl.textContent = 'Introduce un correo válido.';
          msgEl.className = 'nl-form__msg error';
        }
        return;
      }
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = '✓ ¡Bienvenido al Culto!';
        btn.disabled = true;
      }
      if (msgEl) {
        msgEl.textContent =
          'Revisa tu correo. Bienvenido al Culto del Pensamiento.';
        msgEl.className = 'nl-form__msg success';
      }
      setTimeout(() => {
        if (btn) {
          btn.textContent = 'Suscribirse al Códice';
          btn.disabled = false;
        }
        input.value = '';
      }, 5000);
    });
  }

  // Footer form
  const footerForm = $('#footer-form');
  if (footerForm) {
    footerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inp = footerForm.querySelector('input[type="email"]');
      if (!inp || !isEmail(inp.value)) {
        inp?.focus();
        return;
      }
      const btn = footerForm.querySelector('button');
      if (btn) {
        btn.textContent = '✓';
        setTimeout(() => {
          btn.textContent = '→';
          inp.value = '';
        }, 3000);
      }
    });
  }
})();

/* ──────────────────────────────────────────────────────
   ART CARD PARALLAX ON HOVER
   ────────────────────────────────────────────────────── */
(function initArtParallax() {
  if (window.innerWidth < 768) return;
  $$('.art-card').forEach((card) => {
    const img = card.querySelector('img');
    if (!img) return;
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      img.style.transform = `scale(1.1) translate(${x * 10}px, ${y * 7}px)`;
    });
    card.addEventListener('mouseleave', () => {
      img.style.transform = '';
    });
  });
})();

/* ──────────────────────────────────────────────────────
   ACORDEÓN 
   ────────────────────────────────────────────────────── */
(function initAccordion() {
  const accordion = $('#faq-accordion');
  if (!accordion) return;

  const items = $$('.accordion-item', accordion);

  const openItem = (trigger, body) => {
    trigger.setAttribute('aria-expanded', 'true');
    body.removeAttribute('hidden');
    requestAnimationFrame(() => {
      body.style.gridTemplateRows = '1fr';
    });
  };

  const closeItem = (trigger, body) => {
    trigger.setAttribute('aria-expanded', 'false');
    body.style.gridTemplateRows = '0fr';
    const onEnd = () => {
      body.setAttribute('hidden', '');
      body.removeEventListener('transitionend', onEnd);
    };
    body.addEventListener('transitionend', onEnd);
  };

  items.forEach((item) => {
    const trigger = item.querySelector('.accordion-item__trigger');
    const body = item.querySelector('.accordion-item__body');
    if (!trigger || !body) return;

    body.setAttribute('hidden', '');
    body.style.gridTemplateRows = '0fr';

    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      items.forEach((other) => {
        const otherTrigger = other.querySelector('.accordion-item__trigger');
        const otherBody = other.querySelector('.accordion-item__body');
        if (otherTrigger && otherBody && otherTrigger !== trigger) {
          if (otherTrigger.getAttribute('aria-expanded') === 'true') {
            closeItem(otherTrigger, otherBody);
          }
        }
      });

      if (isOpen) {
        closeItem(trigger, body);
      } else {
        openItem(trigger, body);
      }
    });

    trigger.addEventListener('keydown', (e) => {
      const triggers = items.map((i) =>
        i.querySelector('.accordion-item__trigger')
      );
      const idx = triggers.indexOf(trigger);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        triggers[(idx + 1) % triggers.length]?.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        triggers[(idx - 1 + triggers.length) % triggers.length]?.focus();
      }
    });
  });
})();

const li = document.querySelectorAll('.tab');
const programs__panel = document.querySelectorAll('.chamber--panel');

li.forEach((e, i) => {
  li[i].addEventListener('click', () => {
    li.forEach((e, i) => {
      li[i].classList.remove('active');
      programs__panel[i].classList.remove('active');
    });
    li[i].classList.add('active');
    programs__panel[i].classList.add('active');
  });
});
