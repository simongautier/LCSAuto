import { services } from "../data/content";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Nos services de convoyage</h2>
        <p className="section__intro">
          Du véhicule unique à la flotte complète, on s'adapte à votre besoin.
        </p>
        <div className="services__grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <span className="service-card__icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
