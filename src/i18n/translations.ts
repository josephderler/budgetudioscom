// Lightweight i18n dictionary. English is the source/fallback; other locales
// cover the key marketing strings. Missing keys fall back to English so the
// site never shows a blank label. Expand per-locale as needed.

export const LOCALES = ["en", "es", "fr", "de", "it", "pt"] as const;
export type Locale = (typeof LOCALES)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  pt: "Português",
};

type Dict = Record<string, string>;

const en: Dict = {
  // Nav
  "nav.features": "Features",
  "nav.gameplay": "Gameplay",
  "nav.video": "Video",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.playFree": "Play Free",

  // Hero
  "hero.badge": "Ages 4+ · Education · Free to play",
  "hero.title1": "Explore, Learn &",
  "hero.title2": "Play with Dora!",
  "hero.availableIn": "Available in",
  "hero.shortPitch":
    "¡Hola! Join Dora and her friends on a magical journey packed with exploration, music, words and kindness — designed especially for toddlers and preschoolers.",
  "hero.ratingLine": "{stars} · {count} ratings on the {source}",
  "hero.ratingChip": "{stars} rating",
  "hero.ratingChipSub": "{count} parents",
  "hero.freeChip": "Free to play",
  "hero.freeChipSub": "Ages 4+ · Education",

  // TrustBar
  "trust.badge1": "ESRB Privacy Certified",
  "trust.badge2": "Made for ages 4+",
  "trust.badge3": "Available in 6 languages",
  "trust.badge4": "Education category",

  // How it works
  "how.eyebrow": "How it works",
  "how.title": "Learning fun in three easy steps",
  "how.subtitle": "Simple enough for the smallest hands, rich enough to keep them exploring.",
  "how.step1.title": "Download & explore",
  "how.step1.desc":
    "Grab the app free from the App Store or Google Play and step into Dora's colorful, interactive world.",
  "how.step2.title": "Play & learn",
  "how.step2.desc":
    "Tap through playful mini-games that teach words, shapes, colors and music — one happy discovery at a time.",
  "how.step3.title": "Grow together",
  "how.step3.desc":
    "Help Dora's friends, build kindness and confidence, and watch curiosity turn into real early-learning skills.",

  // Features
  "feat.eyebrow": "Why kids & parents love it",
  "feat.title": "Big adventures, little learners",
  "feat.subtitle":
    "Every tap is a chance to explore, learn and grow — wrapped in the colorful, friendly world of Dora.",
  "feature.explore.title": "Explore & Discover",
  "feature.explore.desc":
    "Adventure across vibrant, iconic locations — from Dora's Casita to the Tallest Mountain — and spark curiosity and problem-solving along the way.",
  "feature.words.title": "Learn Words",
  "feature.words.desc":
    "Playful mini-games introduce basic Spanish vocabulary and phrases, turning every tap into a bilingual learning moment.",
  "feature.music.title": "Make Music",
  "feature.music.desc":
    "Drum, dance and sing! Musical activities let children engage with the rhythm and sounds of Dora's colorful world.",
  "feature.friends.title": "Help Friends",
  "feature.friends.desc":
    "Join Boots, Tico, Isa and Benny on their missions and build empathy, kindness and teamwork with every challenge.",
  "feature.activities.title": "Fun Activities",
  "feature.activities.desc":
    "Shapes, colors, counting and creative play keep little minds busy with frustration-free challenges made for small hands.",
  "feature.safe.title": "Safe & Kid-Friendly",
  "feature.safe.desc":
    "ESRB Privacy Certified and built around preschool milestones, so parents can relax while kids explore and learn.",

  // Characters
  "char.eyebrow": "Meet the friends",
  "char.title": "An adventure is better together",
  "char.subtitle": "Say hola to Dora and the friends your child will explore, learn and play with.",
  "char.dora.role": "The explorer",
  "char.dora.blurb": "Brave, curious and always ready for the next adventure with her trusty Backpack and Map.",
  "char.boots.role": "Best friend",
  "char.boots.blurb": "Dora's playful monkey pal who loves to jump, climb and lend a helping hand.",
  "char.tico.role": "The squirrel",
  "char.tico.blurb": "A friendly, fast little squirrel who zips around and speaks mostly Spanish.",
  "char.isa.role": "The iguana",
  "char.isa.blurb": "A green-thumbed iguana who adores flowers, gardens and solving puzzles together.",
  "char.benny.role": "The bull",
  "char.benny.blurb": "A big-hearted, gentle bull who's always cheerful and up for a song.",

  // Age guide
  "age.eyebrow": "Grows with your child",
  "age.title": "Learning for every little stage",
  "age.subtitle": "Age-appropriate play that supports preschool milestones as your child grows.",
  "age.stage1.title": "First discoveries",
  "age.stage1.point1": "Taps, drags and simple cause-and-effect play",
  "age.stage1.point2": "Colors, shapes and first words",
  "age.stage1.point3": "Gentle, frustration-free exploration",
  "age.stage2.title": "Growing skills",
  "age.stage2.point1": "Basic Spanish vocabulary and phrases",
  "age.stage2.point2": "Counting, matching and problem-solving",
  "age.stage2.point3": "Helping friends builds empathy & teamwork",
  "age.stage3.title": "Confident explorers",
  "age.stage3.point1": "Longer adventures and richer mini-games",
  "age.stage3.point2": "Creative activities and music-making",
  "age.stage3.point3": "Independent play and storytelling",

  // Gallery
  "gallery.eyebrow": "A peek inside",
  "gallery.title": "See the adventure in action",
  "gallery.subtitle": "Bright, friendly worlds designed for small hands and big imaginations.",

  // Video
  "video.eyebrow": "Watch the trailer",
  "video.title": "Press play and meet Dora",
  "video.subtitle": "Get a sneak peek of the songs, friends and mini-games waiting inside the app.",

  // About
  "about.eyebrow": "Bringing the show to life",
  "about.title": "More than a game — a real Dora experience",
  "about.body":
    "We captured the heart of the show: interactivity, bilingual education and an adventurous spirit. It's like stepping right inside an episode, where every discovery builds curiosity, confidence and kindness.",
  "about.check1": "Designed for toddlers, preschool and younger kids",
  "about.check2": "Frustration-free gameplay made for small hands",
  "about.check3": "ESRB Privacy Certified Kids' Privacy Seal",
  "about.stat1.label": "years of Dora adventures loved worldwide",
  "about.stat2.label": "countries where Dora is seen",
  "about.stat3.label": "languages across the Dora universe",
  "about.stat4.label": "age rating, built for preschool milestones",

  // Comparison
  "cmp.eyebrow": "What's included",
  "cmp.title": "Free to start, more to explore",
  "cmp.subtitle":
    "Download and play for free. Unlock the full adventure anytime with an optional subscription.",
  "cmp.col.feature": "Feature",
  "cmp.col.free": "Free",
  "cmp.col.premium": "Premium",
  "cmp.row.explore": "Explore interactive worlds",
  "cmp.row.minigames": "Learn-through-play mini-games",
  "cmp.row.bilingual": "Bilingual words & phrases",
  "cmp.row.music": "Music & creative activities",
  "cmp.row.friends": "Help Dora's friends",
  "cmp.row.updates": "New content & updates",
  "cmp.row.adlight": "Ad-light, kid-safe experience",
  "cmp.row.cancel": "Cancel anytime",
  "cmp.val.sample": "Sample",
  "cmp.val.fullAccess": "Full access",
  "cmp.val.limited": "Limited",
  "cmp.val.allUnlocked": "All unlocked",
  "cmp.val.basic": "Basic",
  "cmp.val.everything": "Everything",
  "cmp.footnote": "Free to download · Optional subscription · Cancel anytime",

  // Testimonials
  "tst.eyebrow": "Loved by families",
  "tst.title": "What parents are saying",
  "tst.subtitle": "Join thousands of families exploring and learning with Dora every day.",
  "tst.q1":
    "My 3-year-old is obsessed. She's picking up Spanish words without even realizing she's learning. The mini-games are perfect for little hands.",
  "tst.q1.role": "Mom of one",
  "tst.q2":
    "Finally a kids' app I feel good about. No creepy ads, genuinely educational, and my son adores helping Dora's friends. Worth every bit.",
  "tst.q2.role": "Dad of two",
  "tst.q3":
    "The music activities are a hit in our house — we dance along every evening. It's colorful, friendly and so easy for toddlers to navigate.",
  "tst.q3.role": "Parent & preschool teacher",
  "tst.q4":
    "Love that it grows curiosity. My daughter talks about the places she 'explored' all day. Beautifully made and clearly built for kids.",
  "tst.q4.role": "Mom of a preschooler",

  // FAQ
  "faq.eyebrow": "Questions & answers",
  "faq.title": "Everything parents ask",
  "faq.subtitle": "Still curious? We're always happy to help — just reach out.",
  "faq.q1": "Is the app free to download?",
  "faq.a1":
    "Yes. Dora: Explore and Play! is free to download on both the App Store and Google Play. It also offers optional subscriptions and in-app purchases that unlock extra content.",
  "faq.q2": "What age is the app designed for?",
  "faq.a2":
    "It's made for toddlers, preschoolers and younger kids, with a 4+ age rating. The gameplay is simple, frustration-free and built for small hands.",
  "faq.q3": "Is it safe for children?",
  "faq.a3":
    "Absolutely. The app holds the ESRB Privacy Certified Kids' Privacy Seal and is designed with child safety in mind. We don't collect personal information from children for advertising.",
  "faq.q4": "What will my child learn?",
  "faq.a4":
    "Kids pick up basic Spanish vocabulary, shapes, colors and counting, plus problem-solving, creativity and social-emotional skills like kindness and teamwork — all through play.",
  "faq.q5": "Which languages are supported?",
  "faq.a5": "The app is available in English, French, German, Italian, Portuguese and Spanish.",
  "faq.q6": "How do I manage or cancel a subscription?",
  "faq.a6":
    "Subscriptions are managed through your App Store or Google Play account settings. You can turn off auto-renew or cancel any time, at least 24 hours before the period ends.",

  // CTA
  "cta.title": "Ready for an adventure?",
  "cta.subtitle":
    "Download Dora: Explore and Play! today and let the learning fun begin — free on the App Store and Google Play.",

  // Store buttons
  "store.apple.pre": "Download on the",
  "store.google.pre": "Get it on",

  // Footer
  "footer.tagline":
    "A joyful, bilingual learning adventure for toddlers and preschoolers. Explore, learn and play with Dora and her friends.",
  "footer.explore": "Explore",
  "footer.legal": "Legal",
  "footer.link.features": "Features",
  "footer.link.gameplay": "Gameplay",
  "footer.link.trailer": "Trailer",
  "footer.link.faq": "FAQ",
  "footer.link.contact": "Contact",
  "footer.link.privacy": "Privacy Policy",
  "footer.link.terms": "Terms of Use",
  "footer.copyright": "© {year} {company} · Company No. {number}. All rights reserved.",
  "footer.trademark":
    "Dora and all related titles, logos and characters are trademarks of their respective owners. This is an app promotion page.",

  // Consent banner
  "consent.title": "We value your privacy",
  "consent.body":
    "We use minimal cookies to keep the site working and understand how it's used. The trailer only loads when you choose to play it. See our",
  "consent.privacyLink": "Privacy Policy",
  "consent.accept": "Accept",
  "consent.decline": "Decline",

  // Scroll to top
  "scrollTop.aria": "Scroll back to top",

  // Legal layout chrome
  "legal.backHome": "Back to home",
  "legal.onThisPage": "On this page",
  "legal.lastUpdated": "Last updated:",

  // Privacy / Terms chrome
  "legal.eyebrow": "Legal",
  "privacy.title": "Privacy Policy",
  "privacy.intro":
    "Protecting children's privacy is at the heart of how we build and operate the app. This policy explains, in plain language, what we do and don't do with data.",
  "terms.title": "Terms of Use",
  "terms.intro":
    "These terms govern your use of the app and this website. The app is made for children and should be used under the supervision of a parent or guardian.",

  // Contact page
  "contact.eyebrow": "We're here to help",
  "contact.title": "Get in touch",
  "contact.intro":
    "Questions, feedback or support requests about {app} Our team would love to hear from you. Reach out any way that works best.",
  "contact.card.email.label": "Email us",
  "contact.card.email.note": "We reply within 1–2 business days.",
  "contact.card.call.label": "Call us",
  "contact.card.call.note": "Mon–Fri, business hours.",
  "contact.card.visit.label": "Visit us",
  "contact.form.title": "Send us a message",
  "contact.form.intro": "Fill in the form and your email app will open with everything ready to send.",
  "contact.form.name": "Name",
  "contact.form.name.ph": "Your name",
  "contact.form.email": "Email",
  "contact.form.email.ph": "you@example.com",
  "contact.form.subject": "Subject",
  "contact.form.subject.ph": "How can we help?",
  "contact.form.message": "Message",
  "contact.form.message.ph": "Write your message...",
  "contact.form.send": "Send message",
  "contact.form.defaultSubject": "Message from budgetudios.com",
  "contact.company.number": "Company No.",
  "contact.company.status": "Status",
  "contact.company.founded": "Founded",
  "contact.hours.title": "Support hours",
  "contact.hours.body": "We aim to respond to every message within 1–2 business days.",

  // NotFound
  "notFound.title": "¡Ay! This path isn't on the map",
  "notFound.body":
    "Looks like you wandered off the trail. Let's head back and keep exploring with Dora.",
  "notFound.backHome": "Back to home",

  // Age guide — stage ranges
  "age.stage1.range": "Ages 2–3",
  "age.stage2.range": "Ages 4–5",
  "age.stage3.range": "Ages 6+",

  // Gallery — shot captions & tags
  "shot.1.caption": "Explore with Dora",
  "shot.1.tag": "Adventure",
  "shot.2.caption": "Learn words!",
  "shot.2.tag": "Bilingual",
  "shot.3.caption": "Let's make music!",
  "shot.3.tag": "Music",
  "shot.4.caption": "Help friends!",
  "shot.4.tag": "Empathy",
  "shot.5.caption": "Fun activities!",
  "shot.5.tag": "Creativity",
  "shot.6.caption": "Easy to play!",
  "shot.6.tag": "Toddler-friendly",
  "shot.7.caption": "Swiper, no swiping!",
  "shot.7.tag": "Classic moments",
  "shot.8.caption": "Easy to play!",
  "shot.8.tag": "Interactive",

  // Accessibility labels
  "gallery.prevAria": "Previous screenshot",
  "gallery.nextAria": "Next screenshot",
  "gallery.goToAria": "Go to screenshot {n}",
  "video.playAria": "Play trailer",
  "store.apple.aria": "Download on the App Store",
  "store.google.aria": "Get it on Google Play",
  "tst.starsAria": "{value} out of 5 stars",
  "consent.aria": "Cookie consent",

  // Contact — email body labels
  "contact.mail.name": "Name",
  "contact.mail.email": "Email",

  // Press page
  "press.eyebrow": "Press & media",
  "press.title": "Media kit",
  "press.intro": "Assets, facts and contact details for press, reviewers and partners covering {app}",
  "press.factsheet": "Fact sheet",
  "press.brandAssets": "Brand assets",
  "press.screenshots": "Screenshots",
  "press.fact.appName": "App name",
  "press.fact.developer": "Developer",
  "press.fact.category": "Category",
  "press.fact.category.val": "Education · Kids",
  "press.fact.price": "Price",
  "press.fact.price.val": "Free · optional subscription",
  "press.fact.ageRating": "Age rating",
  "press.fact.languages": "Languages",
  "press.asset.icon": "App icon",
  "press.asset.banner": "Social banner",
  "press.screenshot.alt": "Screenshot {n}: {caption}",
  "press.enquiries.title": "Press enquiries",
  "press.enquiries.body": "For interviews, review codes or additional assets, reach out to",

  // Footer — press link
  "footer.link.press": "Press kit",

  // Language switcher
  "lang.switchAria": "Change language",
};

