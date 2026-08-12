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
  const textFields =
    'input:not([type="range"]), textarea, .hero__desc, .body-text, .accordion-item__content';
    document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactables)) {
      dot.classList.add('is-big');
      ring.classList.add('is-big');
    }
  });

  // NEW
  document.addEventListener('mouseover', (e) => {

    if (e.target.closest(textFields)) {

        dot.classList.add('is-text');
        ring.classList.add('is-text');

    }

  });
  
  document.addEventListener('mouseout', (e) => {

    if (e.target.closest(textFields)) {

        dot.classList.remove('is-text');
        ring.classList.remove('is-text');

    }

});
  
 
  /*not new*/
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

/* ──────────────────────────────────────────────────────
   MUSIC PANEL 
   ────────────────────────────────────────────────────── */

const audio = document.getElementById("audio-player");
const playBtn = document.getElementById("pw-play");
const prevBtn = document.getElementById("pw-prev");
const nextBtn = document.getElementById("pw-next");
const playIcon = document.querySelector(".pw-play-icon");
const pauseIcon = document.querySelector(".pw-pause-icon");
const vinyl = document.querySelector(".vinyl__disc");
const arm = document.querySelector(".vinyl__arm");
const vinylLogo = document.querySelector(".vinyl__label img");
const volume = document.getElementById("pw-volume");

/*new*/
const tracks = [
  {
    title: "Nocturno Op. 9 No. 2",
    artist: "Frédéric Chopin",
    src: "assets/music/Nocturne.Chopan.mp3"
  },
  {
    title: "Fantasía en Re menor, K. 397",
    artist: "W. A. Mozart",
    src: "assets/music/FantasiaInDminorMozart.mp3"
  },
  {
    title: "Sonata Claro de Luna — Adagio sostenuto",
    artist: "Ludwig van Beethoven",
    src: "assets/music/Moonlight.AdagioSostenuto.mp3"
  },
  {
    title: "Vals en Si menor",
    artist: "Frédéric Chopin",
    src: "assets/music/PianoWaltzInBChopan.mp3"
  },
  {
    title: "Sinfonía n.º 9 — Adagio",
    artist: "Antonín Dvořák",
    src: "assets/music/SymphonyNo.9NewWorldAdagio.Dvorak.mp3"
  }
];

let currentTrack = 0;
const trackItems = document.querySelectorAll(".tracklist__item");

trackItems.forEach((item) => {
  item.addEventListener("click", () => {
    const index = Number(item.dataset.idx);
    const wasPlaying = !audio.paused;

    loadTrack(index);

    if (wasPlaying) {
      audio.play();
    }
  });
});

function loadTrack(index) {
  const track = tracks[index];

  currentTrack = index;

  audio.src = track.src;
  audio.currentTime = 0;

  document.getElementById("pw-track").textContent = track.title;
  document.getElementById("pw-artist").textContent = track.artist;
  document.getElementById("pw-fill").style.width = "0%";

  trackItems.forEach((item) => {
    const itemIndex = Number(item.dataset.idx);
    const active = itemIndex === index;

    item.classList.toggle("tracklist__item--active", active);
    item.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

/*buttons*/

prevBtn.addEventListener("click", () => {
  const previous = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(previous);
  audio.play();
});

nextBtn.addEventListener("click", () => {
  const next = (currentTrack + 1) % tracks.length;
  loadTrack(next);
  audio.play();
});


volume.addEventListener("input", () => {
  audio.volume = volume.value;

  volume.style.setProperty(
    "--volume-level",
    `${volume.value * 100}%`
  );
});

playBtn.addEventListener("click", () => {

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }

});

audio.addEventListener("play", () => {

  playIcon.hidden = true;
  pauseIcon.hidden = false;

  vinyl.classList.add("is-playing");
  arm.classList.add("is-playing");

  vinylLogo.style.animationPlayState = "running";

});

audio.addEventListener("pause", () => {

  playIcon.hidden = false;
  pauseIcon.hidden = true;

  vinyl.classList.remove("is-playing");
  arm.classList.remove("is-playing");

});

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;

  const progress = (audio.currentTime / audio.duration) * 100;

  document.getElementById("pw-fill").style.width = `${progress}%`;
});

const muteButton = document.getElementById("pw-mute");
const volumeSlider = document.getElementById("pw-volume");

let previousVolume = volumeSlider.value;

muteButton.addEventListener("click", () => {
  if (volumeSlider.value > 0) {
    previousVolume = volumeSlider.value;

    volumeSlider.value = 0;
    volumeSlider.dispatchEvent(new Event("input", { bubbles: true }));

    muteButton.setAttribute("aria-label", "Activar sonido");
  } else {
    volumeSlider.value = previousVolume || 1;
    volumeSlider.dispatchEvent(new Event("input", { bubbles: true }));

    muteButton.setAttribute("aria-label", "Silenciar");
  }
});
volumeSlider.removeAttribute("title");