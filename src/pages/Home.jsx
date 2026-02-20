import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Building2,
  Globe,
  MapPin,
  Eye,
  FileCheck,
  Palmtree,
  ArrowRight,
  Star,
  CheckCircle2,
  Mail,
  MessageCircle,
  Video,
  Search,
  KeyRound,
  Landmark,
  Info,
  Zap,
  AlertTriangle,
} from 'lucide-react';
import SEO, { pageSEOConfig } from '../components/SEO';

export default function Home() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const seoLang = i18n.language?.slice(0, 2) || 'en';
  const homeSEO = pageSEOConfig.home[seoLang] || pageSEOConfig.home.en;

  const goToContact = () => navigate(`/${i18n.language || 'en'}/contact`);

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-64px' },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <>
      <SEO title={homeSEO.title} description={homeSEO.description} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================
            SECTION 1: HERO
            Premium positioning + trust signals
        ============================================================ */}
        <section id="hero" className="pt-16 pb-20 lg:pt-24 lg:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeInUp} className="lg:col-span-7">
              <span className="text-paradise-600 font-semibold tracking-[0.15em] text-[11px] uppercase mb-5 block">
                {t('hero.tagline')}
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-slate-900 leading-[1.08] tracking-tight mb-8">
                {t('hero.headline')}
              </h1>

              <p className="text-slate-500 text-lg lg:text-xl leading-[1.7] max-w-2xl border-l-2 border-paradise-400 pl-6">
                {t('hero.subhead')}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={goToContact}
                  className="group inline-flex items-center justify-center px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-[15px] font-semibold shadow-lg transition-all hover:-translate-y-0.5"
                >
                  {t('hero.cta.primary')}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => document.getElementById('how-we-work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white border border-slate-200 hover:border-paradise-300 hover:bg-paradise-50/50 text-slate-800 text-[15px] font-semibold transition-all"
                >
                  {t('hero.cta.secondary')}
                </button>
              </div>


            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="aspect-[3.5/5] rounded-3xl bg-gradient-to-br from-paradise-100 via-teal-50 to-emerald-50 border border-slate-100 overflow-hidden shadow-xl">
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[url('/brand/Philipp-Hoffschroer.jpg')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/15 to-transparent"></div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-lg border border-slate-100 max-w-[260px]">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-400 uppercase tracking-[0.15em] font-semibold mb-0.5">Dual License</p>
                      <p className="text-base font-serif font-medium text-slate-900 leading-tight">Architect <span className="text-slate-300 font-sans text-sm">&</span> Agent</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            SECTION 2: HOW WE WORK (4-step process)
        ============================================================ */}
        <section id="how-we-work" className="py-20 lg:py-28 scroll-mt-24">

          {/* 4-step journey */}
          <div className="max-w-6xl mx-auto mb-24">
            <motion.div {...fadeInUp}>
              <h2 className="font-serif text-3xl lg:text-4xl text-slate-900 text-center mb-4">
                {t('premium.process.title')}
              </h2>
              <p className="text-slate-500 text-center text-lg max-w-2xl mx-auto mb-16">{t('premium.description')}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
                {/* Connector line (desktop only) */}
                <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100"></div>

                {(() => {
                  const stepIcons = [Video, Search, Landmark, KeyRound];
                  const stepColors = [
                    'bg-slate-900',
                    'bg-paradise-600',
                    'bg-blue-600',
                    'bg-emerald-600',
                  ];
                  return (t('premium.process.steps', { returnObjects: true }) || []).map((step, index) => {
                    const Icon = stepIcons[index];
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12 }}
                        className="relative text-center"
                      >
                        <div className={`w-16 h-16 ${stepColors[index]} rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10 shadow-md`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-3 py-1 mb-3">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{step.label}</span>
                        </div>
                        <h4 className="font-serif text-lg lg:text-xl text-slate-900 mb-2">{step.title}</h4>
                        {step.amount && (
                          <p className="font-serif text-2xl text-paradise-600 font-medium mb-2">{step.amount}</p>
                        )}
                        <p className="text-slate-600 leading-relaxed text-sm max-w-xs mx-auto">{step.description}</p>
                        {step.bullets && (
                          <ul className="text-left text-sm text-slate-600 mt-4 space-y-2 max-w-xs mx-auto">
                            {step.bullets.map((b, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-paradise-500 shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    );
                  });
                })()}
              </div>

              {/* Fideicomiso explainer callout */}
              {t('premium.process.fideicomisoNote') && (
                <motion.div
                  {...fadeInUp}
                  className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-paradise-50 to-teal-50 rounded-2xl p-8 lg:p-10 border border-paradise-100"
                >
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 p-3 bg-white rounded-xl shadow-sm">
                      <Info className="w-6 h-6 text-paradise-600" />
                    </div>
                    <p className="text-slate-700 leading-relaxed text-[15px]">
                      {t('premium.process.fideicomisoNote')}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Minimum budget note */}
              <p className="text-center text-sm text-slate-400 mt-10 max-w-lg mx-auto">
                {t('premium.process.note')}
              </p>
            </motion.div>
          </div>

          {/* What's included — subtitle + title + commitment grid */}
          <motion.div {...fadeInUp} className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-5 py-2 mb-6">
              <Star className="w-3 h-3 text-paradise-400" />
              <span className="text-xs font-bold uppercase tracking-[0.25em]">
                {t('premium.subtitle')}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6">
              {t('premium.title')}
            </h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">{t('premium.description')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {(t('premium.commitment.items', { returnObjects: true }) || []).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-paradise-200 transition-all"
              >
                <div className="flex items-start gap-4">
                   <CheckCircle2 className="w-6 h-6 text-paradise-500 shrink-0 mt-1" />
                  <p className="text-slate-800 font-medium leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Promise box */}
          <div className="max-w-3xl mx-auto">
            <motion.div
               {...fadeInUp}
               className="bg-slate-900 rounded-2xl p-8 lg:p-10 text-center shadow-lg"
            >
              <h4 className="font-serif text-2xl text-white mb-4">{t('premium.promise.title')}</h4>
              <p className="text-slate-300 leading-relaxed max-w-xl mx-auto">
                {t('premium.promise.content')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            SECTION 2B: TECHNICAL DUE DILIGENCE — Audit Download
        ============================================================ */}
        {(() => {
          const auditMap = {
            en: { file: '/audit/The_Paradise_Architect_50_Point_Audit.pdf',             btnLabel: 'Download Audit (EN)', audience: 'US & International Investors',  flag: '🇺🇸' },
            de: { file: '/audit/50_Punkte_Sicherheitscheck_Architektur_Riviera_Maya.pdf', btnLabel: 'Checkliste Herunterladen (DE)', audience: 'Deutsche & EU Investoren', flag: '🇩🇪' },
            es: { file: '/audit/Auditoria_Seguridad_Arquitectonica_50_Puntos.pdf',        btnLabel: 'Descargar Auditoría (ES)', audience: 'Inversionistas Locales',      flag: '🇲🇽' },
          };
          const lang = i18n.language?.slice(0, 2) || 'en';
          const audit = auditMap[lang] || auditMap['en'];
          return (
            <section id="due-diligence" className="py-16 lg:py-24 bg-[#0F1928] scroll-mt-24">
              <div className="max-w-4xl mx-auto">
                <motion.div {...fadeInUp} className="text-center mb-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4">{t('audit.badge')}</p>
                  <h2 className="font-serif text-3xl lg:text-5xl text-white mb-5">{t('audit.title')}</h2>
                  <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                    {t('audit.subtitle')}
                  </p>
                </motion.div>

                {/* Icon strip */}
                <div className="flex justify-center gap-10 mb-10">
                  {[
                    { icon: Building2, label: t('audit.icons.structural') },
                    { icon: Zap, label: t('audit.icons.electrical') },
                    { icon: FileCheck, label: t('audit.icons.legal') },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Single language-aware download card */}
                <motion.div
                  {...fadeInUp}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 mb-8 hover:border-cyan-500/40 transition-colors"
                >
                  <span className="text-5xl shrink-0">{audit.flag}</span>
                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-white font-serif text-2xl leading-snug mb-1">{audit.audience}</p>
                    <p className="text-slate-400 text-sm">{t('audit.cardSubtitle')}</p>
                  </div>
                  <a
                    href={audit.file}
                    download
                    className="shrink-0 inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-sm px-6 py-3 rounded-xl transition-colors"
                  >
                    {audit.btnLabel}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>

                {/* Trust warning */}
                <motion.div
                  {...fadeInUp}
                  className="flex items-start gap-4 bg-amber-500/10 border border-amber-500/30 rounded-xl p-6"
                >
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <span className="font-bold text-amber-400">{t('audit.warningLabel')}</span> {t('audit.warningNote')}
                  </p>
                </motion.div>
              </div>
            </section>
          );
        })()}

        {/* ============================================================
            SECTION 3: WHY WORK WITH US
        ============================================================ */}
        <section id="why-us" className="py-20 lg:py-28 scroll-mt-24">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block text-paradise-600 font-semibold tracking-[0.15em] text-[11px] uppercase bg-paradise-50 px-4 py-2 rounded-full mb-5">
              {t('valueProps.subtitle')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 mb-5">
              {t('valueProps.title')}
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto border-t pt-6 border-slate-100">
              {t('valueProps.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {[
              { key: 'technical', icon: Eye, bg: 'bg-slate-50', border: 'border-slate-100', accent: 'text-slate-900' },
              { key: 'permits', icon: FileCheck, bg: 'bg-slate-50', border: 'border-slate-100', accent: 'text-slate-900' },
              { key: 'foreigners', icon: Globe, bg: 'bg-slate-50', border: 'border-slate-100', accent: 'text-slate-900' },
              { key: 'local', icon: MapPin, bg: 'bg-slate-50', border: 'border-slate-100', accent: 'text-slate-900' },
            ].map(({ key, icon: Icon, bg, border, accent }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className={`${bg} rounded-2xl p-8 lg:p-10 border ${border} hover:shadow-lg hover:bg-white hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-105 transition-transform duration-300">
                  <Icon className={`w-6 h-6 ${accent}`} />
                </div>
                <h3 className="font-serif text-xl lg:text-2xl text-slate-900 mb-3 group-hover:text-paradise-600 transition-colors">
                  {t(`valueProps.items.${key}.title`)}
                </h3>
                <p className="text-slate-500 text-[15px] leading-relaxed">
                  {t(`valueProps.items.${key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>


        </section>

        {/* ============================================================
            SECTION 3: FOR FOREIGN BUYERS
        ============================================================ */}
        <section id="foreign-buyers" className="py-20 scroll-mt-24">
          <motion.div
            {...fadeInUp}
            className="rounded-2xl bg-slate-50 border border-slate-100 p-8 lg:p-16 relative overflow-hidden text-center"
          >
            <div className="relative z-10">
              <div className="mb-12">
                <span className="inline-block text-paradise-600 font-semibold tracking-[0.15em] text-[11px] uppercase mb-5">
                  {t('foreignBuyers.subtitle')}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-5">
                  {t('foreignBuyers.title')}
                </h2>
                <div className="w-16 h-0.5 bg-paradise-400 mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
                  {t('foreignBuyers.description')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['fideicomiso', 'taxes', 'process', 'payments'].map((key, index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="bg-white rounded-xl p-7 border border-slate-100 shadow-sm text-left hover:border-paradise-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-5">
                      <div className="shrink-0 p-3 bg-paradise-50 rounded-xl">
                        <CheckCircle2 className="w-6 h-6 text-paradise-600" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-slate-900 mb-2">
                          {t(`foreignBuyers.items.${key}.title`)}
                        </h3>
                        <p className="text-slate-500 text-[15px] leading-relaxed">
                          {t(`foreignBuyers.items.${key}.description`)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============================================================
            SECTION 5: MEET THE TEAM (Founders - MOST IMPORTANT)
        ============================================================ */}
        <section id="team" className="py-20 lg:py-28 scroll-mt-24 bg-white">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block text-slate-400 font-semibold tracking-[0.2em] text-[11px] uppercase mb-5">
              {t('team.subtitle')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6">
              {t('team.title')}
            </h2>
          </motion.div>

          {/* Marisol Card - The Star */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center mb-24">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                 <div className="absolute inset-0 bg-slate-200">
                    {/* Placeholder for Marisol Portrait */}
                    <div className="w-full h-full flex items-center justify-center bg-slate-100">
                       <Building2 className="w-32 h-32 text-slate-300" />
                    </div>
                 </div>
                 <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-4 rounded-xl border border-white/50">
                    <p className="font-serif text-2xl text-slate-900">Marisol</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">The Architect</p>
                 </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-7 order-1 lg:order-2"
            >
              <h3 className="font-serif text-3xl lg:text-4xl text-slate-900 mb-3">{t('team.marisol.name')}</h3>
              <p className="text-lg text-paradise-600 font-medium mb-6 flex items-center gap-3">
                 {t('team.marisol.role')}
                 <span className="h-px w-10 bg-paradise-300"></span>
              </p>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-6">
                {t('team.marisol.description')}
              </p>

            </motion.div>
          </div>

          {/* Philipp Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-7"
            >
              <h3 className="font-serif text-3xl lg:text-4xl text-slate-900 mb-3">{t('team.philipp.name')}</h3>
              <p className="text-lg text-slate-500 font-medium mb-6 flex items-center gap-3">
                 {t('team.philipp.role')}
                 <span className="h-px w-10 bg-slate-300"></span>
              </p>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-6">
                {t('team.philipp.description')}
              </p>

            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-5"
            >
               <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                    <img
                      src="/brand/Philipp-Hoffschroer.jpg"
                      alt="Philipp Hoffschröer"
                      className="w-full h-full object-cover object-top"
                    />
                     <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-6 py-4 rounded-xl border border-white/50 text-right">
                        <p className="font-serif text-2xl text-slate-900">Philipp</p>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">The Connector</p>
                     </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            SECTION 8: CONTACT
        ============================================================ */}
        <section id="contact" className="py-20 pb-32 scroll-mt-24">
          <motion.div
            {...fadeInUp}
            className="text-center bg-slate-900 rounded-2xl p-10 lg:p-20 relative overflow-hidden shadow-xl"
          >
            <div className="relative z-10">
              <Palmtree className="w-12 h-12 text-paradise-400 mx-auto mb-6" />
              <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6 leading-tight">{t('contact.ready')}</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">{t('contact.description')}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/52984XXXXXXX', '_blank', 'noopener,noreferrer')}
                  className="inline-flex items-center justify-center px-7 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-[15px] rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp
                </button>
                 <button
                  onClick={() => window.location.href = 'mailto:info@theparadisearchitect.com'}
                  className="inline-flex items-center justify-center px-7 py-4 bg-transparent border border-slate-600 hover:border-slate-400 text-white font-semibold text-[15px] rounded-xl transition-all hover:-translate-y-0.5"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  {t('contact.email')}
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
