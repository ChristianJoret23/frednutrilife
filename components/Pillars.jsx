function Pillars() {
  const pillars = [
    {
      n: "01",
      title: "Alimentation",
      desc: "Une assiette pensée pour l'énergie, la satiété et la longévité. Pas de règles rigides, des principes clairs adaptés à votre vie.",
      points: ["Protéines, micronutriments, iode", "Équilibre acido-basique", "Rythmes alimentaires personnalisés"],
      icon: (
        <svg viewBox="0 0 72 72" width="72" height="72" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="36" cy="36" r="26" />
          <circle cx="36" cy="36" r="16" />
          <path d="M20 36 h32 M36 20 v32" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      n: "02",
      title: "Mouvement",
      desc: "Le muscle est l'organe de la longévité. Des habitudes de mouvement quotidiennes, réalistes et ciblées selon votre corps.",
      points: ["Force et mobilité", "Activité cardio douce", "Routines courtes quotidiennes"],
      icon: (
        <svg viewBox="0 0 72 72" width="72" height="72" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M14 36 L28 22 L36 30 L44 22 L58 36 L44 50 L36 42 L28 50 Z" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      n: "03",
      title: "Sommeil",
      desc: "Le socle silencieux de tout le reste. Protéger, structurer et réparer votre sommeil pour que le corps puisse travailler pour vous.",
      points: ["Hygiène du coucher", "Chrono-nutrition", "Gestion du stress et récupération"],
      icon: (
        <svg viewBox="0 0 72 72" width="72" height="72" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M46 14 a24 24 0 1 0 12 44 a20 20 0 0 1 -12 -44 Z" strokeLinejoin="round"/>
          <circle cx="22" cy="24" r="1.5" fill="currentColor"/>
          <circle cx="28" cy="16" r="1" fill="currentColor"/>
        </svg>
      ),
    },
  ];
  return (
    <section className="pillars section-pad" id="piliers">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">La méthode</span>
            <h2 className="display" style={{ marginTop: 16 }}>
              Trois piliers.<br/><em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>Une seule vie.</em>
            </h2>
          </div>
          <p>
            Pas d'approche par silos. Ces trois leviers s'accordent ensemble
            pour recréer un équilibre naturel et durable.
          </p>
        </div>
        <div className="pillars-grid">
          {pillars.map(p => (
            <div className="pillar" key={p.n}>
              <div className="pillar-num">PILIER {p.n}</div>
              <div className="pillar-icon" style={{ color: "var(--ink)" }}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul>
                {p.points.map(pt => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pillars });
