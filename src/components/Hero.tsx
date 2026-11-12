import { company } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">Convoyage auto · France entière</span>
          <h1>{company.tagline}</h1>
          <p className="hero__subtitle">{company.subtitle}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#devis">
              Obtenir un devis gratuit
            </a>
            <a className="btn btn--ghost" href={`tel:${company.phone.replace(/\s/g, "")}`}>
              Appeler {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
