import { trustPoints } from "../data/content";

export default function TrustPoints() {
  return (
    <section className="trust" id="confiance">
      <div className="container">
        <h2>Pourquoi choisir LCS Auto</h2>
        <div className="trust__grid">
          {trustPoints.map((point) => (
            <div className="trust-card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
