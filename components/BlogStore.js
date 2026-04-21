// Shared blog store — uses localStorage, seeded with demo articles on first load.
const BLOG_KEY = "frednutrilife.blog.v1";

const seedArticles = [
  {
    id: "art-1",
    title: "Les 3 piliers d'une énergie durable après 40 ans",
    slug: "3-piliers-energie-40-ans",
    category: "Alimentation",
    excerpt: "Pourquoi manger sain ne suffit pas — et comment l'alimentation, le mouvement et le sommeil s'articulent pour retrouver une énergie stable.",
    cover: "assets/about-food.jpg",
    body: "Passé 40 ans, beaucoup se plaignent d'une énergie en dents de scie. On pense souvent qu'il suffit de \"mieux manger\" — mais l'assiette, isolée du reste, ne suffit pas.\n\nLa vraie clé tient en trois leviers : l'alimentation, le mouvement, et le sommeil. Pris ensemble, ils recréent un équilibre biologique où le corps cesse de fonctionner en survie.\n\nDans cet article, je détaille comment les articuler au quotidien, sans régime et sans contrainte irréaliste.",
    author: "Frédéric Martin",
    readTime: 6,
    publishedAt: "2026-04-12",
    status: "published",
    tags: ["énergie", "longévité", "micronutrition"],
  },
  {
    id: "art-2",
    title: "Micronutrition : comprendre l'iode sans paniquer",
    slug: "micronutrition-iode",
    category: "Micronutrition",
    excerpt: "L'iode est partout et nulle part à la fois. Voici comment savoir si vous en manquez, et quoi faire concrètement.",
    cover: "assets/fred-hero.jpg",
    body: "L'iode est un oligo-élément essentiel — notamment pour la thyroïde et l'énergie globale. Le problème : la plupart des Français en consomment moins que les apports recommandés.\n\nBonne nouvelle : il n'y a pas besoin de complémentation systématique. Quelques aliments bien choisis suffisent souvent à couvrir les besoins.\n\nDans cet article, je passe en revue les sources alimentaires, les signes de carence, et les cas où un bilan s'impose.",
    author: "Frédéric Martin",
    readTime: 4,
    publishedAt: "2026-04-05",
    status: "published",
    tags: ["iode", "micronutrition", "thyroïde"],
  },
  {
    id: "art-3",
    title: "Pourquoi le muscle est l'organe de la longévité",
    slug: "muscle-longevite",
    category: "Mouvement",
    excerpt: "Sarcopénie, densité osseuse, métabolisme : ce que perdre du muscle signifie vraiment après 50 ans — et comment l'éviter.",
    cover: "",
    body: "Le muscle n'est pas qu'esthétique. C'est un organe métabolique qui régule la glycémie, soutient les os, et détermine en grande partie votre espérance de vie en bonne santé.\n\nAprès 50 ans, on perd en moyenne 1% de masse musculaire par an sans entretien — c'est la sarcopénie. La bonne nouvelle : elle est largement réversible.\n\nJe partage dans cet article les 3 habitudes les plus efficaces pour préserver et reconstruire la masse musculaire, sans passer sa vie en salle de sport.",
    author: "Frédéric Martin",
    readTime: 7,
    publishedAt: "2026-03-28",
    status: "published",
    tags: ["musculation", "longévité", "force"],
  },
  {
    id: "art-4",
    title: "Le sommeil : le levier le plus sous-estimé",
    slug: "sommeil-levier-sous-estime",
    category: "Sommeil",
    excerpt: "Vous pouvez faire tous les efforts alimentaires du monde — si vous dormez mal, votre corps joue contre vous.",
    cover: "",
    body: "Un brouillon pour lancer la réflexion…",
    author: "Frédéric Martin",
    readTime: 5,
    publishedAt: "",
    status: "draft",
    tags: ["sommeil", "récupération"],
  },
];

const BlogStore = {
  load() {
    try {
      const raw = localStorage.getItem(BLOG_KEY);
      if (!raw) {
        localStorage.setItem(BLOG_KEY, JSON.stringify(seedArticles));
        return [...seedArticles];
      }
      return JSON.parse(raw);
    } catch (e) {
      return [...seedArticles];
    }
  },
  save(articles) {
    localStorage.setItem(BLOG_KEY, JSON.stringify(articles));
    window.dispatchEvent(new CustomEvent("blog:change"));
  },
  published(articles) {
    return (articles || this.load())
      .filter(a => a.status === "published")
      .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
  },
  getById(id) {
    return this.load().find(a => a.id === id);
  },
  upsert(article) {
    const all = this.load();
    const idx = all.findIndex(a => a.id === article.id);
    if (idx >= 0) all[idx] = article;
    else all.unshift(article);
    this.save(all);
    return article;
  },
  remove(id) {
    const all = this.load().filter(a => a.id !== id);
    this.save(all);
  },
  newId() {
    return "art-" + Math.random().toString(36).slice(2, 8);
  },
};

window.BlogStore = BlogStore;
