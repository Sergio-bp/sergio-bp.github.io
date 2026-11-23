import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { translations, LANGUAGES } from "./translations";
import { skills, socials, projects, GITHUB_URL, AVATAR_URL } from "./data";
import { useActiveSection, useLanguage, useReveal, useScrolled } from "./hooks";

const SECTION_IDS = translations.en.navbar.links.map((l) => l.id);

function LanguageSelect({ language, setLanguage, label, full = false, className = "" }) {
  return (
    <label className={className}>
      <span className="sr-only">{label}</span>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="w-full cursor-pointer rounded-md border border-slate-700 bg-slate-800 px-2 py-1.5 text-sm text-white focus:border-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {full ? lang.label : lang.short}
          </option>
        ))}
      </select>
    </label>
  );
}

function Navbar({ t, language, setLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const scrolled = useScrolled();

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  const linkClass = (id) =>
    `transition-colors duration-300 ${active === id ? "text-purple-400" : "text-gray-300 hover:text-purple-400"}`;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? "bg-slate-900/85 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tight text-white">
            {t.navbar.title}
            <span className="text-purple-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {t.navbar.links.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={linkClass(item.id)}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}
            <LanguageSelect language={language} setLanguage={setLanguage} label={t.navbar.languageLabel} />
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-2xl text-gray-300 hover:text-white focus-visible:ring-2 focus-visible:ring-purple-500/60 focus:outline-none md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? t.navbar.closeMenu : t.navbar.openMenu}
          >
            <span aria-hidden="true">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-slate-700 bg-slate-800 md:hidden">
          {t.navbar.links.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block px-4 py-3 hover:bg-slate-700 ${linkClass(item.id)}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="px-4 py-3">
            <LanguageSelect language={language} setLanguage={setLanguage} label={t.navbar.languageLabel} full className="block" />
          </div>
        </div>
      )}
    </nav>
  );
}

function Avatar({ alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="mx-auto h-32 w-32 rounded-full bg-linear-to-r from-purple-500 to-pink-500 p-1 shadow-lg shadow-purple-500/20">
      {failed ? (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900 text-4xl font-bold text-white" role="img" aria-label={alt}>
          SB
        </div>
      ) : (
        <img
          src={AVATAR_URL}
          alt={alt}
          width="128"
          height="128"
          className="h-full w-full rounded-full bg-slate-900 object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
      {children}
      <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-linear-to-r from-purple-500 to-pink-500" />
    </h2>
  );
}

function ProjectCard({ project, t, language }) {
  const description = typeof project.description === "string" ? project.description : project.description?.[language];

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500">
      {project.image && <img src={project.image} alt="" loading="lazy" className="h-48 w-full object-cover" />}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
        {description && <p className="mb-4 text-gray-400">{description}</p>}
        <ul className="mb-4 flex flex-wrap gap-2">
          {project.tech?.map((tech) => (
            <li key={tech} className="rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-300">
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          {project.code && (
            <a href={project.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 transition-colors hover:text-purple-300">
              <FaGithub aria-hidden="true" /> {t.projects.buttons.code}
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 transition-colors hover:text-purple-300">
              <FaExternalLinkAlt aria-hidden="true" /> {t.projects.buttons.demo}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [language, setLanguage] = useLanguage();
  const t = translations[language];
  useReveal();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-linear-to-br from-gray-950 via-gray-900 to-black">
      {/* Decorative background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] max-w-[150vw] -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />

      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-purple-600 focus:px-4 focus:py-2 focus:text-white">
        {t.skipLink}
      </a>

      <Navbar t={t} language={language} setLanguage={setLanguage} />

      <main id="main" className="relative">
        {/* Hero */}
        <section id="home" className="flex min-h-[90vh] items-center px-4 pb-20 pt-32">
          <div className="mx-auto max-w-7xl text-center">
            <div className="mb-8">
              <Avatar alt={t.hero.avatarAlt} />
            </div>
            <p className="mb-3 font-mono text-purple-400">{t.hero.greeting}</p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
              <span className="bg-linear-to-r from-white via-gray-200 to-purple-300 bg-clip-text text-transparent">{t.hero.name}</span>
            </h1>
            <p className="mb-10 text-xl text-gray-300 md:text-2xl">{t.hero.role}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-linear-to-r from-purple-500 to-pink-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 focus-visible:ring-2 focus-visible:ring-purple-300 focus:outline-none"
              >
                {t.hero.ctaMain}
              </a>
              <a
                href="#projects"
                className="rounded-full border-2 border-purple-500 px-8 py-3 font-semibold text-purple-300 transition-all duration-300 hover:bg-purple-500/10 focus-visible:ring-2 focus-visible:ring-purple-300 focus:outline-none"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about-me" className="bg-slate-900/50 px-4 py-20">
          <div className="reveal mx-auto max-w-4xl">
            <SectionTitle>{t.about.title}</SectionTitle>
            <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8 shadow-xl backdrop-blur-sm">
              <p className="mb-6 text-lg leading-relaxed text-gray-300">{t.about.p1}</p>
              <p className="text-lg leading-relaxed text-gray-300">{t.about.p2}</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="px-4 py-20">
          <div className="reveal mx-auto max-w-7xl">
            <SectionTitle>{t.projects.title}</SectionTitle>
            {projects.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} t={t} language={language} />
                ))}
              </div>
            ) : (
              <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-slate-600 bg-slate-800/30 p-10 text-center">
                <h3 className="mb-3 text-2xl font-bold text-white">{t.projects.comingSoon}</h3>
                <p className="mb-6 text-gray-400">{t.projects.comingSoonText}</p>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-700 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-purple-500"
                >
                  <FaGithub aria-hidden="true" /> {t.projects.githubCta}
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="bg-slate-900/50 px-4 py-20">
          <div className="reveal mx-auto max-w-4xl">
            <SectionTitle>{t.skills.title}</SectionTitle>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {skills.map(({ name, Icon, color }) => (
                <li
                  key={name}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-500"
                >
                  <Icon aria-hidden="true" className="text-4xl transition-transform duration-300 group-hover:scale-110" style={{ color }} />
                  <span className="font-semibold text-white">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-4 py-20">
          <div className="reveal mx-auto max-w-4xl text-center">
            <SectionTitle>{t.contact.title}</SectionTitle>
            <p className="-mt-4 mb-12 text-lg text-gray-300">{t.contact.subtitle}</p>
            <ul className="flex justify-center gap-6">
              {socials.map(({ name, href, Icon }) => {
                const external = href.startsWith("http");
                return (
                  <li key={name}>
                    <a
                      href={href}
                      aria-label={name}
                      title={name}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-3xl text-white transition-all duration-300 hover:scale-110 hover:bg-purple-500 focus-visible:ring-2 focus-visible:ring-purple-300 focus:outline-none"
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-slate-800 px-4 py-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
