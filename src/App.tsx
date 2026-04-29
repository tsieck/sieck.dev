import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  ExternalLink,
  Github,
  Leaf,
  Mail,
  Moon,
  Play,
  Sun,
} from "lucide-react";
import {
  contactLinks,
  focusItems,
  navItems,
  principles,
  projects,
} from "./content";

const emailHref = "mailto:travis@sieck.dev";
const emailAddress = "travis@sieck.dev";

function EmailLink({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <a
      href={emailHref}
      onClick={handleClick}
      className={className}
      aria-label={`Email Travis Sieck at ${emailAddress}`}
      title={`Email ${emailAddress}`}
    >
      {children}
      <span className="sr-only">{copied ? "Email address copied" : ""}</span>
      {copied ? <span className="email-feedback">Copied</span> : null}
    </a>
  );
}

function AmbientScene() {
  return (
    <div className="ambient-scene" aria-hidden="true">
      <div className="ambient-glow ambient-glow-a" />
      <div className="ambient-glow ambient-glow-b" />
      <div className="ambient-plane" />
    </div>
  );
}

function Header({
  theme,
  onToggleTheme,
}: {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}) {
  const isDark = theme === "dark";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-graphite-950/70 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            title={`Switch to ${isDark ? "light" : "dark"} theme`}
          >
            {isDark ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}
          </button>
          <span className="font-mono text-sm text-stone-200">sieck.dev</span>
        </div>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-stone-400 transition hover:text-grove-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-grove-300"
            >
              {item.label}
            </a>
          ))}
        </div>
        <EmailLink className="inline-flex h-10 items-center gap-2 rounded-md border border-ember-300/30 bg-ember-300/10 px-3 text-sm font-medium text-ember-300 transition hover:border-ember-300/60 hover:bg-ember-300/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember-300">
          <Mail size={16} aria-hidden="true" />
          <span>Email</span>
        </EmailLink>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[96svh] overflow-hidden border-b border-white/10 bg-graphite-950"
    >
      <AmbientScene />
      <div className="relative z-10 mx-auto flex min-h-[96svh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:pb-20">
        <div className="max-w-3xl">
          <p className="hero-identity">
            <Leaf size={14} aria-hidden="true" />
            Systems-minded builder
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] text-stone-50 sm:text-6xl lg:text-7xl">
            Travis Sieck
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-2xl leading-tight text-grove-300 sm:text-3xl">
            Calm computing, ambient tools, and humane software.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">
            I make small, focused tools shaped by manufacturing operations, process
            design, and a bias toward software that quietly supports the work instead
            of taking over the room.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <EmailLink className="button-primary">
              <Mail size={18} aria-hidden="true" />
              <span>Email me</span>
            </EmailLink>
            <a href="#projects" className="button-secondary">
              <ArrowDown size={18} aria-hidden="true" />
              <span>Explore work</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="philosophy" className="section-shell">
      <div className="section-kicker">About / Philosophy</div>
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <h2 className="section-title">
          Building software with the instincts of someone who has lived inside real
          systems.
        </h2>
        <div className="space-y-6 text-lg leading-8 text-stone-300">
          <p>
            My background is manufacturing operations: practical systems, daily
            constraints, messy workflows, and the kind of problem solving that has to
            survive contact with people and machines.
          </p>
          <p>
            I am learning software seriously by building in public, shipping small
            tools, and using AI-assisted development as a way to move from idea to
            working artifact without losing the thread of craft.
          </p>
          <p>
            The throughline is calm computing: interfaces that reduce friction, support
            focus, and make computers feel a little more natural to live with.
          </p>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell border-y border-white/10 bg-graphite-900/60">
      <div className="section-kicker">Featured Projects</div>
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="section-title max-w-3xl">
          Small tools, archives, and interfaces with a bias toward usefulness.
        </h2>
        <a href={emailHref} className="quiet-link">
          <span>Ask about current work</span>
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-grove-300/85">
                {project.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-stone-50">{project.name}</h3>
              <p className="mt-4 leading-7 text-stone-300">{project.description}</p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="tag">{project.status}</span>
              <span className="tag tag-muted">{project.signal}</span>
              <a href={project.repoUrl} className="project-link" aria-label={`View ${project.name} on GitHub`}>
                <Github size={15} aria-hidden="true" />
                <span>GitHub</span>
              </a>
              {project.detailUrl ? (
                <a
                  href={project.detailUrl}
                  className="project-link project-link-live"
                  aria-label={`Watch the ${project.name} demo`}
                >
                  <Play size={15} aria-hidden="true" />
                  <span>Watch demo</span>
                </a>
              ) : null}
              {project.siteUrl ? (
                <a
                  href={project.siteUrl}
                  className="project-link project-link-live"
                  aria-label={`Visit the live ${project.name} site`}
                >
                  <ExternalLink size={15} aria-hidden="true" />
                  <span>Live site</span>
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function RainpaneFeature() {
  return (
    <section id="rainpane" className="section-shell">
      <div className="section-kicker">Rainpane Demo</div>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="section-title">Ambient weather for the desktop, tuned around focus.</h2>
          <p className="mt-6 text-lg leading-8 text-stone-300">
            Rainpane adds rain, fog, and soft glass effects over the desktop while
            keeping the active work area readable. The important part is restraint:
            atmosphere at the edges, clarity where the work is happening.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <a href="https://github.com/tsieck/rainpane" className="project-link">
              <Github size={15} aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href="https://github.com/tsieck/rainpane/releases"
              className="project-link project-link-live"
            >
              <ExternalLink size={15} aria-hidden="true" />
              <span>Releases</span>
            </a>
          </div>
        </div>
        <div className="space-y-5">
          <article className="video-card">
            <div className="video-copy">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-grove-300">
                Full desktop mode
              </p>
              <h3>Overview</h3>
            </div>
            <video
              controls
              muted
              playsInline
              preload="metadata"
              poster="/media/rainpane-overview-poster.png"
            >
              <source src="/media/rainpane-overview.mp4" type="video/mp4" />
            </video>
          </article>
          <article className="video-card">
            <div className="video-copy">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-grove-300">
                Focus clarity
              </p>
              <h3>GitHub repo focus pane</h3>
            </div>
            <video
              controls
              muted
              playsInline
              preload="metadata"
              poster="/media/rainpane-focus-poster.png"
            >
              <source src="/media/rainpane-focus.mp4" type="video/mp4" />
            </video>
          </article>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section id="principles" className="section-shell">
      <div className="section-kicker">Operating Principles</div>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <h2 className="section-title">
          The kind of software I want to make, and the standard I want to hold it to.
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <article key={principle.title} className="principle-card">
                <Icon size={22} className="text-ember-300" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-stone-50">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-7 text-stone-300">{principle.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CurrentFocus() {
  return (
    <section id="focus" className="section-shell border-y border-white/10 bg-graphite-900/60">
      <div className="section-kicker">Current Focus</div>
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <h2 className="section-title">Learning by shipping quiet, useful things.</h2>
          <p className="mt-6 text-lg leading-8 text-stone-300">
            I am most interested in the space between practical operations knowledge
            and new interface possibilities: tools that know when to help, when to
            disappear, and how to make the next action feel obvious.
          </p>
        </div>
        <div className="space-y-4">
          {focusItems.map((item, index) => (
            <article key={item.title} className="focus-row">
              <span className="font-mono text-sm text-ember-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-stone-50">{item.title}</h3>
                <p className="mt-2 leading-7 text-stone-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-mono text-sm text-grove-300">sieck.dev</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold text-stone-50 sm:text-4xl">
              I build calm, useful software for people who want technology to feel
              less noisy and more human.
            </h2>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return link.href.startsWith("mailto:") ? (
                <EmailLink key={link.href} className="footer-link">
                  <Icon size={17} aria-hidden="true" />
                  <span>{link.label}</span>
                </EmailLink>
              ) : (
                <a key={link.href} href={link.href} className="footer-link">
                  <Icon size={17} aria-hidden="true" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
        <p className="mt-12 text-sm text-stone-500">
          Built as a static site with React, TypeScript, Vite, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return (
    <div className="min-h-screen bg-graphite-950 text-stone-200" data-theme={theme}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Philosophy />
        <Projects />
        <RainpaneFeature />
        <Principles />
        <CurrentFocus />
      </main>
      <Footer />
    </div>
  );
}
