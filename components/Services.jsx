function Services({ onBook }) {
  const services = [
    {
      tag: "FORMULE DÉCOUVERTE",
      title: "Bilan Vitalité",
      price: "Offert",
      priceLbl: "30 minutes",
      desc: "Un premier échange téléphonique pour faire le point sur vos habitudes, vos objectifs et voir si mon accompagnement vous correspond.",
      features: [
        "Diagnostic rapide alimentation / sommeil / énergie",
        "Identification des 2-3 leviers prioritaires",
        "Aucune obligation, aucun engagement",
      ],
      featured: false,
      cta: "Réserver mon appel",
    },
    {
      tag: "POPULAIRE",
      title: "Programme Équilibre",
      price: "480€",
      priceLbl: "3 mois · 6 séances",
      desc: "L'accompagnement le plus choisi. Conçu pour installer durablement les bonnes habitudes et obtenir des résultats visibles sur l'énergie.",
      features: [
        "Bilan nutritionnel & micronutritionnel complet",
        "6 séances 1:1 en visio (60 min)",
        "Plans d'action alimentation, mouvement, sommeil",
        "Suivi WhatsApp entre les séances",
        "Bibliothèque de ressources personnalisée",
      ],
      featured: true,
      cta: "Démarrer le programme",
    },
    {
      tag: "ACCOMPAGNEMENT LONG",
      title: "Longévité 360°",
      price: "1 200€",
      priceLbl: "6 mois · 10 séances",
      desc: "Un travail de fond pour transformer durablement vos habitudes et protéger votre santé sur les 20 prochaines années.",
      features: [
        "Tout le Programme Équilibre, approfondi",
        "Analyses biologiques interprétées",
        "10 séances de coaching 1:1 (75 min)",
        "Support illimité pendant 6 mois",
        "Plan de maintenance post-accompagnement",
      ],
      featured: false,
      cta: "En savoir plus",
    },
  ];

  return (
    <section className="services" id="accompagnement">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Accompagnement</span>
            <h2 className="display" style={{ marginTop: 16 }}>
              Trois portes d'entrée,<br/><em style={{ fontStyle: "italic", color: "var(--tan)" }}>une même destination.</em>
            </h2>
          </div>
          <p>
            Que vous veniez tester, transformer ou transmettre, chaque formule est conçue
            pour vous rencontrer là où vous en êtes.
          </p>
        </div>
        <div className="services-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {services.map((s, i) => (
            <div className={"svc-card" + (s.featured ? " featured" : "")} key={i}>
              <div className="svc-head">
                <div style={{ flex: 1 }}>
                  <span className="svc-tag">{s.tag}</span>
                  <h3 style={{ marginTop: 16 }}>{s.title}</h3>
                </div>
              </div>
              <p className="svc-desc">{s.desc}</p>
              <ul className="svc-features">
                {s.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <div className="svc-foot">
                <div>
                  <div className="svc-price display">{s.price}</div>
                  <span className="svc-price-lbl">{s.priceLbl}</span>
                </div>
                <button
                  className={"btn " + (s.featured ? "btn-ink" : "btn-outline")}
                  onClick={onBook}
                >
                  {s.cta} <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 1060px) {
            .services-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 680px) {
            .services-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

Object.assign(window, { Services });
