// Central site configuration — all store links, company info and content live here.
// Change company details in one place and the whole site (footer + legal pages) updates.
import type React from "react";
import {
  CompassIcon,
  WordsIcon,
  MusicIcon,
  FriendsIcon,
  ActivitiesIcon,
  ShieldIcon,
} from "@/components/icons";

export const site = {
  appName: "Dora: Explore and Play!",
  tagline: "An Interactive Learning Adventure for Little Explorers",
  shortPitch:
    "¡Hola! Join Dora and her friends on a magical journey packed with exploration, music, words and kindness — designed especially for toddlers and preschoolers.",
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

export type Feature = {
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  title: string;
  description: string;
  accent: string; // tailwind gradient classes
};

export const features: Feature[] = [
  {
    Icon: CompassIcon,
    title: "Explore & Discover",
    description:
      "Adventure across vibrant, iconic locations — from Dora's Casita to the Tallest Mountain — and spark curiosity and problem-solving along the way.",
    accent: "from-dora-violet to-dora-purple",
  },
  {
    Icon: WordsIcon,
    title: "Learn Words",
    description:
      "Playful mini-games introduce basic Spanish vocabulary and phrases, turning every tap into a bilingual learning moment.",
    accent: "from-dora-sky to-dora-blue",
  },
  {
    Icon: MusicIcon,
    title: "Make Music",
    description:
      "Drum, dance and sing! Musical activities let children engage with the rhythm and sounds of Dora's colorful world.",
    accent: "from-dora-pink to-dora-magenta",
  },
  {
    Icon: FriendsIcon,
    title: "Help Friends",
    description:
      "Join Boots, Tico, Isa and Benny on their missions and build empathy, kindness and teamwork with every challenge.",
    accent: "from-dora-green to-dora-sky",
  },
  {
    Icon: ActivitiesIcon,
    title: "Fun Activities",
    description:
      "Shapes, colors, counting and creative play keep little minds busy with frustration-free challenges made for small hands.",
    accent: "from-dora-orange to-dora-pink",
  },
  {
    Icon: ShieldIcon,
    title: "Safe & Kid-Friendly",
    description:
      "ESRB Privacy Certified and built around preschool milestones, so parents can relax while kids explore and learn.",
    accent: "from-dora-yellow to-dora-orange",
  },
];

export type Shot = {
  src: string;
  caption: string;
  tag: string;
  accent: string; // tailwind gradient classes
};

export const shots: Shot[] = [
  { src: "/shots/8.webp", caption: "Explore with Dora", tag: "Adventure", accent: "from-dora-violet to-dora-purple" },
  { src: "/shots/2.webp", caption: "Learn words!", tag: "Bilingual", accent: "from-dora-sky to-dora-blue" },
  { src: "/shots/4.webp", caption: "Let's make music!", tag: "Music", accent: "from-dora-pink to-dora-magenta" },
  { src: "/shots/3.webp", caption: "Help friends!", tag: "Empathy", accent: "from-dora-green to-dora-sky" },
  { src: "/shots/6.webp", caption: "Fun activities!", tag: "Creativity", accent: "from-dora-orange to-dora-pink" },
  { src: "/shots/1.webp", caption: "Easy to play!", tag: "Toddler-friendly", accent: "from-dora-yellow to-dora-orange" },
  { src: "/shots/7.webp", caption: "Swiper, no swiping!", tag: "Classic moments", accent: "from-dora-magenta to-dora-violet" },
  { src: "/shots/5.webp", caption: "Easy to play!", tag: "Interactive", accent: "from-dora-blue to-dora-violet" },
];

// The hero screenshot shown inside the device mockup (landscape gameplay).
export const heroShot = "/shots/8.webp";