const es: Dict = {
  // Nav
  "nav.features": "Funciones",
  "nav.gameplay": "Juego",
  "nav.video": "Vídeo",
  "nav.about": "Acerca de",
  "nav.contact": "Contacto",
  "nav.playFree": "Jugar gratis",

  // Hero
  "hero.badge": "Para mayores de 4 · Educación · Gratis",
  "hero.title1": "¡Explora, aprende y",
  "hero.title2": "juega con Dora!",
  "hero.availableIn": "Disponible en",
  "hero.shortPitch":
    "¡Hola! Acompaña a Dora y sus amigos en un viaje mágico lleno de exploración, música, palabras y amabilidad, pensado especialmente para bebés y niños en edad preescolar.",
  "hero.ratingLine": "{stars} · {count} valoraciones en {source}",
  "hero.ratingChip": "{stars} de valoración",
  "hero.ratingChipSub": "{count} familias",
  "hero.freeChip": "Gratis para jugar",
  "hero.freeChipSub": "Para mayores de 4 · Educación",

  // TrustBar
  "trust.badge1": "Certificado de Privacidad ESRB",
  "trust.badge2": "Pensado para mayores de 4",
  "trust.badge3": "Disponible en 6 idiomas",
  "trust.badge4": "Categoría educación",

  // How it works
  "how.eyebrow": "Cómo funciona",
  "how.title": "Diversión educativa en tres sencillos pasos",
  "how.subtitle": "Tan fácil que lo usan las manos más pequeñas, y tan rico que siguen explorando.",
  "how.step1.title": "Descarga y explora",
  "how.step1.desc":
    "Descarga la app gratis en App Store o Google Play y adéntrate en el colorido mundo interactivo de Dora.",
  "how.step2.title": "Juega y aprende",
  "how.step2.desc":
    "Toca y descubre minijuegos divertidos que enseñan palabras, formas, colores y música, un alegre descubrimiento tras otro.",
  "how.step3.title": "Creced juntos",
  "how.step3.desc":
    "Ayuda a los amigos de Dora, fomenta la amabilidad y la confianza, y mira cómo la curiosidad se convierte en verdaderas primeras habilidades.",

  // Features
  "feat.eyebrow": "Por qué les encanta a niños y familias",
  "feat.title": "Grandes aventuras para pequeños exploradores",
  "feat.subtitle":
    "Cada toque es una oportunidad de explorar, aprender y crecer, dentro del colorido y amigable mundo de Dora.",
  "feature.explore.title": "Explora y descubre",
  "feature.explore.desc":
    "Vive aventuras por lugares vibrantes y emblemáticos, desde la Casita de Dora hasta la Montaña más Alta, despertando la curiosidad y la resolución de problemas por el camino.",
  "feature.words.title": "Aprende palabras",
  "feature.words.desc":
    "Los minijuegos presentan vocabulario y frases básicas en español, convirtiendo cada toque en un momento de aprendizaje bilingüe.",
  "feature.music.title": "Haz música",
  "feature.music.desc":
    "¡A tocar el tambor, bailar y cantar! Las actividades musicales acercan a los niños al ritmo y los sonidos del colorido mundo de Dora.",
  "feature.friends.title": "Ayuda a los amigos",
  "feature.friends.desc":
    "Únete a Botas, Tico, Isa y Benny en sus misiones y desarrolla empatía, amabilidad y trabajo en equipo en cada reto.",
  "feature.activities.title": "Actividades divertidas",
  "feature.activities.desc":
    "Formas, colores, conteo y juego creativo mantienen la mente ocupada con retos sin frustraciones hechos para manos pequeñas.",
  "feature.safe.title": "Seguro y apto para niños",
  "feature.safe.desc":
    "Con Certificado de Privacidad ESRB y diseñado en torno a los hitos preescolares, para que las familias estén tranquilas mientras los peques exploran y aprenden.",

  // Characters
  "char.eyebrow": "Conoce a los amigos",
  "char.title": "Una aventura es mejor en compañía",
  "char.subtitle": "Dile hola a Dora y a los amigos con los que tu peque explorará, aprenderá y jugará.",
  "char.dora.role": "La exploradora",
  "char.dora.blurb": "Valiente, curiosa y siempre lista para la próxima aventura con su fiel Mochila y su Mapa.",
  "char.boots.role": "Su mejor amigo",
  "char.boots.blurb": "El juguetón monito de Dora, al que le encanta saltar, trepar y echar una mano.",
  "char.tico.role": "La ardilla",
  "char.tico.blurb": "Una ardillita amistosa y veloz que corretea por todas partes y habla sobre todo en español.",
  "char.isa.role": "La iguana",
  "char.isa.blurb": "Una iguana con muy buena mano para las plantas, que adora las flores, los jardines y resolver acertijos en equipo.",
  "char.benny.role": "El toro",
  "char.benny.blurb": "Un toro tierno y bonachón, siempre alegre y dispuesto a cantar una canción.",

  // Age guide
  "age.eyebrow": "Crece con tu peque",
  "age.title": "Aprendizaje para cada pequeña etapa",
  "age.subtitle": "Juego adecuado a su edad que acompaña los hitos preescolares a medida que tu peque crece.",
  "age.stage1.title": "Primeros descubrimientos",
  "age.stage1.point1": "Toques, arrastres y juego sencillo de causa y efecto",
  "age.stage1.point2": "Colores, formas y primeras palabras",
  "age.stage1.point3": "Exploración suave y sin frustraciones",
  "age.stage2.title": "Habilidades en crecimiento",
  "age.stage2.point1": "Vocabulario y frases básicas en español",
  "age.stage2.point2": "Contar, emparejar y resolver problemas",
  "age.stage2.point3": "Ayudar a los amigos fomenta la empatía y el trabajo en equipo",
  "age.stage3.title": "Exploradores con confianza",
  "age.stage3.point1": "Aventuras más largas y minijuegos más completos",
  "age.stage3.point2": "Actividades creativas y creación musical",
  "age.stage3.point3": "Juego autónomo y narración de historias",

  // Gallery
  "gallery.eyebrow": "Un vistazo por dentro",
  "gallery.title": "Vive la aventura en acción",
  "gallery.subtitle": "Mundos luminosos y amigables diseñados para manos pequeñas y grandes imaginaciones.",

  // Video
  "video.eyebrow": "Mira el tráiler",
  "video.title": "Dale al play y conoce a Dora",
  "video.subtitle": "Echa un vistazo a las canciones, los amigos y los minijuegos que te esperan en la app.",

  // About
  "about.eyebrow": "Dando vida a la serie",
  "about.title": "Más que un juego: una auténtica experiencia Dora",
  "about.body":
    "Capturamos el corazón de la serie: interactividad, educación bilingüe y espíritu aventurero. Es como entrar dentro de un episodio, donde cada descubrimiento fomenta la curiosidad, la confianza y la amabilidad.",
  "about.check1": "Diseñado para bebés, preescolares y niños pequeños",
  "about.check2": "Juego sin frustraciones hecho para manos pequeñas",
  "about.check3": "Sello de Privacidad Infantil Certificado por ESRB",
  "about.stat1.label": "años de aventuras de Dora queridas en todo el mundo",
  "about.stat2.label": "países donde se ve a Dora",
  "about.stat3.label": "idiomas en el universo de Dora",
  "about.stat4.label": "clasificación por edad, creada para los hitos preescolares",

  // Comparison
  "cmp.eyebrow": "Qué incluye",
  "cmp.title": "Gratis para empezar, mucho más por explorar",
  "cmp.subtitle":
    "Descárgala y juega gratis. Desbloquea la aventura completa cuando quieras con una suscripción opcional.",
  "cmp.col.feature": "Función",
  "cmp.col.free": "Gratis",
  "cmp.col.premium": "Premium",
  "cmp.row.explore": "Explorar mundos interactivos",
  "cmp.row.minigames": "Minijuegos para aprender jugando",
  "cmp.row.bilingual": "Palabras y frases bilingües",
  "cmp.row.music": "Música y actividades creativas",
  "cmp.row.friends": "Ayudar a los amigos de Dora",
  "cmp.row.updates": "Contenido nuevo y actualizaciones",
  "cmp.row.adlight": "Experiencia con pocos anuncios y segura para niños",
  "cmp.row.cancel": "Cancela cuando quieras",
  "cmp.val.sample": "Muestra",
  "cmp.val.fullAccess": "Acceso completo",
  "cmp.val.limited": "Limitado",
  "cmp.val.allUnlocked": "Todo desbloqueado",
  "cmp.val.basic": "Básico",
  "cmp.val.everything": "Todo",
  "cmp.footnote": "Descarga gratis · Suscripción opcional · Cancela cuando quieras",

  // Testimonials
  "tst.eyebrow": "Querida por las familias",
  "tst.title": "Lo que dicen las familias",
  "tst.subtitle": "Únete a miles de familias que exploran y aprenden con Dora cada día.",
  "tst.q1":
    "Mi hija de 3 años está encantada. Está aprendiendo palabras en español sin darse cuenta de que está aprendiendo. Los minijuegos son perfectos para manos pequeñas.",
  "tst.q1.role": "Mamá de una peque",
  "tst.q2":
    "Por fin una app infantil con la que me siento bien. Sin anuncios inquietantes, realmente educativa, y a mi hijo le encanta ayudar a los amigos de Dora. Vale totalmente la pena.",
  "tst.q2.role": "Papá de dos",
  "tst.q3":
    "Las actividades musicales triunfan en casa: bailamos juntos cada tarde. Es colorida, amigable y muy fácil de usar para los más peques.",
  "tst.q3.role": "Madre y maestra de preescolar",
  "tst.q4":
    "Me encanta que despierte la curiosidad. Mi hija habla todo el día de los lugares que 'exploró'. Preciosa y claramente hecha para niños.",
  "tst.q4.role": "Mamá de un peque en preescolar",

  // FAQ
  "faq.eyebrow": "Preguntas y respuestas",
  "faq.title": "Todo lo que preguntan las familias",
  "faq.subtitle": "¿Aún tienes dudas? Siempre estamos encantados de ayudar, solo escríbenos.",
  "faq.q1": "¿Es gratis descargar la app?",
  "faq.a1":
    "Sí. Dora: Explore and Play! se descarga gratis tanto en App Store como en Google Play. También ofrece suscripciones opcionales y compras dentro de la app que desbloquean contenido extra.",
  "faq.q2": "¿Para qué edad está pensada la app?",
  "faq.a2":
    "Está hecha para bebés, niños en edad preescolar y pequeños, con clasificación para mayores de 4. El juego es sencillo, sin frustraciones y pensado para manos pequeñas.",
  "faq.q3": "¿Es segura para los niños?",
  "faq.a3":
    "Por supuesto. La app cuenta con el Sello de Privacidad Infantil Certificado por ESRB y está diseñada pensando en la seguridad infantil. No recopilamos información personal de los niños con fines publicitarios.",
  "faq.q4": "¿Qué aprenderá mi peque?",
  "faq.a4":
    "Los niños aprenden vocabulario básico en español, formas, colores y a contar, además de resolución de problemas, creatividad y habilidades socioemocionales como la amabilidad y el trabajo en equipo, todo jugando.",
  "faq.q5": "¿Qué idiomas están disponibles?",
  "faq.a5": "La app está disponible en inglés, francés, alemán, italiano, portugués y español.",
  "faq.q6": "¿Cómo gestiono o cancelo una suscripción?",
  "faq.a6":
    "Las suscripciones se gestionan desde los ajustes de tu cuenta de App Store o Google Play. Puedes desactivar la renovación automática o cancelar cuando quieras, al menos 24 horas antes de que termine el periodo.",

  // CTA
  "cta.title": "¿List@ para una aventura?",
  "cta.subtitle":
    "Descarga Dora: Explore and Play! hoy y que empiece la diversión — gratis en App Store y Google Play.",

  // Store buttons
  "store.apple.pre": "Descárgala en el",
  "store.google.pre": "Disponible en",

  // Footer
  "footer.tagline":
    "Una alegre aventura de aprendizaje bilingüe para bebés y niños en edad preescolar. Explora, aprende y juega con Dora y sus amigos.",
  "footer.explore": "Explorar",
  "footer.legal": "Legal",
  "footer.link.features": "Funciones",
  "footer.link.gameplay": "Juego",
  "footer.link.trailer": "Tráiler",
  "footer.link.faq": "Preguntas frecuentes",
  "footer.link.contact": "Contacto",
  "footer.link.privacy": "Política de privacidad",
  "footer.link.terms": "Términos de uso",
  "footer.copyright": "© {year} {company} · N.º de empresa {number}. Todos los derechos reservados.",
  "footer.trademark":
    "Dora y todos los títulos, logotipos y personajes relacionados son marcas registradas de sus respectivos propietarios. Esta es una página de promoción de la app.",

  // Consent banner
  "consent.title": "Valoramos tu privacidad",
  "consent.body":
    "Usamos cookies mínimas para que el sitio funcione y entender cómo se utiliza. El tráiler solo se carga cuando decides reproducirlo. Consulta nuestra",
  "consent.privacyLink": "Política de privacidad",
  "consent.accept": "Aceptar",
  "consent.decline": "Rechazar",

  // Scroll to top
  "scrollTop.aria": "Volver arriba",

  // Legal layout chrome
  "legal.backHome": "Volver al inicio",
  "legal.onThisPage": "En esta página",
  "legal.lastUpdated": "Última actualización:",

  // Privacy / Terms chrome
  "legal.eyebrow": "Legal",
  "privacy.title": "Política de privacidad",
  "privacy.intro":
    "Proteger la privacidad de los niños es el centro de cómo creamos y gestionamos la app. Esta política explica, en lenguaje claro, qué hacemos y qué no hacemos con los datos.",
  "terms.title": "Términos de uso",
  "terms.intro":
    "Estos términos rigen el uso de la app y de este sitio web. La app está hecha para niños y debe usarse bajo la supervisión de un padre, madre o tutor.",

  // Contact page
  "contact.eyebrow": "Estamos aquí para ayudar",
  "contact.title": "Ponte en contacto",
  "contact.intro":
    "¿Preguntas, comentarios o consultas de soporte sobre {app} A nuestro equipo le encantaría saber de ti. Escríbenos por el medio que mejor te venga.",
  "contact.card.email.label": "Escríbenos",
  "contact.card.email.note": "Respondemos en 1–2 días laborables.",
  "contact.card.call.label": "Llámanos",
  "contact.card.call.note": "Lun–Vie, en horario comercial.",
  "contact.card.visit.label": "Visítanos",
  "contact.form.title": "Envíanos un mensaje",
  "contact.form.intro": "Rellena el formulario y tu app de correo se abrirá con todo listo para enviar.",
  "contact.form.name": "Nombre",
  "contact.form.name.ph": "Tu nombre",
  "contact.form.email": "Correo electrónico",
  "contact.form.email.ph": "tu@ejemplo.com",
  "contact.form.subject": "Asunto",
  "contact.form.subject.ph": "¿Cómo podemos ayudarte?",
  "contact.form.message": "Mensaje",
  "contact.form.message.ph": "Escribe tu mensaje...",
  "contact.form.send": "Enviar mensaje",
  "contact.form.defaultSubject": "Mensaje desde budgetudios.com",
  "contact.company.number": "N.º de empresa",
  "contact.company.status": "Estado",
  "contact.company.founded": "Fundada",
  "contact.hours.title": "Horario de soporte",
  "contact.hours.body": "Procuramos responder a cada mensaje en 1–2 días laborables.",

  // NotFound
  "notFound.title": "¡Ay! Este camino no está en el mapa",
  "notFound.body":
    "Parece que te saliste del sendero. Volvamos y sigamos explorando con Dora.",
  "notFound.backHome": "Volver al inicio",

  // Age guide — stage ranges
  "age.stage1.range": "2–3 años",
  "age.stage2.range": "4–5 años",
  "age.stage3.range": "6+ años",

  // Gallery — shot captions & tags
  "shot.1.caption": "¡Explora con Dora!",
  "shot.1.tag": "Aventura",
  "shot.2.caption": "¡Aprende palabras!",
  "shot.2.tag": "Bilingüe",
  "shot.3.caption": "¡Vamos a hacer música!",
  "shot.3.tag": "Música",
  "shot.4.caption": "¡Ayuda a los amigos!",
  "shot.4.tag": "Empatía",
  "shot.5.caption": "¡Actividades divertidas!",
  "shot.5.tag": "Creatividad",
  "shot.6.caption": "¡Fácil de jugar!",
  "shot.6.tag": "Para los más peques",
  "shot.7.caption": "¡Swiper, no toques!",
  "shot.7.tag": "Momentos clásicos",
  "shot.8.caption": "¡Fácil de jugar!",
  "shot.8.tag": "Interactivo",

  // Accessibility labels
  "gallery.prevAria": "Captura anterior",
  "gallery.nextAria": "Captura siguiente",
  "gallery.goToAria": "Ir a la captura {n}",
  "video.playAria": "Reproducir el tráiler",
  "store.apple.aria": "Descárgala en el App Store",
  "store.google.aria": "Disponible en Google Play",
  "tst.starsAria": "{value} de 5 estrellas",
  "consent.aria": "Consentimiento de cookies",

  // Contact — email body labels
  "contact.mail.name": "Nombre",
  "contact.mail.email": "Correo electrónico",

  // Press page
  "press.eyebrow": "Prensa y medios",
  "press.title": "Kit de prensa",
  "press.intro": "Recursos, datos y contacto para prensa, reseñadores y colaboradores sobre {app}",
  "press.factsheet": "Ficha técnica",
  "press.brandAssets": "Recursos de marca",
  "press.screenshots": "Capturas de pantalla",
  "press.fact.appName": "Nombre de la app",
  "press.fact.developer": "Desarrollador",
  "press.fact.category": "Categoría",
  "press.fact.category.val": "Educación · Niños",
  "press.fact.price": "Precio",
  "press.fact.price.val": "Gratis · suscripción opcional",
  "press.fact.ageRating": "Clasificación por edad",
  "press.fact.languages": "Idiomas",
  "press.asset.icon": "Icono de la app",
  "press.asset.banner": "Banner para redes",
  "press.screenshot.alt": "Captura {n}: {caption}",
  "press.enquiries.title": "Consultas de prensa",
  "press.enquiries.body": "Para entrevistas, códigos de reseña o recursos adicionales, escríbenos a",

  // Footer — press link
  "footer.link.press": "Kit de prensa",

  // Language switcher
  "lang.switchAria": "Cambiar idioma",
};

