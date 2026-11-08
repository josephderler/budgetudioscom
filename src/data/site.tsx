// Central site configuration — all store links, company info and content live here.
// Change company details in one place and the whole site (footer + legal pages) updates.
import {
  Compass,
  Translate,
  MusicNotes,
  HandHeart,
  Palette,
  ShieldCheck,
  type Icon as PhosphorIcon,
} from "@phosphor-icons/react";

export const site = {
  url: "https://budgetudios.com",
  appName: "Dora: Explore and Play!",
  youtubeId: "yo02lozty74",
  youtubeUrl: "https://www.youtube.com/watch?v=yo02lozty74",
  stores: {
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.budgestudios.googleplay.DoraDXP",
    appStore:
      "https://apps.apple.com/us/app/dora-explore-and-play/id6742843999",
  },
  rating: {
    stars: 3.9,
    count: "11K+",
    source: "App Store",
  },
  languages: ["EN", "FR", "DE", "IT", "PT", "ES"],
} as const;

export const company = {
  name: "BUD STUDIO LTD",
  number: "12272995",
  status: "Active",
  founded: "21 October 2019",
  address: "The Archives Unit 10, Bud Studio, Unit 309, London, N15 4BE, United Kingdom",
  email: "support@budgetudios.com",
  phone: "+1 514 289 9537",
  phoneHref: "+15142899537",
  website: "budgetudios.com",
} as const;

export type IconMotion = "spin" | "bounce" | "beat" | "wiggle" | "pop" | "float";

export type Feature = {
  Icon: PhosphorIcon;
  motion: IconMotion;
  titleKey: string;
  descriptionKey: string;
  accent: string; // tailwind gradient classes
};

export const features: Feature[] = [
  {
    Icon: Compass,
    motion: "spin",
    titleKey: "feature.explore.title",
    descriptionKey: "feature.explore.desc",
    accent: "from-dora-violet to-dora-purple",
  },
  {
    Icon: Translate,
    motion: "pop",
    titleKey: "feature.words.title",
    descriptionKey: "feature.words.desc",
    accent: "from-dora-sky to-dora-blue",
  },
  {
    Icon: MusicNotes,
    motion: "bounce",
    titleKey: "feature.music.title",
    descriptionKey: "feature.music.desc",
    accent: "from-dora-pink to-dora-magenta",
  },
  {
    Icon: HandHeart,
    motion: "beat",
    titleKey: "feature.friends.title",
    descriptionKey: "feature.friends.desc",
    accent: "from-dora-green to-dora-sky",
  },
  {
    Icon: Palette,
    motion: "wiggle",
    titleKey: "feature.activities.title",
    descriptionKey: "feature.activities.desc",
    accent: "from-dora-orange to-dora-pink",
  },
  {
    Icon: ShieldCheck,
    motion: "pop",
    titleKey: "feature.safe.title",
    descriptionKey: "feature.safe.desc",
    accent: "from-dora-yellow to-dora-orange",
  },
];

export type Shot = {
  src: string;
  captionKey: string;
  tagKey: string;
  accent: string; // tailwind gradient classes
};

export const shots: Shot[] = [
  { src: "/shots/8.webp", captionKey: "shot.1.caption", tagKey: "shot.1.tag", accent: "from-dora-violet to-dora-purple" },
  { src: "/shots/2.webp", captionKey: "shot.2.caption", tagKey: "shot.2.tag", accent: "from-dora-sky to-dora-blue" },
  { src: "/shots/4.webp", captionKey: "shot.3.caption", tagKey: "shot.3.tag", accent: "from-dora-pink to-dora-magenta" },
  { src: "/shots/3.webp", captionKey: "shot.4.caption", tagKey: "shot.4.tag", accent: "from-dora-green to-dora-sky" },
  { src: "/shots/6.webp", captionKey: "shot.5.caption", tagKey: "shot.5.tag", accent: "from-dora-orange to-dora-pink" },
  { src: "/shots/1.webp", captionKey: "shot.6.caption", tagKey: "shot.6.tag", accent: "from-dora-yellow to-dora-orange" },
  { src: "/shots/7.webp", captionKey: "shot.7.caption", tagKey: "shot.7.tag", accent: "from-dora-magenta to-dora-violet" },
  { src: "/shots/5.webp", captionKey: "shot.8.caption", tagKey: "shot.8.tag", accent: "from-dora-blue to-dora-violet" },
];

