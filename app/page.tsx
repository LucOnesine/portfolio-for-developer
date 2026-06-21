import { Sidebar } from '@/components/sidebar';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';

export default function Page() {
  return (
    <>
      <Sidebar />
      <main className="relative">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
