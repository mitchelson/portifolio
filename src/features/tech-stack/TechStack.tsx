import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';

const STACK = {
  core: ['React Native', 'TypeScript', 'Next.js', 'Swift', 'Node.js'],
  management: ['Zustand', 'TanStack Query', 'Firebase', 'Redux'],
  ecosystem: ['Socket.IO', 'Stripe', 'Apple Pay', 'Google Pay', 'GitHub Actions', 'OneSignal'],
  ai: ['GitHub Copilot', 'Kiro', 'Antigravity', 'Gemini API', 'OpenAI SDK']
};

export default function TechStack() {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="stack" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
              {t('tech.title')}
            </h2>
            <div className="h-px w-24 bg-white/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-xs uppercase tracking-widest text-white/40 font-medium">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {STACK.core.map((tech) => (
                  <motion.div key={tech} variants={item}>
                    <Badge variant="outline" className="px-4 py-2 rounded-full border-white/10 bg-white/5 text-white/80 hover:bg-white hover:text-black transition-all cursor-default">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-xs uppercase tracking-widest text-white/40 font-medium">{t('tech.management')}</h3>
              <div className="flex flex-wrap gap-3">
                {STACK.management.map((tech) => (
                  <motion.div key={tech} variants={item}>
                    <Badge variant="outline" className="px-4 py-2 rounded-full border-white/10 bg-white/5 text-white/80 hover:bg-white hover:text-black transition-all cursor-default">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-xs uppercase tracking-widest text-white/40 font-medium">{t('tech.ecosystem')}</h3>
              <div className="flex flex-wrap gap-3">
                {STACK.ecosystem.map((tech) => (
                  <motion.div key={tech} variants={item}>
                    <Badge variant="outline" className="px-4 py-2 rounded-full border-white/10 bg-white/5 text-white/80 hover:bg-white hover:text-black transition-all cursor-default">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-xs uppercase tracking-widest text-white/40 font-medium">{t('tech.ai')}</h3>
              <div className="flex flex-wrap gap-3">
                {STACK.ai.map((tech) => (
                  <motion.div key={tech} variants={item}>
                    <Badge variant="outline" className="px-4 py-2 rounded-full border-white/10 bg-white/5 text-white/80 hover:bg-white hover:text-black transition-all cursor-default">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
