const { useState, useEffect } = React;

function Nav({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = ["accueil", "approche", "piliers", "accompagnement", "processus", "temoignages", "blog", "faq"];
      let current = "accueil";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 140) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "approche", label: "Approche" },
    { id: "piliers", label: "Piliers" },
    { id: "accompagnement", label: "Accompagnement" },
    { id: "processus", label: "Processus" },
    { id: "temoignages", label: "Témoignages" },
    { id: "blog", label: "Journal" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="container nav-inner">
        <a href="#accueil" className="brand">
          <img src="assets/logo.jpg" alt="FredNutriLife" className="brand-logo" />
        </a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.id}>
              <a href={"#" + l.id} className={active === l.id ? "active" : ""}>{l.label}</a>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary" onClick={onBook}>
          Réserver un appel <span className="arrow">→</span>
        </button>
      </div>
    </nav>
  );
}

Object.assign(window, { Nav });
