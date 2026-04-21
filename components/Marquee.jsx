function Marquee() {
  const items = [
    "Énergie durable",
    "Sommeil réparateur",
    "Micronutrition",
    "Sans frustration",
    "Longévité active",
    "Équilibre réel",
    "Accompagnement 1:1",
  ];
  const row = (
    <span>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <span className="marquee-item">{it}</span>
          <span className="marquee-dot" aria-hidden="true">●</span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row}{row}{row}
      </div>
    </div>
  );
}

Object.assign(window, { Marquee });
