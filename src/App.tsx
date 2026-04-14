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

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
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
