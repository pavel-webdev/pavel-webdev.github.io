const translations = {
  ru: {
    pageTitle: "Павел | Python Backend Developer",

    navProjects: "Проекты",
    navSkills: "Навыки",
    navAbout: "Обо мне",
    navContact: "Контакты",
    navResume: "Резюме",

    statusOpen: "Открыт к предложениям",
    heroHello: "Привет, я",
    heroSubtitle: 'Разработчик <span class="grad-text">Python Backend</span>',
    heroDesc: "Студент 4-го курса СПбГУПТД. Проектирую REST API, работаю с PostgreSQL и автоматизирую рутину. Ищу команду, где смогу расти от простых задач к архитектуре.",
    ctaProjects: "Смотреть проекты",

    statProjects: "проектов",
    statPapers: "статей РИНЦ",
    statGpa: "средний балл",

    tagWork: "Избранное",
    projectsTitle: 'Проекты<span class="accent">.</span>',
    projectsSub: "Проекты, где я проектировал архитектуру, писал backend и решал задачи от начала до конца.",
    seeAllProjects: "Все проекты на GitHub",

    p1Title: "Автоплощадка с Telegram-ботом",
    p1Desc: "Автоматизировал перенос объявлений из Telegram-канала на сайт.",
    p1Points: [
      "Архитектура: Telegram API → PHP → PostgreSQL → web",
      "Сложные SQL (JOIN, VIEW до 100+ строк)",
      "Готовый MVP, заменивший ручную публикацию"
    ],

    p2Title: "FinTrack Pro — учёт финансов",
    p2Desc: "Веб-приложение с REST API, аналитикой и авто-категоризацией расходов.",
    p2Points: [
      "Backend на Flask: CRUD-операции с транзакциями",
      "Автоматическая категоризация по ключевым словам",
      "Оптимизировал SQL — выборка ускорилась на 40%"
    ],

    p3Title: "Code Review Assistant",
    p3Desc: "Статический анализатор Python-кода на базе AST.",
    p3Points: [
      "Обход AST: PEP 8, магические числа, except-блоки",
      "Оценка сложности и расширяемая система проверок",
      "Веб-интерфейс на Flask"
    ],

    p4Title: "CustomAuth — RBAC + JWT",
    p4Desc: "Гибкая система аутентификации и авторизации с RBAC-моделью.",
    p4Points: [
      "JWT-аутентификация + middleware валидации токенов",
      "Проверка прав по действиям: view, create, edit, delete",
      "Обработка 401/403, модульная архитектура"
    ],

    tagStack: "Стек",
    skillsTitle: 'Технологии<span class="accent">.</span>',
    skillsSub: "Инструменты, с которыми я работаю ежедневно.",

    skillBackend: "Backend",
    skillBackendItems: ["Python", "Django REST Framework", "Flask", "REST API · JWT"],

    skillDb: "Базы данных",
    skillDbItems: ["PostgreSQL", "SQL (JOIN, VIEW)", "Проектирование схем", "Оптимизация запросов"],

    skillInfra: "Инфраструктура",
    skillInfraItems: ["Linux · Bash", "Docker", "Nginx · Gunicorn", "Git · GitHub"],

    skillExtra: "Дополнительно",
    skillExtraItems: ["PHP (интеграция)", "HTML · CSS · JS", "Postman · DBeaver", "English B1/B2"],

    tagAbout: "Обо мне",
    aboutTitle: 'Подход<span class="accent">.</span>',
    aboutP1: "Начинающий backend-разработчик с фокусом на практику. Учусь через реальные задачи: пишу код, ломаю, рефакторю и снова пишу.",
    aboutP2: 'Мой принцип: <strong>сначала понять суть, потом автоматизировать</strong>. Не боюсь документации и открытого кода.',
    aboutP3: '<strong>Цель:</strong> Junior Python Backend Developer в команде с сильным менторством.',
    factTitle: "Быстрый факт",
    factText: "Если задача повторяется трижды — пора писать скрипт. Так я автоматизировал сортировку учебных материалов и сэкономил десятки часов.",
    eduTitle: "Образование",
    eduText: "СПбГУПТД · Разработка IT-систем · 2023–2027 · Средний балл 4.9/5.0",

    tagContact: "Контакты",
    contactTitle: 'Давайте работать вместе<span class="accent">.</span>',
    contactSub: "Открыт к стажировке, Junior-позиции и интересным проектам.",
    copyEmail: "Копировать",
    copied: "Скопировано!",

    footerMade: "сделано с",
    footerAndCode: "и кодом",
    footerLocation: "Санкт-Петербург, Россия",

    resumeLink: "https://docs.google.com/document/d/1Cnvjds8a7rppthX52WPzPWspVeZD3RGS8ZNcj68J-gg/edit?usp=sharing"
  },

  en: {
    pageTitle: "Pavel | Python Backend Developer",

    navProjects: "Projects",
    navSkills: "Skills",
    navAbout: "About",
    navContact: "Contact",
    navResume: "Resume",

    statusOpen: "Open to opportunities",
    heroHello: "Hi, I'm",
    heroSubtitle: '<span class="grad-text">Python Backend</span> Developer',
    heroDesc: "4th-year student at SPbGUPTD. I build REST APIs with Python, work with PostgreSQL and automate routine tasks. Looking for a team to grow from feature work to architecture.",
    ctaProjects: "View projects",

    statProjects: "projects",
    statPapers: "RSCI papers",
    statGpa: "GPA",

    tagWork: "Featured",
    projectsTitle: 'Projects<span class="accent">.</span>',
    projectsSub: "Projects where I designed architecture, wrote backend and shipped end-to-end.",
    seeAllProjects: "All projects on GitHub",

    p1Title: "Car marketplace with Telegram bot",
    p1Desc: "Automated the transfer of listings from a Telegram channel to a website.",
    p1Points: [
      "Architecture: Telegram API → PHP → PostgreSQL → web",
      "Complex SQL (JOIN, VIEW up to 100+ lines)",
      "Shipped MVP replacing manual publishing"
    ],

    p2Title: "FinTrack Pro — personal finance",
    p2Desc: "Web app with REST API, analytics and auto-categorization of expenses.",
    p2Points: [
      "Flask backend: CRUD operations on transactions",
      "Automatic keyword-based categorization",
      "Optimized SQL — query time reduced by 40%"
    ],

    p3Title: "Code Review Assistant",
    p3Desc: "Static Python code analyzer built on AST.",
    p3Points: [
      "AST traversal: PEP 8, magic numbers, except blocks",
      "Complexity scoring and extensible check system",
      "Flask web interface"
    ],

    p4Title: "CustomAuth — RBAC + JWT",
    p4Desc: "Flexible authentication and authorization system with RBAC model.",
    p4Points: [
      "JWT auth + token validation middleware",
      "Action-level permission checks: view, create, edit, delete",
      "401/403 handling, modular architecture"
    ],

    tagStack: "Stack",
    skillsTitle: 'Technologies<span class="accent">.</span>',
    skillsSub: "Tools I work with every day.",

    skillBackend: "Backend",
    skillBackendItems: ["Python", "Django REST Framework", "Flask", "REST API · JWT"],

    skillDb: "Databases",
    skillDbItems: ["PostgreSQL", "SQL (JOIN, VIEW)", "Schema design", "Query optimization"],

    skillInfra: "Infrastructure",
    skillInfraItems: ["Linux · Bash", "Docker", "Nginx · Gunicorn", "Git · GitHub"],

    skillExtra: "Also",
    skillExtraItems: ["PHP (integration)", "HTML · CSS · JS", "Postman · DBeaver", "English B1/B2"],

    tagAbout: "About",
    aboutTitle: 'Approach<span class="accent">.</span>',
    aboutP1: "Junior backend developer focused on practice. I learn through real tasks: write code, break it, refactor, repeat.",
    aboutP2: 'My principle: <strong>understand the problem first, then automate</strong>. Not afraid of docs or open source.',
    aboutP3: '<strong>Goal:</strong> Junior Python Backend Developer in a team with strong mentorship.',
    factTitle: "Quick fact",
    factText: "If a task repeats three times — time to script it. That's how I automated study-material sorting and saved dozens of hours.",
    eduTitle: "Education",
    eduText: "SPbGUPTD · IT & Multimedia Systems · 2023–2027 · GPA 4.9/5.0",

    tagContact: "Contact",
    contactTitle: "Let's work together<span class=\"accent\">.</span>",
    contactSub: "Open to internships, junior roles and interesting projects.",
    copyEmail: "Copy",
    copied: "Copied!",

    footerMade: "made with",
    footerAndCode: "and code",
    footerLocation: "Saint Petersburg, Russia",

    resumeLink: "https://docs.google.com/document/d/1Z8Pk0LmCg3nFyeNBTtlcFePPJoRWTJeJZLzjkvquYlI/edit?usp=sharing"
  }
};