export const company = {
  name: "LCS Auto",
  tagline: "Convoyage automobile partout en France",
  subtitle:
    "Transport et livraison de véhicules pour particuliers, concessions et loueurs. Rapide, assuré, suivi de bout en bout.",
  // TODO: remplacer par les vraies coordonnées
  phone: "06 00 00 00 00",
  email: "contact@lcs-auto.fr",
  address: "Intervention sur toute la France",
  siret: "", // TODO: compléter si affiché publiquement
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "particuliers",
    title: "Convoyage particuliers",
    description:
      "Achat à distance, mutation, déménagement : on récupère votre véhicule et on vous le livre où vous voulez.",
    icon: "🚗",
  },
  {
    id: "professionnels",
    title: "Convoyage professionnel",
    description:
      "Concessions, garages, loueurs : livraisons régulières de véhicules neufs ou d'occasion entre sites.",
    icon: "🏢",
  },
  {
    id: "leasing",
    title: "Restitution leasing / LLD",
    description:
      "Récupération et restitution de véhicules en fin de contrat, avec état des lieux et photos à l'appui.",
    icon: "📋",
  },
  {
    id: "plateau",
    title: "Transport sur plateau",
    description:
      "Pour les véhicules non roulants, accidentés ou de collection : transport sécurisé sur plateau.",
    icon: "🚛",
  },
  {
    id: "multi",
    title: "Transport multi-véhicules",
    description:
      "Besoin de déplacer plusieurs véhicules en une fois ? On organise la logistique complète.",
    icon: "🔁",
  },
  {
    id: "urgence",
    title: "Convoyage urgent",
    description:
      "Délai serré ? On s'organise pour une prise en charge rapide, sous réserve de disponibilité.",
    icon: "⚡",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Vous demandez un devis",
    description:
      "Villes de départ et d'arrivée, type de véhicule, date souhaitée : renseignez le formulaire en 1 minute.",
  },
  {
    number: "02",
    title: "On confirme le trajet",
    description:
      "Vous recevez un tarif et un créneau de prise en charge adaptés à votre besoin.",
  },
  {
    number: "03",
    title: "Prise en charge du véhicule",
    description:
      "Un état des lieux (photos, kilométrage, carburant) est réalisé avant le départ.",
  },
  {
    number: "04",
    title: "Livraison à l'adresse convenue",
    description:
      "Le véhicule est livré à l'heure, avec un second état des lieux à la remise des clés.",
  },
];

export const trustPoints = [
  {
    title: "Véhicules assurés",
    description: "Chaque trajet est couvert pendant toute la durée du convoyage.",
  },
  {
    title: "Suivi personnalisé",
    description: "Un contact direct avec le convoyeur, du départ à la livraison.",
  },
  {
    title: "État des lieux photo",
    description: "Rapport photo à la prise en charge et à la livraison, pour votre sécurité.",
  },
  {
    title: "Devis clair, sans surprise",
    description: "Un tarif annoncé avant le départ, sans frais caché.",
  },
];

export const vehicleTypes = [
  "Citadine / berline",
  "SUV / 4x4",
  "Utilitaire",
  "Véhicule de collection",
  "Véhicule non roulant",
  "Autre",
];
