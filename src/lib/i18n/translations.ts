export type Locale = 'en' | 'fr';

export type TranslationKey =
  | 'nav.cars' | 'nav.about' | 'nav.faq' | 'nav.location' | 'nav.contact'
  | 'header.browseCars' | 'hero.overline' | 'hero.heading1' | 'hero.heading2' | 'hero.heading3'
  | 'hero.browseFleet' | 'hero.transparentPricing' | 'hero.easyBooking' | 'hero.support247'
  | 'featured.heading' | 'featured.subtext' | 'featured.viewAll'
  | 'about.heading' | 'about.para1' | 'about.para2'
  | 'about.highlight1' | 'about.highlight2' | 'about.highlight3'
  | 'about.highlight4' | 'about.highlight5' | 'about.highlight6'
  | 'about.stat1' | 'about.stat2' | 'about.stat3' | 'about.stat4'
  | 'occasion.overline' | 'occasion.heading1' | 'occasion.heading2' | 'occasion.subtext'
  | 'occasion.wedding' | 'occasion.weddingDesc' | 'occasion.family' | 'occasion.familyDesc'
  | 'occasion.business' | 'occasion.businessDesc' | 'occasion.airport' | 'occasion.airportDesc'
  | 'occasion.weekend' | 'occasion.weekendDesc'
  | 'whatYouBook.heading1' | 'whatYouBook.heading2' | 'whatYouBook.subtext'
  | 'whatYouBook.feature1' | 'whatYouBook.feature1Desc' | 'whatYouBook.feature2' | 'whatYouBook.feature2Desc'
  | 'whatYouBook.feature3' | 'whatYouBook.feature3Desc'
  | 'testimonials.heading' | 'testimonials.subtext'
  | 'footer.quickLinks' | 'footer.contact' | 'footer.rights'
  | 'faq.heading' | 'faq.subtext' | 'faq.cta' | 'faq.viewAll'
  | 'map.overline' | 'map.getDirections'
  | 'whatsapp.aria' | 'whatsapp.label'
  | 'cars.pageTitle' | 'cars.pageDesc' | 'cars.overline' | 'cars.heading1' | 'cars.heading2'
  | 'notFound.title' | 'notFound.desc' | 'notFound.button'
  | 'error.title' | 'error.desc' | 'error.button';

type Translations = Record<Locale, Record<TranslationKey, string>>;

