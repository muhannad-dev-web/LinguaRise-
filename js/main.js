/* ============================================
   MAIN — navbar, mobile menu, reveal, FAQ, counters,
   level bars, back-to-top, toast helper & Auth-Loaders
   ============================================ */

document.addEventListener('DOMContentLoaded', async () => {

  // ========================================================
  // ⚡ 1. DHAMMAAN INTERACTIVE UI (ISLA MARTIBA WAY SHAQAYNAYAAN)
  // ========================================================

  /* ---------- Navbar scroll state ---------- */
  const navbar = document.querySelector('.navbar');
  const backToTop = document.querySelector('.back-to-top');

  function onScroll() {
    const scrolled = window.scrollY > 12;
    navbar?.classList.toggle('is-scrolled', scrolled);
    backToTop?.classList.toggle('is-visible', window.scrollY > 480);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Mobile menu ---------- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburger?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('[data-counter]');
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.counter);
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = (target % 1 === 0 ? Math.floor(value) : value.toFixed(1)) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach((el) => counterIO.observe(el));

  /* ---------- Level progress bars ---------- */
  const levelBars = document.querySelectorAll('.level-bar span');
  const barIO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.progress + '%';
        barIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  levelBars.forEach((el) => barIO.observe(el));

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (question && answer) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        document.querySelectorAll('.faq-item').forEach((other) => {
          const otherAnswer = other.querySelector('.faq-answer');
          const otherQuestion = other.querySelector('.faq-question');
          
          other.classList.remove('is-open');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
          if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          item.classList.add('is-open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          question.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  /* ---------- Toast helper (global) ---------- */
  window.showToast = function (message, duration = 3000) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = '<span class="dot"></span><span class="toast-text"></span>';
      document.body.appendChild(toast);
    }
    toast.querySelector('.toast-text').textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('is-visible'), duration);
  };

  /* ---------- Newsletter form ---------- */
  const newsletterForm = document.querySelector('.newsletter-form');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    if (input && input.value.trim()) {
      window.showToast('Waad ku mahadsan tahay diiwaan gelinta! ✅');
      input.value = '';
    }
  });

  /* ---------- CTA/Start Learning buttons ---------- */
  document.querySelectorAll('[data-action="start-learning"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const isDashboard = window.location.pathname.includes('/pages/');
      const base = isDashboard ? '' : 'pages/';
      const loggedIn = window.LinguaAuth?.isLoggedIn && window.LinguaAuth.isLoggedIn();
      window.location.href = loggedIn ? `${base}dashboard.html` : `${base}login.html`;
    });
  });


  // ========================================================
  // 👤 2. GLOBAL AUTH & USER SESSION (AVATAR & PROGRESS)
  // ========================================================
  try {
    if (window.LinguaAuth && typeof window.LinguaAuth.currentUser === 'function') {
      const user = await window.LinguaAuth.currentUser();
      if (user) {
        // Deji Avatar-ka yar ee geeska sare ee Topbar-ka
        const avatarEl = document.getElementById('topbar-avatar');
        if (avatarEl) {
          if (user.avatar) {
            avatarEl.style.backgroundImage = `url(${user.avatar})`;
            avatarEl.textContent = '';
          } else if (user.name) {
            avatarEl.textContent = user.name.trim().split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
          }
        }

        // Kici Progress Store-ka isticmaalaha
        const userId = user.id ? String(user.id).trim() : null;
        if (userId && window.LinguaProgress && typeof window.LinguaProgress.initUser === 'function') {
          window.LinguaProgress.initUser(userId);
        }
      }
    }
  } catch (error) {
    console.error("Cillad ka dhalatay soo roridda macluumaadka isticmaalaha:", error);
  }

});