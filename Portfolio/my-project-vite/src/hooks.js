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

/** Returns the id of the section currently in view (the last one whose top has passed 40% of the viewport). */
export function useActiveSection(ids) {
    const [active, setActive] = useState(ids[0]);
    const key = ids.join(",");

    useEffect(() => {
        const sectionIds = key.split(",");
        const update = () => {
            const line = window.innerHeight * 0.4;
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
            let current = sectionIds[0];
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= line) current = id;
            }
            setActive(atBottom ? sectionIds[sectionIds.length - 1] : current);
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, [key]);

    return active;
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