const fr: Dict = {
  // Nav
  "nav.features": "Fonctions",
  "nav.gameplay": "Jeu",
  "nav.video": "Vidéo",
  "nav.about": "À propos",
  "nav.contact": "Contact",
  "nav.playFree": "Jouer gratuitement",

  // Hero
  "hero.badge": "Dès 4 ans · Éducation · Gratuit",
  "hero.title1": "Explore, apprends et",
  "hero.title2": "joue avec Dora !",
  "hero.availableIn": "Disponible en",
  "hero.shortPitch":
    "¡Hola ! Accompagne Dora et ses amis dans un voyage magique rempli d'exploration, de musique, de mots et de gentillesse — spécialement conçu pour les tout-petits et les enfants d'âge préscolaire.",
  "hero.ratingLine": "{stars} · {count} avis sur l'{source}",
  "hero.ratingChip": "{stars} de note",
  "hero.ratingChipSub": "{count} parents",
  "hero.freeChip": "Gratuit à jouer",
  "hero.freeChipSub": "Dès 4 ans · Éducation",

  // TrustBar
  "trust.badge1": "Certifié Confidentialité ESRB",
  "trust.badge2": "Conçu dès 4 ans",
  "trust.badge3": "Disponible en 6 langues",
  "trust.badge4": "Catégorie éducation",

  // How it works
  "how.eyebrow": "Comment ça marche",
  "how.title": "Apprendre en s'amusant en trois étapes simples",
  "how.subtitle": "Assez simple pour les plus petites mains, assez riche pour continuer à explorer.",
  "how.step1.title": "Télécharge et explore",
  "how.step1.desc":
    "Télécharge l'appli gratuitement sur l'App Store ou Google Play et entre dans l'univers coloré et interactif de Dora.",
  "how.step2.title": "Joue et apprends",
  "how.step2.desc":
    "Découvre des mini-jeux ludiques qui enseignent les mots, les formes, les couleurs et la musique — une joyeuse découverte à la fois.",
  "how.step3.title": "Grandissez ensemble",
  "how.step3.desc":
    "Aide les amis de Dora, cultive la gentillesse et la confiance, et regarde la curiosité se transformer en véritables premières compétences.",

  // Features
  "feat.eyebrow": "Pourquoi enfants et parents l'adorent",
  "feat.title": "De grandes aventures pour les petits explorateurs",
  "feat.subtitle":
    "Chaque tap est une occasion d'explorer, d'apprendre et de grandir — au cœur de l'univers coloré et bienveillant de Dora.",
  "feature.explore.title": "Explore et découvre",
  "feature.explore.desc":
    "Pars à l'aventure dans des lieux vibrants et emblématiques — de la Casita de Dora à la Plus Haute Montagne — en éveillant la curiosité et le sens de la résolution de problèmes en chemin.",
  "feature.words.title": "Apprends des mots",
  "feature.words.desc":
    "Des mini-jeux ludiques présentent du vocabulaire et des expressions de base en espagnol, transformant chaque tap en moment d'apprentissage bilingue.",
  "feature.music.title": "Fais de la musique",
  "feature.music.desc":
    "Tambour, danse et chant ! Les activités musicales permettent aux enfants de s'approprier le rythme et les sons de l'univers coloré de Dora.",
  "feature.friends.title": "Aide les amis",
  "feature.friends.desc":
    "Rejoins Babouche, Tico, Isa et Benny dans leurs missions et développe l'empathie, la gentillesse et l'esprit d'équipe à chaque défi.",
  "feature.activities.title": "Activités amusantes",
  "feature.activities.desc":
    "Formes, couleurs, comptage et jeu créatif occupent les petits esprits avec des défis sans frustration, pensés pour les petites mains.",
  "feature.safe.title": "Sûr et adapté aux enfants",
  "feature.safe.desc":
    "Certifié Confidentialité ESRB et conçu autour des étapes préscolaires, pour que les parents soient sereins pendant que les enfants explorent et apprennent.",

  // Characters
  "char.eyebrow": "Rencontre les amis",
  "char.title": "Une aventure est plus belle à plusieurs",
  "char.subtitle": "Dis hola à Dora et aux amis avec qui ton enfant va explorer, apprendre et jouer.",
  "char.dora.role": "L'exploratrice",
  "char.dora.blurb": "Courageuse, curieuse et toujours prête pour la prochaine aventure avec son fidèle Sac à dos et sa Carte.",
  "char.boots.role": "Son meilleur ami",
  "char.boots.blurb": "Le petit singe espiègle de Dora, qui adore sauter, grimper et donner un coup de main.",
  "char.tico.role": "L'écureuil",
  "char.tico.blurb": "Un petit écureuil rapide et amical qui file partout et parle surtout espagnol.",
  "char.isa.role": "L'iguane",
  "char.isa.blurb": "Une iguane à la main verte qui adore les fleurs, les jardins et résoudre des énigmes en équipe.",
  "char.benny.role": "Le taureau",
  "char.benny.blurb": "Un taureau tout doux et au grand cœur, toujours joyeux et prêt à chanter.",

  // Age guide
  "age.eyebrow": "Grandit avec votre enfant",
  "age.title": "Un apprentissage pour chaque petite étape",
  "age.subtitle": "Un jeu adapté à l'âge qui accompagne les étapes préscolaires à mesure que votre enfant grandit.",
  "age.stage1.title": "Premières découvertes",
  "age.stage1.point1": "Taps, glissés et jeu simple de cause à effet",
  "age.stage1.point2": "Couleurs, formes et premiers mots",
  "age.stage1.point3": "Exploration douce et sans frustration",
  "age.stage2.title": "Des compétences qui grandissent",
  "age.stage2.point1": "Vocabulaire et expressions de base en espagnol",
  "age.stage2.point2": "Compter, associer et résoudre des problèmes",
  "age.stage2.point3": "Aider les amis développe l'empathie et l'esprit d'équipe",
  "age.stage3.title": "Des explorateurs confiants",
  "age.stage3.point1": "Des aventures plus longues et des mini-jeux plus riches",
  "age.stage3.point2": "Activités créatives et création musicale",
  "age.stage3.point3": "Jeu en autonomie et narration d'histoires",

  // Gallery
  "gallery.eyebrow": "Un aperçu de l'intérieur",
  "gallery.title": "L'aventure en action",
  "gallery.subtitle": "Des univers lumineux et bienveillants conçus pour les petites mains et les grandes imaginations.",

  // Video
  "video.eyebrow": "Regarde la bande-annonce",
  "video.title": "Appuie sur lecture et rencontre Dora",
  "video.subtitle": "Découvre un avant-goût des chansons, des amis et des mini-jeux qui t'attendent dans l'appli.",

  // About
  "about.eyebrow": "Donner vie à la série",
  "about.title": "Plus qu'un jeu — une véritable expérience Dora",
  "about.body":
    "Nous avons capturé l'esprit de la série : interactivité, éducation bilingue et âme aventurière. C'est comme entrer dans un épisode, où chaque découverte nourrit la curiosité, la confiance et la gentillesse.",
  "about.check1": "Conçu pour les tout-petits, la maternelle et les jeunes enfants",
  "about.check2": "Un jeu sans frustration pensé pour les petites mains",
  "about.check3": "Sceau de confidentialité pour enfants certifié ESRB",
  "about.stat1.label": "ans d'aventures de Dora appréciées dans le monde entier",
  "about.stat2.label": "pays où Dora est diffusée",
  "about.stat3.label": "langues dans l'univers de Dora",
  "about.stat4.label": "classification d'âge, pensée pour les étapes préscolaires",

  // Comparison
  "cmp.eyebrow": "Ce qui est inclus",
  "cmp.title": "Gratuit pour commencer, bien plus à explorer",
  "cmp.subtitle":
    "Téléchargez et jouez gratuitement. Débloquez l'aventure complète à tout moment avec un abonnement facultatif.",
  "cmp.col.feature": "Fonction",
  "cmp.col.free": "Gratuit",
  "cmp.col.premium": "Premium",
  "cmp.row.explore": "Explorer des mondes interactifs",
  "cmp.row.minigames": "Mini-jeux pour apprendre en jouant",
  "cmp.row.bilingual": "Mots et expressions bilingues",
  "cmp.row.music": "Musique et activités créatives",
  "cmp.row.friends": "Aider les amis de Dora",
  "cmp.row.updates": "Nouveau contenu et mises à jour",
  "cmp.row.adlight": "Expérience peu publicitaire et sûre pour les enfants",
  "cmp.row.cancel": "Annulable à tout moment",
  "cmp.val.sample": "Aperçu",
  "cmp.val.fullAccess": "Accès complet",
  "cmp.val.limited": "Limité",
  "cmp.val.allUnlocked": "Tout débloqué",
  "cmp.val.basic": "De base",
  "cmp.val.everything": "Tout",
  "cmp.footnote": "Téléchargement gratuit · Abonnement facultatif · Annulable à tout moment",

  // Testimonials
  "tst.eyebrow": "Adoptée par les familles",
  "tst.title": "Ce que disent les parents",
  "tst.subtitle": "Rejoignez des milliers de familles qui explorent et apprennent avec Dora chaque jour.",
  "tst.q1":
    "Ma fille de 3 ans est accro. Elle apprend des mots d'espagnol sans même s'en rendre compte. Les mini-jeux sont parfaits pour les petites mains.",
  "tst.q1.role": "Maman d'un enfant",
  "tst.q2":
    "Enfin une appli pour enfants qui me rassure. Pas de pubs douteuses, vraiment éducative, et mon fils adore aider les amis de Dora. Elle vaut vraiment le coup.",
  "tst.q2.role": "Papa de deux enfants",
  "tst.q3":
    "Les activités musicales font un tabac à la maison — on danse ensemble chaque soir. C'est coloré, bienveillant et si facile à utiliser pour les tout-petits.",
  "tst.q3.role": "Parent et enseignante en maternelle",
  "tst.q4":
    "J'adore qu'elle nourrisse la curiosité. Ma fille parle toute la journée des endroits qu'elle a « explorés ». Magnifiquement conçue et clairement pensée pour les enfants.",
  "tst.q4.role": "Maman d'un enfant en maternelle",

  // FAQ
  "faq.eyebrow": "Questions et réponses",
  "faq.title": "Tout ce que les parents demandent",
  "faq.subtitle": "Encore des questions ? Nous sommes toujours ravis d'aider — contactez-nous.",
  "faq.q1": "L'appli est-elle gratuite à télécharger ?",
  "faq.a1":
    "Oui. Dora: Explore and Play! est gratuite au téléchargement sur l'App Store et Google Play. Elle propose aussi des abonnements facultatifs et des achats intégrés qui débloquent du contenu supplémentaire.",
  "faq.q2": "Pour quel âge l'appli est-elle conçue ?",
  "faq.a2":
    "Elle est faite pour les tout-petits, les enfants d'âge préscolaire et les jeunes enfants, avec une classification dès 4 ans. Le jeu est simple, sans frustration et pensé pour les petites mains.",
  "faq.q3": "Est-elle sûre pour les enfants ?",
  "faq.a3":
    "Absolument. L'appli possède le Sceau de confidentialité pour enfants certifié ESRB et est conçue en pensant à la sécurité des enfants. Nous ne collectons pas d'informations personnelles auprès des enfants à des fins publicitaires.",
  "faq.q4": "Qu'est-ce que mon enfant va apprendre ?",
  "faq.a4":
    "Les enfants acquièrent du vocabulaire de base en espagnol, les formes, les couleurs et le comptage, ainsi que la résolution de problèmes, la créativité et des compétences socio-émotionnelles comme la gentillesse et l'esprit d'équipe — le tout en jouant.",
  "faq.q5": "Quelles langues sont prises en charge ?",
  "faq.a5": "L'appli est disponible en anglais, français, allemand, italien, portugais et espagnol.",
  "faq.q6": "Comment gérer ou annuler un abonnement ?",
  "faq.a6":
    "Les abonnements se gèrent depuis les paramètres de votre compte App Store ou Google Play. Vous pouvez désactiver le renouvellement automatique ou annuler à tout moment, au moins 24 heures avant la fin de la période.",

  // CTA
  "cta.title": "Prêt pour l'aventure ?",
  "cta.subtitle":
    "Téléchargez Dora: Explore and Play! dès aujourd'hui — gratuit sur l'App Store et Google Play.",

  // Store buttons
  "store.apple.pre": "Télécharger sur l'",
  "store.google.pre": "Disponible sur",

  // Footer
  "footer.tagline":
    "Une joyeuse aventure d'apprentissage bilingue pour les tout-petits et les enfants d'âge préscolaire. Explore, apprends et joue avec Dora et ses amis.",
  "footer.explore": "Explorer",
  "footer.legal": "Légal",
  "footer.link.features": "Fonctions",
  "footer.link.gameplay": "Jeu",
  "footer.link.trailer": "Bande-annonce",
  "footer.link.faq": "FAQ",
  "footer.link.contact": "Contact",
  "footer.link.privacy": "Politique de confidentialité",
  "footer.link.terms": "Conditions d'utilisation",
  "footer.copyright": "© {year} {company} · N° d'entreprise {number}. Tous droits réservés.",
  "footer.trademark":
    "Dora ainsi que tous les titres, logos et personnages associés sont des marques déposées de leurs propriétaires respectifs. Ceci est une page de promotion d'application.",

  // Consent banner
  "consent.title": "Nous respectons votre vie privée",
  "consent.body":
    "Nous utilisons un minimum de cookies pour faire fonctionner le site et comprendre son utilisation. La bande-annonce ne se charge que si vous choisissez de la lire. Consultez notre",
  "consent.privacyLink": "Politique de confidentialité",
  "consent.accept": "Accepter",
  "consent.decline": "Refuser",

  // Scroll to top
  "scrollTop.aria": "Revenir en haut",

  // Legal layout chrome
  "legal.backHome": "Retour à l'accueil",
  "legal.onThisPage": "Sur cette page",
  "legal.lastUpdated": "Dernière mise à jour :",

  // Privacy / Terms chrome
  "legal.eyebrow": "Légal",
  "privacy.title": "Politique de confidentialité",
  "privacy.intro":
    "Protéger la vie privée des enfants est au cœur de la façon dont nous concevons et exploitons l'appli. Cette politique explique, en langage clair, ce que nous faisons et ne faisons pas des données.",
  "terms.title": "Conditions d'utilisation",
  "terms.intro":
    "Ces conditions régissent votre utilisation de l'appli et de ce site web. L'appli est destinée aux enfants et doit être utilisée sous la supervision d'un parent ou d'un tuteur.",

  // Contact page
  "contact.eyebrow": "Nous sommes là pour vous aider",
  "contact.title": "Contactez-nous",
  "contact.intro":
    "Des questions, des retours ou des demandes d'assistance à propos de {app} Notre équipe serait ravie de vous lire. Contactez-nous par le moyen qui vous convient le mieux.",
  "contact.card.email.label": "Écrivez-nous",
  "contact.card.email.note": "Nous répondons sous 1 à 2 jours ouvrés.",
  "contact.card.call.label": "Appelez-nous",
  "contact.card.call.note": "Lun–Ven, en journée.",
  "contact.card.visit.label": "Rendez-nous visite",
  "contact.form.title": "Envoyez-nous un message",
  "contact.form.intro": "Remplissez le formulaire et votre messagerie s'ouvrira avec tout prêt à envoyer.",
  "contact.form.name": "Nom",
  "contact.form.name.ph": "Votre nom",
  "contact.form.email": "E-mail",
  "contact.form.email.ph": "vous@exemple.com",
  "contact.form.subject": "Objet",
  "contact.form.subject.ph": "Comment pouvons-nous aider ?",
  "contact.form.message": "Message",
  "contact.form.message.ph": "Écrivez votre message...",
  "contact.form.send": "Envoyer le message",
  "contact.form.defaultSubject": "Message depuis budgetudios.com",
  "contact.company.number": "N° d'entreprise",
  "contact.company.status": "Statut",
  "contact.company.founded": "Créée le",
  "contact.hours.title": "Heures d'assistance",
  "contact.hours.body": "Nous visons à répondre à chaque message sous 1 à 2 jours ouvrés.",

  // NotFound
  "notFound.title": "¡Ay ! Ce chemin n'est pas sur la carte",
  "notFound.body":
    "On dirait que tu t'es éloigné du sentier. Revenons en arrière et continuons à explorer avec Dora.",
  "notFound.backHome": "Retour à l'accueil",

  // Age guide — stage ranges
  "age.stage1.range": "2–3 ans",
  "age.stage2.range": "4–5 ans",
  "age.stage3.range": "6 ans et +",

  // Gallery — shot captions & tags
  "shot.1.caption": "Explore avec Dora !",
  "shot.1.tag": "Aventure",
  "shot.2.caption": "Apprends des mots !",
  "shot.2.tag": "Bilingue",
  "shot.3.caption": "Faisons de la musique !",
  "shot.3.tag": "Musique",
  "shot.4.caption": "Aide les amis !",
  "shot.4.tag": "Empathie",
  "shot.5.caption": "Des activités amusantes !",
  "shot.5.tag": "Créativité",
  "shot.6.caption": "Facile à jouer !",
  "shot.6.tag": "Adapté aux tout-petits",
  "shot.7.caption": "Chipeur, arrête de chiper !",
  "shot.7.tag": "Moments cultes",
  "shot.8.caption": "Facile à jouer !",
  "shot.8.tag": "Interactif",

  // Accessibility labels
  "gallery.prevAria": "Capture précédente",
  "gallery.nextAria": "Capture suivante",
  "gallery.goToAria": "Aller à la capture {n}",
  "video.playAria": "Lire la bande-annonce",
  "store.apple.aria": "Télécharger sur l'App Store",
  "store.google.aria": "Disponible sur Google Play",
  "tst.starsAria": "{value} sur 5 étoiles",
  "consent.aria": "Consentement aux cookies",

  // Contact — email body labels
  "contact.mail.name": "Nom",
  "contact.mail.email": "E-mail",

  // Press page
  "press.eyebrow": "Presse et médias",
  "press.title": "Kit presse",
  "press.intro": "Ressources, informations et contacts pour la presse, les testeurs et les partenaires au sujet de {app}",
  "press.factsheet": "Fiche d'information",
  "press.brandAssets": "Ressources de marque",
  "press.screenshots": "Captures d'écran",
  "press.fact.appName": "Nom de l'appli",
  "press.fact.developer": "Développeur",
  "press.fact.category": "Catégorie",
  "press.fact.category.val": "Éducation · Enfants",
  "press.fact.price": "Prix",
  "press.fact.price.val": "Gratuit · abonnement facultatif",
  "press.fact.ageRating": "Classification d'âge",
  "press.fact.languages": "Langues",
  "press.asset.icon": "Icône de l'appli",
  "press.asset.banner": "Bannière pour les réseaux",
  "press.screenshot.alt": "Capture {n} : {caption}",
  "press.enquiries.title": "Demandes presse",
  "press.enquiries.body": "Pour des interviews, des codes de test ou des ressources supplémentaires, contactez",

  // Footer — press link
  "footer.link.press": "Kit presse",

  // Language switcher
  "lang.switchAria": "Changer de langue",
};

