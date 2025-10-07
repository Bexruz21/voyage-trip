import AboutContent from "@/components/about/AboutContent";

// Серверный компонент - для мета-тегов и SEO
export default function About() {
  return <AboutContent />;
}

export const metadata = {
  title: 'О компании VOYAGE TRIP — создаём незабываемые путешествия по всему миру',
  description: 'Команда профессиональных путешественников VOYAGE TRIP. Наша миссия, ценности, история и достижения. 500+ довольных клиентов.',
  keywords: 'о компании, история, миссия, команда, достижения, ценности, туроператор, путешествия',
};