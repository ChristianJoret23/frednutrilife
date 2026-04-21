const { useState: useStateBK, useEffect: useEffectBK } = React;

function Booking({ open, onClose }) {
  const [step, setStep] = useStateBK(0);
  const [data, setData] = useStateBK({
    goal: "",
    day: null,
    slot: null,
    name: "",
    email: "",
    phone: "",
    note: "",
  });
  const [errors, setErrors] = useStateBK({});

  useEffectBK(() => {
    if (!open) {
      setTimeout(() => { setStep(0); setErrors({}); }, 400);
    }
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const goals = [
    "Retrouver de l'énergie",
    "Améliorer mon sommeil",
    "Perdre du poids durablement",
    "Gagner en longévité",
    "Reprendre le sport",
    "Je ne sais pas encore",
  ];

  // Generate next 14 available days (skip weekends)
  const days = [];
  const now = new Date("2026-04-21");
  let cursor = new Date(now);
  while (days.length < 10) {
    const dow = cursor.getDay();
    if (dow !== 0 && dow !== 6) {
      days.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  const dows = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
  const mois = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"];

  const slots = [
    { t: "09:00", disabled: false },
    { t: "10:00", disabled: true },
    { t: "11:00", disabled: false },
    { t: "14:00", disabled: false },
    { t: "15:00", disabled: false },
    { t: "16:00", disabled: true },
    { t: "17:00", disabled: false },
    { t: "18:00", disabled: false },
    { t: "19:00", disabled: false },
  ];

  const next = () => {
    const errs = {};
    if (step === 0 && !data.goal) errs.goal = "Sélectionnez un objectif.";
    if (step === 1 && (!data.day || !data.slot)) errs.slot = "Choisissez un jour et un créneau.";
    if (step === 2) {
      if (!data.name.trim()) errs.name = "Votre prénom est requis.";
      if (!data.email.trim() || !/^\S+@\S+\.\S+$/.test(data.email)) errs.email = "Email invalide.";
    }
    setErrors(errs);
    if (Object.keys(errs).length === 0) setStep(s => s + 1);
  };
  const prev = () => setStep(s => Math.max(0, s - 1));

  const selectedDay = data.day != null ? days[data.day] : null;

  return (
    <div className={"modal-backdrop" + (open ? " open" : "")} onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fermer">✕</button>

        {step < 3 && (
          <>
            <span className="eyebrow" style={{ color: "var(--terracotta)" }}>Appel découverte · 30 min · Offert</span>
            <h3 className="display" style={{ marginTop: 10 }}>Réservons votre appel.</h3>
            <p className="modal-lead">
              Trois étapes, deux minutes. On fera le point ensemble — sans engagement.
            </p>
            <div className="steps-bar">
              <div className={step >= 0 ? (step > 0 ? "done" : "active") : ""} />
              <div className={step >= 1 ? (step > 1 ? "done" : "active") : ""} />
              <div className={step >= 2 ? (step > 2 ? "done" : "active") : ""} />
            </div>
          </>
        )}

        {step === 0 && (
          <div>
            <div className="form-field">
              <label>Qu'est-ce qui vous amène ?</label>
              <div className="chips">
                {goals.map(g => (
                  <button
                    key={g}
                    className={"chip" + (data.goal === g ? " active" : "")}
                    onClick={() => setData(d => ({ ...d, goal: g }))}
                  >{g}</button>
                ))}
              </div>
              {errors.goal && <div className="form-error">{errors.goal}</div>}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <div className="form-field">
              <label>Choisissez un jour</label>
              <div className="day-picker">
                {days.map((d, i) => (
                  <div
                    key={i}
                    className={"day" + (data.day === i ? " active" : "")}
                    onClick={() => setData(x => ({ ...x, day: i, slot: null }))}
                  >
                    <div className="d-dow">{dows[d.getDay()]}</div>
                    <div className="d-num">{d.getDate()}</div>
                    <div className="d-mon">{mois[d.getMonth()]}</div>
                  </div>
                ))}
              </div>
            </div>
            {selectedDay && (
              <div className="form-field">
                <label>Créneaux disponibles · {selectedDay.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}</label>
                <div className="slots">
                  {slots.map((s, i) => (
                    <div
                      key={i}
                      className={"slot" + (data.slot === s.t ? " active" : "") + (s.disabled ? " disabled" : "")}
                      onClick={() => !s.disabled && setData(x => ({ ...x, slot: s.t }))}
                    >{s.t}</div>
                  ))}
                </div>
              </div>
            )}
            {errors.slot && <div className="form-error">{errors.slot}</div>}
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="form-field">
              <label>Prénom</label>
              <input
                type="text"
                value={data.name}
                onChange={e => setData(d => ({ ...d, name: e.target.value }))}
                placeholder="Marianne"
              />
              {errors.name && <div className="form-error">{errors.name}</div>}
            </div>
            <div className="form-field">
              <label>Email</label>
              <input
                type="email"
                value={data.email}
                onChange={e => setData(d => ({ ...d, email: e.target.value }))}
                placeholder="vous@exemple.fr"
              />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>
            <div className="form-field">
              <label>Téléphone (facultatif)</label>
              <input
                type="tel"
                value={data.phone}
                onChange={e => setData(d => ({ ...d, phone: e.target.value }))}
                placeholder="06 12 34 56 78"
              />
            </div>
            <div className="form-field">
              <label>Un mot sur votre situation (facultatif)</label>
              <textarea
                value={data.note}
                onChange={e => setData(d => ({ ...d, note: e.target.value }))}
                placeholder="Parlez-moi brièvement de ce qui vous a amené jusqu'ici…"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="confirm">
            <div className="ok">✓</div>
            <h3 className="display">Appel confirmé.</h3>
            <p className="modal-lead" style={{ marginTop: 8 }}>
              Un email de confirmation avec le lien Zoom vous attend dans votre boîte mail.
            </p>
            <div className="summary">
              <div className="row">
                <span className="k">Pour</span>
                <span>{data.name}</span>
              </div>
              <div className="row">
                <span className="k">Quand</span>
                <span>{selectedDay?.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })} · {data.slot}</span>
              </div>
              <div className="row">
                <span className="k">Objectif</span>
                <span>{data.goal}</span>
              </div>
              <div className="row">
                <span className="k">Durée</span>
                <span>30 minutes · visio</span>
              </div>
            </div>
            <button className="btn btn-ink" onClick={onClose}>Parfait, à très vite</button>
          </div>
        )}

        {step < 3 && (
          <div className="modal-foot">
            {step > 0 ? (
              <button className="btn btn-outline" style={{ color: "var(--ink)", borderColor: "rgba(15,26,20,0.3)" }} onClick={prev}>← Retour</button>
            ) : <span />}
            <button className="btn btn-ink" onClick={next}>
              {step === 2 ? "Confirmer l'appel" : "Continuer"} <span className="arrow">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Booking });