export const translations: Translations = {
  en: {
    'nav.cars': 'Cars',
    'nav.about': 'About',
    'nav.faq': 'FAQ',
    'nav.location': 'Location',
    'nav.contact': 'Contact',
    'header.browseCars': 'Browse Cars',
    'hero.overline': 'Premium Car Rental',
    'hero.heading1': 'A better drive',
    'hero.heading2': 'starts before',
    'hero.heading3': 'the road',
    'hero.browseFleet': 'Browse Our Fleet',
    'hero.transparentPricing': 'Transparent Pricing',
    'hero.easyBooking': 'Easy Booking',
    'hero.support247': '24/7 Support',
    'featured.heading': 'Featured Vehicles',
    'featured.subtext': 'Hand-picked for every trip, from city drives to weekend getaways.',
    'featured.viewAll': 'View All Cars',
    'about.heading': 'Drive with confidence',
    'about.para1': '{name} delivers premium car rental experiences with a focus on transparency, quality, and personal service. Every vehicle in our fleet is meticulously maintained and inspected before each rental — because we believe the drive should be as smooth as the booking.',
    'about.para2': 'No hidden fees, no fine print, no runaround. From airport pickups to weekend escapes, we work with you to find the right car at the right price. Our team is available around the clock, and every booking is backed by a satisfaction guarantee.',
    'about.highlight1': 'Professional well-maintained fleet',
    'about.highlight2': 'Transparent pay-as-you-go pricing',
    'about.highlight3': 'Responsive 24/7 support team',
    'about.highlight4': 'Flexible pickup and drop-off options',
    'about.highlight5': 'Free cancellation up to 48 hours',
    'about.highlight6': 'No hidden fees or surprise charges',
    'about.stat1': 'Happy Renters',
    'about.stat2': 'Average Rating',
    'about.stat3': 'Premium Vehicles',
    'about.stat4': 'Would Rent Again',
    'occasion.overline': 'Occasion',
    'occasion.heading1': 'Choose your',
    'occasion.heading2': 'journey',
    'occasion.subtext': 'Every moment deserves the right car on the road.',
    'occasion.wedding': 'Wedding',
    'occasion.weddingDesc': 'Arrive in style on your special day. Elegant vehicles for unforgettable moments.',
    'occasion.family': 'Family Trips',
    'occasion.familyDesc': 'Spacious and safe rides for the whole family. Comfort on every journey.',
    'occasion.business': 'Business Travel',
    'occasion.businessDesc': 'Professional transportation for corporate trips, meetings, and events.',
    'occasion.airport': 'Airport Pickup',
    'occasion.airportDesc': 'Timely, hassle-free airport transfers. We track your flight and adjust pickup accordingly.',
    'occasion.weekend': 'Weekend Escape',
    'occasion.weekendDesc': 'Get away from it all. City breaks, mountain drives, coastal cruises.',
    'whatYouBook.heading1': 'What you book',
    'whatYouBook.heading2': 'is what you get',
    'whatYouBook.subtext': 'The car you reserve is the car waiting for you — at the rate we confirmed, ready when you arrive.',
    'whatYouBook.feature1': 'Clear pricing',
    'whatYouBook.feature1Desc': 'What we quote is what you pay. No add-ons, no surprises.',
    'whatYouBook.feature2': 'Ready before you arrive',
    'whatYouBook.feature2Desc': 'Every car is inspected, cleaned, and prepared before your pickup.',
    'whatYouBook.feature3': 'A simple handoff',
    'whatYouBook.feature3Desc': 'A quick confirmation and you\'re on the road — no paperwork runaround.',
    'testimonials.heading': 'What our clients say',
    'testimonials.subtext': 'Real feedback from people who have rented with us.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'faq.heading': 'Frequently Asked Questions',
    'faq.subtext': 'Quick answers to common questions.',
    'faq.cta': 'Have more questions? We\'re happy to help.',
    'faq.viewAll': 'View All FAQs',
    'map.overline': 'Location',
    'map.getDirections': 'Get directions',
    'whatsapp.aria': 'Contact us on WhatsApp',
    'whatsapp.label': 'WhatsApp',
    'cars.pageTitle': 'Our Fleet',
    'cars.pageDesc': 'Browse our fleet of well-maintained vehicles at {name}. Find the perfect car for your trip.',
    'cars.overline': 'Fleet',
    'cars.heading1': 'Find the right car',
    'cars.heading2': 'for the drive ahead.',
    'notFound.title': 'Page Not Found',
    'notFound.desc': 'The page you\'re looking for doesn\'t exist or has been moved.',
    'notFound.button': 'Go Home',
    'error.title': 'Something went wrong',
    'error.desc': 'An unexpected error occurred. Please try again.',
    'error.button': 'Try Again',
  },
  fr: {
    'nav.cars': 'Voitures',
    'nav.about': 'À propos',
    'nav.faq': 'FAQ',
    'nav.location': 'Localisation',
    'nav.contact': 'Contact',
    'header.browseCars': 'Voir les Voitures',
    'hero.overline': 'Location de Voitures Premium',
    'hero.heading1': 'Un meilleur trajet',
    'hero.heading2': 'commence avant',
    'hero.heading3': 'la route',
    'hero.browseFleet': 'Découvrir Notre Flotte',
    'hero.transparentPricing': 'Prix Transparents',
    'hero.easyBooking': 'Réservation Facile',
    'hero.support247': 'Support 24/7',
    'featured.heading': 'Véhicules en Vedette',
    'featured.subtext': 'Sélectionnés pour chaque voyage, des trajets en ville aux escapades du week-end.',
    'featured.viewAll': 'Voir Toutes les Voitures',
    'about.heading': 'Conduisez en toute confiance',
    'about.para1': '{name} offre des expériences de location de voitures premium axées sur la transparence, la qualité et le service personnalisé. Chaque véhicule de notre flotte est méticuleusement entretenu et inspecté avant chaque location — car nous croyons que la conduite doit être aussi fluide que la réservation.',
    'about.para2': 'Pas de frais cachés, pas de petites lignes, pas de complications. Des transferts aéroport aux escapades du week-end, nous travaillons avec vous pour trouver la bonne voiture au bon prix. Notre équipe est disponible 24h/24, et chaque réservation est garantie satisfaite.',
    'about.highlight1': 'Flotte professionnelle bien entretenue',
    'about.highlight2': 'Tarification transparente à l\'utilisation',
    'about.highlight3': 'Équipe d\'assistance réactive 24/7',
    'about.highlight4': 'Options de prise en charge et de retour flexibles',
    'about.highlight5': 'Annulation gratuite jusqu\'à 48 heures',
    'about.highlight6': 'Pas de frais cachés ni de surprises',
    'about.stat1': 'Clients Satisfaits',
    'about.stat2': 'Note Moyenne',
    'about.stat3': 'Véhicules Premium',
    'about.stat4': 'Reviendraient',
    'occasion.overline': 'Occasion',
    'occasion.heading1': 'Choisissez votre',
    'occasion.heading2': 'voyage',
    'occasion.subtext': 'Chaque moment mérite la bonne voiture sur la route.',
    'occasion.wedding': 'Mariage',
    'occasion.weddingDesc': 'Arrivez en style le jour de votre mariage. Des véhicules élégants pour des moments inoubliables.',
    'occasion.family': 'Voyages en Famille',
    'occasion.familyDesc': 'Des trajets spacieux et sûrs pour toute la famille. Confort à chaque voyage.',
    'occasion.business': 'Voyage d\'Affaires',
    'occasion.businessDesc': 'Transport professionnel pour les voyages d\'affaires, réunions et événements.',
    'occasion.airport': 'Transfert Aéroport',
    'occasion.airportDesc': 'Transferts aéroport ponctuels et sans stress. Nous suivons votre vol et ajustons la prise en charge.',
    'occasion.weekend': 'Escapade du Week-end',
    'occasion.weekendDesc': 'Évadez-vous de tout. Escapades urbaines, routes de montagne, croisières côtières.',
    'whatYouBook.heading1': 'Ce que vous réservez',
    'whatYouBook.heading2': 'est ce que vous obtenez',
    'whatYouBook.subtext': 'La voiture que vous réservez est celle qui vous attend — au tarif confirmé, prête à votre arrivée.',
    'whatYouBook.feature1': 'Prix clairs',
    'whatYouBook.feature1Desc': 'Ce qu\'on vous propose est ce que vous payez. Sans supplément, sans surprise.',
    'whatYouBook.feature2': 'Prêt avant votre arrivée',
    'whatYouBook.feature2Desc': 'Chaque voiture est inspectée, nettoyée et préparée avant votre prise en charge.',
    'whatYouBook.feature3': 'Remise simple',
    'whatYouBook.feature3Desc': 'Une confirmation rapide et vous êtes sur la route — pas de paperasse.',
    'testimonials.heading': 'Ce que disent nos clients',
    'testimonials.subtext': 'Des retours réels de personnes qui ont loué chez nous.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'faq.heading': 'Questions Fréquentes',
    'faq.subtext': 'Réponses rapides aux questions courantes.',
    'faq.cta': 'Vous avez d\'autres questions ? Nous sommes là pour vous aider.',
    'faq.viewAll': 'Voir Toutes les FAQ',
    'map.overline': 'Localisation',
    'map.getDirections': 'Obtenir l\'itinéraire',
    'whatsapp.aria': 'Contactez-nous sur WhatsApp',
    'whatsapp.label': 'WhatsApp',
    'cars.pageTitle': 'Notre Flotte',
    'cars.pageDesc': 'Parcourez notre flotte de véhicules bien entretenus chez {name}. Trouvez la voiture parfaite pour votre voyage.',
    'cars.overline': 'Flotte',
    'cars.heading1': 'Trouvez la bonne voiture',
    'cars.heading2': 'pour la route à venir.',
    'notFound.title': 'Page Introuvable',
    'notFound.desc': 'La page que vous cherchez n\'existe pas ou a été déplacée.',
    'notFound.button': 'Accueil',
    'error.title': 'Une erreur est survenue',
    'error.desc': 'Une erreur inattendue s\'est produite. Veuillez réessayer.',
    'error.button': 'Réessayer',
  },
};

export function t(key: TranslationKey, locale: Locale, params?: Record<string, string>): string {
  let value = translations[locale][key] ?? translations.en[key] ?? key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      value = value.replace(`{${k}}`, v);
    }
  }
  return value;
}
