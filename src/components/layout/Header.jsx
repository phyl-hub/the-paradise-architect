import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Palmtree } from 'lucide-react';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import useLanguage from '../../hooks/useLanguage';

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { getLocalizedPath } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  // 4 nav items — ordered by buyer priority
  const navSections = [
    { id: 'how-we-work', label: t('nav.howWeWork') },
    { id: 'due-diligence', label: t('nav.dueDiligence') },
    { id: 'foreign-buyers', label: t('nav.foreignBuyers') },
    { id: 'team', label: t('nav.team') },
  ];

  const goToContact = () => {
    const lang = i18n.language || 'en';
    setMobileOpen(false);
    navigate(`/${lang}/contact`);
  };

  const scrollToSection = (sectionId) => {
    setMobileOpen(false);
    const homePath = getLocalizedPath('');
    if (location.pathname !== homePath && location.pathname !== homePath + '/') {
      navigate(homePath);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Track active section + scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const ids = navSections.map(s => s.id);
      const scrollPos = window.scrollY + 120;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(ids[i]);
          return;
        }
      }
      setActiveSection('hero');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
        : 'bg-white border-b border-slate-100'
    }`}>
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Logo — palm mark + brand name, matching favicon */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 group shrink-0"
          aria-label={t('nav.home') || 'Go to homepage'}
        >
          <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center group-hover:bg-paradise-600 transition-colors">
            <Palmtree className="w-[18px] h-[18px] text-paradise-400" aria-hidden="true" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="font-serif text-[15px] font-semibold text-slate-900 tracking-tight">The Paradise</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-paradise-600">Architect</span>
          </div>
        </button>

        {/* Desktop Nav — 4 items, centered */}
        <div className="hidden md:flex items-center gap-8">
          {navSections.map(section => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-[13px] font-medium transition-colors relative ${
                activeSection === section.id
                  ? 'text-slate-900'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-paradise-500"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right side: language + CTA */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher variant="minimal" />

          <button
            onClick={goToContact}
            className="hidden sm:inline-flex items-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-[13px] font-semibold rounded-lg transition-colors"
          >
            {t('contact.cta')}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 text-slate-500 hover:text-slate-900"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 bg-white"
          >
            <div className="px-5 py-4 space-y-1">
              {navSections.map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left py-2.5 text-sm font-medium transition-colors ${
                    activeSection === section.id ? 'text-slate-900' : 'text-slate-400'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <button
                onClick={goToContact}
                className="block w-full mt-3 px-4 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg text-center"
              >
                {t('contact.cta')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
