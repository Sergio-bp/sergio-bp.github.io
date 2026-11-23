import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { translations, LANGUAGES } from "./translations";
import { skills, socials, projects, GITHUB_URL, AVATAR_URL } from "./data";
import { useActiveSection, useLanguage, useScrolled } from "./hooks";

const SECTION_IDS = translations.en.navbar.links.map((l) => l.id);

const focusRing = "focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-page";

function LanguageToggle({ language, setLanguage, label }) {
  const index = LANGUAGES.findIndex((lang) => lang.code === language);
  const next = LANGUAGES[(index + 1) % LANGUAGES.length];

  return (
    <button
      type="button"
      onClick={() => setLanguage(next.code)}
      aria-label={`${label}: ${next.label}`}
      title={next.label}
      className={`inline-flex cursor-pointer items-center rounded-full border border-line p-0.5 text-xs font-semibold transition-colors hover:border-muted ${focusRing}`}
    >
      {LANGUAGES.map((lang) => (
        <span
          key={lang.code}
          aria-hidden="true"
          className={`rounded-full px-2.5 py-1 transition-colors duration-300 ${
            lang.code === language ? "bg-ink text-page" : "text-muted"
          }`}
        >
          {lang.short}
        </span>
      ))}
    </button>
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

  const linkClass = (id) => `transition-colors duration-200 ${active === id ? "text-ink" : "text-muted hover:text-ink"}`;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || isMenuOpen ? "border-line bg-page/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className={`rounded text-lg font-semibold tracking-tight text-ink ${focusRing}`}>
            {t.navbar.title}
          </a>

          <div className="hidden items-center gap-8 text-sm md:flex">
            {t.navbar.links.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded ${linkClass(item.id)} ${focusRing}`}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}
            <LanguageToggle language={language} setLanguage={setLanguage} label={t.navbar.languageLabel} />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle language={language} setLanguage={setLanguage} label={t.navbar.languageLabel} />
            <button
              type="button"
              className={`rounded-md p-2 text-2xl text-body hover:text-ink ${focusRing}`}
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? t.navbar.closeMenu : t.navbar.openMenu}
            >
              <span aria-hidden="true">{isMenuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-line bg-page md:hidden">
          {t.navbar.links.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block border-b border-line px-4 py-4 text-lg last:border-b-0 ${linkClass(item.id)}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Avatar({ alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-line bg-surface text-2xl font-semibold text-ink" role="img" aria-label={alt}>
        SB
      </div>
    );
  }

  return (
    <img
      src={AVATAR_URL}
      alt={alt}
      width="80"
      height="80"
      className="h-20 w-20 rounded-full border border-line object-cover grayscale"
      onError={() => setFailed(true)}
    />
  );
}

/** Two-column section: title on the left, content on the right. */
function Section({ id, title, alt = false, children }) {
  return (
    <section id={id} className={`border-t border-line px-4 py-20 sm:px-6 md:py-28 lg:px-8 ${alt ? "bg-surface" : ""}`}>
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 className="text-2xl font-semibold tracking-tight text-ink md:sticky md:top-28 md:self-start md:text-3xl">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}

function ProjectCard({ project, t, language }) {
  const description = typeof project.description === "string" ? project.description : project.description?.[language];

  return (
    <article className="border-b border-line py-8 first:pt-0 last:border-b-0">
      {project.image && <img src={project.image} alt="" loading="lazy" className="mb-6 aspect-video w-full rounded-lg border border-line object-cover grayscale transition duration-500 hover:grayscale-0" />}
      <h3 className="mb-2 text-xl font-semibold text-ink">{project.title}</h3>
      {description && <p className="mb-4 max-w-prose text-body">{description}</p>}
      {project.tech?.length > 0 && <p className="mb-4 text-sm text-muted">{project.tech.join(", ")}</p>}
      <div className="flex gap-6 text-sm">
        {project.code && (
          <a href={project.code} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 rounded text-ink underline-offset-4 hover:underline ${focusRing}`}>
            <FaGithub aria-hidden="true" /> {t.projects.buttons.code}
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 rounded text-ink underline-offset-4 hover:underline ${focusRing}`}>
            <FaExternalLinkAlt aria-hidden="true" /> {t.projects.buttons.demo}
          </a>
        )}
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [language, setLanguage] = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-page text-body">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-page">
        {t.skipLink}
      </a>

      <Navbar t={t} language={language} setLanguage={setLanguage} />

      <main id="main">
        {/* Hero */}
        <section id="home" className="flex min-h-[92vh] items-end px-4 pb-20 pt-32 sm:px-6 md:pb-28 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="hero-in" style={{ "--d": "0ms" }}>
              <Avatar alt={t.hero.avatarAlt} />
            </div>
            <p className="hero-in mt-8 text-lg text-muted md:text-xl" style={{ "--d": "80ms" }}>
              {t.hero.greeting}
            </p>
            <h1
              className="hero-in mt-2 text-[clamp(3rem,11vw,9.5rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-ink"
              style={{ "--d": "160ms" }}
            >
              {t.hero.name}
            </h1>
            <div className="hero-in mt-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between" style={{ "--d": "260ms" }}>
              <p className="text-xl text-body md:text-2xl">{t.hero.role}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className={`rounded-full bg-ink px-7 py-3 font-semibold text-page transition-colors hover:bg-body ${focusRing}`}
                >
                  {t.hero.ctaMain}
                </a>
                <a
                  href="#projects"
                  className={`rounded-full border border-line px-7 py-3 font-semibold text-ink transition-colors hover:border-ink ${focusRing}`}
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        <Section id="about-me" title={t.about.title} alt>
          <div className="max-w-prose space-y-6 text-lg leading-relaxed md:text-xl">
            <p className="text-ink">{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
        </Section>

        <Section id="projects" title={t.projects.title}>
          {projects.length > 0 ? (
            projects.map((project) => <ProjectCard key={project.title} project={project} t={t} language={language} />)
          ) : (
            <div className="max-w-prose">
              <h3 className="mb-3 text-xl font-semibold text-ink">{t.projects.comingSoon}</h3>
              <p className="mb-8 text-lg text-body">{t.projects.comingSoonText}</p>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border border-line px-6 py-2.5 font-semibold text-ink transition-colors hover:border-ink ${focusRing}`}
              >
                <FaGithub aria-hidden="true" /> {t.projects.githubCta}
              </a>
            </div>
          )}
        </Section>

        <Section id="skills" title={t.skills.title} alt>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
            {skills.map(({ name, Icon, color }) => (
              <li key={name} className="group flex flex-col items-start gap-6 bg-surface p-5 transition-colors duration-300 hover:bg-page">
                <Icon aria-hidden="true" className="text-3xl transition-transform duration-300 group-hover:scale-110" style={{ color }} />
                <span className="font-medium text-ink">{name}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title={t.contact.title}>
          <p className="mb-10 max-w-prose text-lg text-body md:text-xl">{t.contact.subtitle}</p>
          <ul className="border-t border-line">
            {socials.map(({ name, href, label, Icon, color }) => {
              const external = href.startsWith("http");
              return (
                <li key={name} className="border-b border-line">
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`group flex items-center justify-between gap-4 py-5 ${focusRing}`}
                  >
                    <span className="flex items-center gap-4 text-xl font-medium text-ink md:text-2xl">
                      <Icon aria-hidden="true" className="text-2xl" style={{ color }} />
                      {name}
                    </span>
                    <span className="truncate text-sm text-muted transition-colors group-hover:text-ink">{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Section>
      </main>

      <footer className="border-t border-line px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-sm text-muted">
          <p>
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
