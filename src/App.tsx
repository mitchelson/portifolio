/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './features/layout/Navbar';
import Hero from './features/hero/Hero';
import TechStack from './features/tech-stack/TechStack';
import Projects from './features/projects/Projects';
import Experience from './features/experience/Experience';
import Contact from './features/contact/Contact';
import Footer from './features/layout/Footer';
import { useHtmlLang } from './hooks/useHtmlLang';
import { useSEO } from './hooks/useSEO';

export default function App() {
  useHtmlLang();
  useSEO();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
