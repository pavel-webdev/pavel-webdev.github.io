document.addEventListener('DOMContentLoaded', () => {

  /* ===== Year ===== */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ===== Mobile menu ===== */
  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      icon.className = navList.classList.contains('open') ? 'fas fa-xmark' : 'fas fa-bars';
    });
    navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navList.classList.remove('open');
      menuToggle.querySelector('i').className = 'fas fa-bars';
    }));
  }

  /* ===== Header scroll state ===== */
  const header = document.getElementById('header');
  const scrollBar = document.getElementById('scrollBar');
  const onScroll = () => {
    const sy = window.scrollY;
    if (header) header.classList.toggle('scrolled', sy > 20);
    if (scrollBar) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      scrollBar.style.width = (h > 0 ? (sy / h) * 100 : 0) + '%';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ===== Active nav on scroll ===== */
  const sections = ['projects', 'skills', 'about', 'contact'].map(id => document.getElementById(id));
  const navLinks = document.querySelectorAll('.nav-list a');
  const setActive = () => {
    const pos = window.scrollY + 120;
    let current = '';
    sections.forEach(s => { if (s && s.offsetTop <= pos) current = s.id; });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  };
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  /* ===== Smooth scroll ===== */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ===== Reveal on scroll ===== */
  const revealEls = document.querySelectorAll(
    '.project-card, .skill-card, .fact-card, .about-text p, .contact-box, .hero-stats, .section-head'
  );
  revealEls.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el, i) => {
    el.style.transitionDelay = Math.min(i * 40, 240) + 'ms';
    io.observe(el);
  });

  /* ===== Card mouse glow ===== */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ===== Copy email ===== */
  const copyBtn = document.getElementById('copyEmail');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('pavel.r.contact@mail.ru');
        const label = copyBtn.querySelector('span');
        const old = label.textContent;
        const done = (translations[currentLang]?.copied) || 'Скопировано';
        label.textContent = done;
        copyBtn.classList.add('copied');
        setTimeout(() => { label.textContent = old; copyBtn.classList.remove('copied'); }, 1600);
      } catch (e) {
        console.warn('Copy failed', e);
      }
    });
  }

  /* ===== i18n ===== */
  let currentLang = localStorage.getItem('lang') || 'ru';
  if (!translations[currentLang]) currentLang = 'ru';

  const langButtons = document.querySelectorAll('.lang-btn');

  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    document.documentElement.lang = lang;

    // plain text
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] != null) el.textContent = t[key];
    });

    // html
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (t[key] != null) el.innerHTML = t[key];
    });

    // list
    document.querySelectorAll('[data-i18n-list]').forEach(el => {
      const key = el.dataset.i18nList;
      const items = t[key];
      if (Array.isArray(items)) {
        el.innerHTML = items.map(i => `<li>${i}</li>`).join('');
      }
    });

    // page title
    if (t.pageTitle) document.title = t.pageTitle;

    // resume link
    const resumeBtn = document.getElementById('resumeBtn');
    if (resumeBtn && t.resumeLink) resumeBtn.href = t.resumeLink;

    // active lang
    langButtons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (!translations[lang]) return;
      currentLang = lang;
      localStorage.setItem('lang', lang);
      applyTranslations(lang);
    });
  });

  applyTranslations(currentLang);
});