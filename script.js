// Mobile nav
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle?.addEventListener("click", () => {
  if (!navLinks) return;
  const open = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

// Close menu on link click (mobile)
navLinks?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => navLinks.classList.remove("is-open"));
});

// Year (safe)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Search demo submit
document.getElementById("searchForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Search submitted (demo). You can wire this to the site’s real listings/search page.");
});

// Contact form demo submit
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const email = form.querySelector('input[name="email"]')?.value?.trim();

  if (!email) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Message sent (demo). In a real build, this would submit to a form backend.");
  form.reset();
});

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

// Gallery lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  if (!lightbox || !lightboxImg) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}

document.getElementById("galleryGrid")?.addEventListener("click", (e) => {
  const btn = e.target.closest(".gallery__item");
  if (!btn) return;
  const src = btn.getAttribute("data-full");
  if (!src) return;
  openLightbox(src);
});

lightboxClose?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox?.classList.contains("is-open")) {
    closeLightbox();
  }
});
