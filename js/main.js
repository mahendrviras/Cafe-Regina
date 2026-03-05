/* ===========================
   Cafe Regina — Main JS
   =========================== */

(function () {
  'use strict';

  /* ---------- Navbar: transparent → solid on scroll ---------- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const isHome = navbar.classList.contains('navbar--transparent');
    function handleScroll() {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
        if (isHome) navbar.classList.remove('navbar--transparent');
      } else {
        navbar.classList.remove('scrolled');
        if (isHome) navbar.classList.add('navbar--transparent');
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* ---------- Mobile nav toggle ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  const overlay   = document.getElementById('nav-overlay');

  function openNav() {
    navLinks.classList.add('open');
    overlay.classList.add('show');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    navLinks.classList.remove('open');
    overlay.classList.remove('show');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.classList.contains('open');
      isOpen ? closeNav() : openNav();
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeNav);
  }

  /* Close nav on link click (mobile) */
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
  }

  /* ---------- Active nav link ---------- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---------- Scroll-reveal ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- Menu filter (menu.html) ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuSections = document.querySelectorAll('.menu-category');

  if (filterBtns.length && menuSections.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        const cat = btn.dataset.filter;
        menuSections.forEach(function (sec) {
          if (cat === 'all' || sec.dataset.category === cat) {
            sec.style.display = '';
          } else {
            sec.style.display = 'none';
          }
        });
      });
    });
  }

  /* ---------- Contact form ---------- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Thank you! We\'ll be in touch soon. ☕');
      contactForm.reset();
    });
  }

  /* ---------- Newsletter form ---------- */
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('You\'re subscribed! Welcome to the Regina family. 🎉');
      form.reset();
    });
  });

  /* ---------- Toast helper ---------- */
  function showToast(msg) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, 4000);
  }

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
