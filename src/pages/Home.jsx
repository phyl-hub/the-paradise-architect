import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Building2,
  Globe,
  MapPin,
  Eye,
  FileCheck,
  Users,
  Palmtree,
  ArrowRight,
  Star,
  CheckCircle2,
  BadgeCheck,
  Handshake,
  AlertTriangle,
  Sparkles,
  Clock,
  FileText,
  Mail,
  MessageCircle,
  Calendar,
  Shield,
  Quote
} from 'lucide-react';
import SEO from '../components/SEO';

export default function Home() {
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-64px' },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <>
      <SEO title={t('meta.title')} description={t('meta.description')} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================
            SECTION 1: HERO
            Premium positioning + trust signals
        ============================================================ */}
        <section id="hero" className="pt-12 pb-16 lg:pt-20 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            <motion.div {...fadeInUp} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-8">
                <Shield className="w-4 h-4 text-emerald-700" />
                <span className="text-emerald-900 font-semibold text-xs uppercase tracking-wider">
                  {t('about.credentials.title')}
                </span>
              </div>

              <span className="text-paradise-600 font-bold tracking-[0.25em] text-xs uppercase mb-4 block">
                {t('hero.tagline')}
              </span>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-slate-900 leading-[1.05] tracking-tight mb-8">
                {t('hero.headline')}
              </h1>

              <p className="text-slate-600 text-lg lg:text-xl leading-relaxed max-w-2xl border-l-4 border-paradise-300 pl-6">
                {t('hero.subhead')}
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-5">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center justify-center px-8 py-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-[0_18px_35px_-18px_rgba(2,6,23,0.55)] transition-all hover:-translate-y-1"
                >
                  {t('hero.cta.primary')}
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-8 py-5 rounded-2xl bg-white border border-slate-200 hover:border-paradise-300 hover:bg-paradise-50 text-slate-900 font-bold transition-all shadow-sm hover:shadow-md"
                >
                  {t('hero.cta.secondary')}
                </button>
              </div>

              <div className="mt-14 pt-10 border-t border-slate-200/60 flex flex-wrap gap-x-10 gap-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-paradise-50 rounded-full group-hover:bg-paradise-100 transition-colors">
                    <ShieldCheck className="w-5 h-5 text-paradise-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{t('about.credentials.items.0')}</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-paradise-50 rounded-full group-hover:bg-paradise-100 transition-colors">
                    <FileCheck className="w-5 h-5 text-paradise-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{t('about.credentials.items.1')}</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-paradise-50 rounded-full group-hover:bg-paradise-100 transition-colors">
                    <Globe className="w-5 h-5 text-paradise-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{t('nav.foreignBuyers')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="aspect-[3.5/5] rounded-[2rem] bg-gradient-to-br from-paradise-100 via-teal-50 to-emerald-50 border border-white/50 overflow-hidden shadow-[0_30px_60px_-18px_rgba(2,6,23,0.15)]">
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                    {/* Placeholder for Marisol's photo - this needs to be replaced with the real image */}
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-[0_20px_45px_-16px_rgba(2,6,23,0.2)] border border-white/50 max-w-[280px]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-[0.15em] font-bold mb-1">Dual License</p>
                      <p className="text-lg font-serif font-medium text-slate-900 leading-tight">Architect <span className="text-slate-400 font-sans text-base">&</span> Agent</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            SECTION 2: WHY WORK WITH US
        ============================================================ */}
        <section id="why-us" className="py-24 lg:py-32 scroll-mt-24">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <span className="inline-block text-paradise-600 font-bold tracking-[0.2em] text-xs uppercase bg-paradise-50 px-4 py-2 rounded-full mb-6">
              {t('valueProps.subtitle')}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-slate-900 mb-6">
              {t('valueProps.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto border-t pt-6 border-slate-100">
              Clear structure. Professional standards. No guesswork.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
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
                className={`${bg} rounded-[2rem] p-10 lg:p-12 border ${border} hover:shadow-2xl hover:bg-white hover:-translate-y-2 transition-all duration-500 group`}
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                  <Icon className={`w-7 h-7 ${accent}`} />
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl text-slate-900 mb-4 group-hover:text-paradise-600 transition-colors">
                  {t(`valueProps.items.${key}.title`)}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {t(`valueProps.items.${key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="bg-slate-900 rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-10">
               <ShieldCheck className="w-64 h-64 text-white" />
             </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2">
                <h3 className="font-serif text-3xl lg:text-4xl text-white mb-4 leading-tight">{t('about.credentials.title')}</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md">Independent verification is the only way to ensure your investment in Mexico is safe. We verify before you view.</p>
              </div>
              <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                {[
                  { icon: Building2, label: "Structurally Sound" },
                  { icon: FileCheck, label: "Title Verified" },
                  { icon: Users, label: "Local Network" },
                  { icon: MapPin, label: "Prime Location" },
                ].map(({ icon: Icon, label }, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 text-center"
                  >
                    <Icon className="w-6 h-6 text-paradise-300 mx-auto mb-3" />
                    <p className="text-white text-sm font-medium">{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============================================================
            SECTION 3: FOR FOREIGN BUYERS
        ============================================================ */}
        <section id="foreign-buyers" className="py-24 scroll-mt-24">
          <motion.div
            {...fadeInUp}
            className="rounded-[2.5rem] bg-slate-50 border border-slate-100 p-8 lg:p-20 relative overflow-hidden text-center"
          >
            <div className="relative z-10">
              <div className="mb-16">
                <span className="inline-block text-paradise-600 font-bold tracking-[0.2em] text-xs uppercase mb-6">
                  {t('foreignBuyers.subtitle')}
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6">
                  {t('foreignBuyers.title')}
                </h2>
                <div className="w-24 h-1 bg-paradise-400 mx-auto rounded-full mb-8"></div>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  {t('foreignBuyers.description')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {['fideicomiso', 'taxes', 'process', 'payments'].map((key, index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] text-left hover:border-paradise-200 transition-colors"
                  >
                    <div className="flex items-start gap-5">
                      <div className="shrink-0 p-3 bg-paradise-50 rounded-xl">
                        <CheckCircle2 className="w-6 h-6 text-paradise-600" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                          {t(`foreignBuyers.items.${key}.title`)}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
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
        <section id="team" className="py-32 scroll-mt-24 bg-white">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <span className="inline-block text-slate-400 font-bold tracking-[0.25em] text-xs uppercase mb-6">
              {t('team.subtitle')}
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-slate-900 mb-8">
              {t('team.title')}
            </h2>
          </motion.div>

          {/* Marisol Card - The Star */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-32">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
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
              <h3 className="font-serif text-4xl lg:text-5xl text-slate-900 mb-4">{t('team.marisol.name')}</h3>
              <p className="text-xl text-paradise-600 font-medium mb-8 flex items-center gap-3">
                 {t('team.marisol.role')}
                 <span className="h-px w-12 bg-paradise-300"></span>
              </p>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {t('team.marisol.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-full text-slate-700 font-medium text-sm">
                    Registered Architect
                 </div>
                 <div className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-full text-slate-700 font-medium text-sm">
                    Real Estate Specialist
                 </div>
                 <div className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-full text-slate-700 font-medium text-sm">
                    Local Native
                 </div>
              </div>
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
              <h3 className="font-serif text-4xl lg:text-5xl text-slate-900 mb-4">{t('team.philipp.name')}</h3>
              <p className="text-xl text-slate-500 font-medium mb-8 flex items-center gap-3">
                 {t('team.philipp.role')}
                 <span className="h-px w-12 bg-slate-300"></span>
              </p>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {t('team.philipp.description')}
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-300 p-6 rounded-r-xl">
                 <p className="italic text-amber-900 text-lg">"I spent months looking at bad properties so you don't have to. I am your filter."</p>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-5"
            >
               <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl bg-slate-100">
                    <div className="w-full h-full flex items-center justify-center">
                       <Globe className="w-32 h-32 text-slate-300" />
                    </div>
                     <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-6 py-4 rounded-xl border border-white/50 text-right">
                        <p className="font-serif text-2xl text-slate-900">Philipp</p>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">The Connector</p>
                     </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            SECTION 7: OUR PREMIUM COMMITMENT
        ============================================================ */}
        <section id="premium" className="py-24 lg:py-32 scroll-mt-24">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-5 py-2 mb-6">
              <Star className="w-3 h-3 text-paradise-400" />
              <span className="text-xs font-bold uppercase tracking-[0.25em]">
                {t('premium.subtitle')}
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6">
              {t('premium.title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('premium.description')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {(t('premium.commitment.items', { returnObjects: true }) || []).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-paradise-300 transition-all"
              >
                <div className="flex items-start gap-4">
                   <CheckCircle2 className="w-6 h-6 text-paradise-500 shrink-0 mt-1" />
                  <p className="text-slate-800 font-medium leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing Box - The Filter */}
          <div className="max-w-4xl mx-auto">
            <motion.div
               {...fadeInUp}
               className="bg-white rounded-[2.5rem] p-10 lg:p-14 border border-slate-200 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden"
            >
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-paradise-500 to-teal-500"></div>
               
               <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1 text-center md:text-left">
                     <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{t('premium.minimum.title')}</p>
                     <p className="font-serif text-4xl lg:text-5xl text-slate-900 mb-8">{t('premium.minimum.amount')}</p>
                     
                     <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{t('premium.fee.title')}</p>
                     <p className="font-serif text-4xl lg:text-5xl text-slate-900 mb-2">{t('premium.fee.amount')}</p>
                     <p className="text-slate-500 text-sm">{t('premium.fee.note')}</p>
                  </div>
                  
                  <div className="w-px h-32 bg-slate-100 hidden md:block"></div>

                  <div className="flex-1">
                     <h4 className="font-serif text-2xl text-slate-900 mb-4">{t('premium.promise.title')}</h4>
                     <p className="text-slate-600 leading-relaxed mb-6">
                        {t('premium.promise.content')}
                     </p>
                     <p className="text-sm font-medium text-paradise-700 bg-paradise-50 inline-block px-4 py-2 rounded-lg">
                        Deducted from commission upon purchase
                     </p>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            SECTION 8: CONTACT
        ============================================================ */}
        <section id="contact" className="py-24 pb-40 scroll-mt-24">
          <motion.div
            {...fadeInUp}
            className="text-center bg-slate-900 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden"
          >
            <div className="relative z-10 z-20">
              <Palmtree className="w-16 h-16 text-paradise-400 mx-auto mb-8" />
              <h2 className="font-serif text-4xl lg:text-6xl text-white mb-8 leading-tight">{t('cta.ready')}</h2>
              <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto font-light">{t('cta.description')}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/52984XXXXXXX', '_blank', 'noopener,noreferrer')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-200 text-slate-900 font-bold text-lg rounded-xl transition-all shadow-xl hover:-translate-y-1"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp
                </button>
                 <button
                  onClick={() => window.location.href = 'mailto:info@theparadisearchitect.com'}
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-slate-600 hover:border-white text-white font-bold text-lg rounded-xl transition-all hover:-translate-y-1"
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