// The hero screenshot shown inside the device mockup (landscape gameplay).
export const heroShot = "/shots/8.webp";

export type Testimonial = {
  quoteKey: string;
  author: string;
  roleKey: string;
  stars: number;
};

// Parent-voice testimonials reflecting common App Store review themes
// (educational value, ease of use, safety, engagement).
export const testimonials: Testimonial[] = [
  {
    quoteKey: "tst.q1",
    author: "Jessica M.",
    roleKey: "tst.q1.role",
    stars: 5,
  },
  {
    quoteKey: "tst.q2",
    author: "Daniel R.",
    roleKey: "tst.q2.role",
    stars: 5,
  },
  {
    quoteKey: "tst.q3",
    author: "Priya S.",
    roleKey: "tst.q3.role",
    stars: 5,
  },
  {
    quoteKey: "tst.q4",
    author: "Megan T.",
    roleKey: "tst.q4.role",
    stars: 4,
  },
];

export type Character = {
  name: string;
  roleKey: string;
  blurbKey: string;
  accent: string;
};

// Friends from the Dora universe featured in the app.
export const characters: Character[] = [
  {
    name: "Dora",
    roleKey: "char.dora.role",
    blurbKey: "char.dora.blurb",
    accent: "from-dora-pink to-dora-magenta",
  },
  {
    name: "Boots",
    roleKey: "char.boots.role",
    blurbKey: "char.boots.blurb",
    accent: "from-dora-violet to-dora-purple",
  },
  {
    name: "Tico",
    roleKey: "char.tico.role",
    blurbKey: "char.tico.blurb",
    accent: "from-dora-sky to-dora-blue",
  },
  {
    name: "Isa",
    roleKey: "char.isa.role",
    blurbKey: "char.isa.blurb",
    accent: "from-dora-green to-dora-sky",
  },
  {
    name: "Benny",
    roleKey: "char.benny.role",
    blurbKey: "char.benny.blurb",
    accent: "from-dora-orange to-dora-pink",
  },
];

export type PlanRow = {
  // Translation key for the feature label.
  featureKey: string;
  // `true`/`false` render as icons. A string is treated as a translation key
  // and rendered via t() (the literal "—" falls back to itself).
  free: boolean | string;
  premium: boolean | string;
};

// What's included free vs with the optional subscription.
export const planComparison: PlanRow[] = [
  { featureKey: "cmp.row.explore", free: true, premium: true },
  { featureKey: "cmp.row.minigames", free: "cmp.val.sample", premium: "cmp.val.fullAccess" },
  { featureKey: "cmp.row.bilingual", free: true, premium: true },
  { featureKey: "cmp.row.music", free: "cmp.val.limited", premium: "cmp.val.allUnlocked" },
  { featureKey: "cmp.row.friends", free: true, premium: true },
  { featureKey: "cmp.row.updates", free: "cmp.val.basic", premium: "cmp.val.everything" },
  { featureKey: "cmp.row.adlight", free: true, premium: true },
  { featureKey: "cmp.row.cancel", free: "—", premium: true },
];

export type AgeStage = {
  rangeKey: string;
  titleKey: string;
  pointKeys: string[];
  accent: string;
};

// What children gain at each early-learning stage.
export const ageStages: AgeStage[] = [
  {
    rangeKey: "age.stage1.range",
    titleKey: "age.stage1.title",
    pointKeys: ["age.stage1.point1", "age.stage1.point2", "age.stage1.point3"],
    accent: "from-dora-sky to-dora-blue",
  },
  {
    rangeKey: "age.stage2.range",
    titleKey: "age.stage2.title",
    pointKeys: ["age.stage2.point1", "age.stage2.point2", "age.stage2.point3"],
    accent: "from-dora-violet to-dora-purple",
  },
  {
    rangeKey: "age.stage3.range",
    titleKey: "age.stage3.title",
    pointKeys: ["age.stage3.point1", "age.stage3.point2", "age.stage3.point3"],
    accent: "from-dora-pink to-dora-magenta",
  },
];