const de: Dict = {
  // Nav
  "nav.features": "Funktionen",
  "nav.gameplay": "Gameplay",
  "nav.video": "Video",
  "nav.about": "Über",
  "nav.contact": "Kontakt",
  "nav.playFree": "Kostenlos spielen",

  // Hero
  "hero.badge": "Ab 4 Jahren · Bildung · Kostenlos",
  "hero.title1": "Entdecke, lerne &",
  "hero.title2": "spiele mit Dora!",
  "hero.availableIn": "Verfügbar auf",
  "hero.shortPitch":
    "¡Hola! Begleite Dora und ihre Freunde auf einer magischen Reise voller Entdeckungen, Musik, Wörter und Freundlichkeit — besonders für Kleinkinder und Vorschulkinder gemacht.",
  "hero.ratingLine": "{stars} · {count} Bewertungen im {source}",
  "hero.ratingChip": "{stars} Bewertung",
  "hero.ratingChipSub": "{count} Eltern",
  "hero.freeChip": "Kostenlos spielen",
  "hero.freeChipSub": "Ab 4 Jahren · Bildung",

  // TrustBar
  "trust.badge1": "ESRB-datenschutzzertifiziert",
  "trust.badge2": "Ab 4 Jahren gemacht",
  "trust.badge3": "In 6 Sprachen verfügbar",
  "trust.badge4": "Kategorie Bildung",

  // How it works
  "how.eyebrow": "So funktioniert's",
  "how.title": "Lernspaß in drei einfachen Schritten",
  "how.subtitle": "Einfach genug für die kleinsten Hände, reichhaltig genug zum Weiterentdecken.",
  "how.step1.title": "Herunterladen & entdecken",
  "how.step1.desc":
    "Lade die App kostenlos im App Store oder bei Google Play und tauche in Doras bunte, interaktive Welt ein.",
  "how.step2.title": "Spielen & lernen",
  "how.step2.desc":
    "Tippe dich durch verspielte Minispiele, die Wörter, Formen, Farben und Musik vermitteln — eine fröhliche Entdeckung nach der anderen.",
  "how.step3.title": "Gemeinsam wachsen",
  "how.step3.desc":
    "Hilf Doras Freunden, stärke Freundlichkeit und Selbstvertrauen und sieh zu, wie aus Neugier echte erste Lernfähigkeiten werden.",

  // Features
  "feat.eyebrow": "Warum Kinder & Eltern es lieben",
  "feat.title": "Große Abenteuer für kleine Entdecker",
  "feat.subtitle":
    "Jeder Tipp ist eine Chance zu entdecken, zu lernen und zu wachsen — eingebettet in Doras bunte, freundliche Welt.",
  "feature.explore.title": "Entdecken & erforschen",
  "feature.explore.desc":
    "Erlebe Abenteuer an lebendigen, ikonischen Orten — von Doras Casita bis zum höchsten Berg — und wecke dabei Neugier und Problemlösungsfreude.",
  "feature.words.title": "Wörter lernen",
  "feature.words.desc":
    "Verspielte Minispiele führen in einfaches spanisches Vokabular und Redewendungen ein und machen jeden Tipp zu einem zweisprachigen Lernmoment.",
  "feature.music.title": "Musik machen",
  "feature.music.desc":
    "Trommeln, tanzen und singen! Musikalische Aktivitäten lassen Kinder den Rhythmus und die Klänge von Doras bunter Welt erleben.",
  "feature.friends.title": "Freunden helfen",
  "feature.friends.desc":
    "Begleite Boots, Tico, Isa und Benny bei ihren Missionen und entwickle mit jeder Herausforderung Empathie, Freundlichkeit und Teamgeist.",
  "feature.activities.title": "Spaßige Aktivitäten",
  "feature.activities.desc":
    "Formen, Farben, Zählen und kreatives Spiel halten kleine Köpfe mit frustfreien Herausforderungen für kleine Hände beschäftigt.",
  "feature.safe.title": "Sicher & kindgerecht",
  "feature.safe.desc":
    "ESRB-datenschutzzertifiziert und rund um Vorschulmeilensteine gestaltet, damit Eltern entspannen können, während Kinder entdecken und lernen.",

  // Characters
  "char.eyebrow": "Lerne die Freunde kennen",
  "char.title": "Ein Abenteuer ist zusammen schöner",
  "char.subtitle": "Sag hola zu Dora und den Freunden, mit denen dein Kind entdecken, lernen und spielen wird.",
  "char.dora.role": "Die Entdeckerin",
  "char.dora.blurb": "Mutig, neugierig und immer bereit für das nächste Abenteuer mit ihrem treuen Rucksack und ihrer Karte.",
  "char.boots.role": "Bester Freund",
  "char.boots.blurb": "Doras verspielter Äffchen-Kumpel, der gern springt, klettert und mit anpackt.",
  "char.tico.role": "Das Eichhörnchen",
  "char.tico.blurb": "Ein freundliches, flinkes kleines Eichhörnchen, das überall herumflitzt und meistens Spanisch spricht.",
  "char.isa.role": "Der Leguan",
  "char.isa.blurb": "Eine Leguandame mit grünem Daumen, die Blumen, Gärten und gemeinsames Rätsellösen liebt.",
  "char.benny.role": "Der Stier",
  "char.benny.blurb": "Ein sanftmütiger Stier mit großem Herzen, immer fröhlich und für ein Lied zu haben.",

  // Age guide
  "age.eyebrow": "Wächst mit deinem Kind",
  "age.title": "Lernen für jede kleine Entwicklungsstufe",
  "age.subtitle": "Altersgerechtes Spiel, das Vorschulmeilensteine begleitet, während dein Kind wächst.",
  "age.stage1.title": "Erste Entdeckungen",
  "age.stage1.point1": "Tippen, Ziehen und einfaches Ursache-Wirkung-Spiel",
  "age.stage1.point2": "Farben, Formen und erste Wörter",
  "age.stage1.point3": "Sanftes, frustfreies Entdecken",
  "age.stage2.title": "Wachsende Fähigkeiten",
  "age.stage2.point1": "Einfaches spanisches Vokabular und Redewendungen",
  "age.stage2.point2": "Zählen, Zuordnen und Problemlösen",
  "age.stage2.point3": "Freunden helfen stärkt Empathie & Teamgeist",
  "age.stage3.title": "Selbstbewusste Entdecker",
  "age.stage3.point1": "Längere Abenteuer und reichhaltigere Minispiele",
  "age.stage3.point2": "Kreative Aktivitäten und Musizieren",
  "age.stage3.point3": "Eigenständiges Spiel und Geschichtenerzählen",

  // Gallery
  "gallery.eyebrow": "Ein Blick ins Innere",
  "gallery.title": "Erlebe das Abenteuer in Aktion",
  "gallery.subtitle": "Helle, freundliche Welten, gestaltet für kleine Hände und große Fantasie.",

  // Video
  "video.eyebrow": "Sieh dir den Trailer an",
  "video.title": "Drück auf Play und lerne Dora kennen",
  "video.subtitle": "Wirf einen Blick auf die Lieder, Freunde und Minispiele, die in der App warten.",

  // About
  "about.eyebrow": "Die Serie zum Leben erwecken",
  "about.title": "Mehr als ein Spiel — ein echtes Dora-Erlebnis",
  "about.body":
    "Wir haben das Herz der Serie eingefangen: Interaktivität, zweisprachige Bildung und Abenteuergeist. Es ist, als würdest du direkt in eine Folge eintauchen, in der jede Entdeckung Neugier, Selbstvertrauen und Freundlichkeit fördert.",
  "about.check1": "Für Kleinkinder, Vorschule und jüngere Kinder gestaltet",
  "about.check2": "Frustfreies Gameplay für kleine Hände",
  "about.check3": "ESRB-datenschutzzertifiziertes Kinder-Datenschutzsiegel",
  "about.stat1.label": "Jahre Dora-Abenteuer, weltweit geliebt",
  "about.stat2.label": "Länder, in denen Dora zu sehen ist",
  "about.stat3.label": "Sprachen im Dora-Universum",
  "about.stat4.label": "Altersfreigabe, gebaut für Vorschulmeilensteine",

  // Comparison
  "cmp.eyebrow": "Was enthalten ist",
  "cmp.title": "Kostenlos starten, mehr entdecken",
  "cmp.subtitle":
    "Lade herunter und spiele kostenlos. Schalte das volle Abenteuer jederzeit mit einem optionalen Abo frei.",
  "cmp.col.feature": "Funktion",
  "cmp.col.free": "Kostenlos",
  "cmp.col.premium": "Premium",
  "cmp.row.explore": "Interaktive Welten entdecken",
  "cmp.row.minigames": "Minispiele zum Lernen beim Spielen",
  "cmp.row.bilingual": "Zweisprachige Wörter & Sätze",
  "cmp.row.music": "Musik & kreative Aktivitäten",
  "cmp.row.friends": "Doras Freunden helfen",
  "cmp.row.updates": "Neue Inhalte & Updates",
  "cmp.row.adlight": "Werbearmes, kindersicheres Erlebnis",
  "cmp.row.cancel": "Jederzeit kündbar",
  "cmp.val.sample": "Auswahl",
  "cmp.val.fullAccess": "Voller Zugriff",
  "cmp.val.limited": "Begrenzt",
  "cmp.val.allUnlocked": "Alles freigeschaltet",
  "cmp.val.basic": "Basis",
  "cmp.val.everything": "Alles",
  "cmp.footnote": "Kostenloser Download · Optionales Abo · Jederzeit kündbar",

  // Testimonials
  "tst.eyebrow": "Von Familien geliebt",
  "tst.title": "Was Eltern sagen",
  "tst.subtitle": "Schließe dich tausenden Familien an, die jeden Tag mit Dora entdecken und lernen.",
  "tst.q1":
    "Meine 3-Jährige ist begeistert. Sie schnappt spanische Wörter auf, ohne zu merken, dass sie lernt. Die Minispiele sind perfekt für kleine Hände.",
  "tst.q1.role": "Mutter von einem Kind",
  "tst.q2":
    "Endlich eine Kinder-App, bei der ich ein gutes Gefühl habe. Keine gruselige Werbung, wirklich lehrreich, und mein Sohn liebt es, Doras Freunden zu helfen. Jeden Cent wert.",
  "tst.q2.role": "Vater von zwei Kindern",
  "tst.q3":
    "Die Musikaktivitäten sind der Hit bei uns — wir tanzen jeden Abend mit. Sie ist bunt, freundlich und für Kleinkinder so leicht zu bedienen.",
  "tst.q3.role": "Elternteil & Vorschullehrerin",
  "tst.q4":
    "Ich liebe, dass sie Neugier weckt. Meine Tochter erzählt den ganzen Tag von den Orten, die sie 'erkundet' hat. Wunderschön gemacht und klar für Kinder gebaut.",
  "tst.q4.role": "Mutter eines Vorschulkinds",

  // FAQ
  "faq.eyebrow": "Fragen & Antworten",
  "faq.title": "Alles, was Eltern fragen",
  "faq.subtitle": "Noch neugierig? Wir helfen immer gern — melde dich einfach.",
  "faq.q1": "Ist die App kostenlos zum Herunterladen?",
  "faq.a1":
    "Ja. Dora: Explore and Play! ist sowohl im App Store als auch bei Google Play kostenlos zum Herunterladen. Sie bietet außerdem optionale Abos und In-App-Käufe, die zusätzliche Inhalte freischalten.",
  "faq.q2": "Für welches Alter ist die App gedacht?",
  "faq.a2":
    "Sie ist für Kleinkinder, Vorschulkinder und jüngere Kinder gemacht, mit einer Freigabe ab 4 Jahren. Das Gameplay ist einfach, frustfrei und für kleine Hände gebaut.",
  "faq.q3": "Ist sie sicher für Kinder?",
  "faq.a3":
    "Auf jeden Fall. Die App trägt das ESRB-datenschutzzertifizierte Kinder-Datenschutzsiegel und ist mit Blick auf Kindersicherheit gestaltet. Wir erheben keine personenbezogenen Daten von Kindern zu Werbezwecken.",
  "faq.q4": "Was wird mein Kind lernen?",
  "faq.a4":
    "Kinder lernen einfaches spanisches Vokabular, Formen, Farben und Zählen sowie Problemlösen, Kreativität und sozial-emotionale Fähigkeiten wie Freundlichkeit und Teamgeist — alles spielerisch.",
  "faq.q5": "Welche Sprachen werden unterstützt?",
  "faq.a5": "Die App ist auf Englisch, Französisch, Deutsch, Italienisch, Portugiesisch und Spanisch verfügbar.",
  "faq.q6": "Wie verwalte oder kündige ich ein Abo?",
  "faq.a6":
    "Abos werden über die Kontoeinstellungen deines App Store- oder Google Play-Kontos verwaltet. Du kannst die automatische Verlängerung deaktivieren oder jederzeit kündigen, mindestens 24 Stunden vor Ablauf des Zeitraums.",

  // CTA
  "cta.title": "Bereit für ein Abenteuer?",
  "cta.subtitle":
    "Lade Dora: Explore and Play! heute herunter — kostenlos im App Store und bei Google Play.",

  // Store buttons
  "store.apple.pre": "Laden im",
  "store.google.pre": "Jetzt bei",

  // Footer
  "footer.tagline":
    "Ein fröhliches, zweisprachiges Lernabenteuer für Kleinkinder und Vorschulkinder. Entdecke, lerne und spiele mit Dora und ihren Freunden.",
  "footer.explore": "Entdecken",
  "footer.legal": "Rechtliches",
  "footer.link.features": "Funktionen",
  "footer.link.gameplay": "Gameplay",
  "footer.link.trailer": "Trailer",
  "footer.link.faq": "FAQ",
  "footer.link.contact": "Kontakt",
  "footer.link.privacy": "Datenschutzerklärung",
  "footer.link.terms": "Nutzungsbedingungen",
  "footer.copyright": "© {year} {company} · Firmennr. {number}. Alle Rechte vorbehalten.",
  "footer.trademark":
    "Dora sowie alle zugehörigen Titel, Logos und Charaktere sind Marken ihrer jeweiligen Eigentümer. Dies ist eine App-Werbeseite.",

  // Consent banner
  "consent.title": "Uns ist deine Privatsphäre wichtig",
  "consent.body":
    "Wir verwenden nur minimale Cookies, damit die Seite funktioniert und wir verstehen, wie sie genutzt wird. Der Trailer lädt nur, wenn du ihn abspielst. Siehe unsere",
  "consent.privacyLink": "Datenschutzerklärung",
  "consent.accept": "Akzeptieren",
  "consent.decline": "Ablehnen",

  // Scroll to top
  "scrollTop.aria": "Nach oben scrollen",

  // Legal layout chrome
  "legal.backHome": "Zurück zur Startseite",
  "legal.onThisPage": "Auf dieser Seite",
  "legal.lastUpdated": "Zuletzt aktualisiert:",

  // Privacy / Terms chrome
  "legal.eyebrow": "Rechtliches",
  "privacy.title": "Datenschutzerklärung",
  "privacy.intro":
    "Der Schutz der Privatsphäre von Kindern steht im Mittelpunkt dessen, wie wir die App entwickeln und betreiben. Diese Richtlinie erklärt in klarer Sprache, was wir mit Daten tun und was nicht.",
  "terms.title": "Nutzungsbedingungen",
  "terms.intro":
    "Diese Bedingungen regeln deine Nutzung der App und dieser Website. Die App ist für Kinder gemacht und sollte unter Aufsicht eines Elternteils oder Erziehungsberechtigten genutzt werden.",

  // Contact page
  "contact.eyebrow": "Wir sind für dich da",
  "contact.title": "Kontakt aufnehmen",
  "contact.intro":
    "Fragen, Feedback oder Support-Anfragen zu {app} Unser Team freut sich, von dir zu hören. Melde dich auf dem Weg, der dir am besten passt.",
  "contact.card.email.label": "Schreib uns",
  "contact.card.email.note": "Wir antworten innerhalb von 1–2 Werktagen.",
  "contact.card.call.label": "Ruf uns an",
  "contact.card.call.note": "Mo–Fr, zu Geschäftszeiten.",
  "contact.card.visit.label": "Besuch uns",
  "contact.form.title": "Schick uns eine Nachricht",
  "contact.form.intro": "Fülle das Formular aus und deine E-Mail-App öffnet sich mit allem versandbereit.",
  "contact.form.name": "Name",
  "contact.form.name.ph": "Dein Name",
  "contact.form.email": "E-Mail",
  "contact.form.email.ph": "du@beispiel.com",
  "contact.form.subject": "Betreff",
  "contact.form.subject.ph": "Wie können wir helfen?",
  "contact.form.message": "Nachricht",
  "contact.form.message.ph": "Schreib deine Nachricht...",
  "contact.form.send": "Nachricht senden",
  "contact.form.defaultSubject": "Nachricht von budgetudios.com",
  "contact.company.number": "Firmennr.",
  "contact.company.status": "Status",
  "contact.company.founded": "Gegründet",
  "contact.hours.title": "Support-Zeiten",
  "contact.hours.body": "Wir bemühen uns, jede Nachricht innerhalb von 1–2 Werktagen zu beantworten.",

  // NotFound
  "notFound.title": "¡Ay! Dieser Pfad ist nicht auf der Karte",
  "notFound.body":
    "Sieht aus, als wärst du vom Weg abgekommen. Lass uns zurückgehen und mit Dora weiter entdecken.",
  "notFound.backHome": "Zurück zur Startseite",

  // Age guide — stage ranges
  "age.stage1.range": "2–3 Jahre",
  "age.stage2.range": "4–5 Jahre",
  "age.stage3.range": "Ab 6 Jahren",

  // Gallery — shot captions & tags
  "shot.1.caption": "Entdecke mit Dora!",
  "shot.1.tag": "Abenteuer",
  "shot.2.caption": "Lerne Wörter!",
  "shot.2.tag": "Zweisprachig",
  "shot.3.caption": "Lass uns Musik machen!",
  "shot.3.tag": "Musik",
  "shot.4.caption": "Hilf den Freunden!",
  "shot.4.tag": "Empathie",
  "shot.5.caption": "Spaßige Aktivitäten!",
  "shot.5.tag": "Kreativität",
  "shot.6.caption": "Einfach zu spielen!",
  "shot.6.tag": "Für Kleinkinder geeignet",
  "shot.7.caption": "Nörgler, nicht nörgeln!",
  "shot.7.tag": "Klassische Momente",
  "shot.8.caption": "Einfach zu spielen!",
  "shot.8.tag": "Interaktiv",

  // Accessibility labels
  "gallery.prevAria": "Vorheriger Screenshot",
  "gallery.nextAria": "Nächster Screenshot",
  "gallery.goToAria": "Zu Screenshot {n} springen",
  "video.playAria": "Trailer abspielen",
  "store.apple.aria": "Im App Store laden",
  "store.google.aria": "Jetzt bei Google Play",
  "tst.starsAria": "{value} von 5 Sternen",
  "consent.aria": "Cookie-Einwilligung",

  // Contact — email body labels
  "contact.mail.name": "Name",
  "contact.mail.email": "E-Mail",

  // Press page
  "press.eyebrow": "Presse & Medien",
  "press.title": "Presse-Kit",
  "press.intro": "Material, Fakten und Kontaktdaten für Presse, Tester und Partner rund um {app}",
  "press.factsheet": "Factsheet",
  "press.brandAssets": "Markenmaterial",
  "press.screenshots": "Screenshots",
  "press.fact.appName": "App-Name",
  "press.fact.developer": "Entwickler",
  "press.fact.category": "Kategorie",
  "press.fact.category.val": "Bildung · Kinder",
  "press.fact.price": "Preis",
  "press.fact.price.val": "Kostenlos · optionales Abo",
  "press.fact.ageRating": "Altersfreigabe",
  "press.fact.languages": "Sprachen",
  "press.asset.icon": "App-Icon",
  "press.asset.banner": "Social-Banner",
  "press.screenshot.alt": "Screenshot {n}: {caption}",
  "press.enquiries.title": "Presseanfragen",
  "press.enquiries.body": "Für Interviews, Rezensionscodes oder zusätzliches Material wende dich an",

  // Footer — press link
  "footer.link.press": "Presse-Kit",

  // Language switcher
  "lang.switchAria": "Sprache ändern",
};

