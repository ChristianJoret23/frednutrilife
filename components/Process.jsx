function Process() {
  const steps = [
    { n: "01", t: "Appel découverte", d: "On fait le point sur vos besoins et objectifs. Sans engagement.", when: "J · 30 min" },
    { n: "02", t: "Bilan complet", d: "Analyse nutritionnelle, comportementale et micronutritionnelle approfondie.", when: "S1 · 90 min" },
    { n: "03", t: "Plan sur mesure", d: "Trois leviers — alimentation, mouvement, sommeil — adaptés à votre vie réelle.", when: "S2 · 60 min" },
    { n: "04", t: "Accompagnement actif", d: "Séances régulières, ajustements, support continu entre les rendez-vous.", when: "S3–S12" },
    { n: "05", t: "Autonomie durable", d: "Vous repartez avec vos habitudes installées et un plan pour les maintenir.", when: "M3+" },
  ];
  return (
    <section className="process section-pad" id="processus">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Comment ça se passe</span>
            <h2 className="display" style={{ marginTop: 16 }}>
              Un processus <em style={{ fontStyle: "italic", color: "var(--tan)" }}>clair</em>,<br/>pensé pour durer.
            </h2>
          </div>
          <p>
            De l'appel découverte à l'autonomie complète, chaque étape est pensée
            pour installer des habitudes — pas pour créer de la dépendance.
          </p>
        </div>
        <div className="process-list">
          {steps.map(s => (
            <div className="step" key={s.n}>
              <div className="step-num">{s.n}</div>
              <h4>{s.t}</h4>
              <div className="step-desc">{s.d}</div>
              <div className="step-when">{s.when}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Process });
