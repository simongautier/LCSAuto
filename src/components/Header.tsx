import { company } from "../data/content";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#comment-ca-marche", label: "Comment ça marche" },
  { href: "#confiance", label: "Pourquoi nous" },
  { href: "#devis", label: "Devis" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__logo">
          {company.name}
        </a>
        <nav className="header__nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--primary header__cta" href="#devis">
          Demander un devis
        </a>
      </div>
    </header>
  );
}
