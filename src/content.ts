import type { LucideIcon } from "lucide-react";
import {
  Cpu,
  Factory,
  Leaf,
  Mail,
  MonitorDot,
  Route,
  Sparkles,
  Workflow,
} from "lucide-react";

export type Project = {
  name: string;
  eyebrow: string;
  description: string;
  status: string;
  signal: string;
  repoUrl: string;
  detailUrl?: string;
  siteUrl?: string;
};

export type Principle = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type FocusItem = {
  title: string;
  description: string;
};

export const navItems = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Projects", href: "#projects" },
  { label: "Principles", href: "#principles" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    name: "Rainpane",
    eyebrow: "Ambient desktop weather",
    description:
      "An ambient desktop focus overlay where rain, droplets, fog, and glassy effects live around the work while the active window stays clear.",
    status: "Shipping alpha builds",
    signal: "calm interfaces",
    repoUrl: "https://github.com/tsieck/rainpane",
    detailUrl: "#rainpane",
  },
  {
    name: "Alicante Archive",
    eyebrow: "Local history site",
    description:
      "A source-led historical archive for a Colorado mining town, built around readable OCR, citations, and durable static pages.",
    status: "Published static archive",
    signal: "humane preservation",
    repoUrl: "https://github.com/tsieck/Alicante-Archive",
    siteUrl: "https://tsieck.github.io/Alicante-Archive/",
  },
  {
    name: "Primebloom",
    eyebrow: "Generative ambient instrument",
    description:
      "A contemplative generative audio-visual instrument that turns prime numbers into light, sparse ambient sound, and seeded slow performances.",
    status: "Published static instrument",
    signal: "ambient systems",
    repoUrl: "https://github.com/tsieck/Prime-Bloom",
    siteUrl: "https://tsieck.github.io/Prime-Bloom/",
  },
];

export const principles: Principle[] = [
  {
    title: "Tools should lower the room noise.",
    description:
      "Good software gives people fewer things to remember, fewer tabs to juggle, and fewer interruptions to survive.",
    icon: Leaf,
  },
  {
    title: "Systems are learned by touching them.",
    description:
      "Manufacturing taught me to respect the floor: the real workflow, the edge cases, and the people keeping the line moving.",
    icon: Factory,
  },
  {
    title: "Assistance should stay in service of the work.",
    description:
      "Modern tools are useful when they help test ideas, shorten feedback loops, and leave judgment, taste, and responsibility intact.",
    icon: Cpu,
  },
  {
    title: "Magic is mostly good defaults.",
    description:
      "The best moments feel effortless because the system noticed the shape of the task and got out of the way.",
    icon: Sparkles,
  },
];

export const focusItems: FocusItem[] = [
  {
    title: "Assisted building",
    description:
      "Building a serious practice around guided iteration, verification, and small shippable systems.",
  },
  {
    title: "Ambient interfaces",
    description:
      "Exploring software that lives at the edge of attention: useful when needed, quiet when not.",
  },
  {
    title: "Operations-minded software",
    description:
      "Turning messy workflows into tools that are durable, legible, and grounded in how work actually happens.",
  },
];

export const contactLinks = [
  {
    label: "travis@sieck.dev",
    href: "mailto:travis@sieck.dev",
    icon: Mail,
  },
  {
    label: "View projects",
    href: "#projects",
    icon: MonitorDot,
  },
  {
    label: "Current focus",
    href: "#focus",
    icon: Route,
  },
  {
    label: "Operating principles",
    href: "#principles",
    icon: Workflow,
  },
];
