import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Header />
      <main className="pt-14">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
