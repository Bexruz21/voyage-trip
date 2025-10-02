import AboutContent from "@/pages/AboutContent";

// Серверный компонент - для мета-тегов и SEO
export default function About() {
  return <AboutContent />;
}

export const metadata = {
  title: 'О компании VOYAGE TRIP - 15 лет создаем незабываемые путешествия',
  description: 'Команда профессиональных путешественников VOYAGE TRIP. Наша миссия, ценности, история и достижения. 50,000+ довольных клиентов.',
  keywords: 'о компании, история, миссия, команда, достижения, ценности, туроператор, путешествия',
};