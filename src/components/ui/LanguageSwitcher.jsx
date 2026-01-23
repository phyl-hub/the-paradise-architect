import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import useLanguage from '../../hooks/useLanguage';

// Flag components using CSS for better cross-browser support
const FlagUS = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900" className="w-5 h-4 rounded-sm shadow-sm">
    <rect width="7410" height="3900" fill="#b22234"/>
    <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" strokeWidth="300"/>
    <rect width="2964" height="2100" fill="#3c3b6e"/>
    <g fill="#fff">
      {[...Array(9)].map((_, row) => 
        [...Array(row % 2 === 0 ? 6 : 5)].map((_, col) => (
          <circle key={`${row}-${col}`} cx={247 + (row % 2 === 0 ? 0 : 247) + col * 494} cy={210 + row * 210} r="80"/>
        ))
      )}
    </g>
  </svg>
);

const FlagMX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-5 h-4 rounded-sm shadow-sm">
    <rect width="900" height="600" fill="#fff"/>
    <rect width="300" height="600" fill="#006847"/>
    <rect x="600" width="300" height="600" fill="#ce1126"/>
    <circle cx="450" cy="300" r="100" fill="#8B4513" />
  </svg>
);

const FlagDE = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="w-5 h-4 rounded-sm shadow-sm">
    <rect width="5" height="3" y="0" fill="#000"/>
    <rect width="5" height="2" y="1" fill="#D00"/>
    <rect width="5" height="1" y="2" fill="#FFCE00"/>
  </svg>
);

const languages = [
  { code: 'en', label: 'English', Flag: FlagUS, region: 'United States / International' },
  { code: 'es', label: 'Español', Flag: FlagMX, region: 'México' },
  { code: 'de', label: 'Deutsch', Flag: FlagDE, region: 'Deutschland' },
];

export default function LanguageSwitcher({ variant = 'default' }) {
  const { currentLang, switchLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  const variantStyles = {
    default: 'bg-white border-slate-200 text-slate-700 hover:border-cyan-300',
    dark: 'bg-slate-900 border-slate-700 text-white hover:border-slate-600',
    minimal: 'bg-transparent border-transparent text-slate-600 hover:text-slate-900',
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium
          transition-all duration-200
          ${variantStyles[variant]}
        `}
      >
        <Globe className="w-4 h-4" />
        <currentLanguage.Flag />
        <span className="hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    switchLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`
                    w-full px-4 py-3 text-left flex items-center gap-3
                    transition-colors duration-150
                    ${lang.code === currentLang
                      ? 'bg-cyan-50 text-cyan-700'
                      : 'hover:bg-slate-50 text-slate-700'
                    }
                  `}
                >
                  <lang.Flag />
                  <div>
                    <div className="font-medium text-sm">{lang.label}</div>
                    <div className="text-xs text-slate-400">{lang.region}</div>
                  </div>
                  {lang.code === currentLang && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-cyan-500" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