const it: Dict = {
  // Nav
  "nav.features": "Funzioni",
  "nav.gameplay": "Gioco",
  "nav.video": "Video",
  "nav.about": "Chi siamo",
  "nav.contact": "Contatti",
  "nav.playFree": "Gioca gratis",

  // Hero
  "hero.badge": "Dai 4 anni · Istruzione · Gratis",
  "hero.title1": "Esplora, impara e",
  "hero.title2": "gioca con Dora!",
  "hero.availableIn": "Disponibile in",
  "hero.shortPitch":
    "¡Hola! Unisciti a Dora e ai suoi amici in un viaggio magico pieno di esplorazione, musica, parole e gentilezza — pensato appositamente per i più piccoli e i bambini in età prescolare.",
  "hero.ratingLine": "{stars} · {count} recensioni sull'{source}",
  "hero.ratingChip": "{stars} di valutazione",
  "hero.ratingChipSub": "{count} genitori",
  "hero.freeChip": "Gratis da giocare",
  "hero.freeChipSub": "Dai 4 anni · Istruzione",

  // TrustBar
  "trust.badge1": "Certificato Privacy ESRB",
  "trust.badge2": "Pensato dai 4 anni",
  "trust.badge3": "Disponibile in 6 lingue",
  "trust.badge4": "Categoria istruzione",

  // How it works
  "how.eyebrow": "Come funziona",
  "how.title": "Imparare divertendosi in tre semplici passi",
  "how.subtitle": "Abbastanza semplice per le manine più piccole, abbastanza ricco da continuare a esplorare.",
  "how.step1.title": "Scarica ed esplora",
  "how.step1.desc":
    "Scarica l'app gratis dall'App Store o da Google Play ed entra nel mondo colorato e interattivo di Dora.",
  "how.step2.title": "Gioca e impara",
  "how.step2.desc":
    "Tocca e scopri minigiochi divertenti che insegnano parole, forme, colori e musica — una felice scoperta alla volta.",
  "how.step3.title": "Crescete insieme",
  "how.step3.desc":
    "Aiuta gli amici di Dora, coltiva gentilezza e sicurezza e guarda la curiosità trasformarsi in vere prime competenze.",

  // Features
  "feat.eyebrow": "Perché piace a bambini e genitori",
  "feat.title": "Grandi avventure per piccoli esploratori",
  "feat.subtitle":
    "Ogni tocco è un'occasione per esplorare, imparare e crescere — nel mondo colorato e amichevole di Dora.",
  "feature.explore.title": "Esplora e scopri",
  "feature.explore.desc":
    "Vivi avventure in luoghi vivaci e iconici — dalla Casita di Dora alla Montagna più Alta — stimolando curiosità e capacità di risolvere problemi lungo il cammino.",
  "feature.words.title": "Impara le parole",
  "feature.words.desc":
    "Minigiochi divertenti introducono vocaboli e frasi di base in spagnolo, trasformando ogni tocco in un momento di apprendimento bilingue.",
  "feature.music.title": "Fai musica",
  "feature.music.desc":
    "Tamburi, balli e canti! Le attività musicali permettono ai bambini di immergersi nel ritmo e nei suoni del colorato mondo di Dora.",
  "feature.friends.title": "Aiuta gli amici",
  "feature.friends.desc":
    "Unisciti a Boots, Tico, Isa e Benny nelle loro missioni e sviluppa empatia, gentilezza e spirito di squadra a ogni sfida.",
  "feature.activities.title": "Attività divertenti",
  "feature.activities.desc":
    "Forme, colori, conteggio e gioco creativo tengono impegnate le piccole menti con sfide senza frustrazioni pensate per le manine.",
  "feature.safe.title": "Sicura e a misura di bambino",
  "feature.safe.desc":
    "Certificata Privacy ESRB e costruita attorno alle tappe prescolari, così i genitori possono stare tranquilli mentre i bambini esplorano e imparano.",

  // Characters
  "char.eyebrow": "Incontra gli amici",
  "char.title": "Un'avventura è più bella insieme",
  "char.subtitle": "Di' hola a Dora e agli amici con cui il tuo bambino esplorerà, imparerà e giocherà.",
  "char.dora.role": "L'esploratrice",
  "char.dora.blurb": "Coraggiosa, curiosa e sempre pronta per la prossima avventura con il suo fidato Zaino e la sua Mappa.",
  "char.boots.role": "Il migliore amico",
  "char.boots.blurb": "La scimmietta giocherellona di Dora, che adora saltare, arrampicarsi e dare una mano.",
  "char.tico.role": "Lo scoiattolo",
  "char.tico.blurb": "Uno scoiattolino amichevole e veloce che sfreccia ovunque e parla soprattutto spagnolo.",
  "char.isa.role": "L'iguana",
  "char.isa.blurb": "Un'iguana dal pollice verde che adora fiori, giardini e risolvere enigmi insieme.",
  "char.benny.role": "Il toro",
  "char.benny.blurb": "Un toro dal cuore grande e gentile, sempre allegro e pronto a cantare.",

  // Age guide
  "age.eyebrow": "Cresce con il tuo bambino",
  "age.title": "Un apprendimento per ogni piccola tappa",
  "age.subtitle": "Un gioco adatto all'età che accompagna le tappe prescolari mentre il tuo bambino cresce.",
  "age.stage1.title": "Prime scoperte",
  "age.stage1.point1": "Tocchi, trascinamenti e semplice gioco di causa ed effetto",
  "age.stage1.point2": "Colori, forme e prime parole",
  "age.stage1.point3": "Esplorazione dolce e senza frustrazioni",
  "age.stage2.title": "Competenze in crescita",
  "age.stage2.point1": "Vocaboli e frasi di base in spagnolo",
  "age.stage2.point2": "Contare, abbinare e risolvere problemi",
  "age.stage2.point3": "Aiutare gli amici sviluppa empatia e spirito di squadra",
  "age.stage3.title": "Esploratori sicuri di sé",
  "age.stage3.point1": "Avventure più lunghe e minigiochi più ricchi",
  "age.stage3.point2": "Attività creative e creazione di musica",
  "age.stage3.point3": "Gioco autonomo e narrazione di storie",

  // Gallery
  "gallery.eyebrow": "Uno sguardo dentro",
  "gallery.title": "Vivi l'avventura in azione",
  "gallery.subtitle": "Mondi luminosi e amichevoli pensati per manine piccole e grandi immaginazioni.",

  // Video
  "video.eyebrow": "Guarda il trailer",
  "video.title": "Premi play e incontra Dora",
  "video.subtitle": "Dai un'occhiata in anteprima alle canzoni, agli amici e ai minigiochi che ti aspettano nell'app.",

  // About
  "about.eyebrow": "Dare vita alla serie",
  "about.title": "Più di un gioco — una vera esperienza Dora",
  "about.body":
    "Abbiamo catturato il cuore della serie: interattività, educazione bilingue e spirito d'avventura. È come entrare dentro un episodio, dove ogni scoperta alimenta curiosità, sicurezza e gentilezza.",
  "about.check1": "Pensata per i più piccoli, la scuola materna e i bambini più piccoli",
  "about.check2": "Gioco senza frustrazioni pensato per le manine",
  "about.check3": "Sigillo Privacy per bambini certificato ESRB",
  "about.stat1.label": "anni di avventure di Dora amate in tutto il mondo",
  "about.stat2.label": "paesi in cui si vede Dora",
  "about.stat3.label": "lingue nell'universo di Dora",
  "about.stat4.label": "classificazione per età, creata per le tappe prescolari",

  // Comparison
  "cmp.eyebrow": "Cosa è incluso",
  "cmp.title": "Gratis per iniziare, molto altro da esplorare",
  "cmp.subtitle":
    "Scarica e gioca gratis. Sblocca l'avventura completa quando vuoi con un abbonamento facoltativo.",
  "cmp.col.feature": "Funzione",
  "cmp.col.free": "Gratis",
  "cmp.col.premium": "Premium",
  "cmp.row.explore": "Esplorare mondi interattivi",
  "cmp.row.minigames": "Minigiochi per imparare giocando",
  "cmp.row.bilingual": "Parole e frasi bilingui",
  "cmp.row.music": "Musica e attività creative",
  "cmp.row.friends": "Aiutare gli amici di Dora",
  "cmp.row.updates": "Nuovi contenuti e aggiornamenti",
  "cmp.row.adlight": "Esperienza con poca pubblicità e sicura per i bambini",
  "cmp.row.cancel": "Disdici quando vuoi",
  "cmp.val.sample": "Assaggio",
  "cmp.val.fullAccess": "Accesso completo",
  "cmp.val.limited": "Limitato",
  "cmp.val.allUnlocked": "Tutto sbloccato",
  "cmp.val.basic": "Base",
  "cmp.val.everything": "Tutto",
  "cmp.footnote": "Download gratuito · Abbonamento facoltativo · Disdici quando vuoi",

  // Testimonials
  "tst.eyebrow": "Amata dalle famiglie",
  "tst.title": "Cosa dicono i genitori",
  "tst.subtitle": "Unisciti a migliaia di famiglie che esplorano e imparano con Dora ogni giorno.",
  "tst.q1":
    "La mia bambina di 3 anni ne è entusiasta. Impara parole in spagnolo senza nemmeno accorgersi di imparare. I minigiochi sono perfetti per le manine.",
  "tst.q1.role": "Mamma di un bambino",
  "tst.q2":
    "Finalmente un'app per bambini di cui mi fido. Niente pubblicità inquietanti, davvero educativa, e mio figlio adora aiutare gli amici di Dora. Vale ogni centesimo.",
  "tst.q2.role": "Papà di due bambini",
  "tst.q3":
    "Le attività musicali sono un successo a casa nostra — balliamo insieme ogni sera. È colorata, amichevole e così facile da usare per i più piccoli.",
  "tst.q3.role": "Genitore e maestra d'asilo",
  "tst.q4":
    "Adoro che faccia crescere la curiosità. Mia figlia parla tutto il giorno dei posti che ha 'esplorato'. Fatta magnificamente e chiaramente pensata per i bambini.",
  "tst.q4.role": "Mamma di un bambino in età prescolare",

  // FAQ
  "faq.eyebrow": "Domande e risposte",
  "faq.title": "Tutto ciò che chiedono i genitori",
  "faq.subtitle": "Hai ancora dubbi? Siamo sempre felici di aiutare — basta contattarci.",
  "faq.q1": "L'app è gratis da scaricare?",
  "faq.a1":
    "Sì. Dora: Explore and Play! è gratis da scaricare sia sull'App Store sia su Google Play. Offre anche abbonamenti facoltativi e acquisti in-app che sbloccano contenuti extra.",
  "faq.q2": "Per quale età è pensata l'app?",
  "faq.a2":
    "È pensata per i più piccoli, i bambini in età prescolare e i bambini piccoli, con classificazione dai 4 anni. Il gioco è semplice, senza frustrazioni e costruito per le manine.",
  "faq.q3": "È sicura per i bambini?",
  "faq.a3":
    "Assolutamente. L'app possiede il Sigillo Privacy per bambini certificato ESRB ed è progettata pensando alla sicurezza dei bambini. Non raccogliamo informazioni personali dai bambini a scopo pubblicitario.",
  "faq.q4": "Cosa imparerà il mio bambino?",
  "faq.a4":
    "I bambini apprendono vocaboli di base in spagnolo, forme, colori e il conteggio, oltre alla risoluzione di problemi, alla creatività e a competenze socio-emotive come gentilezza e spirito di squadra — tutto giocando.",
  "faq.q5": "Quali lingue sono supportate?",
  "faq.a5": "L'app è disponibile in inglese, francese, tedesco, italiano, portoghese e spagnolo.",
  "faq.q6": "Come gestisco o disdico un abbonamento?",
  "faq.a6":
    "Gli abbonamenti si gestiscono dalle impostazioni del tuo account App Store o Google Play. Puoi disattivare il rinnovo automatico o disdire quando vuoi, almeno 24 ore prima della fine del periodo.",

  // CTA
  "cta.title": "Pronti per l'avventura?",
  "cta.subtitle":
    "Scarica Dora: Explore and Play! oggi — gratis su App Store e Google Play.",

  // Store buttons
  "store.apple.pre": "Scarica su",
  "store.google.pre": "Disponibile su",

  // Footer
  "footer.tagline":
    "Una gioiosa avventura di apprendimento bilingue per i più piccoli e i bambini in età prescolare. Esplora, impara e gioca con Dora e i suoi amici.",
  "footer.explore": "Esplora",
  "footer.legal": "Note legali",
  "footer.link.features": "Funzioni",
  "footer.link.gameplay": "Gioco",
  "footer.link.trailer": "Trailer",
  "footer.link.faq": "FAQ",
  "footer.link.contact": "Contatti",
  "footer.link.privacy": "Informativa sulla privacy",
  "footer.link.terms": "Termini di utilizzo",
  "footer.copyright": "© {year} {company} · N. società {number}. Tutti i diritti riservati.",
  "footer.trademark":
    "Dora e tutti i titoli, loghi e personaggi correlati sono marchi dei rispettivi proprietari. Questa è una pagina promozionale dell'app.",

  // Consent banner
  "consent.title": "Teniamo alla tua privacy",
  "consent.body":
    "Usiamo cookie minimi per far funzionare il sito e capire come viene utilizzato. Il trailer si carica solo quando scegli di riprodurlo. Consulta la nostra",
  "consent.privacyLink": "Informativa sulla privacy",
  "consent.accept": "Accetta",
  "consent.decline": "Rifiuta",

  // Scroll to top
  "scrollTop.aria": "Torna su",

  // Legal layout chrome
  "legal.backHome": "Torna alla home",
  "legal.onThisPage": "In questa pagina",
  "legal.lastUpdated": "Ultimo aggiornamento:",

  // Privacy / Terms chrome
  "legal.eyebrow": "Note legali",
  "privacy.title": "Informativa sulla privacy",
  "privacy.intro":
    "Proteggere la privacy dei bambini è al centro di come creiamo e gestiamo l'app. Questa informativa spiega, in parole semplici, cosa facciamo e cosa non facciamo con i dati.",
  "terms.title": "Termini di utilizzo",
  "terms.intro":
    "Questi termini regolano l'uso dell'app e di questo sito web. L'app è pensata per i bambini e va usata sotto la supervisione di un genitore o tutore.",

  // Contact page
  "contact.eyebrow": "Siamo qui per aiutarti",
  "contact.title": "Mettiti in contatto",
  "contact.intro":
    "Domande, feedback o richieste di assistenza su {app} Il nostro team sarebbe felice di sentirti. Contattaci nel modo che preferisci.",
  "contact.card.email.label": "Scrivici",
  "contact.card.email.note": "Rispondiamo entro 1–2 giorni lavorativi.",
  "contact.card.call.label": "Chiamaci",
  "contact.card.call.note": "Lun–Ven, in orario d'ufficio.",
  "contact.card.visit.label": "Vieni a trovarci",
  "contact.form.title": "Inviaci un messaggio",
  "contact.form.intro": "Compila il modulo e la tua app di posta si aprirà con tutto pronto per l'invio.",
  "contact.form.name": "Nome",
  "contact.form.name.ph": "Il tuo nome",
  "contact.form.email": "Email",
  "contact.form.email.ph": "tu@esempio.com",
  "contact.form.subject": "Oggetto",
  "contact.form.subject.ph": "Come possiamo aiutarti?",
  "contact.form.message": "Messaggio",
  "contact.form.message.ph": "Scrivi il tuo messaggio...",
  "contact.form.send": "Invia messaggio",
  "contact.form.defaultSubject": "Messaggio da budgetudios.com",
  "contact.company.number": "N. società",
  "contact.company.status": "Stato",
  "contact.company.founded": "Fondata il",
  "contact.hours.title": "Orari dell'assistenza",
  "contact.hours.body": "Puntiamo a rispondere a ogni messaggio entro 1–2 giorni lavorativi.",

  // NotFound
  "notFound.title": "¡Ay! Questo sentiero non è sulla mappa",
  "notFound.body":
    "Sembra che tu ti sia allontanato dal sentiero. Torniamo indietro e continuiamo a esplorare con Dora.",
  "notFound.backHome": "Torna alla home",

  // Age guide — stage ranges
  "age.stage1.range": "2–3 anni",
  "age.stage2.range": "4–5 anni",
  "age.stage3.range": "6+ anni",

  // Gallery — shot captions & tags
  "shot.1.caption": "Esplora con Dora!",
  "shot.1.tag": "Avventura",
  "shot.2.caption": "Impara le parole!",
  "shot.2.tag": "Bilingue",
  "shot.3.caption": "Facciamo musica!",
  "shot.3.tag": "Musica",
  "shot.4.caption": "Aiuta gli amici!",
  "shot.4.tag": "Empatia",
  "shot.5.caption": "Attività divertenti!",
  "shot.5.tag": "Creatività",
  "shot.6.caption": "Facile da giocare!",
  "shot.6.tag": "Adatto ai più piccoli",
  "shot.7.caption": "Volpe, non rubare!",
  "shot.7.tag": "Momenti classici",
  "shot.8.caption": "Facile da giocare!",
  "shot.8.tag": "Interattivo",

  // Accessibility labels
  "gallery.prevAria": "Schermata precedente",
  "gallery.nextAria": "Schermata successiva",
  "gallery.goToAria": "Vai alla schermata {n}",
  "video.playAria": "Riproduci il trailer",
  "store.apple.aria": "Scarica dall'App Store",
  "store.google.aria": "Disponibile su Google Play",
  "tst.starsAria": "{value} su 5 stelle",
  "consent.aria": "Consenso ai cookie",

  // Contact — email body labels
  "contact.mail.name": "Nome",
  "contact.mail.email": "Email",

  // Press page
  "press.eyebrow": "Stampa e media",
  "press.title": "Kit stampa",
  "press.intro": "Risorse, informazioni e contatti per stampa, recensori e partner su {app}",
  "press.factsheet": "Scheda informativa",
  "press.brandAssets": "Risorse del marchio",
  "press.screenshots": "Screenshot",
  "press.fact.appName": "Nome dell'app",
  "press.fact.developer": "Sviluppatore",
  "press.fact.category": "Categoria",
  "press.fact.category.val": "Istruzione · Bambini",
  "press.fact.price": "Prezzo",
  "press.fact.price.val": "Gratis · abbonamento facoltativo",
  "press.fact.ageRating": "Classificazione per età",
  "press.fact.languages": "Lingue",
  "press.asset.icon": "Icona dell'app",
  "press.asset.banner": "Banner social",
  "press.screenshot.alt": "Screenshot {n}: {caption}",
  "press.enquiries.title": "Richieste stampa",
  "press.enquiries.body": "Per interviste, codici per recensioni o risorse aggiuntive, scrivi a",

  // Footer — press link
  "footer.link.press": "Kit stampa",

  // Language switcher
  "lang.switchAria": "Cambia lingua",
};

