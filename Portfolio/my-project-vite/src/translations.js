export const LANGUAGES = [
    { code: "en", short: "EN", label: "English" },
    { code: "es", short: "ES", label: "Español" }
];

export const DEFAULT_LANGUAGE = "en";

export const translations = {
    en: {
        skipLink: "Skip to content",
        meta: {
            description: "Portfolio of Sergio Barrios Portales, DevOps Developer at AIR Institute."
        },
        navbar: {
            title: "Sergio BP",
            languageLabel: "Language",
            openMenu: "Open menu",
            closeMenu: "Close menu",
            links: [
                { id: "home", label: "Home" },
                { id: "about-me", label: "About Me" },
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
                { id: "contact", label: "Contact" }
            ]
        },
        hero: {
            greeting: "Hello, I'm",
            name: "Sergio Barrios Portales",
            role: "DevOps Developer",
            ctaMain: "Contact",
            ctaSecondary: "See Projects",
            avatarAlt: "Profile picture of Sergio Barrios Portales"
        },
        about: {
            title: "About me",
            paragraphs: [
                "I work as a DevOps Developer at AIR Institute. My day-to-day is about getting software from the repository to production reliably: containers with Docker, orchestration with Kubernetes, infrastructure as code with Terraform, and CI/CD pipelines that automate testing and deployment.",
                "I come from backend development, so I also enjoy designing APIs and services that are clear, fast and easy to maintain. I care about how software behaves beyond the code, from my machine all the way to production. This portfolio itself is built and published automatically with GitHub Actions.",
                "I studied Computer Engineering in Information Systems at the University of Salamanca, at the Zamora campus."
            ]
        },
        projects: {
            title: "Featured Projects",
            comingSoon: "Coming soon",
            comingSoonText: "I'm preparing a selection of projects to show here. Meanwhile, you can browse my repositories on GitHub.",
            githubCta: "View my GitHub",
            buttons: {
                code: "Code",
                demo: "Demo"
            }
        },
        skills: {
            title: "Skills"
        },
        contact: {
            title: "Shall we talk?",
            subtitle: "I'm always open to new opportunities and collaborations"
        },
        footer: {
            rights: "Sergio Barrios Portales. All rights reserved."
        }
    },
    es: {
        skipLink: "Saltar al contenido",
        meta: {
            description: "Portafolio de Sergio Barrios Portales, desarrollador DevOps en AIR Institute."
        },
        navbar: {
            title: "Sergio BP",
            languageLabel: "Idioma",
            openMenu: "Abrir menú",
            closeMenu: "Cerrar menú",
            links: [
                { id: "home", label: "Inicio" },
                { id: "about-me", label: "Sobre Mí" },
                { id: "projects", label: "Proyectos" },
                { id: "skills", label: "Habilidades" },
                { id: "contact", label: "Contacto" }
            ]
        },
        hero: {
            greeting: "Hola, soy",
            name: "Sergio Barrios Portales",
            role: "Desarrollador DevOps",
            ctaMain: "Contactar",
            ctaSecondary: "Ver Proyectos",
            avatarAlt: "Foto de perfil de Sergio Barrios Portales"
        },
        about: {
            title: "Sobre mí",
            paragraphs: [
                "Trabajo como DevOps Developer en AIR Institute. Mi día a día consiste en llevar el software del repositorio a producción de forma fiable: contenedores con Docker, orquestación con Kubernetes, infraestructura como código con Terraform y pipelines de CI/CD que automatizan pruebas y despliegues.",
                "Vengo del desarrollo backend, así que también disfruto diseñando APIs y servicios claros, rápidos y fáciles de mantener. Me interesa entender cómo se comporta el software más allá del código, desde mi máquina hasta producción. Este mismo portfolio se compila y se publica solo con GitHub Actions.",
                "Estudié Ingeniería Informática en Sistemas de Información en la Universidad de Salamanca, en el campus de Zamora."
            ]
        },
        projects: {
            title: "Proyectos Destacados",
            comingSoon: "Próximamente",
            comingSoonText: "Estoy preparando una selección de proyectos para mostrar aquí. Mientras tanto, puedes ver mis repositorios en GitHub.",
            githubCta: "Ver mi GitHub",
            buttons: {
                code: "Código",
                demo: "Demo"
            }
        },
        skills: {
            title: "Habilidades"
        },
        contact: {
            title: "¿Hablamos?",
            subtitle: "Siempre estoy abierto a nuevas oportunidades y colaboraciones"
        },
        footer: {
            rights: "Sergio Barrios Portales. Todos los derechos reservados."
        }
    }
};
