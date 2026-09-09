import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'experience', key: 'nav.experience' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'stack', key: 'nav.stack' },
  { id: 'contact', key: 'nav.contact' },
] as const;

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLng = i18n.language.startsWith('pt') ? 'en' : 'pt';
    void i18n.changeLanguage(nextLng);
  };

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    // Defer until the mobile drawer closes so layout height is correct.
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (!element) return;
      const top = element.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  };

  const langLabel = i18n.language.startsWith('pt') ? 'PT' : 'EN';

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'circOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <span className="text-sm font-bold tracking-tighter uppercase">MS.</span>
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                {t(item.key)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="text-xs uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5"
          >
            <Globe className="w-3 h-3 mr-2" />
            {langLabel}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileOpen((open) => !open)}
            className="md:hidden text-white/60 hover:text-white hover:bg-white/5"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors py-2"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
