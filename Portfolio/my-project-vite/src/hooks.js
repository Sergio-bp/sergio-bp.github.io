import { useEffect, useState } from "react";
import { DEFAULT_LANGUAGE, translations } from "./translations";

const STORAGE_KEY = "portfolio-language";

function getInitialLanguage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && translations[saved]) return saved;
    } catch {
        // storage unavailable (private mode, blocked cookies...)
    }
    const browser = (navigator.language || "").slice(0, 2).toLowerCase();
    return translations[browser] ? browser : DEFAULT_LANGUAGE;
}

/** Language state persisted in localStorage, synced with <html lang> and meta description. */
export function useLanguage() {
    const [language, setLanguage] = useState(getInitialLanguage);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, language);
        } catch {
            // ignore
        }
        document.documentElement.lang = language;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute("content", translations[language].meta.description);
    }, [language]);

    return [language, setLanguage];
}

/** Returns the id of the section currently in view. */
export function useActiveSection(ids) {
    const [active, setActive] = useState(ids[0]);
    const key = ids.join(",");

    useEffect(() => {
        const elements = key.split(",").map((id) => document.getElementById(id)).filter(Boolean);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [key]);

    return active;
}

/** Adds `is-visible` to every `.reveal` element once it enters the viewport. */
export function useReveal() {
    useEffect(() => {
        const elements = document.querySelectorAll(".reveal");
        if (!("IntersectionObserver" in window)) {
            elements.forEach((el) => el.classList.add("is-visible"));
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}

/** True once the page has been scrolled past `offset` pixels. */
export function useScrolled(offset = 10) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > offset);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [offset]);

    return scrolled;
}
