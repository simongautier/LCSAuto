import { steps } from "../data/content";

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="comment-ca-marche">
      <div className="container">
        <h2>Comment ça marche</h2>
        <p className="section__intro">Un déroulement simple, en quatre étapes.</p>
        <div className="steps">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <span className="step-card__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
