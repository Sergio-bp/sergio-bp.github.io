import { useCallback, useEffect, useState } from "react";
import { translations } from "./translations";
import { STORAGE_KEY } from "./language";

/**
 * Current language, synced with <html lang> and the meta description.
 * Only an explicit choice is stored, so until then the browser language keeps deciding.
 */
export function useLanguage(initialLanguage) {
    const [language, setLanguageState] = useState(initialLanguage);

    useEffect(() => {
        const root = document.documentElement;
        root.lang = language;
        // Set by index.html's boot script while the page waits to be rendered in this language.
        root.classList.remove("i18n-pending");
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute("content", translations[language].meta.description);
    }, [language]);

    const setLanguage = useCallback((next) => {
        setLanguageState(next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // storage unavailable (private mode, blocked cookies...)
        }
    }, []);

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
