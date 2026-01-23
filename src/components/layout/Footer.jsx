import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Palmtree, Mail, Phone, MapPin } from 'lucide-react';
import useLanguage from '../../hooks/useLanguage';

export default function Footer() {
  const { t } = useTranslation();
  const { getLocalizedPath, currentLang } = useLanguage();
  const year = new Date().getFullYear();

  const contactLabel = {
    en: 'Contact',
    es: 'Contacto',
    de: 'Kontakt'
  };

  const legalLabel = {
    en: 'Legal',
    es: 'Legal',
    de: 'Rechtliches'
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Palmtree className="w-6 h-6 text-paradise-400" />
              </div>
              <div className="flex flex-col leading-none gap-0.5">
                <span className="text-xl font-serif font-bold text-white tracking-tight">The Paradise</span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-paradise-500">Architect</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-6 max-w-md leading-relaxed">
              We protect your interests in the Mexican real estate market. Architectural due diligence and transparent processes for international buyers.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <MapPin className="w-4 h-4 text-paradise-500" />
              <span>Playa del Carmen, Quintana Roo, Mexico</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">
              {contactLabel[currentLang] || 'Contact'}
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white font-bold text-base mb-1">Marisol</p>
                <p className="text-paradise-400 text-xs uppercase tracking-wider font-bold">Architect & Founder</p>
              </div>
              <a 
                href="mailto:info@theparadisearchitect.com" 
                className="flex items-center gap-2 text-slate-400 hover:text-paradise-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@theparadisearchitect.com
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">
              {legalLabel[currentLang] || 'Legal'}
            </h4>
            <div className="space-y-3 text-sm">
              <Link 
                to={getLocalizedPath('privacy')} 
                className="block text-slate-400 hover:text-paradise-400 transition-colors"
              >
                {t('footer.links.privacy')}
              </Link>
              <Link 
                to={getLocalizedPath('terms')} 
                className="block text-slate-400 hover:text-paradise-400 transition-colors"
              >
                {t('footer.links.terms')}
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm text-center">
            {t('footer.copyright', { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
