import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import HighlightedText from './HighlightedText';

export default function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      company: 'Invillia',
      role: 'Senior Mobile Engineer',
      period: '09/2025 - Present',
      description: t('experience.invillia'),
      link: 'https://invillia.com'
    },
    {
      company: 'Strat2gyAI',
      role: 'Senior Mobile Architect',
      period: '09/2025 - 09/2025',
      description: t('experience.strat2gy'),
      link: 'https://strat2gy.ai'
    },
    {
      company: 'Mavielo',
      role: 'Senior Frontend Engineer',
      period: '12/2024 - 09/2025',
      description: t('experience.mavielo'),
      link: 'https://mavielo.com.br'
    },
    {
      company: 'Woba',
      role: 'Senior Mobile Engineer',
      period: '04/2022 - 12/2024',
      description: t('experience.woba'),
      link: 'https://woba.com.br'
    },
    {
      company: 'Pigz',
      role: 'Lead Mobile Developer',
      period: '09/2020 - 04/2022',
      description: t('experience.pigz'),
      link: 'https://pigz.com.br'
    },
    {
      company: "Public Defender's Office",
      role: 'Frontend Developer',
      period: '06/2019 - 09/2020',
      description: t('experience.publicDefender'),
      link: '#'
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
              {t('experience.title')}
            </h2>
            <div className="h-px w-24 bg-white/20" />
          </div>

          <div className="flex flex-col md:pl-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "circOut" }}
                viewport={{ once: true }}
                className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 py-12 border-b border-white/5 last:border-none"
              >
                {/* Timeline indicator */}
                <div className="hidden md:flex absolute left-[-40px] top-0 bottom-0 flex-col items-center">
                  {/* Connector line above dot */}
                  {index === 0 ? (
                    <div className="w-px flex-1 bg-transparent" />
                  ) : (
                    <motion.div
                      className="w-px flex-1 bg-white/20"
                      initial={{ scaleY: 0, originY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  )}

                  {/* Dot */}
                  <motion.div
                    className="relative flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2, ease: "backOut" }}
                    viewport={{ once: true }}
                  >
                    {/* Pulse ring for first (current) item */}
                    {index === 0 && (
                      <motion.div
                        className="absolute w-4 h-4 rounded-full border border-white/30"
                        animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                    <div
                      className={`w-2 h-2 rounded-full border transition-colors duration-300 ${
                        index === 0
                          ? 'bg-white border-white'
                          : 'bg-transparent border-white/40 group-hover:border-white/80 group-hover:bg-white/20'
                      }`}
                    />
                  </motion.div>

                  {/* Connector line below dot */}
                  {index < experiences.length - 1 && (
                    <motion.div
                      className="w-px flex-1 bg-white/20"
                      initial={{ scaleY: 0, originY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  )}
                  {index === experiences.length - 1 && (
                    <div className="w-px flex-1 bg-transparent" />
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest text-white/40 font-medium">
                    {exp.period}
                  </span>
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-medium text-white group-hover:text-white/80 transition-colors flex items-center gap-2"
                  >
                    {exp.company}
                  </a>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-lg font-light text-white/80 italic">
                    {exp.role}
                  </h4>
                  <p className="max-w-2xl text-white/60 font-light leading-relaxed">
                    <HighlightedText text={exp.description} />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
