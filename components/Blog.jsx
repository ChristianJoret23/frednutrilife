const { useState: useStateBlog, useEffect: useEffectBlog } = React;

function Blog() {
  const [articles, setArticles] = useStateBlog(() => BlogStore.published());

  useEffectBlog(() => {
    const refresh = () => setArticles(BlogStore.published());
    window.addEventListener("blog:change", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("blog:change", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  const formatDate = (d) => {
    if (!d) return "";
    const date = new Date(d);
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  };

  const [featured, ...rest] = articles;

  return (
    <section className="blog section-pad" id="blog">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Journal</span>
            <h2 className="display" style={{ marginTop: 16 }}>
              Lire, <em style={{ fontStyle: "italic", color: "var(--tan)" }}>comprendre</em>, agir.
            </h2>
          </div>
          <p>
            Des articles courts et concrets sur la nutrition, la micronutrition et
            le bien-vieillir — sans jargon, sans dogmes.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="blog-empty">
            Aucun article publié pour le moment. Les premiers arrivent bientôt.
          </div>
        ) : (
          <div className="blog-grid">
            {featured && (
              <article className="blog-card blog-featured" onClick={() => openArticle(featured)}>
                <div className="blog-cover" style={featured.cover ? { backgroundImage: `url('${featured.cover}')` } : {}}>
                  {!featured.cover && <span className="photo-tag">[ Image de couverture ]</span>}
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="blog-cat">{featured.category}</span>
                    <span className="blog-dot">·</span>
                    <span>{formatDate(featured.publishedAt)}</span>
                    <span className="blog-dot">·</span>
                    <span>{featured.readTime} min de lecture</span>
                  </div>
                  <h3 className="display blog-title">{featured.title}</h3>
                  <p className="blog-excerpt">{featured.excerpt}</p>
                  <span className="blog-read">Lire l'article <span className="arrow">→</span></span>
                </div>
              </article>
            )}

            <div className="blog-list">
              {rest.map(a => (
                <article className="blog-row" key={a.id} onClick={() => openArticle(a)}>
                  <div className="blog-row-cover" style={a.cover ? { backgroundImage: `url('${a.cover}')` } : {}} />
                  <div className="blog-row-body">
                    <div className="blog-meta">
                      <span className="blog-cat">{a.category}</span>
                      <span className="blog-dot">·</span>
                      <span>{formatDate(a.publishedAt)}</span>
                    </div>
                    <h4 className="display">{a.title}</h4>
                    <p className="blog-excerpt">{a.excerpt}</p>
                  </div>
                  <div className="blog-row-arrow">→</div>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="blog-foot">
          <a href="admin.html" className="btn btn-outline">
            Accès rédaction <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <BlogReader />
    </section>
  );
}

function openArticle(article) {
  window.dispatchEvent(new CustomEvent("blog:open", { detail: article }));
}

function BlogReader() {
  const [article, setArticle] = useStateBlog(null);
  useEffectBlog(() => {
    const onOpen = (e) => { setArticle(e.detail); document.body.style.overflow = "hidden"; };
    const onClose = () => { setArticle(null); document.body.style.overflow = ""; };
    window.addEventListener("blog:open", onOpen);
    window.addEventListener("blog:close", onClose);
    return () => {
      window.removeEventListener("blog:open", onOpen);
      window.removeEventListener("blog:close", onClose);
    };
  }, []);

  if (!article) return null;
  const close = () => { setArticle(null); document.body.style.overflow = ""; };
  const formatDate = (d) => d ? new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) : "";

  return (
    <div className="reader-backdrop" onClick={close}>
      <article className="reader" onClick={e => e.stopPropagation()}>
        <button className="reader-close" onClick={close} aria-label="Fermer">✕</button>
        {article.cover && (
          <div className="reader-cover" style={{ backgroundImage: `url('${article.cover}')` }} />
        )}
        <div className="reader-body">
          <div className="blog-meta" style={{ marginBottom: 16 }}>
            <span className="blog-cat">{article.category}</span>
            <span className="blog-dot">·</span>
            <span>{formatDate(article.publishedAt)}</span>
            <span className="blog-dot">·</span>
            <span>{article.readTime} min</span>
          </div>
          <h1 className="display reader-title">{article.title}</h1>
          <p className="reader-lead">{article.excerpt}</p>
          <div className="reader-content">
            {(article.body || "").split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="reader-foot">
            <div className="reader-author">
              <div className="t-ava">F</div>
              <div>
                <div className="t-name" style={{ color: "var(--cream)" }}>{article.author}</div>
                <div className="t-meta" style={{ color: "var(--muted)" }}>Coach nutrition & micronutrition</div>
              </div>
            </div>
            {article.tags && article.tags.length > 0 && (
              <div className="reader-tags">
                {article.tags.map(t => <span key={t} className="reader-tag">#{t}</span>)}
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

Object.assign(window, { Blog });
