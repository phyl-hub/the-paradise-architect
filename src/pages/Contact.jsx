import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Phone,
  MessageCircle,
  Calendar,
  DollarSign,
  BadgeCheck,
  CheckCircle2,
  Star
} from 'lucide-react';
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

export default function Contact() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';

  return (
    <>
      <SEO 
        title={t('contact.title') + ' | The Paradise Architect'} 
        description={t('contact.description')} 
      />
      
      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.p variants={fadeIn} className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-600">
                {t('contact.subtitle')}
              </motion.p>
              <motion.h1 variants={fadeIn} className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                {t('contact.title')}
              </motion.h1>
              <motion.p variants={fadeIn} className="mt-6 text-lg text-slate-600">
                {t('contact.description')}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {/* WhatsApp - Primary Contact */}
              <motion.a 
                variants={fadeIn}
                href="https://wa.me/52984XXXXXXX" // Update with actual number
                target="_blank"
                rel="noopener noreferrer"
                className="lg:col-span-2 flex flex-col md:flex-row items-center justify-center gap-6 p-10 rounded-3xl bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all shadow-xl shadow-green-500/30 hover:shadow-2xl group"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 group-hover:bg-white/30 transition-colors">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">{t('contact.whatsapp')}</h3>
                  <p className="text-green-100 group-hover:text-white transition-colors">
                    {t('contact.getInTouch.description')}
                  </p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a 
                variants={fadeIn}
                href="mailto:info@theparadisearchitect.com"
                className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all group"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 mb-4 group-hover:bg-cyan-100 transition-colors">
                  <Mail className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t('contact.email')}</h3>
                <p className="text-cyan-600 font-medium text-sm">
                  info@theparadisearchitect.com
                </p>
              </motion.a>

              {/* Schedule a Call */}
              <motion.a 
                variants={fadeIn}
                href="#" // Update with actual calendar link
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 rounded-3xl bg-gradient-to-br from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 transition-all shadow-lg shadow-cyan-500/25 group"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 mb-4 group-hover:bg-white/30 transition-colors">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t('contact.booking.label')}</h3>
                <p className="text-cyan-100 text-sm text-center">
                  {t('contact.booking.action')}
                </p>
              </motion.a>

              {/* Location */}
              <motion.div 
                variants={fadeIn}
                className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white border border-slate-200"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 mb-4">
                  <MapPin className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t('contact.location.title')}</h3>
                <p className="text-slate-600 text-sm text-center">
                  {t('contact.location.address')}
                </p>
              </motion.div>

              {/* Hours */}
              <motion.div 
                variants={fadeIn}
                className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white border border-slate-200"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t('contact.hours.title')}</h3>
                <div className="text-slate-600 text-sm text-center space-y-1">
                  <p>{t('contact.hours.weekdays')}</p>
                  <p>{t('contact.hours.saturday')}</p>
                  <p className="text-xs text-slate-400 mt-2">{t('contact.hours.timezone')}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* No Commitment Note */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-slate-500 mt-12"
            >
              {t('contact.noCommitment')}
            </motion.p>
          </div>
        </section>

        {/* Premium Service Reminder */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl p-8 lg:p-12 border border-cyan-200"
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-600">
                    {t('premium.subtitle')}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                  {t('premium.title')}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Minimum Investment */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center shrink-0">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{t('premium.minimum.title')}</p>
                      <p className="text-xl font-bold text-slate-900">{t('premium.minimum.amount')}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">{t('premium.minimum.description')}</p>
                </div>

                {/* Engagement Fee */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shrink-0">
                      <BadgeCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">{t('premium.fee.title')}</p>
                      <p className="text-xl font-bold text-amber-700">{t('premium.fee.amount')}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700">{t('premium.fee.note')}</p>
                </div>
              </div>

              {/* Promise */}
              <div className="mt-8 text-center">
                <p className="text-lg text-slate-700 font-medium max-w-2xl mx-auto">
                  {t('premium.promise.content')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
