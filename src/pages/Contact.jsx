import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Star,
  ArrowRight,
  ShieldCheck,
  Palmtree,
} from 'lucide-react';
import SEO from '../components/SEO';
import BentoCard from '../components/ui/BentoCard';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Contact() {
  const { t } = useTranslation();

  const expectItems = [
    {
      title: t('contact.whatToExpect.items.listen.title'),
      desc: t('contact.whatToExpect.items.listen.description'),
    },
    {
      title: t('contact.whatToExpect.items.honest.title'),
      desc: t('contact.whatToExpect.items.honest.description'),
    },
    {
      title: t('contact.whatToExpect.items.questions.title'),
      desc: t('contact.whatToExpect.items.questions.description'),
    },
    {
      title: t('contact.whatToExpect.items.noObligation.title'),
      desc: t('contact.whatToExpect.items.noObligation.description'),
    },
  ];

  return (
    <>
      <SEO
        title={`${t('nav.contact')} | The Paradise Architect`}
        description={t('contact.heroSubhead')}
      />

      <div className="min-h-screen bg-gradient-to-b from-paradise-50/50 to-white">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="pt-16 pb-10 md:pt-24 md:pb-14">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.div variants={fadeIn} className="flex items-center gap-2 mb-5">
                <Palmtree className="w-4 h-4 text-paradise-500" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-paradise-600">
                  {t('contact.badge')}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="font-serif text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl leading-tight tracking-tight"
              >
                {t('contact.heroTitle')}
              </motion.h1>

              <motion.p variants={fadeIn} className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl">
                {t('contact.heroSubhead')}
              </motion.p>

              <motion.p variants={fadeIn} className="mt-3 text-sm font-medium text-slate-400">
                {t('contact.noCommitment')}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── BENTO CONTACT GRID ───────────────────────────────────── */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid gap-5 md:grid-cols-3"
            >

              {/* ── PRIMARY: Book a call ─────────────────────────── */}
              <motion.a
                variants={fadeIn}
                href="https://calendly.com/theparadisearchitect/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="md:col-span-2 group relative flex flex-col justify-between p-8 lg:p-10 rounded-2xl bg-slate-900 hover:bg-[#0d2035] transition-all duration-300 shadow-2xl shadow-slate-900/25 overflow-hidden"
              >
                {/* glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-paradise-800/25 via-transparent to-paradise-500/10 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-7">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-paradise-500/20 border border-paradise-400/30">
                      <Calendar className="h-7 w-7 text-paradise-300" />
                    </div>
                    <span className="px-3 py-1.5 rounded-full bg-paradise-500/20 border border-paradise-400/30 text-paradise-300 text-[11px] font-bold uppercase tracking-wider">
                      {t('contact.booking.badge')}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                    {t('contact.booking.label')}
                  </h2>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors text-base leading-relaxed max-w-md">
                    {t('contact.booking.description')}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center justify-between">
                  <span className="text-sm text-slate-500">{t('contact.booking.action')}</span>
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-paradise-500 group-hover:bg-paradise-400 transition-colors text-white font-semibold text-sm">
                    {t('contact.booking.cta')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.a>

              {/* ── WhatsApp ─────────────────────────────────────── */}
              <motion.a
                variants={fadeIn}
                href="https://wa.me/52984XXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-500/20"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 mb-6 group-hover:bg-white/30 transition-colors">
                    <MessageCircle className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">{t('contact.whatsapp.label')}</h2>
                  <p className="text-green-100 text-sm leading-relaxed">{t('contact.whatsapp.description')}</p>
                </div>
                <p className="mt-6 text-xs text-green-200 font-medium">{t('contact.getInTouch.description')}</p>
              </motion.a>

              {/* ── What to Expect on the Call ───────────────────── */}
              <motion.div variants={fadeIn} className="md:col-span-2">
                <BentoCard className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-paradise-50 shrink-0">
                      <Star className="h-6 w-6 text-paradise-600" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">{t('contact.whatToExpect.title')}</h2>
                      <p className="text-sm text-slate-500">{t('contact.whatToExpect.subtitle')}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {expectItems.map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-paradise-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                          <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </BentoCard>
              </motion.div>

              {/* ── Email + Office/Hours stacked ─────────────────── */}
              <motion.div variants={fadeIn} className="flex flex-col gap-5">

                {/* Email */}
                <a
                  href="mailto:info@theparadisearchitect.com"
                  className="group flex flex-col p-6 rounded-2xl bg-white border border-slate-200 hover:border-paradise-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-paradise-50 mb-4 group-hover:bg-paradise-100 transition-colors">
                    <Mail className="h-5 w-5 text-paradise-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug">{t('contact.email')}</h3>
                  <p className="text-paradise-600 text-xs font-medium mt-1">info@theparadisearchitect.com</p>
                  <p className="text-slate-400 text-xs mt-2">{t('contact.noCommitment')}</p>
                </a>

                {/* Office & Availability */}
                <div className="flex flex-col p-6 rounded-2xl bg-white border border-slate-200 gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-paradise-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{t('contact.location.title')}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{t('contact.location.address')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-paradise-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{t('contact.hours.title')}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{t('contact.hours.weekdays')}</p>
                      <p className="text-slate-400 text-xs mt-1">{t('contact.hours.timezone')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ── Promise (full-width) ──────────────────────────── */}
              <motion.div variants={fadeIn} className="md:col-span-3">
                <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-paradise-950 p-8 lg:p-10 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-paradise-600/20 via-transparent to-transparent pointer-events-none" />
                  <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-paradise-500/20 border border-paradise-400/30 shrink-0">
                      <ShieldCheck className="h-7 w-7 text-paradise-300" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-paradise-400 mb-2">
                        {t('premium.promise.title')}
                      </p>
                      <p className="text-white text-lg lg:text-xl font-medium leading-relaxed max-w-3xl">
                        "{t('premium.promise.content')}"
                      </p>
                      <p className="text-slate-400 text-sm mt-3 font-medium">{t('hero.signature')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