const pt: Dict = {
  // Nav
  "nav.features": "Recursos",
  "nav.gameplay": "Jogo",
  "nav.video": "Vídeo",
  "nav.about": "Sobre",
  "nav.contact": "Contato",
  "nav.playFree": "Jogar grátis",

  // Hero
  "hero.badge": "A partir de 4 anos · Educação · Grátis",
  "hero.title1": "Explore, aprenda e",
  "hero.title2": "brinque com a Dora!",
  "hero.availableIn": "Disponível em",
  "hero.shortPitch":
    "¡Hola! Junte-se à Dora e seus amigos numa jornada mágica cheia de exploração, música, palavras e gentileza — feita especialmente para bebês e crianças em idade pré-escolar.",
  "hero.ratingLine": "{stars} · {count} avaliações na {source}",
  "hero.ratingChip": "{stars} de avaliação",
  "hero.ratingChipSub": "{count} famílias",
  "hero.freeChip": "Grátis para jogar",
  "hero.freeChipSub": "A partir de 4 anos · Educação",

  // TrustBar
  "trust.badge1": "Certificado de Privacidade ESRB",
  "trust.badge2": "Feito a partir de 4 anos",
  "trust.badge3": "Disponível em 6 idiomas",
  "trust.badge4": "Categoria educação",

  // How it works
  "how.eyebrow": "Como funciona",
  "how.title": "Diversão educativa em três passos simples",
  "how.subtitle": "Simples o bastante para as mãozinhas menores, rico o bastante para continuar explorando.",
  "how.step1.title": "Baixe e explore",
  "how.step1.desc":
    "Baixe o app grátis na App Store ou no Google Play e entre no mundo colorido e interativo da Dora.",
  "how.step2.title": "Jogue e aprenda",
  "how.step2.desc":
    "Toque e descubra minijogos divertidos que ensinam palavras, formas, cores e música — uma descoberta alegre de cada vez.",
  "how.step3.title": "Cresçam juntos",
  "how.step3.desc":
    "Ajude os amigos da Dora, cultive gentileza e confiança e veja a curiosidade se transformar em verdadeiras primeiras habilidades.",

  // Features
  "feat.eyebrow": "Por que crianças e pais adoram",
  "feat.title": "Grandes aventuras para pequenos exploradores",
  "feat.subtitle":
    "Cada toque é uma chance de explorar, aprender e crescer — dentro do mundo colorido e acolhedor da Dora.",
  "feature.explore.title": "Explore e descubra",
  "feature.explore.desc":
    "Viva aventuras por lugares vibrantes e icônicos — da Casita da Dora à Montanha mais Alta — despertando curiosidade e resolução de problemas pelo caminho.",
  "feature.words.title": "Aprenda palavras",
  "feature.words.desc":
    "Minijogos divertidos apresentam vocabulário e frases básicas em espanhol, transformando cada toque num momento de aprendizado bilíngue.",
  "feature.music.title": "Faça música",
  "feature.music.desc":
    "Tocar tambor, dançar e cantar! As atividades musicais permitem que as crianças explorem o ritmo e os sons do mundo colorido da Dora.",
  "feature.friends.title": "Ajude os amigos",
  "feature.friends.desc":
    "Junte-se a Botas, Tico, Isa e Benny em suas missões e desenvolva empatia, gentileza e trabalho em equipe a cada desafio.",
  "feature.activities.title": "Atividades divertidas",
  "feature.activities.desc":
    "Formas, cores, contagem e brincadeira criativa mantêm as mentes pequenas ocupadas com desafios sem frustração, feitos para mãozinhas.",
  "feature.safe.title": "Seguro e adequado para crianças",
  "feature.safe.desc":
    "Com Certificado de Privacidade ESRB e construído em torno dos marcos pré-escolares, para que os pais fiquem tranquilos enquanto as crianças exploram e aprendem.",

  // Characters
  "char.eyebrow": "Conheça os amigos",
  "char.title": "Uma aventura é melhor em grupo",
  "char.subtitle": "Diga hola para a Dora e os amigos com quem seu filho vai explorar, aprender e brincar.",
  "char.dora.role": "A exploradora",
  "char.dora.blurb": "Corajosa, curiosa e sempre pronta para a próxima aventura com sua fiel Mochila e seu Mapa.",
  "char.boots.role": "Melhor amigo",
  "char.boots.blurb": "O macaquinho brincalhão da Dora, que adora pular, escalar e dar uma mãozinha.",
  "char.tico.role": "O esquilo",
  "char.tico.blurb": "Um esquilinho amigável e veloz que corre por toda parte e fala principalmente espanhol.",
  "char.isa.role": "A iguana",
  "char.isa.blurb": "Uma iguana com mãos de jardineira que adora flores, jardins e resolver quebra-cabeças em conjunto.",
  "char.benny.role": "O touro",
  "char.benny.blurb": "Um touro gentil e de bom coração, sempre alegre e pronto para cantar.",

  // Age guide
  "age.eyebrow": "Cresce com o seu filho",
  "age.title": "Aprendizado para cada pequena fase",
  "age.subtitle": "Brincadeira adequada à idade que acompanha os marcos pré-escolares à medida que seu filho cresce.",
  "age.stage1.title": "Primeiras descobertas",
  "age.stage1.point1": "Toques, arrastos e brincadeira simples de causa e efeito",
  "age.stage1.point2": "Cores, formas e primeiras palavras",
  "age.stage1.point3": "Exploração suave e sem frustração",
  "age.stage2.title": "Habilidades em crescimento",
  "age.stage2.point1": "Vocabulário e frases básicas em espanhol",
  "age.stage2.point2": "Contar, combinar e resolver problemas",
  "age.stage2.point3": "Ajudar os amigos desenvolve empatia e trabalho em equipe",
  "age.stage3.title": "Exploradores confiantes",
  "age.stage3.point1": "Aventuras mais longas e minijogos mais ricos",
  "age.stage3.point2": "Atividades criativas e criação de música",
  "age.stage3.point3": "Brincadeira independente e contação de histórias",

  // Gallery
  "gallery.eyebrow": "Uma espiada por dentro",
  "gallery.title": "Veja a aventura em ação",
  "gallery.subtitle": "Mundos vivos e acolhedores feitos para mãozinhas pequenas e grandes imaginações.",

  // Video
  "video.eyebrow": "Assista ao trailer",
  "video.title": "Dê play e conheça a Dora",
  "video.subtitle": "Veja uma prévia das músicas, dos amigos e dos minijogos que esperam por você no app.",

  // About
  "about.eyebrow": "Dando vida à série",
  "about.title": "Mais que um jogo — uma verdadeira experiência Dora",
  "about.body":
    "Capturamos o coração da série: interatividade, educação bilíngue e espírito aventureiro. É como entrar dentro de um episódio, onde cada descoberta cultiva curiosidade, confiança e gentileza.",
  "about.check1": "Feito para bebês, pré-escola e crianças pequenas",
  "about.check2": "Jogo sem frustração feito para mãozinhas",
  "about.check3": "Selo de Privacidade Infantil Certificado pela ESRB",
  "about.stat1.label": "anos de aventuras da Dora queridas no mundo todo",
  "about.stat2.label": "países onde a Dora é vista",
  "about.stat3.label": "idiomas no universo da Dora",
  "about.stat4.label": "classificação etária, criada para os marcos pré-escolares",

  // Comparison
  "cmp.eyebrow": "O que está incluído",
  "cmp.title": "Grátis para começar, muito mais para explorar",
  "cmp.subtitle":
    "Baixe e jogue de graça. Desbloqueie a aventura completa quando quiser com uma assinatura opcional.",
  "cmp.col.feature": "Recurso",
  "cmp.col.free": "Grátis",
  "cmp.col.premium": "Premium",
  "cmp.row.explore": "Explorar mundos interativos",
  "cmp.row.minigames": "Minijogos para aprender brincando",
  "cmp.row.bilingual": "Palavras e frases bilíngues",
  "cmp.row.music": "Música e atividades criativas",
  "cmp.row.friends": "Ajudar os amigos da Dora",
  "cmp.row.updates": "Novos conteúdos e atualizações",
  "cmp.row.adlight": "Experiência com pouca publicidade e segura para crianças",
  "cmp.row.cancel": "Cancele quando quiser",
  "cmp.val.sample": "Amostra",
  "cmp.val.fullAccess": "Acesso total",
  "cmp.val.limited": "Limitado",
  "cmp.val.allUnlocked": "Tudo desbloqueado",
  "cmp.val.basic": "Básico",
  "cmp.val.everything": "Tudo",
  "cmp.footnote": "Download grátis · Assinatura opcional · Cancele quando quiser",

  // Testimonials
  "tst.eyebrow": "Amada pelas famílias",
  "tst.title": "O que os pais estão dizendo",
  "tst.subtitle": "Junte-se a milhares de famílias que exploram e aprendem com a Dora todos os dias.",
  "tst.q1":
    "Minha filha de 3 anos é fã. Ela está aprendendo palavras em espanhol sem nem perceber que está aprendendo. Os minijogos são perfeitos para mãozinhas.",
  "tst.q1.role": "Mãe de uma criança",
  "tst.q2":
    "Finalmente um app infantil com que me sinto à vontade. Sem anúncios estranhos, de verdade educativo, e meu filho adora ajudar os amigos da Dora. Vale cada centavo.",
  "tst.q2.role": "Pai de dois",
  "tst.q3":
    "As atividades musicais fazem sucesso lá em casa — dançamos juntos toda noite. É colorido, acolhedor e muito fácil para os pequenos usarem.",
  "tst.q3.role": "Mãe e professora de pré-escola",
  "tst.q4":
    "Adoro que desperta a curiosidade. Minha filha fala o dia todo dos lugares que 'explorou'. Lindamente feito e claramente pensado para crianças.",
  "tst.q4.role": "Mãe de uma criança em idade pré-escolar",

  // FAQ
  "faq.eyebrow": "Perguntas e respostas",
  "faq.title": "Tudo o que os pais perguntam",
  "faq.subtitle": "Ainda com dúvidas? Teremos prazer em ajudar — é só entrar em contato.",
  "faq.q1": "O app é grátis para baixar?",
  "faq.a1":
    "Sim. Dora: Explore and Play! é grátis para baixar tanto na App Store quanto no Google Play. Ele também oferece assinaturas opcionais e compras no app que desbloqueiam conteúdo extra.",
  "faq.q2": "Para qual idade o app foi feito?",
  "faq.a2":
    "Ele é feito para bebês, crianças em idade pré-escolar e crianças pequenas, com classificação a partir de 4 anos. O jogo é simples, sem frustração e construído para mãozinhas.",
  "faq.q3": "É seguro para crianças?",
  "faq.a3":
    "Com certeza. O app tem o Selo de Privacidade Infantil Certificado pela ESRB e é projetado pensando na segurança das crianças. Não coletamos informações pessoais de crianças para publicidade.",
  "faq.q4": "O que meu filho vai aprender?",
  "faq.a4":
    "As crianças aprendem vocabulário básico em espanhol, formas, cores e a contar, além de resolução de problemas, criatividade e habilidades socioemocionais como gentileza e trabalho em equipe — tudo brincando.",
  "faq.q5": "Quais idiomas são suportados?",
  "faq.a5": "O app está disponível em inglês, francês, alemão, italiano, português e espanhol.",
  "faq.q6": "Como gerencio ou cancelo uma assinatura?",
  "faq.a6":
    "As assinaturas são gerenciadas nas configurações da sua conta da App Store ou do Google Play. Você pode desativar a renovação automática ou cancelar a qualquer momento, pelo menos 24 horas antes do fim do período.",

  // CTA
  "cta.title": "Pronto para uma aventura?",
  "cta.subtitle":
    "Baixe Dora: Explore and Play! hoje — grátis na App Store e no Google Play.",

  // Store buttons
  "store.apple.pre": "Baixe na",
  "store.google.pre": "Disponível no",

  // Footer
  "footer.tagline":
    "Uma alegre aventura de aprendizado bilíngue para bebês e crianças em idade pré-escolar. Explore, aprenda e brinque com a Dora e seus amigos.",
  "footer.explore": "Explorar",
  "footer.legal": "Jurídico",
  "footer.link.features": "Recursos",
  "footer.link.gameplay": "Jogo",
  "footer.link.trailer": "Trailer",
  "footer.link.faq": "Perguntas frequentes",
  "footer.link.contact": "Contato",
  "footer.link.privacy": "Política de Privacidade",
  "footer.link.terms": "Termos de Uso",
  "footer.copyright": "© {year} {company} · Empresa n.º {number}. Todos os direitos reservados.",
  "footer.trademark":
    "Dora e todos os títulos, logotipos e personagens relacionados são marcas registradas de seus respectivos proprietários. Esta é uma página de divulgação do app.",

  // Consent banner
  "consent.title": "Valorizamos a sua privacidade",
  "consent.body":
    "Usamos cookies mínimos para manter o site funcionando e entender como ele é usado. O trailer só carrega quando você escolhe reproduzi-lo. Veja nossa",
  "consent.privacyLink": "Política de Privacidade",
  "consent.accept": "Aceitar",
  "consent.decline": "Recusar",

  // Scroll to top
  "scrollTop.aria": "Voltar ao topo",

  // Legal layout chrome
  "legal.backHome": "Voltar ao início",
  "legal.onThisPage": "Nesta página",
  "legal.lastUpdated": "Última atualização:",

  // Privacy / Terms chrome
  "legal.eyebrow": "Jurídico",
  "privacy.title": "Política de Privacidade",
  "privacy.intro":
    "Proteger a privacidade das crianças está no centro de como criamos e operamos o app. Esta política explica, em linguagem clara, o que fazemos e o que não fazemos com os dados.",
  "terms.title": "Termos de Uso",
  "terms.intro":
    "Estes termos regem o uso do app e deste site. O app é feito para crianças e deve ser usado sob a supervisão de um pai, mãe ou responsável.",

  // Contact page
  "contact.eyebrow": "Estamos aqui para ajudar",
  "contact.title": "Entre em contato",
  "contact.intro":
    "Dúvidas, comentários ou pedidos de suporte sobre {app} Nossa equipe adoraria ouvir você. Fale conosco do jeito que for melhor para você.",
  "contact.card.email.label": "Envie um e-mail",
  "contact.card.email.note": "Respondemos em 1–2 dias úteis.",
  "contact.card.call.label": "Ligue para nós",
  "contact.card.call.note": "Seg–Sex, em horário comercial.",
  "contact.card.visit.label": "Visite-nos",
  "contact.form.title": "Envie uma mensagem",
  "contact.form.intro": "Preencha o formulário e seu app de e-mail abrirá com tudo pronto para enviar.",
  "contact.form.name": "Nome",
  "contact.form.name.ph": "Seu nome",
  "contact.form.email": "E-mail",
  "contact.form.email.ph": "voce@exemplo.com",
  "contact.form.subject": "Assunto",
  "contact.form.subject.ph": "Como podemos ajudar?",
  "contact.form.message": "Mensagem",
  "contact.form.message.ph": "Escreva sua mensagem...",
  "contact.form.send": "Enviar mensagem",
  "contact.form.defaultSubject": "Mensagem de budgetudios.com",
  "contact.company.number": "Empresa n.º",
  "contact.company.status": "Status",
  "contact.company.founded": "Fundada em",
  "contact.hours.title": "Horário de suporte",
  "contact.hours.body": "Procuramos responder a cada mensagem em 1–2 dias úteis.",

  // NotFound
  "notFound.title": "¡Ay! Este caminho não está no mapa",
  "notFound.body":
    "Parece que você saiu da trilha. Vamos voltar e continuar explorando com a Dora.",
  "notFound.backHome": "Voltar ao início",

  // Age guide — stage ranges
  "age.stage1.range": "2–3 anos",
  "age.stage2.range": "4–5 anos",
  "age.stage3.range": "6+ anos",

  // Gallery — shot captions & tags
  "shot.1.caption": "Explore com a Dora!",
  "shot.1.tag": "Aventura",
  "shot.2.caption": "Aprenda palavras!",
  "shot.2.tag": "Bilíngue",
  "shot.3.caption": "Vamos fazer música!",
  "shot.3.tag": "Música",
  "shot.4.caption": "Ajude os amigos!",
  "shot.4.tag": "Empatia",
  "shot.5.caption": "Atividades divertidas!",
  "shot.5.tag": "Criatividade",
  "shot.6.caption": "Fácil de jogar!",
  "shot.6.tag": "Para os pequenos",
  "shot.7.caption": "Raposão, não vá roubar!",
  "shot.7.tag": "Momentos clássicos",
  "shot.8.caption": "Fácil de jogar!",
  "shot.8.tag": "Interativo",

  // Accessibility labels
  "gallery.prevAria": "Captura anterior",
  "gallery.nextAria": "Próxima captura",
  "gallery.goToAria": "Ir para a captura {n}",
  "video.playAria": "Reproduzir o trailer",
  "store.apple.aria": "Baixar na App Store",
  "store.google.aria": "Disponível no Google Play",
  "tst.starsAria": "{value} de 5 estrelas",
  "consent.aria": "Consentimento de cookies",

  // Contact — email body labels
  "contact.mail.name": "Nome",
  "contact.mail.email": "E-mail",

  // Press page
  "press.eyebrow": "Imprensa e mídia",
  "press.title": "Kit de imprensa",
  "press.intro": "Recursos, informações e contatos para imprensa, avaliadores e parceiros sobre {app}",
  "press.factsheet": "Ficha técnica",
  "press.brandAssets": "Recursos da marca",
  "press.screenshots": "Capturas de tela",
  "press.fact.appName": "Nome do app",
  "press.fact.developer": "Desenvolvedor",
  "press.fact.category": "Categoria",
  "press.fact.category.val": "Educação · Crianças",
  "press.fact.price": "Preço",
  "press.fact.price.val": "Grátis · assinatura opcional",
  "press.fact.ageRating": "Classificação etária",
  "press.fact.languages": "Idiomas",
  "press.asset.icon": "Ícone do app",
  "press.asset.banner": "Banner para redes",
  "press.screenshot.alt": "Captura {n}: {caption}",
  "press.enquiries.title": "Contato de imprensa",
  "press.enquiries.body": "Para entrevistas, códigos de avaliação ou recursos adicionais, fale com",

  // Footer — press link
  "footer.link.press": "Kit de imprensa",

  // Language switcher
  "lang.switchAria": "Mudar idioma",
};

export const dictionaries: Record<Locale, Dict> = { en, es, fr, de, it, pt };
