import { company } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {year} {company.name}. Tous droits réservés.
        </span>
        <span>{company.siret ? `SIRET : ${company.siret}` : null}</span>
      </div>
    </footer>
  );
}
