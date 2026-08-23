/* ═══════════════════════════════════════════════
   NOCTURNA · LIBRARY
   ═══════════════════════════════════════════════ */


/* ══ BOOK DATA ══ */

const libraryCollections = [

  {
    id: "philosophy",
    number: "I",
    title: "Philosophy",

    books: [
    
       {
        title: "Critique of Pure Reason",
        author: "Immanuel Kant",
        year: "1781",
        description:
          "An examination of the limits of human knowledge, reason and the conditions that make experience possible.",
        tags: ["Philosophy", "Epistemology"],
        image: ""
      },

      {
        title: "Discourse on the Method",
        author: "René Descartes",
        year: "1637",
        description:
          "A foundational meditation on reason, method and the search for certainty through disciplined thought.",
        tags: ["Philosophy", "Rationalism"],
        image: ""
      },

      {
        title: "Leviathan",
        author: "Thomas Hobbes",
        year: "1651",
        description:
          "A study of human nature, political authority and the foundations of social order.",
        tags: ["Philosophy", "Political Thought"],
        image: ""
      },



      {
        title: "The Myth of Sisyphus",
        author: "Albert Camus",
        year: "1942",
        description:
          "An exploration of absurdity, freedom and the question of whether life can remain meaningful without absolute answers.",
        tags: ["Absurdism", "Existential"],
        image: ""
      },

      {
        title: "The World as Will and Representation",
        author: "Arthur Schopenhauer",
        year: "1818",
        description:
          "A dark philosophical investigation into desire, suffering, perception and the nature of reality.",
        tags: ["Metaphysics", "Philosophy"],
        image: ""
      },

      {
        title: "The Essays",
        author: "Michel de Montaigne",
        year: "1580",
        description:
          "Fragments of thought, observation and self-examination gathered into one of the foundations of modern reflective writing.",
        tags: ["Reflection", "Humanism"],
        image: ""
      }

    ]
  },


  {
    id: "dark-literature",
    number: "II",
    title: "Dark Literature",

    books: [

      {
        title: "The Name of the Rose",
        author: "Umberto Eco",
        year: "1980",
        description:
          "Mystery, heresy and a medieval library become a labyrinth of knowledge, silence and hidden violence.",
        tags: ["Mystery", "Medieval"],
        image: ""
      },

      {
        title: "The Fall of the House of Usher",
        author: "Edgar Allan Poe",
        year: "1839",
        description:
          "A decaying house, a fragile mind and an atmosphere where architecture and madness become indistinguishable.",
        tags: ["Gothic", "Horror"],
        image: ""
      },

      {
        title: "Frankenstein",
        author: "Mary Shelley",
        year: "1818",
        description:
          "Creation, isolation and responsibility converge in one of literature's most enduring explorations of the monstrous.",
        tags: ["Gothic", "Science"],
        image: ""
      },

      {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        year: "1890",
        description:
          "Beauty, corruption and the desire to escape the consequences of one's own actions.",
        tags: ["Gothic", "Decadence"],
        image: ""
      },

      {
        title: "The Master and Margarita",
        author: "Mikhail Bulgakov",
        year: "1967",
        description:
          "A strange collision of satire, metaphysics, love and the supernatural unfolding beneath an ordinary city.",
        tags: ["Satire", "Mystical"],
        image: ""
      },

      {
        title: "The Trial",
        author: "Franz Kafka",
        year: "1925",
        description:
          "A man becomes trapped inside an incomprehensible system whose rules remain permanently beyond his reach.",
        tags: ["Absurdism", "Dark"],
        image: ""
      }

    ]
  },


  {
    id: "science-fiction",
    number: "III",
    title: "Science Fiction",

    books: [

      {
        title: "Solaris",
        author: "Stanisław Lem",
        year: "1961",
        description:
          "A mysterious ocean confronts humanity with the limits of knowledge, memory and communication.",
        tags: ["Cosmic", "Philosophy"],
        image: ""
      },

      {
        title: "Dune",
        author: "Frank Herbert",
        year: "1965",
        description:
          "Politics, ecology, religion and power collide across an immense desert world shaped by prophecy.",
        tags: ["Epic", "Politics"],
        image: ""
      },

      {
        title: "Do Androids Dream of Electric Sheep?",
        author: "Philip K. Dick",
        year: "1968",
        description:
          "A future where artificial beings force humanity to reconsider empathy, identity and what makes a person human.",
        tags: ["Cyberpunk", "Identity"],
        image: ""
      },

      {
        title: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin",
        year: "1969",
        description:
          "An encounter with an alien civilisation becomes an exploration of identity, culture, politics and human difference.",
        tags: ["Speculative", "Anthropology"],
        image: ""
      },

      {
        title: "Roadside Picnic",
        author: "Arkady & Boris Strugatsky",
        year: "1972",
        description:
          "An unexplained visitation leaves behind a dangerous landscape filled with objects humanity cannot understand.",
        tags: ["Cosmic", "Mystery"],
        image: ""
      },

      {
        title: "The Dispossessed",
        author: "Ursula K. Le Guin",
        year: "1974",
        description:
          "Two contrasting societies become the setting for a meditation on freedom, responsibility and social organisation.",
        tags: ["Utopia", "Philosophy"],
        image: ""
      }

    ]
  },


  {
    id: "reflection",
    number: "IV",
    title: "Existential & Reflection",

    books: [

      {
        title: "The Stranger",
        author: "Albert Camus",
        year: "1942",
        description:
          "A detached consciousness moves through a world whose conventions seem increasingly meaningless.",
        tags: ["Absurdism", "Existential"],
        image: ""
      },

      {
        title: "Nausea",
        author: "Jean-Paul Sartre",
        year: "1938",
        description:
          "An unsettling encounter with existence itself, where ordinary objects begin to reveal something deeply unfamiliar.",
        tags: ["Existential", "Philosophy"],
        image: ""
      },

      {
        title: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        year: "1946",
        description:
          "A profound reflection on suffering, survival and the search for meaning in the face of extreme adversity.",
        tags: ["Existential", "Reflection"],
        image: ""
      },

      {
        title: "Letters to a Young Poet",
        author: "Rainer Maria Rilke",
        year: "1929",
        description:
          "Meditations on solitude, creativity, patience and the difficult process of becoming oneself.",
        tags: ["Poetry", "Reflection"],
        image: ""
      },

      {
        title: "The Death of Ivan Ilyich",
        author: "Leo Tolstoy",
        year: "1886",
        description:
          "A confrontation with mortality that gradually strips away the distractions of an ordinary life.",
        tags: ["Mortality", "Reflection"],
        image: ""
      },

      {
        title: "The Art of Loving",
        author: "Erich Fromm",
        year: "1956",
        description:
          "A philosophical examination of love as an active discipline rather than merely an emotional experience.",
        tags: ["Psychology", "Reflection"],
        image: ""
      }

    ]
  },


  {
    id: "occult",
    number: "V",
    title: "Occult & Esoteric",

    books: [

      {
        title: "The Secret Doctrine",
        author: "Helena Blavatsky",
        year: "1888",
        description:
          "An influential work of esoteric thought concerning cosmology, symbolism and hidden structures of reality.",
        tags: ["Esoteric", "Mysticism"],
        image: ""
      },

      {
        title: "The Book of Thoth",
        author: "Aleister Crowley",
        year: "1944",
        description:
          "A detailed exploration of the symbolism and philosophical structure of the Tarot.",
        tags: ["Tarot", "Occult"],
        image: ""
      },

      {
        title: "The Golden Bough",
        author: "James George Frazer",
        year: "1890",
        description:
          "A vast comparative study of mythology, ritual, religion and humanity's recurring symbolic patterns.",
        tags: ["Mythology", "Anthropology"],
        image: ""
      },

      {
        title: "The Hero with a Thousand Faces",
        author: "Joseph Campbell",
        year: "1949",
        description:
          "An exploration of recurring mythological structures and the symbolic journey of transformation.",
        tags: ["Mythology", "Symbolism"],
        image: ""
      },

      {
        title: "The Varieties of Religious Experience",
        author: "William James",
        year: "1902",
        description:
          "A psychological and philosophical investigation into mystical experience and individual religious consciousness.",
        tags: ["Psychology", "Mysticism"],
        image: ""
      },

      {
        title: "The Archetypes and the Collective Unconscious",
        author: "Carl Gustav Jung",
        year: "1959",
        description:
          "An influential exploration of archetypes, symbols and the deeper structures of the human psyche.",
        tags: ["Psychology", "Symbolism"],
        image: ""
      }

    ]
  }

];


