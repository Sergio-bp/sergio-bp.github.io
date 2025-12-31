import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { SiC, SiDocker, SiKubernetes, SiTerraform, SiTypescript, SiGit, SiDart, SiPython } from "react-icons/si";
import { translations } from './translations';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const t = translations[language];

  // const projects = [

  // ];

  const skills = [
    { name: "C", level: 90, icon: <SiC />, color: "#A8B9CC" },
    { name: "Docker", level: 85, icon: <SiDocker />, color: "#2496ED" },
    { name: "Kubernetes", level: 88, icon: <SiKubernetes />, color: "#326CE5" },
    { name: "Terraform", level: 80, icon: <SiTerraform />, color: "#7B42BC" },
    { name: "TypeScript", level: 75, icon: <SiTypescript />, color: "#3178C6" },
    { name: "Git", level: 85, icon: <SiGit />, color: "#F05032" },
    { name: "Dart", level: 85, icon: <SiDart />, color: "#0175C2" },
    { name: "Python", level: 85, icon: <SiPython />, color: "#3776AB" }

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Navbar */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-white">
              {t.navbar.title}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {t.navbar.links.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-slate-800 text-white border border-slate-700 rounded px-2 py-1 focus:outline-none focus:border-purple-500"
              >
                <option value="en">🇺🇸 EN</option>
                <option value="es">🇪🇸 ES</option>
              </select>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            {t.navbar.links.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 py-3">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-slate-700 text-white border border-slate-600 rounded px-2 py-2 focus:outline-none focus:border-purple-500"
              >
                <option value="en">🇺🇸 English</option>
                <option value="es">🇪🇸 Español</option>
              </select>
            </div>
          </div>
        )}
      </nav >

      {/* Hero Section */}
      < section id="home" className="pt-32 pb-20 px-4" >
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-white to-gray-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {t.hero.role}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              {t.hero.ctaMain}
            </a>
            <a href="#projects" className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section >

      {/* About Section */}
      < section id="about-me" className="py-20 px-4 bg-slate-900/50" >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.about.title}</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t.about.p1}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t.about.p2}
            </p>
          </div>
        </div>
      </section >

      {/* Projects Section */}
      < section id="projects" className="py-20 px-4" >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.projects.title}</h2>
          <h3 className="text-4xl font-bold text-white mb-12 text-center">{t.projects.comingSoon}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                      <span className="text-xl">💻</span> Código
                    </button>
                    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                      <span className="text-xl">🔗</span> Demo
                    </button>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </section >

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 justify-center">
                  <span className="text-2xl" style={{ color: skill.color }} >
                    {skill.icon}
                  </span>
                  <span className="text-white font-semibold">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      < section id="contact" className="py-20 px-4" >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t.contact.title}</h2>
          <p className="text-gray-300 text-lg mb-12">
            {t.contact.subtitle}
          </p>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/Sergio-bp" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-3xl hover:bg-purple-500 transition-all duration-300 transform hover:scale-110">
              <FaGithub className="text-white" />
            </a>
            <a href="http://linkedin.com/in/sergio-barrios-portales-454422289/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-3xl hover:bg-purple-500 transition-all duration-300 transform hover:scale-110">
              <FaLinkedin className="text-white" />
            </a>
            <a href="mailto:sergio.barpor@gmail.com" className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-3xl hover:bg-purple-500 transition-all duration-300 transform hover:scale-110">
              <CgMail className="text-white" />

            </a>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="py-8 px-4 border-t border-slate-800" >
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 {t.footer.rights}</p>
        </div>
      </footer >
    </div >
  );
}