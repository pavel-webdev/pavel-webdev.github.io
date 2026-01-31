const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuToggle.innerHTML = navList.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

document.getElementById('currentYear').textContent = new Date().getFullYear();

const langButtons = document.querySelectorAll('.lang-btn');
const currentLang = localStorage.getItem('language') || 'ru';

let translations = {};

fetch('translations.js')
    .then(response => response.text())
    .then(data => {
        const match = data.match(/const translations = ({[\s\S]*?});/);
        if (match) {
            eval('translations = ' + match[1]);
            initLanguage();
        }
    })
    .catch(error => {
        console.error('Error loading translations:', error);
        translations = window.translations || {};
        initLanguage();
    });

function initLanguage() {
    setLanguage(currentLang);

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('language', lang);
        });
    });
}

function setLanguage(lang) {
    if (!translations[lang]) return;

    langButtons.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    updateTexts(lang);

    updateResumeLink(lang);
}

function updateTexts(lang) {
    const t = translations[lang];

    document.title = t.pageTitle;

    updateText('.logo', t.logoText);

    updateText('.nav-list a[href="#projects"]', t.navProjects);
    updateText('.nav-list a[href="#skills"]', t.navSkills);
    updateText('.nav-list a[href="#about"]', t.navAbout);
    updateText('.nav-list a[href="#contact"]', t.navContact);
    updateText('.btn-resume', t.navResume);
    

    updateText('.hero-title', t.heroTitle);
    updateHTML('.hero-subtitle', t.heroSubtitle);
    updateText('.hero-desc', t.heroDesc);
    updateText('.hero-buttons .btn-primary', t.heroButtonProjects);
    updateText('.hero-buttons .btn-ghost', t.heroButtonGitHub);
    
    // Проекты
    updateText('.projects .section-title', t.projectsTitle);
    updateText('.project-card:nth-child(1) .project-title', t.project1Title);
    updateHTML('.project-card:nth-child(1) .project-desc', 
        t.project1Goal + '<br>' + t.project1What + '<br>' + t.project1Stack);
    
    updateText('.project-card:nth-child(2) .project-title', t.project2Title);
    updateHTML('.project-card:nth-child(2) .project-desc',
        t.project2Goal + '<br>' + t.project2What + '<br>' + t.project2Stack);
    
    updateText('.project-card:nth-child(3) .project-title', t.project3Title);
    updateHTML('.project-card:nth-child(3) .project-desc',
        t.project3Goal + '<br>' + t.project3What + '<br>' + t.project3Stack);

    updateText('.skills .section-title', t.skillsTitle);
    updateText('.skill-category:nth-child(1) h3', t.backendTitle);
    updateList('.skill-category:nth-child(1) li', t.backendItems);
    
    updateText('.skill-category:nth-child(2) h3', t.dbTitle);
    updateList('.skill-category:nth-child(2) li', t.dbItems);
    
    updateText('.skill-category:nth-child(3) h3', t.frontendTitle);
    updateList('.skill-category:nth-child(3) li', t.frontendItems);
    
    updateText('.skill-category:nth-child(4) h3', t.interestsTitle);
    updateList('.skill-category:nth-child(4) li', t.interestsItems);

    updateText('.about .section-title', t.aboutTitle);
    updateHTML('.about-text p:nth-child(1)', t.aboutText1);
    updateHTML('.about-text p:nth-child(2)', t.aboutText2);
    updateHTML('.about-text p:nth-child(3)', t.aboutText3);
    
    updateText('.about-fact h3', t.factTitle);
    updateText('.about-fact p', t.factText);

    updateText('.contact .section-title', t.contactTitle);
    updateText('.contact-subtitle', t.contactSubtitle);
    updateHTML('.contact-note', t.contactNote + '<a href="' + t.resumeLink + '" target="_blank">here</a>.');

    updateText('.footer p:nth-child(2)', t.footerText);
}

function updateText(selector, text) {
    const element = document.querySelector(selector);
    if (element) element.textContent = text;
}

function updateHTML(selector, html) {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = html;
}

function updateList(selector, items) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
        if (items[index]) {
            el.textContent = items[index];
        }
    });
}

function updateResumeLink(lang) {
    const resumeLink = document.querySelector('.btn-resume');
    if (resumeLink && translations[lang]) {
        resumeLink.href = translations[lang].resumeLink;
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);


document.querySelectorAll('.project-card, .skill-category, .about-fact').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    observer.observe(el);
});

const animateInClass = 'animate-in';
const style = document.createElement('style');
style.textContent = `
    .${animateInClass} {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);