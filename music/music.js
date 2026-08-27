/* NOCTURNA · MUSIC LIBRARY */

const musicCollections = [
  {
    id: "dark-ambient",
    number: "I",
    title: "Dark Ambient",
    albums: [
      ["Godspeed You!", "Black Emperor", "—", "Atmospheric soundscapes, slow textures and music built for the hours when the world becomes quiet.", ["Ambient","Dark"],  "cover/Godspeed.jpg", "audio/godspeed.mp3"],
      ["Placeholder II", "Artist to be added", "—", "Distant tones, suspended spaces and nocturnal atmospheres.", ["Drone","Atmospheric"]],
      ["Placeholder III", "Artist to be added", "—", "Sound designed to feel less like a song and more like a place remembered in fragments.", ["Ambient","Experimental"]]
    ]
  },
  {
    id: "classical",
    number: "II",
    title: "Classical",
    albums: [
      ["Gnossienne No. 1", "Erik Satie", "—", "Works of tension, melancholy and beauty from the classical repertoire.", ["Classical","Orchestral"], "cover/gnossienne.jpg", "audio/gnossienne.mp3"],
      ["Placeholder II", "Composer to be added", "—", "Pieces where silence, repetition and restraint become part of the composition.", ["Piano","Romantic"]],
      ["Placeholder III", "Composer to be added", "—", "A darker selection of works shaped by solitude, drama and contemplation.", ["Chamber","Dark"]]
    ]
  },

  {
  id: "jazz-blues",
  number: "III",
  title: "Jazz & Blues",
    albums: [
      ["Almost Blue", "Chet Baker", "—", "Works of tension, melancholy and beauty from the classical repertoire.", ["Classical","Orchestral"], "cover/almostblue.jpg", "audio/almostblue.mp3"],
      ["Placeholder II", "Composer to be added", "—", "Pieces where silence, repetition and restraint become part of the composition.", ["Piano","Romantic"]],
      ["Placeholder III", "Composer to be added", "—", "A darker selection of works shaped by solitude, drama and contemplation.", ["Chamber","Dark"]]
    ]
  },
  
  {
    id: "electronic",
    number: "III",
    title: "Electronic",
    albums: [
      ["Quoth", "Polygon Window", "—", "Electronic compositions built from rhythm, texture and hypnotic repetition.", ["Electronic","Techno"], "cover/quoth.jpg", "audio//quoth.mp3"],
      ["Placeholder II", "Artist to be added", "—", "Nocturnal electronic music moving between pulse, atmosphere and abstraction.", ["Techno","Hypnotic"]],
      ["Placeholder III", "Artist to be added", "—", "Synthetic textures and slow-burning rhythms for the darker hours.", ["Ambient","Electronic"]]
    ]
  },
  {
    id: "gothic-industrial",
    number: "IV",
    title: "Gothic & Industrial",
    albums: [
      ["Bela Lugosi's Dead", "Bauhaus", "—", "Industrial textures, gothic atmospheres and music with a distinctly nocturnal character.", ["Gothic","Industrial"], "cover/bela.jpg", "audio/bela.mp3"],
      ["Placeholder II", "Artist to be added", "—", "Dark rhythms and severe textures suspended between beauty and unease.", ["Darkwave","Industrial"]],
      ["Placeholder III", "Artist to be added", "—", "Cold machines, heavy pulses and romantic darkness.", ["Darkwave","Gothic"]]
    ]
  },
  {
    id: "experimental",
    number: "V",
    title: "Experimental",
    albums: [
      ["The Great Curve", "Talking Heads", "—", "Unconventional compositions that resist easy classification and familiar structures.", ["Experimental","Avant-Garde"], "cover/thegreatcurve.jpg", "audio/thegreatcurve.mp3"],
      ["Placeholder II", "Artist to be added", "—", "Sound experiments where noise, silence and texture become the subject itself.", ["Noise","Abstract"]],
      ["Placeholder III", "Artist to be added", "—", "Music for listeners drawn toward strange structures and unfamiliar territories.", ["Experimental","Electronic"]]
    ]
  },

  {
  id: "progressive",
  number: "VII",
  title: "Progressive",
  albums: [
    ["The Sky is Red", "Leprous", "—", "Progressive sounds shaped by gradual movement, atmosphere and hypnotic development.", ["Progressive", "Electronic"], "cover/theskyisred.jpg", "audio/theskyisred.mp3"],
    ["Placeholder II", "Artist to be added", "—", "Long-form compositions built around evolving rhythms, layered textures and nocturnal atmospheres.", ["Progressive", "Electronic"]],
    ["Placeholder III", "Artist to be added", "—", "A slower-burning selection where repetition becomes movement and every layer arrives in its own time.", ["Progressive", "Ambient"]]
  ]
  },
];



