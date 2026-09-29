document.addEventListener('DOMContentLoaded', () => {

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');
  const navBackdrop = document.getElementById('navBackdrop');

  function openMenu() {
    navList.classList.add('open');
    navBackdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.querySelector('i').className = 'fas fa-xmark';
  }

  function closeMenu() {
    navList.classList.remove('open');
    navBackdrop.classList.remove('show');
    document.body.style.overflow = '';
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('i').className = 'fas fa-bars';
  }

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.contains('open') ? closeMenu() : openMenu();
    });

    navList.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', closeMenu)
    );

    if (navBackdrop) navBackdrop.addEventListener('click', closeMenu);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeMenu();
    });
  }

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

  const sections = ['projects', 'skills', 'about', 'contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');

  const setActive = () => {
    const pos = window.scrollY + 120;
    let current = '';
    sections.forEach(s => { if (s.offsetTop <= pos) current = s.id; });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  };
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

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

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  const copyBtn = document.getElementById('copyEmail');

  let currentLang = localStorage.getItem('lang') || 'ru';
  if (!translations || !translations[currentLang]) currentLang = 'ru';

  const langButtons = document.querySelectorAll('.lang-btn');

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('pavel.r.contact@mail.ru');
        const label = copyBtn.querySelector('span');
        const old = label.textContent;
        const done = (translations[currentLang] && translations[currentLang].copied) || 'Скопировано';
        label.textContent = done;
        copyBtn.classList.add('copied');
        setTimeout(() => {
          label.textContent = old;
          copyBtn.classList.remove('copied');
        }, 1600);
      } catch (e) {
        console.warn('Copy failed', e);
      }
    });
  }

  function applyTranslations(lang) {
    const t = translations && translations[lang];
    if (!t) return;

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] != null) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (t[key] != null) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-i18n-list]').forEach(el => {
      const key = el.dataset.i18nList;
      const items = t[key];
      if (Array.isArray(items)) {
        el.innerHTML = items.map(i => `<li>${i}</li>`).join('');
      }
    });

    if (t.pageTitle) document.title = t.pageTitle;

    const resumeBtn = document.getElementById('resumeBtn');
    const resumeBtnMobile = document.getElementById('resumeBtnMobile');
    if (t.resumeLink) {
      if (resumeBtn) resumeBtn.href = t.resumeLink;
      if (resumeBtnMobile) resumeBtnMobile.href = t.resumeLink;
    }

    langButtons.forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (!translations || !translations[lang]) return;
      currentLang = lang;
      localStorage.setItem('lang', lang);
      applyTranslations(lang);
    });
  });

  applyTranslations(currentLang);
});