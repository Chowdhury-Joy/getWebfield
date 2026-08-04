(() => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  const nav = document.querySelector(".nav");
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");

  if (nav && toggle && menu) {
    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    toggle.addEventListener("click", () => {
      setOpen(!nav.classList.contains("is-open"));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  }

  document
    .querySelectorAll("[data-stagger]")
    .forEach((grid) => {
      [...grid.children].forEach((kid, index) => {
        kid.classList.add("reveal");
        kid.setAttribute("data-delay", String(40 + index * 70));
      });
    });

  const reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Number(el.getAttribute("data-delay") || 0);
          el.style.setProperty("--delay", `${delay}ms`);
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  const form = document.querySelector("[data-contact-form]");
  const note = document.querySelector("[data-form-note]");
  if (form && note) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      note.hidden = false;
      form.reset();
    });
  }

  const faqAccordion = document.querySelector("[data-faq-accordion]");
  if (faqAccordion) {
    const items = [...faqAccordion.querySelectorAll("details.faq-item")];
    items.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        items.forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
  }
})();
