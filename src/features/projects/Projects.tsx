import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Tag, BarChart2, MessageSquare, Wallet, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'taNaPromo',
      title: t('projects.taNaPromo.title'),
      description: t('projects.taNaPromo.description'),
      tags: ['React Native', 'AI', 'OneSignal'],
      icon: Tag,
      link: t('projects.taNaPromo.link')
    },
    {
      id: 'tradePlus',
      title: t('projects.tradePlus.title'),
      description: t('projects.tradePlus.description'),
      tags: ['SaaS', 'Mobile', 'Real-time'],
      icon: BarChart2,
      link: t('projects.tradePlus.link')
    },
    {
      id: 'airChat',
      title: t('projects.airChat.title'),
      description: t('projects.airChat.description'),
      tags: ['P2P', 'Mesh', 'Offline', 'Swift'],
      icon: MessageSquare,
      link: t('projects.airChat.link')
    },
    {
      id: 'konta',
      title: t('projects.konta.title'),
      description: t('projects.konta.description'),
      tags: ['Swift', 'Firebase', 'iOS', 'Finance'],
      icon: Wallet,
      link: t('projects.konta.link')
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
              {t('projects.title')}
            </h2>
            <div className="h-px w-24 bg-white/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "circOut" }}
                viewport={{ once: true }}
                className="group flex items-start gap-5 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-white/10 transition-all duration-300"
              >
                {/* Icon */}
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <project.icon className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-light text-white truncate">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="shrink-0 w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>

                  <p className="text-sm text-white/50 font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-white/5 text-white/40 text-[9px] uppercase tracking-widest font-medium border-none px-2 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
