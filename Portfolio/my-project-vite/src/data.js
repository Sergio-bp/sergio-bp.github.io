import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { SiC, SiDocker, SiKubernetes, SiTerraform, SiTypescript, SiGit, SiDart, SiPython } from "react-icons/si";

export const GITHUB_USER = "Sergio-bp";
export const GITHUB_URL = `https://github.com/${GITHUB_USER}`;
export const AVATAR_URL = `https://github.com/${GITHUB_USER}.png?size=256`;

export const skills = [
    { name: "C", color: "#00599C", Icon: SiC },
    { name: "Docker", color: "#2496ED", Icon: SiDocker },
    { name: "Kubernetes", color: "#326CE5", Icon: SiKubernetes },
    { name: "Terraform", color: "#7B42BC", Icon: SiTerraform },
    { name: "TypeScript", color: "#3178C6", Icon: SiTypescript },
    { name: "Git", color: "#F05032", Icon: SiGit },
    { name: "Dart", color: "#0175C2", Icon: SiDart },
    { name: "Python", color: "#3776AB", Icon: SiPython }
];

export const socials = [
    { name: "GitHub", label: "github.com/Sergio-bp", href: GITHUB_URL, Icon: FaGithub, color: "#181717" },
    { name: "LinkedIn", label: "in/sergio-barrios-portales", href: "https://www.linkedin.com/in/sergio-barrios-portales-454422289/", Icon: FaLinkedin, color: "#0A66C2" },
    { name: "Email", label: "sergio.barpor@gmail.com", href: "mailto:sergio.barpor@gmail.com", Icon: CgMail, color: "#EA4335" }
];

/*
 * Add projects here and they will be rendered automatically.
 * `description` can be a string or an object keyed by language ({ en, es }).
 *
 * {
 *   title: "My project",
 *   description: { en: "...", es: "..." },
 *   tech: ["Docker", "Python"],
 *   image: "/projects/my-project.png",   // optional, place it in /public
 *   code: "https://github.com/Sergio-bp/my-project",
 *   demo: "https://...",                 // optional
 * }
 */
export const projects = [];
