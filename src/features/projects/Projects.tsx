import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'taNaPromo',
      title: t('projects.taNaPromo.title'),
      description: t('projects.taNaPromo.description'),
      tags: ['React Native', 'Stripe', 'OneSignal'],
      image: 'https://picsum.photos/seed/promo/800/600',
      link: t('projects.taNaPromo.link')
    },
    {
      id: 'tradePlus',
      title: t('projects.tradePlus.title'),
      description: t('projects.tradePlus.description'),
      tags: ['SaaS', 'Mobile', 'Real-time'],
      image: 'https://picsum.photos/seed/trade/800/600',
      link: t('projects.tradePlus.link')
    },
    {
      id: 'airChat',
      title: t('projects.airChat.title'),
      description: t('projects.airChat.description'),
      tags: ['P2P', 'Mesh', 'Offline'],
      image: 'https://picsum.photos/seed/chat/800/600',
      link: t('projects.airChat.link')
    },
    {
      id: 'konta',
      title: t('projects.konta.title'),
      description: t('projects.konta.description'),
      tags: ['Swift', 'Firebase', 'iOS'],
      image: 'https://picsum.photos/seed/finance/800/600',
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
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight className="w-4 h-4 text-white" />
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
