import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLng = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(nextLng);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center gap-8">
        <span className="text-sm font-bold tracking-tighter uppercase">MS.</span>
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection('experience')} className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">
            {t('nav.experience')}
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">
            {t('nav.projects')}
          </button>
          <button onClick={() => scrollToSection('stack')} className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">
            {t('nav.stack')}
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">
            {t('nav.contact')}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={toggleLanguage}
          className="text-xs uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5"
        >
          <Globe className="w-3 h-3 mr-2" />
          {i18n.language.toUpperCase()}
        </Button>
      </div>
    </motion.nav>
  );
}
