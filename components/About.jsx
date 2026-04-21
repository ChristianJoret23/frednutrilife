function About() {
  return (
    <section className="about section-pad" id="approche">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Qui je suis</span>
            <h2 className="display" style={{ marginTop: 16 }}>
              Coach en <em style={{ color: "var(--tan)", fontStyle: "italic" }}>nutrition</em>,<br/>pas en régimes.
            </h2>
          </div>
          <p>
            À 48 ans, j'ai découvert qu'une alimentation juste et un rythme de vie aligné
            changent tout. Aujourd'hui, j'accompagne les personnes de 35 ans et plus à
            retrouver énergie, clarté et vitalité.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-img" style={{ backgroundImage: "url('assets/about-food.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          </div>
          <div className="about-body">
            <h3 className="display">Une approche ancrée dans la science. Personnalisée comme votre quotidien.</h3>
            <p>
              Certifié par l'Institut Français de Science Nutrition & Micronutrition, j'utilise
              une méthode qui croise biologie, comportement et réalité de terrain. Pas de régime
              miracle. Pas d'injonctions culpabilisantes.
            </p>
            <p>
              Juste trois leviers puissants — <strong style={{ color: "var(--cream)" }}>alimentation, mouvement, sommeil</strong> — pensés pour durer.
            </p>
            <div className="about-quote">
              « Mon objectif : vous aider à mieux vivre, plus longtemps, grâce à un équilibre
              simple, sans frustration. »
            </div>
            <div className="about-cred">
              <div><div className="k display italic">IFSNM</div><div className="v">Certification nutrition & micronutrition</div></div>
              <div><div className="k display italic">35+</div><div className="v">Spécialiste des plus de 35 ans</div></div>
              <div><div className="k display italic">1:1</div><div className="v">Accompagnement individuel</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About });
