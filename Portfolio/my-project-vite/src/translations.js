export const LANGUAGES = [
    { code: "en", short: "EN", label: "English" },
    { code: "es", short: "ES", label: "Español" }
];

export const DEFAULT_LANGUAGE = "en";

export const translations = {
    en: {
        skipLink: "Skip to content",
        meta: {
            description: "Portfolio of Sergio Barrios Portales, backend and DevOps developer at AIR Institute."
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
            role: "Backend & DevOps Developer",
            ctaMain: "Contact",
            ctaSecondary: "See Projects",
            avatarAlt: "Profile picture of Sergio Barrios Portales"
        },
        about: {
            title: "About me",
            paragraphs: [
                "I'm a software developer focused on the backend: I design APIs and services that are clear, fast and easy to maintain. I care about how software behaves beyond the code, from my machine all the way to production.",
                "That's why I spend more and more time on DevOps and infrastructure: containers with Docker, orchestration with Kubernetes, infrastructure as code with Terraform, and CI/CD pipelines that automate testing and deployment. This portfolio itself is built and published automatically with GitHub Actions.",
                "I studied Computer Engineering in Information Systems at the University of Salamanca (Zamora campus), and I currently work at AIR Institute, where I apply all of this to real projects."
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
            description: "Portafolio de Sergio Barrios Portales, desarrollador backend y DevOps en AIR Institute."
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
            role: "Desarrollador Backend y DevOps",
            ctaMain: "Contactar",
            ctaSecondary: "Ver Proyectos",
            avatarAlt: "Foto de perfil de Sergio Barrios Portales"
        },
        about: {
            title: "Sobre mí",
            paragraphs: [
                "Soy desarrollador de software centrado en el backend: diseño APIs y servicios pensando en que sean claros, rápidos y fáciles de mantener. Me interesa entender cómo se comporta el software más allá del código, desde mi máquina hasta producción.",
                "Por eso cada vez dedico más tiempo a DevOps e infraestructura: contenedores con Docker, orquestación con Kubernetes, infraestructura como código con Terraform y pipelines de CI/CD que automatizan pruebas y despliegues. Este mismo portfolio se compila y se publica solo con GitHub Actions.",
                "Estudié Ingeniería Informática en Sistemas de Información en la Universidad de Salamanca (campus de Zamora) y actualmente trabajo en AIR Institute, donde aplico todo esto en proyectos reales."
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
