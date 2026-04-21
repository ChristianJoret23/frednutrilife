function CTA({ onBook }) {
  return (
    <section className="cta-block">
      <svg className="cta-ornaments" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
        <circle cx="100" cy="100" r="80" fill="none" stroke="#c9b896" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="140" fill="none" stroke="#c9b896" strokeWidth="0.5" />
        <circle cx="1100" cy="500" r="120" fill="none" stroke="#0f1a14" strokeWidth="0.8" opacity="0.15" />
        <circle cx="1100" cy="500" r="180" fill="none" stroke="#0f1a14" strokeWidth="0.5" opacity="0.1" />
      </svg>
      <div className="container">
        <div className="cta-inner">
          <span className="eyebrow">Le premier pas</span>
          <h2>
            Commencez par un <em>appel</em>.<br/>On verra le reste ensemble.
          </h2>
          <p>
            30 minutes, en visio ou au téléphone. C'est gratuit, sans engagement,
            et c'est souvent la conversation qui change tout.
          </p>
          <button className="btn btn-ink" onClick={onBook} style={{ padding: "18px 32px", fontSize: "14px" }}>
            Réserver mon appel découverte <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CTA });
