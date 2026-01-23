import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Palmtree } from 'lucide-react';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import useLanguage from '../../hooks/useLanguage';

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { getLocalizedPath, currentLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Section-based navigation for single page (optimized order)
  const navSections = [
    { id: 'hero', label: t('nav.home') },
    { id: 'why-us', label: t('nav.services') },
    { id: 'foreign-buyers', label: t('nav.foreignBuyers') },
    { id: 'team', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ];

  // Scroll to section handler
  const scrollToSection = (sectionId) => {
    setMobileOpen(false);
    
    // If not on home page, navigate there first
    const homePath = getLocalizedPath('');
    if (location.pathname !== homePath && location.pathname !== homePath + '/') {
      navigate(homePath);
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navSections.map(s => s.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60">
      <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('hero')} 
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-paradise-600 transition-colors">
            <Palmtree className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col items-start leading-none gap-0.5">
            <span className="text-xl font-serif font-bold text-slate-900 tracking-tight">The Paradise</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-paradise-600">Architect</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navSections.map(section => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-sm font-bold tracking-wide transition-colors ${
                activeSection === section.id
                  ? 'text-paradise-600'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-cyan-500/25"
          >
            {t('hero.cta.primary')}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="md:hidden border-t border-cyan-100 bg-white"
          >
            <div className="px-6 py-4 space-y-3">
              {navSections.map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left py-2 text-sm font-medium ${
                    activeSection === section.id ? 'text-cyan-600' : 'text-slate-600'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full mt-4 px-5 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white text-sm font-semibold rounded-xl text-center"
              >
                {t('hero.cta.primary')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
