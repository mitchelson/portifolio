import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold tracking-tighter uppercase">Mitchelson Silva</span>
          <span className="text-xs text-white/40 uppercase tracking-widest">Senior Mobile Architect</span>
        </div>

        <div className="flex items-center gap-8">
          <a href="https://linkedin.com/in/miitch" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/mitchelson" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">GitHub</a>
        </div>

        <div className="text-[10px] uppercase tracking-widest text-white/20">
          © {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
