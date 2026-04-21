function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand display">
              Fred<em>Nutri</em>Life
            </div>
            <p style={{ color: "var(--muted)", maxWidth: 320, fontSize: 14, lineHeight: 1.6 }}>
              Accompagnement en nutrition, micronutrition et longévité pour les 35 ans et plus.
              Frédéric Martin · Coach certifié IFSNM.
            </p>
          </div>
          <div className="footer-col">
            <h5>Explorer</h5>
            <ul>
              <li><a href="#approche">Approche</a></li>
              <li><a href="#piliers">Les 3 piliers</a></li>
              <li><a href="#accompagnement">Accompagnement</a></li>
              <li><a href="#processus">Processus</a></li>
              <li><a href="#temoignages">Témoignages</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Ressources</h5>
            <ul>
              <li><a href="#blog">Journal</a></li>
              <li><a href="admin.html">Espace rédaction</a></li>
              <li><a href="#">Podcast Hypersanté</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:contact@frednutrilife.fr">contact@frednutrilife.fr</a></li>
              <li><a href="#">Instagram @frednutrilife</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 FredNutriLife · Frédéric Martin</div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#" style={{ color: "var(--muted)", textDecoration: "none" }}>Mentions légales</a>
            <a href="#" style={{ color: "var(--muted)", textDecoration: "none" }}>Confidentialité</a>
            <a href="#" style={{ color: "var(--muted)", textDecoration: "none" }}>CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
