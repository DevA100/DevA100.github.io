/* ===========================
   DEVA PORTFOLIO — app.js
   Save this file to: src/app.js
   =========================== */

// ===== SPLASH SCREEN =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash').classList.add('hidden');
  }, 2200);
});

// ===== CUSTOM CURSOR =====
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
    cursor.style.background = 'var(--accent2)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursor.style.background = 'var(--accent)';
  });
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== SCROLL REVEAL =====
// KEY FIX: We first add 'reveal-init' (hides the element),
// then use IntersectionObserver to add 'visible' (shows it).
// Because .reveal starts as opacity:1 in CSS, if anything
// goes wrong the content is always visible.

const reveals = document.querySelectorAll('.reveal');

// Only hide elements that are NOT already in the viewport on load
reveals.forEach((el) => {
  const rect = el.getBoundingClientRect();
  const inView = rect.top < window.innerHeight && rect.bottom > 0;
  if (!inView) {
    el.classList.add('reveal-init');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // stop watching once visible
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px'
});

reveals.forEach((el) => observer.observe(el));

// Hard fallback: after 2s make absolutely everything visible
setTimeout(() => {
  reveals.forEach((el) => {
    el.classList.add('visible');
  });
}, 2000);

// ===== NAVBAR SHRINK ON SCROLL =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.style.padding = window.scrollY > 60 ? '12px 60px' : '20px 60px';
});