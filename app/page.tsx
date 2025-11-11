import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <Features />
      <HowItWorks />
    </main>
  );
}