/* ══ RENDER LIBRARY ══ */

const libraryContainer =
  document.getElementById("library-collections");


function createBookCard(book) {

  const card =
    document.createElement("article");

  card.className = "book-card";


  const cover =
    document.createElement("div");

  cover.className = "book-card__cover";


  /*
   * Cuando tengamos portada:
   * book.image tendrá la ruta.
   */

  if (book.image) {

    const image =
      document.createElement("img");

    image.src = book.image;

    image.alt =
      `${book.title} — ${book.author}`;

    image.loading = "lazy";

    cover.appendChild(image);

  } else {

    const placeholder =
      document.createElement("div");

    placeholder.className =
      "book-card__placeholder";

    placeholder.innerHTML =
      `<span>Cover to be added</span>`;

    cover.appendChild(placeholder);

  }


  const info =
    document.createElement("div");

  info.className = "book-card__info";


  const title =
    document.createElement("h3");

  title.className = "book-card__title";

  title.textContent =
    book.title;


  const author =
    document.createElement("p");

  author.className = "book-card__author";

  author.textContent =
    `${book.author} · ${book.year}`;


  const description =
    document.createElement("p");

  description.className =
    "book-card__description";

  description.textContent =
    book.description;


  const tags =
    document.createElement("div");

  tags.className =
    "book-card__tags";


  book.tags.forEach(tag => {

    const tagElement =
      document.createElement("span");

    tagElement.className =
      "book-card__tag";

    tagElement.textContent =
      tag;

    tags.appendChild(tagElement);

  });


  info.appendChild(title);
  info.appendChild(author);
  info.appendChild(description);
  info.appendChild(tags);

  card.appendChild(cover);
  card.appendChild(info);


  return card;
}


