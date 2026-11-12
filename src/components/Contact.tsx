import { company } from "../data/content";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <div>
          <h2>Une question ? Contactez-nous</h2>
          <p>Notre équipe vous répond rapidement, par téléphone ou par email.</p>
        </div>
        <div className="contact__details">
          <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="contact__item">
            📞 {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="contact__item">
            ✉️ {company.email}
          </a>
          <span className="contact__item">📍 {company.address}</span>
        </div>
      </div>
    </section>
  );
}
