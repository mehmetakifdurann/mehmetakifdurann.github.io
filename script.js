const nav = document.getElementById("site-nav");
const menuToggle = document.querySelector(".menu-toggle");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const sections = Array.from(document.querySelectorAll("main section[id]"));
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.querySelector(".modal-close");

function setTheme(theme) {
    const nextTheme = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    try {
        localStorage.setItem("theme", nextTheme);
    } catch {
        // Theme still changes even if the browser blocks storage.
    }

    if (!themeToggle) return;
    const isDark = nextTheme === "dark";
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    themeToggle.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");
    themeToggle.setAttribute("aria-pressed", String(isDark));
    if (themeIcon) {
        themeIcon.textContent = isDark ? "☀" : "☽";
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(currentTheme === "dark" ? "light" : "dark");
}

function openMenu() {
    if (!nav || !menuToggle) return;
    nav.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
    if (!nav || !menuToggle) return;
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
    if (!nav || !menuToggle) return;
    const isOpen = nav.classList.contains("is-open");
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

function setActiveLink(id) {
    navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("is-active", isActive);
    });
}

function openModal(src, alt = "Project preview") {
    if (!modal || !modalImage) return;
    modalImage.src = src;
    modalImage.alt = alt;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    if (!modal || !modalImage) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalImage.src = "";
    document.body.style.overflow = "";
}

menuToggle?.addEventListener("click", toggleMenu);
themeToggle?.addEventListener("click", toggleTheme);

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

document.addEventListener("click", (event) => {
    if (!nav || !menuToggle || !nav.classList.contains("is-open")) return;
    if (nav.contains(event.target) || menuToggle.contains(event.target)) return;
    closeMenu();
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 780) {
        closeMenu();
    }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        const target = anchor.getAttribute("href");
        if (!target || target === "#") return;
        const element = document.querySelector(target);
        if (!element) return;

        event.preventDefault();
        closeMenu();
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

const observer = new IntersectionObserver(
    (entries) => {
        const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
            setActiveLink(visible[0].target.id);
        }
    },
    {
        root: null,
        threshold: [0.25, 0.4, 0.6],
        rootMargin: "-18% 0px -55% 0px",
    }
);

sections.forEach((section) => observer.observe(section));

document.querySelectorAll("[data-modal-image]").forEach((node) => {
    node.addEventListener("click", () => {
        const src = node.getAttribute("data-modal-image");
        const img = node.querySelector("img");
        if (src) {
            openModal(src, img?.alt || "Project preview");
        }
    });
});

modal?.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

modalClose?.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
        closeModal();
    }
});

if (navLinks.length > 0) {
    setActiveLink("home");
}

setTheme(document.documentElement.dataset.theme || "light");
