import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Approach } from '@/components/approach';
import { Services } from '@/components/services';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Approach />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
