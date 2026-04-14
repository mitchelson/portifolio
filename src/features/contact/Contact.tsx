import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+55 95 99115-1464',
      href: 'https://wa.me/5595991151464',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'mitchelsonps@gmail.com',
      href: 'mailto:mitchelsonps@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/miitch',
      href: 'https://linkedin.com/in/miitch',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/mitchelson',
      href: 'https://github.com/mitchelson',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'circOut' }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light tracking-tight text-white"
            >
              {t('contact.title')}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'circOut' }}
              viewport={{ once: true }}
              className="h-px w-24 bg-white/20 origin-left"
            />
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'circOut' }}
              viewport={{ once: true }}
              className="max-w-md text-white/60 font-light leading-relaxed"
            >
              {t('contact.subtitle')}
            </motion.p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'circOut' }}
                viewport={{ once: true }}
                className="group relative flex flex-col gap-4 p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    <method.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest text-white/40 font-medium">
                    {method.label}
                  </span>
                  <span className="text-sm text-white/80 font-light group-hover:text-white transition-colors">
                    {method.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Relocate Badge */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'circOut' }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
              <span className="text-sm font-light text-white/80">
                {t('contact.openToRelocate')}
              </span>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'circOut' }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-12 border-t border-white/5"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xl font-light text-white">
                {t('contact.cta.title')}
              </span>
              <span className="text-sm text-white/40 font-light">
                {t('contact.cta.description')}
              </span>
            </div>
            <a
              href="mailto:mitchelsonps@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors group"
            >
              {t('contact.cta.button')}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
