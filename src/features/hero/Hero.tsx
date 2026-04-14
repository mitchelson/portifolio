import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium">
              Senior Mobile Architect
            </span>
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9] text-white"
          >
            Mitchelson <br />
            <span className="text-white/40">Silva</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "circOut" }}
            className="max-w-md text-lg md:text-xl text-white/60 font-light leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
            className="flex items-center gap-6 mt-4"
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 bg-white text-black hover:bg-white/90 transition-all group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <div className="hidden lg:flex justify-end items-center relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[400px] h-[600px] border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <img 
              src="https://picsum.photos/seed/mobile-architect/800/1200" 
              alt="Architectural Visualization" 
              className="w-full h-full object-cover opacity-50 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <div className="flex flex-col gap-2">
                <div className="h-px w-full bg-white/20" />
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-white/40">
                  <span>7+ Years Exp.</span>
                  <span>Based in Brazil</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white text-black p-6 rounded-2xl shadow-2xl z-30"
          >
            <div className="text-3xl font-bold tracking-tighter">RN</div>
            <div className="text-[10px] uppercase tracking-widest font-semibold opacity-60">Expertise</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
