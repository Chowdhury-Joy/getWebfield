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
    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  }

  const scroller = document.querySelector("[data-reviews-scroller]");
  const prev = document.querySelector("[data-reviews-prev]");
  const next = document.querySelector("[data-reviews-next]");
  if (scroller && prev && next) {
    const scrollByCard = (dir) => {
      const card = scroller.querySelector(".review");
      const amount = card ? card.getBoundingClientRect().width + 16 : 320;
      scroller.scrollBy({ left: dir * amount, behavior: "smooth" });
    };
    prev.addEventListener("click", () => scrollByCard(-1));
    next.addEventListener("click", () => scrollByCard(1));
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

  const faq = document.querySelector("[data-faq-accordion]");
  if (faq) {
    const items = [...faq.querySelectorAll("details.faq-item")];
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
