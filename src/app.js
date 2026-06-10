// Splash Screen
setTimeout(() => {
  const splash = document.getElementById("splash");
  if (splash) splash.classList.add("hidden");
}, 2000);

// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Custom Cursor
const cursor = document.getElementById("cursor");
const cursorRing = document.getElementById("cursor-ring");

if (cursor && cursorRing) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    cursorRing.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  // Hide cursor when leaving window
  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    cursorRing.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
    cursorRing.style.opacity = "1";
  });
}

// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");
reveals.forEach((el) => el.classList.add("reveal-init"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

reveals.forEach((el) => observer.observe(el));

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  if (themeToggle) {
    themeToggle.textContent = "☀️";
    themeToggle.title = "Switch to Dark Mode";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    themeToggle.textContent = isLight ? "☀️" : "🌙";
    themeToggle.title = isLight
      ? "Switch to Dark Mode"
      : "Switch to Light Mode";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}

// CV Download
const downloadBtn = document.getElementById("downloadCV");
if (downloadBtn) {
  downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(
      "https://drive.google.com/uc?export=download&id=1wd2W4vDNldOuRKgKe5jRfr08oRMA_PUW",
      "_blank",
    );
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Active navigation highlight on scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    const href = item.getAttribute("href").substring(1);
    if (href === current) {
      item.classList.add("active");
    }
  });
});
