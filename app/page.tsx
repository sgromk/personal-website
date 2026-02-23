import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import RecentActivities from './components/RecentActivities';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--portfolio-bg-main)' }}>
      <Header />
      <main className="pt-14">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <RecentActivities />
      </main>
      <Footer />
    </div>
  );
}
