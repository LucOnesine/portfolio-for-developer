import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Approach } from '@/components/approach';
import { Services } from '@/components/services';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Approach />
        <Services />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
