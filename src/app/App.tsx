import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Business } from '@/app/components/Business';
import { Products } from '@/app/components/Products';
import { Impact } from '@/app/components/Impact';
import { Sustainability } from '@/app/components/Sustainability';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Business />
        <Products />
        <Impact />
        <Sustainability />
      </main>
      <Footer />
    </div>
  );
}
