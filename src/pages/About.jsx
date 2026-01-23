import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Shield, 
  Heart, 
  Award,
  Building2,
  FileCheck,
  Users,
  MapPin,
  ArrowRight,
  Palmtree,
  AlertTriangle,
  CheckCircle2,
  DollarSign,
  Star,
  Sparkles,
  BadgeCheck,
  Handshake,
  Clock,
  FileText
} from 'lucide-react';
import useLanguage from '../hooks/useLanguage';
import SEO from '../components/SEO';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

export default function About() {
  const { t, i18n } = useTranslation();
  const { getLocalizedPath } = useLanguage();
  const lang = i18n.language || 'en';

  const approachItems = [
    { key: 'technical', icon: Eye },
    { key: 'transparent', icon: Shield },
    { key: 'personal', icon: Heart },
  ];

  return (
    <>
      <SEO 
        title={t('about.title') + ' | The Paradise Architect'} 
        description={t('about.description')} 
      />
      
      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                <motion.p variants={fadeIn} className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-600">
                  {t('about.subtitle')}
                </motion.p>
                <motion.h1 variants={fadeIn} className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                  {t('about.title')}
                </motion.h1>
                <motion.p variants={fadeIn} className="mt-6 text-lg text-slate-600 leading-relaxed">
                  {t('about.description')}
                </motion.p>
              </motion.div>

              {/* Photo placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-cyan-100 to-teal-50 border border-cyan-200 overflow-hidden shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center">
                        <Palmtree className="w-16 h-16 text-white" />
                      </div>
                      <p className="text-slate-400 text-sm">Marisol's photo coming soon</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold text-slate-900 mb-6">
                {t('about.story.title')}
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-slate-600 leading-relaxed">
                {t('about.story.content')}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Origin Story Section - Why We Do This */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50 border-y border-amber-200">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div variants={fadeIn} className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    <span className="text-sm font-bold uppercase tracking-[0.15em] text-amber-600">
                      {t('about.origin.subtitle')}
                    </span>
                  </motion.div>
                  <motion.h2 variants={fadeIn} className="text-3xl font-bold text-slate-900 mb-6">
                    {t('about.origin.title')}
                  </motion.h2>
                  <motion.p variants={fadeIn} className="text-lg text-slate-700 leading-relaxed mb-6">
                    {t('about.origin.content')}
                  </motion.p>
                  <motion.p variants={fadeIn} className="text-lg text-slate-700 leading-relaxed font-medium bg-white p-6 rounded-2xl border border-amber-200 shadow-sm">
                    {t('about.origin.conclusion')}
                  </motion.p>
                </div>
                
                {/* Visual representation of the journey */}
                <motion.div variants={fadeIn} className="space-y-4">
                  {[
                    { icon: Clock, text: "Endless waiting for professional responses", color: "text-red-500 bg-red-50 border-red-200" },
                    { icon: MapPin, text: "Time wasted on unsuitable properties", color: "text-orange-500 bg-orange-50 border-orange-200" },
                    { icon: FileText, text: "Complex foreign buyer bureaucracy", color: "text-amber-500 bg-amber-50 border-amber-200" },
                    { icon: AlertTriangle, text: "Nearly fell victim to a scam", color: "text-red-600 bg-red-50 border-red-200" },
                  ].map(({ icon: Icon, text, color }, index) => (
                    <div key={index} className={`flex items-center gap-4 p-4 rounded-xl border ${color}`}>
                      <Icon className="w-6 h-6 shrink-0" />
                      <span className="font-medium text-slate-700">{text}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-emerald-200 bg-emerald-50 mt-6">
                    <Sparkles className="w-6 h-6 text-emerald-600 shrink-0" />
                    <span className="font-bold text-emerald-700">The Paradise Architect was born</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold text-slate-900 mb-12">
                {t('about.approach.title')}
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {approachItems.map(({ key, icon: Icon }, index) => (
                  <motion.div
                    key={key}
                    variants={fadeIn}
                    className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-cyan-200 hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {t(`about.approach.items.${key}.title`)}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {t(`about.approach.items.${key}.description`)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold text-white mb-12">
                {t('about.credentials.title')}
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Building2, color: 'from-cyan-400 to-cyan-500' },
                  { icon: FileCheck, color: 'from-teal-400 to-teal-500' },
                  { icon: Users, color: 'from-blue-400 to-blue-500' },
                  { icon: MapPin, color: 'from-emerald-400 to-emerald-500' },
                ].map(({ icon: Icon, color }, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-medium">
                      {(t('about.credentials.items', { returnObjects: true }) || [])[index]}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Premium Service Model Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-50 to-teal-50">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {/* Header */}
              <div className="text-center mb-16">
                <motion.div variants={fadeIn} className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-600">
                    {t('premium.subtitle')}
                  </span>
                </motion.div>
                <motion.h2 variants={fadeIn} className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  {t('premium.title')}
                </motion.h2>
                <motion.p variants={fadeIn} className="text-lg text-slate-600 max-w-3xl mx-auto">
                  {t('premium.description')}
                </motion.p>
              </div>

              {/* Commitment Cards */}
              <motion.div variants={fadeIn} className="mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                  {t('premium.commitment.title')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(t('premium.commitment.items', { returnObjects: true }) || []).map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 border border-cyan-200 shadow-lg shadow-cyan-500/5 hover:shadow-xl transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Promise Box */}
              <motion.div variants={fadeIn} className="mb-16">
                <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-3xl p-8 lg:p-12 text-center">
                  <Handshake className="w-16 h-16 text-white/90 mx-auto mb-6" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {t('premium.promise.title')}
                  </h3>
                  <p className="text-xl text-cyan-100 max-w-2xl mx-auto leading-relaxed">
                    {t('premium.promise.content')}
                  </p>
                </div>
              </motion.div>

              {/* Fee and Minimum Investment */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Minimum Investment */}
                <motion.div variants={fadeIn} className="bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center">
                      <DollarSign className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{t('premium.minimum.title')}</h3>
                      <p className="text-3xl font-extrabold text-slate-900">{t('premium.minimum.amount')}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {t('premium.minimum.description')}
                  </p>
                </motion.div>

                {/* Engagement Fee */}
                <motion.div variants={fadeIn} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-amber-200 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                      <BadgeCheck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{t('premium.fee.title')}</h3>
                      <p className="text-3xl font-extrabold text-amber-700">{t('premium.fee.amount')}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    {t('premium.fee.description')}
                  </p>
                  <p className="text-sm text-amber-700 font-medium bg-amber-100 rounded-xl p-4">
                    {t('premium.fee.note')}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-cyan-500 to-teal-600 rounded-3xl p-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {t('cta.ready')}
              </h2>
              <p className="text-cyan-100 text-lg mb-8 max-w-xl mx-auto">
                {t('cta.description')}
              </p>
              <Link
                to={getLocalizedPath('contact')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-50 text-cyan-600 font-bold rounded-xl transition-all shadow-lg"
              >
                {t('cta.button')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
