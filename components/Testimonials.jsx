function Testimonials() {
  const items = [
    {
      q: "En trois mois, j'ai retrouvé une énergie que je pensais perdue pour de bon. Fred ne juge pas, il ajuste. C'est rare.",
      name: "Marianne L.",
      meta: "46 ans · Lyon · Programme Équilibre",
      initial: "M",
    },
    {
      q: "L'approche est intelligente et personnalisée. Ni injonctions, ni tableaux Excel — juste du bon sens structuré par la science.",
      name: "Thomas R.",
      meta: "52 ans · Nantes · Longévité 360°",
      initial: "T",
    },
    {
      q: "Je dors enfin, je digère enfin, et j'ai arrêté de compter les calories. Mon rapport à l'alimentation a complètement changé.",
      name: "Céline D.",
      meta: "39 ans · Bordeaux · Programme Équilibre",
      initial: "C",
    },
  ];
  return (
    <section className="testimonials section-pad" id="temoignages">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Ils en parlent</span>
            <h2 className="display" style={{ marginTop: 16 }}>
              Des retours,<br/><em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>pas des promesses.</em>
            </h2>
          </div>
          <p>
            Les résultats varient — la méthode, non. Voici ce que disent celles et ceux
            qui ont franchi le pas.
          </p>
        </div>
        <div className="t-grid">
          {items.map((t, i) => (
            <div className="t-card" key={i}>
              <div className="t-stars">★ ★ ★ ★ ★</div>
              <div className="t-quote">« {t.q} »</div>
              <div className="t-foot">
                <div className="t-ava">{t.initial}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-meta">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Testimonials });
