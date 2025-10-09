import HomeContent from "@/components/home/HomeContent";

export const metadata = {
  title: "VOYAGE TRIP — Турфирма премиум путешествий по всему миру",
  description:
    "VOYAGE TRIP — туристическое агентство, организующее путешествия, туры и отдых по всему миру: Бали, Турция, Япония, Мальдивы, Греция, Дубай. Индивидуальный подход и премиальный сервис для настоящих путешественников.",
  keywords:
    "voyage trip, турфирма, туристическое агентство, туры, путешествия, отдых, премиум туры, Бали, Дубай, Япония, Греция, Мальдивы, турфирма Узбекистан, туры по миру",
  openGraph: {
    title: "VOYAGE TRIP — Премиальные путешествия и туры по всему миру",
    description:
      "VOYAGE TRIP предлагает эксклюзивные туры и авторские путешествия: пляжи, горы, экзотика и комфорт класса люкс. Путешествуйте со стилем.",
    url: "https://voyagetrip.uz",
    siteName: "VOYAGE TRIP",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://voyagetrip.uz/logo.png",
        width: 800,
        height: 800,
        alt: "VOYAGE TRIP — Премиум путешествия по всему миру",
      },
    ],
  },
  alternates: {
    canonical: "https://voyagetrip.uz",
  },
  metadataBase: new URL("https://voyagetrip.uz"),
};

export default function Home() {
  return <HomeContent />;
}
