import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-heiterwangersee";

const campingHeiterwangersee: CampsiteConfig = {
  name: "Camping am Heiterwanger See",
  shortName: "Heiterwang",
  slug: "camping-heiterwangersee",
  ort: "Heiterwang",
  region: "Tirol",
  brandKind: "Camping am See",
  see: "Heiterwanger See",
  regionLong: "Tiroler Zugspitz Arena · Tirol · Österreich",

  heroVariant: "center",

  claim: "Einfach glücklich sein am Heiterwanger See",
  claimEmphasis: "am Heiterwanger See",
  emailDetail: "eure Lage direkt am smaragdgrünen Heiterwanger See",
  intro:
    "Romantische Buchten, ein rundum freier Seezugang und eine Liegewiese unter schattigen Bäumen: Auf 1.000 Metern Höhe campst du am smaragdgrünen Heiterwanger See — verkehrsfrei, mitten in der Tiroler Zugspitz Arena.",

  statement: {
    text: "Auf 1.000 Metern Höhe beginnt der smaragdgrüne See gleich hinter deinem Stellplatz.",
    emphasis: "smaragdgrüne See",
  },

  pillars: [
    {
      title: "Frei ins glasklare Wasser",
      text: "Rundum freier Seezugang direkt am Platz — rein ins kühle, smaragdgrüne Bergwasser.",
      image: { src: `${IMG}/activity-9252a09b7e.webp`, alt: "Zwei Badegäste laufen ins klare Wasser des Heiterwanger Sees" },
    },
    {
      title: "Stellplätze mit Bergblick",
      text: "Ebene Stell- und Zeltplätze auf der Wiese — morgens zuerst der Blick auf See und Gipfel.",
      image: { src: `${IMG}/activity-95177a775e.webp`, alt: "Drohnenblick auf den Campingplatz am Heiterwanger See mit türkisem Wasser und Bergpanorama" },
    },
    {
      title: "Mitten in der Zugspitz Arena",
      text: "14 Hektar verkehrsfreies Naturareal, eingebettet zwischen Wald, See und hohen Bergen.",
      image: { src: `${IMG}/gallery-b50baedbdb.webp`, alt: "Luftaufnahme des Campingplatzes am Heiterwanger See zwischen Bergen" },
    },
  ],

  usps: [
    "Freier Seezugang",
    "Smaragdgrüner Bergsee",
    "Verkehrsfreies 14-ha-Areal",
    "Eigenes Quellwasser",
    "Boots- & SUP-Verleih",
    "Liegewiese am Ufer",
  ],

  trust: {
    heading: "Darauf ist am Heiterwanger See Verlass",
    headingEmphasis: "Heiterwanger See",
    intro:
      "Persönlich geführt von Familie Bunte: ein verkehrsfreies Naturareal aus Wald, Wiese und See, frisches Trinkwasser aus eigener Quelle und kurze Wege zu Boot, SUP und dem Restaurant am Ufer.",
  },

  awards: [],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-e9a2b03bc0.webp`, alt: "Luftaufnahme: Ausflugsschiff auf dem smaragdgrünen Heiterwanger See vor der Bergkulisse" },
  },

  breather: {
    image: { src: `${IMG}/hero-5ac442ca1e.webp`, alt: "Der Campingplatz am Heiterwanger See aus der Luft, eingebettet zwischen Bergen und See" },
    line: "Einfach glücklich sein — mitten in der Tiroler Zugspitz Arena.",
  },

  camping: {
    heading: "Camping am Heiterwanger See",
    intro:
      "Vom Stellplatz direkt ans Wasser: 14 Hektar verkehrsfreies Areal aus Wald, Wiese und See — mit allem, was einen entspannten Campingtag ausmacht.",
    features: [
      {
        title: "Liegewiese direkt am Ufer",
        text: "Die große Liegewiese liegt unmittelbar am Seeufer — mit natürlichem Schatten unter alten Bäumen.",
        image: { src: `${IMG}/activity-fd35304772.webp`, alt: "Liegewiese am Ufer des Heiterwanger Sees bei Sonnenaufgang" },
      },
      {
        title: "Verkehrsfreies Naturareal",
        text: "14 Hektar Wald, Wiese und See in Privatbesitz — kein Durchgangsverkehr, nur Natur ringsum.",
        image: { src: `${IMG}/hero-ab73c1fff3.webp`, alt: "Wohnwagen mit Liegestühlen auf der Wiese im Abendlicht" },
      },
      {
        title: "Frischer Brötchenservice",
        text: "Frisches Brot und Gebäck vom Bäcker — auf Vorbestellung bis 16 Uhr am Vortag abholbereit.",
        image: { src: `${IMG}/activity-635e745f0c.webp`, alt: "Schale mit frischen Brötchen vom Bäcker" },
      },
      {
        title: "Restaurant mit Sonnenterrasse",
        text: "Im Restaurant Fischer am See speist du frisch und saisonal — mit Sonnenterrasse und Seeblick.",
        image: { src: `${IMG}/amenity-6196ebcd66.webp`, alt: "Fein angerichtetes Gericht mit Weißwein und Blick auf See und Berge" },
      },
      {
        title: "Boote direkt am Steg",
        text: "Ruder-, Elektro- und Tretboote leihst du direkt am Platz und gleitest über den See.",
        image: { src: `${IMG}/activity-1ecf646633.webp`, alt: "Tretboote am Steg des Heiterwanger Sees vor Bergpanorama" },
      },
      {
        title: "Ruhe am Wasser",
        text: "Frisches Quellwasser, klare Bergluft und ein Platz, an dem du wirklich zur Ruhe kommst.",
        image: { src: `${IMG}/activity-06a2312c97.webp`, alt: "Person liest am See mit Kaffee und Kuchen vor Bergkulisse" },
      },
    ],
  },

  kinder: {
    heading: "Wo Kinder den ganzen Tag draußen sind",
    intro:
      "Flacher, freier Seezugang, ein Spielplatz für die Kleinen und jede Menge Wiese zum Toben — hier dürfen Kinder Sommer pur erleben.",
    features: [
      {
        title: "Sprung in den See",
        text: "Vom Steg direkt ins glasklare Wasser springen — Badespaß, wie ihn Kinder lieben.",
        image: { src: `${IMG}/gallery-6c32006cd7.webp`, alt: "Zwei Personen springen von einem Steg in den klaren Heiterwanger See" },
      },
      {
        title: "Kurze Wege zum Baden",
        text: "Der freie Seezugang liegt gleich am Platz — nach dem Baden schnell zurück ins Vorzelt.",
        image: { src: `${IMG}/kids-b683b8dd5f.webp`, alt: "Zwei lachende Kinder in Badetüchern am Ufer des Heiterwanger Sees" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Dein Tag am Heiterwanger See",
    intro:
      "Baden, paddeln, rudern oder eine Schifffahrt über zwei Seen — am Heiterwanger See liegt dein Sommerprogramm direkt vor dem Vorzelt.",
    items: [
      {
        title: "Stand-up-Paddeln",
        text: "Die SUP-Station liegt direkt nebenan — Boards leihen oder früh über den stillen See gleiten.",
        image: { src: `${IMG}/activity-ed1724a85e.webp`, alt: "Stand-up-Paddler auf dem Heiterwanger See im Morgennebel" },
      },
      {
        title: "Rudern über den See",
        text: "Im Ruderboot erkundest du den türkisen Heiterwanger See von Ufer zu Ufer — ganz in Ruhe.",
        image: { src: `${IMG}/gallery-1286717e1b.webp`, alt: "Ruderboot auf dem spiegelglatten Heiterwanger See zwischen den Bergen" },
      },
      {
        title: "Schifffahrt über zwei Seen",
        text: "Die MS Margarethe und MS Wilhelm bringen dich gemütlich über Heiterwanger See und Plansee.",
        image: { src: `${IMG}/activity-865d0144a1.webp`, alt: "Ausflugsschiff legt am Steg des Camping Heiterwanger See an, türkiser See und Berge im Hintergrund" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Heiterwang",
    modes: [
      { title: "Mit dem Auto", text: "Über die Fernpassstraße B179 bis Heiterwang, dann der Beschilderung zum Fischer am See bis ans Seeufer folgen." },
      { title: "Mit der Bahn", text: "Nächste Bahnhöfe sind Reutte in Tirol und Lermoos — von dort weiter mit Bus oder Taxi nach Heiterwang." },
      { title: "Mit dem E-Auto", text: "In Heiterwang gibt es auf dem Weg zum Platz eine Ladestation mit Supercharger — voll geladen ankommen." },
    ],
  },

  galerie: {
    heading: "Sommertage am Heiterwanger See",
    headingEmphasis: "Heiterwanger See",
    intro: "Smaragdgrünes Wasser, Wiese bis ans Ufer und Berge ringsum — ein paar Eindrücke vom Platz.",
    tag: "Mai bis Oktober",
    moreCount: 20,
    images: [
      { src: `${IMG}/activity-62baa1f1ac.webp`, alt: "Stand-up-Paddler auf dem türkisen Wasser unter einer Holzbrücke" },
      { src: `${IMG}/hero-ef2557352c.webp`, alt: "Bootshaus und Hotel am Heiterwanger See mit spiegelnder Bergkulisse" },
      { src: `${IMG}/activity-8d0fd49a02.webp`, alt: "Ruderboote im historischen Bootshaus am Heiterwanger See mit türkisem Wasser" },
      { src: `${IMG}/gallery-39048eb02f.webp`, alt: "Abendlicht über dem Campingplatz und dem Heiterwanger See aus der Luft" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am See",
    headingEmphasis: "am See",
    intro:
      "Wähle Zeitraum und Stellplatz — wir melden uns persönlich mit deiner Verfügbarkeit am Heiterwanger See.",
    pricesArePlaceholder: false,
    priceNote: "ab-Preise pro Nacht für 2 Personen inkl. Platz — zzgl. Ortstaxe, Strom (€ 1,00/kWh) und Hund. Stand laut Website.",
    highlight: { title: "Direkt am See", text: "Vom Stellplatz zum freien Seezugang sind es nur ein paar Schritte." },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 43 },
      { id: "zeltplatz", label: "Zeltplatz", perNight: 42.5 },
      { id: "premium", label: "Premium-Stellplatz", perNight: 53 },
    ],
  },

  kontakt: {
    coords: { lat: 47.45533, lng: 10.759664 },
    tel: "+43 5674 5116 40",
    telHref: "tel:+435674511640",
    mail: "camping@fischeramsee.at",
    adresse: "Fischer am See 1 · 6611 Heiterwang · Tirol",
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Am See", href: "#aktivitaeten" },
    ]},
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingHeiterwangersee;
