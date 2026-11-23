import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { SiC, SiDocker, SiKubernetes, SiTerraform, SiTypescript, SiGit, SiDart, SiPython } from "react-icons/si";

export const GITHUB_USER = "Sergio-bp";
export const GITHUB_URL = `https://github.com/${GITHUB_USER}`;
export const AVATAR_URL = `https://github.com/${GITHUB_USER}.png?size=256`;

export const skills = [
    { name: "C", Icon: SiC, color: "#A8B9CC" },
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
    { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "Dart", Icon: SiDart, color: "#0175C2" },
    { name: "Python", Icon: SiPython, color: "#3776AB" }
];

export const socials = [
    { name: "GitHub", href: GITHUB_URL, Icon: FaGithub },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sergio-barrios-portales-454422289/", Icon: FaLinkedin },
    { name: "Email", href: "mailto:sergio.barpor@gmail.com", Icon: CgMail }
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
