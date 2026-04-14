import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tag, BarChart2, MessageSquare, Wallet, ArrowUpRight, LucideIcon } from 'lucide-react';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'taNaPromo',
      title: t('projects.taNaPromo.title'),
      description: t('projects.taNaPromo.description'),
      tags: ['React Native', 'AI', 'OneSignal'],
      icon: Tag,
      initials: 'TnP',
      link: t('projects.taNaPromo.link')
    },
    {
      id: 'tradePlus',
      title: t('projects.tradePlus.title'),
      description: t('projects.tradePlus.description'),
      tags: ['SaaS', 'Mobile', 'Real-time'],
      icon: BarChart2,
      initials: 'T+',
      link: t('projects.tradePlus.link')
    },
    {
      id: 'airChat',
      title: t('projects.airChat.title'),
      description: t('projects.airChat.description'),
      tags: ['P2P', 'Mesh', 'Offline', 'Swift'],
      icon: MessageSquare,
      initials: 'AC',
      link: t('projects.airChat.link')
    },
    {
      id: 'konta',
      title: t('projects.konta.title'),
      description: t('projects.konta.description'),
      tags: ['Swift', 'Firebase', 'iOS', 'Finance'],
      icon: Wallet,
      initials: 'K',
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "circOut" }}
                viewport={{ once: true }}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="group overflow-hidden border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-500 cursor-pointer">
                    <div className="relative flex items-center justify-center aspect-video bg-white/[0.03] border-b border-white/5 overflow-hidden">
                      {/* Background subtle pattern */}
                      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                      <div className="relative flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                          <project.icon className="w-8 h-8 text-white/40 group-hover:text-white/70 transition-colors duration-300" />
                        </div>
                        <span className="text-xs uppercase tracking-[0.25em] text-white/20 font-medium group-hover:text-white/40 transition-colors duration-300">
                          {project.initials}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowUpRight className="w-3.5 h-3.5 text-white/60" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-8 flex flex-col gap-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-light tracking-tight text-white">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-white/60 font-light leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="bg-white/5 text-white/40 text-[10px] uppercase tracking-widest font-medium border-none">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
