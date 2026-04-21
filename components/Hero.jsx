function Hero({ onBook }) {
  return (
    <section className="hero" id="accueil">
      <div className="hero-bg-type" aria-hidden="true">vitalité</div>
      <div className="container">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Nutrition · Vitalité · Longévité</span>
            <h1 className="display">
              Retrouvez votre <em>énergie</em>, retrouvez votre <em>vie</em>.
            </h1>
            <p className="hero-lead">
              Accompagnement personnalisé en nutrition et micronutrition pour les 35 ans et plus.
              Un équilibre simple entre alimentation, mouvement et sommeil — sans frustration,
              sans régime, juste des résultats durables.
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={onBook}>
                Réserver un appel découverte <span className="arrow">→</span>
              </button>
              <a href="#approche" className="btn btn-outline">
                Découvrir la méthode
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <div className="num display italic">12<span style={{ color: "var(--tan)" }}>+</span></div>
                <div className="lbl">Années d'expérience</div>
              </div>
              <div>
                <div className="num display italic">240</div>
                <div className="lbl">Personnes accompagnées</div>
              </div>
              <div>
                <div className="num display italic">IFSNM</div>
                <div className="lbl">Certification</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo">
              <span className="photo-tag">[ Portrait — Frédéric Martin, coach ]</span>
            </div>
            <div className="hero-badge">
              <div className="label">Coach certifié</div>
              <div className="cert">Institut Français de Science Nutrition & Micronutrition</div>
            </div>
            <div className="hero-seal">
              <svg viewBox="0 0 128 128">
                <defs>
                  <path id="circle-path" d="M 64, 64 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" />
                </defs>
                <text fontFamily="Manrope" fontSize="9" letterSpacing="2" fill="#0f1a14">
                  <textPath href="#circle-path">
                    ÉQUILIBRE ALIMENTAIRE · MOUVEMENT · SOMMEIL · 
                  </textPath>
                </text>
                <text x="64" y="70" textAnchor="middle" fontFamily="Cormorant Garamond" fontStyle="italic" fontSize="22" fill="#0f1a14">Fred</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
