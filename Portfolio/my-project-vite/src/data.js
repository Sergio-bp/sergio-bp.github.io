import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { SiC, SiDocker, SiKubernetes, SiTerraform, SiTypescript, SiGit, SiDart, SiPython } from "react-icons/si";

export const GITHUB_USER = "Sergio-bp";
export const GITHUB_URL = `https://github.com/${GITHUB_USER}`;
export const AVATAR_URL = `https://github.com/${GITHUB_USER}.png?size=256`;

export const skills = [
    { name: "C", Icon: SiC },
    { name: "Docker", Icon: SiDocker },
    { name: "Kubernetes", Icon: SiKubernetes },
    { name: "Terraform", Icon: SiTerraform },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "Git", Icon: SiGit },
    { name: "Dart", Icon: SiDart },
    { name: "Python", Icon: SiPython }
];

export const socials = [
    { name: "GitHub", label: "github.com/Sergio-bp", href: GITHUB_URL, Icon: FaGithub },
    { name: "LinkedIn", label: "in/sergio-barrios-portales", href: "https://www.linkedin.com/in/sergio-barrios-portales-454422289/", Icon: FaLinkedin },
    { name: "Email", label: "sergio.barpor@gmail.com", href: "mailto:sergio.barpor@gmail.com", Icon: CgMail }
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
