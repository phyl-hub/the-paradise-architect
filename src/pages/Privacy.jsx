import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO, { pageSEOConfig } from '../components/SEO';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export default function Privacy() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const seoConfig = pageSEOConfig.privacy[lang] || pageSEOConfig.privacy.en;

  return (
    <>
      <SEO title={seoConfig.title} description={seoConfig.description} />
      <div className="min-h-screen">
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                {t('privacy.title')}
              </h1>
              <p className="mt-4 text-sm text-slate-500">{t('privacy.lastUpdated')}</p>

              <div className="prose prose-slate mt-8 max-w-none">
                <p className="text-slate-600 leading-relaxed">
                  {t('privacy.intro')}
                </p>

                <h2 className="mt-8 text-xl font-bold text-slate-900">{t('privacy.controller.title')}</h2>
                <p className="text-slate-600 mt-2">{t('privacy.controller.description')}</p>
                <address className="mt-2 text-slate-600 not-italic">
                  The Paradise Architect<br />
                  Marisol Rosales Trujillo<br />
                  Playa del Carmen, Quintana Roo<br />
                  México
                </address>

                <h2 className="mt-8 text-xl font-bold text-slate-900">{t('privacy.dataCollected.title')}</h2>
                <p className="text-slate-600">{t('privacy.dataCollected.intro')}</p>
                <ul className="mt-2 space-y-1 text-slate-600">
                  <li>• {t('privacy.dataCollected.items.contact')}</li>
                  <li>• {t('privacy.dataCollected.items.email')}</li>
                  <li>• {t('privacy.dataCollected.items.technical')}</li>
                  <li>• {t('privacy.dataCollected.items.property')}</li>
                  <li>• {t('privacy.dataCollected.items.usage')}</li>
                </ul>

                <h2 className="mt-8 text-xl font-bold text-slate-900">{t('privacy.purpose.title')}</h2>
                <p className="text-slate-600">{t('privacy.purpose.intro')}</p>
                <ul className="mt-2 space-y-1 text-slate-600">
                  <li>• {t('privacy.purpose.items.inquiries')}</li>
                  <li>• {t('privacy.purpose.items.services')}</li>
                  <li>• {t('privacy.purpose.items.website')}</li>
                  <li>• {t('privacy.purpose.items.legal')}</li>
                  <li>• {t('privacy.purpose.items.communication')}</li>
                </ul>

                <h2 className="mt-8 text-xl font-bold text-slate-900">{t('privacy.rights.title')}</h2>
                <p className="text-slate-600">{t('privacy.rights.description')}</p>

                <h2 className="mt-8 text-xl font-bold text-slate-900">{t('privacy.security.title')}</h2>
                <p className="text-slate-600">{t('privacy.security.description')}</p>

                <h2 className="mt-8 text-xl font-bold text-slate-900">{t('privacy.contact.title')}</h2>
                <p className="text-slate-600">
                  {t('privacy.contact.description')}{' '}
                  <a href="mailto:info@theparadisearchitect.com" className="text-cyan-600 hover:text-cyan-700">
                    info@theparadisearchitect.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