const musicContainer = document.getElementById("music-collections");

let currentAudio = null;
let currentButton = null;

function playAlbum(audioPath, button, title) {

  if (!audioPath) return;

  /* ── MISMA CANCIÓN ── */

  if (currentAudio && currentAudio.src.includes(audioPath)) {

    if (currentAudio.paused) {

      currentAudio.play();

      button.classList.add("is-playing");

    } else {

      currentAudio.pause();

      button.classList.remove("is-playing");

    }

    return;
  }


  /* ── DETENER CANCIÓN ANTERIOR ── */

  if (currentAudio) {

    currentAudio.pause();
    currentAudio.currentTime = 0;

  }

  if (currentButton) {

    currentButton.classList.remove("is-playing");
    currentButton.textContent = "▶";

  }


  /* ── CREAR AUDIO ── */

  const audioElement = new Audio(audioPath);

  currentAudio = audioElement;
  currentButton = button;


  /* ── REPRODUCIR ── */

  audioElement.play();

  button.classList.add("is-playing");
 


  /* ── CUANDO TERMINA ── */

  audioElement.addEventListener("ended", () => {

    button.classList.remove("is-playing");
    button.textContent = "▶";

    currentAudio = null;
    currentButton = null;

  });

}


function createAlbumCard(data) {
  const [
    titleText,
    artistText,
    year,
    descriptionText,
    tags,
    image,
    audio
  ] = data;

  const card = document.createElement("article");
  card.className = "album-card";

  const cover = document.createElement("div");
  cover.className = "album-card__cover";

if (image) {

  const img = document.createElement("img");

  img.src = image;

  img.alt =
    `${titleText} — ${artistText}`;

  img.loading = "lazy";

  cover.appendChild(img);

} else {

  const placeholder =
    document.createElement("div");

  placeholder.className =
    "album-card__placeholder";

  placeholder.innerHTML =
    "<span>Cover to be added</span>";

  cover.appendChild(placeholder);

}

const play = document.createElement("button");

play.className = "album-card__play";

play.type = "button";


play.setAttribute("aria-label", `Play ${titleText}`);


// El botón sigue funcionando,
// pero evita que el clic se propague a la portada.
play.addEventListener("click", (event) => {

  event.stopPropagation();

  playAlbum(audio, play, titleText);

});

cover.appendChild(play);


// Toda la portada funciona como PLAY / PAUSE

cover.addEventListener("click", () => {

  playAlbum(audio, play, titleText);

});

  const info = document.createElement("div");
  info.className = "album-card__info";

  const title = document.createElement("h3");
  title.className = "album-card__title";
  title.textContent = titleText;

  const artist = document.createElement("p");
  artist.className = "album-card__artist";
  artist.textContent = `${artistText} · ${year}`;

  const description = document.createElement("p");
  description.className = "album-card__description";
  description.textContent = descriptionText;

  const tagBox = document.createElement("div");
  tagBox.className = "album-card__tags";

  tags.forEach(tag => {
    const el = document.createElement("span");
    el.className = "album-card__tag";
    el.textContent = tag;
    tagBox.appendChild(el);
  });

  info.append(title, artist, description, tagBox);
  card.append(cover, info);

  return card;
}

musicCollections.forEach(collection => {
  const section = document.createElement("section");
  section.className = "music-collection";
  section.id = collection.id;

  const header = document.createElement("header");
  header.className = "music-collection__header";

  const number = document.createElement("span");
  number.className = "music-collection__number";
  number.textContent = collection.number;

  const title = document.createElement("h2");
  title.className = "music-collection__title";
  title.textContent = collection.title;

  header.append(number, title);

  const grid = document.createElement("div");
  grid.className = "music-grid";

  collection.albums.forEach(album => {
    grid.appendChild(createAlbumCard(album));
  });

  section.append(header, grid);
  musicContainer.appendChild(section);
});

const menuLinks = document.querySelectorAll(".music-menu__link");
const collections = document.querySelectorAll(".music-collection");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    menuLinks.forEach(link => link.classList.remove("is-active"));

    const activeLink = document.querySelector(
      `.music-menu__link[href="#${entry.target.id}"]`
    );

    if (activeLink) activeLink.classList.add("is-active");
  });
}, {
  rootMargin: "-25% 0px -60% 0px",
  threshold: 0
});

collections.forEach(section => observer.observe(section));
