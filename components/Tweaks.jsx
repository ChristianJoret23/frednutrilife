const { useState: useStateTw, useEffect: useEffectTw } = React;

function Tweaks({ visible, onChange, values }) {
  const palettes = [
    { name: "Forêt", ink: "#0f1a14", cream: "#f2ebdc", tan: "#c9b896", accent: "oklch(0.65 0.12 40)" },
    { name: "Nuit", ink: "#11131a", cream: "#ecebe5", tan: "#b5aa85", accent: "oklch(0.7 0.1 250)" },
    { name: "Terre", ink: "#1f1611", cream: "#efe4d2", tan: "#c8a676", accent: "oklch(0.6 0.13 30)" },
    { name: "Ardoise", ink: "#16181a", cream: "#e8e6df", tan: "#a89a7e", accent: "oklch(0.68 0.09 180)" },
  ];

  return (
    <div className={"tweaks" + (visible ? " visible" : "")}>
      <h4>Tweaks</h4>
      <div className="sub">Personnalisez l'aspect visuel</div>

      <div className="tweak-row">
        <label>Palette</label>
        <div className="swatches">
          {palettes.map((p, i) => (
            <div
              key={i}
              className={"swatch" + (values.palette === i ? " active" : "")}
              style={{
                background: `linear-gradient(135deg, ${p.ink} 0% 50%, ${p.cream} 50% 100%)`,
              }}
              onClick={() => onChange({ palette: i })}
              title={p.name}
            />
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <label>Style typographique</label>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {[
            { k: "editorial", n: "Éditorial" },
            { k: "modern", n: "Moderne" },
            { k: "classic", n: "Classique" },
          ].map(t => (
            <button
              key={t.k}
              className={"chip" + (values.typeStyle === t.k ? " active" : "")}
              style={{
                padding: "6px 12px",
                fontSize: 11,
                color: values.typeStyle === t.k ? "var(--ink)" : "var(--cream)",
                background: values.typeStyle === t.k ? "var(--tan)" : "transparent",
                borderColor: "var(--line-strong)",
              }}
              onClick={() => onChange({ typeStyle: t.k })}
            >{t.n}</button>
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <label>Hero — titre</label>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {[
            { k: "energie", n: "Énergie" },
            { k: "vitalite", n: "Vitalité" },
            { k: "longevite", n: "Longévité" },
          ].map(t => (
            <button
              key={t.k}
              className={"chip" + (values.heroVariant === t.k ? " active" : "")}
              style={{
                padding: "6px 12px",
                fontSize: 11,
                color: values.heroVariant === t.k ? "var(--ink)" : "var(--cream)",
                background: values.heroVariant === t.k ? "var(--tan)" : "transparent",
                borderColor: "var(--line-strong)",
              }}
              onClick={() => onChange({ heroVariant: t.k })}
            >{t.n}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Tweaks });
