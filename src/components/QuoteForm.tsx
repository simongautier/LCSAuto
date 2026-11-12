import { useState, type FormEvent } from "react";
import { company, vehicleTypes } from "../data/content";

type FormState = {
  name: string;
  phone: string;
  email: string;
  from: string;
  to: string;
  vehicleType: string;
  date: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  from: "",
  to: "",
  vehicleType: vehicleTypes[0],
  date: "",
  message: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name || !form.phone || !form.from || !form.to) {
      setError("Merci de renseigner au moins votre nom, téléphone, et les villes de départ/arrivée.");
      return;
    }
    setError(null);

    const subject = `Demande de devis convoyage - ${form.from} → ${form.to}`;
    const bodyLines = [
      `Nom : ${form.name}`,
      `Téléphone : ${form.phone}`,
      form.email && `Email : ${form.email}`,
      `Départ : ${form.from}`,
      `Arrivée : ${form.to}`,
      `Type de véhicule : ${form.vehicleType}`,
      form.date && `Date souhaitée : ${form.date}`,
      form.message && `Message : ${form.message}`,
    ].filter(Boolean);

    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <section className="quote" id="devis">
      <div className="container quote__inner">
        <div className="quote__intro">
          <h2>Demander un devis</h2>
          <p>
            Remplissez ce formulaire, votre messagerie s'ouvrira avec les informations
            pré-remplies à nous envoyer. Réponse sous 24h.
          </p>
        </div>

        <form className="quote__form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label>
              Nom *
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
              />
            </label>
            <label>
              Téléphone *
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Email
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </label>
            <label>
              Date souhaitée
              <input
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Ville de départ *
              <input
                type="text"
                value={form.from}
                onChange={(e) => update("from", e.target.value)}
                required
              />
            </label>
            <label>
              Ville d'arrivée *
              <input
                type="text"
                value={form.to}
                onChange={(e) => update("to", e.target.value)}
                required
              />
            </label>
          </div>

          <label>
            Type de véhicule
            <select
              value={form.vehicleType}
              onChange={(e) => update("vehicleType", e.target.value)}
            >
              {vehicleTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label>
            Message (facultatif)
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Précisions sur le véhicule, le créneau, etc."
            />
          </label>

          {error && <p className="form-error">{error}</p>}
          {sent && (
            <p className="form-success">
              Votre messagerie va s'ouvrir avec la demande pré-remplie : il ne reste plus qu'à
              l'envoyer. Vous pouvez aussi nous appeler directement au {company.phone}.
            </p>
          )}

          <button type="submit" className="btn btn--primary">
            Envoyer ma demande
          </button>
        </form>
      </div>
    </section>
  );
}
