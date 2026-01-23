import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component for The Paradise Architect
 * Real Estate focused SEO for Riviera Maya / Playa del Carmen
 */

export const pageSEOConfig = {
  home: {
    en: {
      title: 'The Paradise Architect | Real Estate with Technical Due Diligence – Riviera Maya',
      description: 'Buy property in Playa del Carmen, Tulum, and Cancún with confidence. Licensed architect and real estate agent specializing in foreign buyers. Technical inspections, permit verification, and investment protection.',
    },
    es: {
      title: 'The Paradise Architect | Bienes Raíces con Due Diligence Técnico – Riviera Maya',
      description: 'Compra tu propiedad en Playa del Carmen, Tulum y Cancún con confianza. Arquitecta y asesora inmobiliaria certificada especializada en compradores extranjeros. Inspecciones técnicas y protección de inversión.',
    },
    de: {
      title: 'The Paradise Architect | Immobilien mit technischer Due Diligence – Riviera Maya',
      description: 'Kaufen Sie Immobilien in Playa del Carmen, Tulum und Cancún mit Vertrauen. Lizenzierte Architektin und Immobilienberaterin für ausländische Käufer. Technische Inspektionen und Investitionsschutz.',
    },
  },
  about: {
    en: {
      title: 'About Marisol Rosales Trujillo | The Paradise Architect',
      description: 'Meet your architect-agent in Playa del Carmen. Licensed architect with real estate certification helping foreign buyers invest safely in the Mexican Caribbean.',
    },
    es: {
      title: 'Conoce a Marisol Rosales Trujillo | The Paradise Architect',
      description: 'Conoce a tu arquitecta-asesora en Playa del Carmen. Arquitecta certificada con licencia inmobiliaria ayudando a compradores extranjeros a invertir de forma segura en el Caribe Mexicano.',
    },
    de: {
      title: 'Über Marisol Rosales Trujillo | The Paradise Architect',
      description: 'Lernen Sie Ihre Architektin-Maklerin in Playa del Carmen kennen. Lizenzierte Architektin mit Immobilienzertifizierung für sichere Investitionen ausländischer Käufer in der mexikanischen Karibik.',
    },
  },
  contact: {
    en: {
      title: 'Contact The Paradise Architect | Schedule a Consultation',
      description: 'Ready to find your property in the Riviera Maya? Schedule a free consultation with Marisol Rosales Trujillo, your architect-agent in Playa del Carmen.',
    },
    es: {
      title: 'Contacto | The Paradise Architect | Agenda una Consulta',
      description: '¿Listo para encontrar tu propiedad en la Riviera Maya? Agenda una consulta gratuita con Marisol Rosales Trujillo, tu arquitecta-asesora en Playa del Carmen.',
    },
    de: {
      title: 'Kontakt | The Paradise Architect | Beratung vereinbaren',
      description: 'Bereit, Ihre Immobilie an der Riviera Maya zu finden? Vereinbaren Sie eine kostenlose Beratung mit Marisol Rosales Trujillo, Ihrer Architektin-Maklerin in Playa del Carmen.',
    },
  },
  privacy: {
    en: {
      title: 'Privacy Policy | The Paradise Architect',
      description: 'Privacy policy for The Paradise Architect real estate services in Playa del Carmen, Mexico.',
    },
    es: {
      title: 'Política de Privacidad | The Paradise Architect',
      description: 'Política de privacidad para los servicios inmobiliarios de The Paradise Architect en Playa del Carmen, México.',
    },
    de: {
      title: 'Datenschutzerklärung | The Paradise Architect',
      description: 'Datenschutzerklärung für die Immobiliendienstleistungen von The Paradise Architect in Playa del Carmen, Mexiko.',
    },
  },
  terms: {
    en: {
      title: 'Terms & Conditions | The Paradise Architect',
      description: 'Terms of use for The Paradise Architect website and real estate services.',
    },
    es: {
      title: 'Términos y Condiciones | The Paradise Architect',
      description: 'Términos de uso para el sitio web y servicios inmobiliarios de The Paradise Architect.',
    },
    de: {
      title: 'Allgemeine Geschäftsbedingungen | The Paradise Architect',
      description: 'Nutzungsbedingungen für die Website und Immobiliendienstleistungen von The Paradise Architect.',
    },
  },
};

export default function SEO({ title, description, image, noindex = false }) {
  const { i18n } = useTranslation();
  const location = useLocation();
  const lang = i18n.language || 'en';

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    if (ogTitle && title) ogTitle.setAttribute('content', title);
    if (ogDescription && description) ogDescription.setAttribute('content', description);
    if (ogUrl) ogUrl.setAttribute('content', `https://theparadisearchitect.com${location.pathname}`);

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    
    if (twitterTitle && title) twitterTitle.setAttribute('content', title);
    if (twitterDescription && description) twitterDescription.setAttribute('content', description);

    // Update canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://theparadisearchitect.com${location.pathname}`);
    }

    // Update robots meta if noindex
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (robotsMeta) {
        robotsMeta.setAttribute('content', 'noindex, nofollow');
      }
    } else {
      if (robotsMeta) {
        robotsMeta.setAttribute('content', 'index, follow, max-image-preview:large');
      }
    }

    // Update hreflang based on current language
    const hreflangEn = document.querySelector('link[hreflang="en"]');
    const hreflangEs = document.querySelector('link[hreflang="es"]');
    const hreflangDe = document.querySelector('link[hreflang="de"]');
    const hreflangDefault = document.querySelector('link[hreflang="x-default"]');
    
    const basePath = location.pathname.replace(/^\/(en|es|de)/, '');
    
    if (hreflangEn) hreflangEn.setAttribute('href', `https://theparadisearchitect.com/en${basePath}`);
    if (hreflangEs) hreflangEs.setAttribute('href', `https://theparadisearchitect.com/es${basePath}`);
    if (hreflangDe) hreflangDe.setAttribute('href', `https://theparadisearchitect.com/de${basePath}`);
    if (hreflangDefault) hreflangDefault.setAttribute('href', `https://theparadisearchitect.com/en${basePath}`);

  }, [title, description, image, noindex, location, lang]);

  return null;
}