/* ══ CREATE COLLECTIONS ══ */

libraryCollections.forEach(collection => {

  const section =
    document.createElement("section");

  section.className =
    "library-collection";

  section.id =
    collection.id;


  const header =
    document.createElement("header");

  header.className =
    "library-collection__header";


  const titleWrapper =
    document.createElement("div");

  titleWrapper.className =
    "library-collection__title";


  const number =
    document.createElement("span");

  number.className =
    "library-collection__number";

  number.textContent =
    collection.number;


  const title =
    document.createElement("h2");

  title.textContent =
    collection.title;


  titleWrapper.appendChild(number);
  titleWrapper.appendChild(title);

  header.appendChild(titleWrapper);


  const grid =
    document.createElement("div");

  grid.className =
    "library-grid";


  collection.books.forEach(book => {

    grid.appendChild(
      createBookCard(book)
    );

  });


  section.appendChild(header);
  section.appendChild(grid);

  libraryContainer.appendChild(section);

});


/* ══ ACTIVE CATEGORY ══ */

const menuLinks =
  document.querySelectorAll(
    ".library-menu__link"
  );


const collections =
  document.querySelectorAll(
    ".library-collection"
  );


const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          return;
        }


        menuLinks.forEach(link => {

          link.classList.remove(
            "is-active"
          );

        });


        const activeLink =
          document.querySelector(
            `.library-menu__link[href="#${entry.target.id}"]`
          );


        if (activeLink) {

          activeLink.classList.add(
            "is-active"
          );

        }

      });

    },

    {
      rootMargin:
        "-25% 0px -60% 0px",

      threshold: 0
    }

  );


collections.forEach(section => {

  observer.observe(section);

});