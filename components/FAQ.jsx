const { useState: useStateFAQ } = React;

function FAQ() {
  const [open, setOpen] = useStateFAQ(0);
  const items = [
    {
      q: "À qui s'adresse cet accompagnement ?",
      a: "Aux adultes de 35 ans et plus qui veulent retrouver énergie, équilibre et vitalité. Que vous cherchiez à mieux manger, mieux dormir, bouger plus ou vieillir en forme, la méthode s'adapte à votre réalité.",
    },
    {
      q: "Est-ce que c'est un régime ?",
      a: "Non. Il n'y a pas de régime, pas d'interdits, pas de calories à compter. La méthode repose sur la micronutrition, le bon sens et la personnalisation : vous apprenez à manger juste pour vous, pas à suivre un plan générique.",
    },
    {
      q: "Comment se déroulent les séances ?",
      a: "En visio (Zoom) ou au téléphone, selon votre préférence. Chaque séance dure 60 à 90 minutes. Entre les rendez-vous, vous recevez un support WhatsApp pour poser vos questions et ajuster en temps réel.",
    },
    {
      q: "En combien de temps verrai-je des résultats ?",
      a: "Les premiers changements d'énergie et de sommeil arrivent souvent en 3 à 6 semaines. Les transformations durables — poids, composition corporelle, marqueurs biologiques — se stabilisent sur 3 à 6 mois.",
    },
    {
      q: "Quelle est votre certification ?",
      a: "Je suis coach certifié par l'IFSNM (Institut Français de Science Nutrition & Micronutrition). La micronutrition étudie l'impact des nutriments — vitamines, minéraux, acides gras — sur la santé cellulaire.",
    },
    {
      q: "Comment se passe l'appel découverte ?",
      a: "30 minutes offertes, sans engagement. Nous échangeons sur votre situation, vos objectifs, et je vous dis honnêtement si je peux vous aider. Si nous sommes alignés, nous démarrons. Sinon, vous repartez avec quelques pistes utiles.",
    },
  ];
  return (
    <section className="faq section-pad" id="faq">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Questions fréquentes</span>
            <h2 className="display" style={{ marginTop: 16 }}>
              Les réponses<br/><em style={{ fontStyle: "italic", color: "var(--tan)" }}>avant l'appel.</em>
            </h2>
          </div>
          <p>
            Si une question reste sans réponse, réservons l'appel découverte —
            c'est exactement fait pour ça.
          </p>
        </div>
        <div className="faq-list">
          {items.map((it, i) => (
            <div
              key={i}
              className={"faq-item" + (open === i ? " open" : "")}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <div className="faq-q">
                <span className="display">{it.q}</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-a">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FAQ });
