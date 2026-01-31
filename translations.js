const translations = {
    ru: {
        navProjects: "Проекты",
        navSkills: "Навыки",
        navAbout: "Обо мне",
        navContact: "Контакты",
        navResume: "Резюме",
        logoText: "GitHub Resume",
        pageTitle: "Павел | Python Backend Developer",


        heroTitle: "Привет, я Павел.",
        heroSubtitle: "Начинающий <span class='highlight'>Backend-разработчик</span> на Python",
        heroDesc: "Студент 3-го курса СПГУПТиД. Увлекаюсь автоматизацией процессов, проектированием логики и работой с данными. Ищу возможность начать карьеру в сильной IT-компании, чтобы расти от основ к сложным задачам.",
        heroButtonProjects: "Смотреть проекты",
        heroButtonGitHub: "GitHub",

        projectsTitle: "Мои проекты.",
        project1Title: "Автоплощадка с Telegram-ботом",
        project1Goal: "<strong>Цель:</strong> Создать систему для автоматической публикации объявлений из Telegram-канала на веб-сайт.",
        project1What: "<strong>Что сделал:</strong> Написал PHP-скрипт для приёма данных от Telegram Bot API, спроектировал и реализовал базу данных PostgreSQL для хранения автомобилей и изображений, создал веб-интерфейс для отображения каталога.",
        project1Stack: "<strong>Стек:</strong> PHP, PostgreSQL, SQL (сложные запросы, VIEW), Telegram Bot API, HTML/CSS/JS.",
        
        project2Title: "Скрипт для автоматизации сортировки файлов",
        project2Goal: "<strong>Цель:</strong> Избавить себя от ручного упорядочивания учебных материалов.",
        project2What: "<strong>Что сделал:</strong> Написал Python-скрипт, который анализирует имена и метаданные файлов, сортирует их по папкам (по дате, теме, типу), переименовывает по единому шаблону. Скрипт экономит 1-2 часа в неделю.",
        project2Stack: "<strong>Стек:</strong> Python (os, shutil, pathlib), регулярные выражения.",
        
        project3Title: "Консольный планировщик задач (C++)",
        project3Goal: "<strong>Цель:</strong> Изучить работу с файлами, структурами данных и алгоритмами сортировки.",
        project3What: "<strong>Что сделал:</strong> Реализовал консольное приложение для учёта задач с приоритетами и сроками. Задачи сохраняются в файл, есть функции добавления, удаления, редактирования и сортировки по разным критериям.",
        project3Stack: "<strong>Стек:</strong> C++, файловый ввод/вывод, структуры данных.",

        skillsTitle: "Технологии и навыки.",
        backendTitle: "Backend",
        backendItems: ["Python (основной язык)", "PHP (опыт интеграции)", "REST API концепции"],
        
        dbTitle: "Базы данных",
        dbItems: ["PostgreSQL (сложные запросы, JOIN, VIEW)", "SQL", "Проектирование схем"],
        
        frontendTitle: "Frontend & Другое",
        frontendItems: ["HTML / CSS / JavaScript", "Git & GitHub", "C++ (базовый уровень)"],
        
        interestsTitle: "Интересы и качества",
        interestsItems: ["Автоматизация процессов", "Решение алгоритмических задач", "Самообучение (2-3 ч/день)", "Английский B1/B2"],

        aboutTitle: "Немного обо мне.",
        aboutText1: "Я студент, который уже устал просто учиться — хочу применять знания на практике. Меня зажигают задачи, где нужно думать о логике, данных и эффективности.",
        aboutText2: 'Мой подход: <strong>"Сначала понять суть проблемы, затем автоматизировать решение"</strong>. Не боюсь лезть в документацию и искать ответы в сообществе.',
        aboutText3: "<strong>Цель на ближайший год:</strong> устроиться Junior Python Backend Developer в компанию с сильной командой и менторской поддержкой, чтобы расти как специалист.",
        
        factTitle: "Быстрый факт",
        factText: "Если задача повторяется трижды, пора писать скрипт. Так автоматизировал сортировку учебных материалов, что сэкономил себе десятки часов за семестр.",
        

        contactTitle: "Связаться со мной.",
        contactSubtitle: "Открыт к предложениям о стажировке, Junior-позиции или просто к интересному общению о технологиях.",
        contactNote: "📄 Полное резюме с деталями проектов доступно по ссылке в шапке сайта или ",
        

        footerText: "Санкт-Петербург | Студент СПГУПТиД | pavel.r.contact@mail.ru",
        

        resumeLink: "https://docs.google.com/document/d/e/2PACX-1vTScqJwPrau2BVBmpUDVT-v4FirnsTUkbsKZ6VT9vN__nnJl3axq882XuAf4lm05Dvh_5PpvXuZdbeq/pub"
    },
    
    en: {
        navProjects: "Projects",
        navSkills: "Skills",
        navAbout: "About me",
        navContact: "Contact",
        navResume: "Resume",
        logoText: "GitHub Resume",
        pageTitle: "Pavel | Python Backend Developer",

        heroTitle: "Hi, I'm Pavel.",
        heroSubtitle: "Junior <span class='highlight'>Python Backend Developer</span>",
        heroDesc: "3rd year student at SPbGUPTD. Passionate about process automation, logic design, and data work. Looking for an opportunity to start a career in a strong IT company to grow from basics to complex tasks.",
        heroButtonProjects: "View Projects",
        heroButtonGitHub: "GitHub",

        projectsTitle: "My Projects.",
        project1Title: "Car marketplace with Telegram bot",
        project1Goal: "<strong>Goal:</strong> Create a system for automatic publication of ads from a Telegram channel to a website.",
        project1What: "<strong>What I did:</strong> Wrote a PHP script to receive data from Telegram Bot API, designed and implemented a PostgreSQL database to store cars and images, created a web interface to display the catalog.",
        project1Stack: "<strong>Stack:</strong> PHP, PostgreSQL, SQL (complex queries, VIEW), Telegram Bot API, HTML/CSS/JS.",
        
        project2Title: "File sorting automation script",
        project2Goal: "<strong>Goal:</strong> Free myself from manual organization of study materials.",
        project2What: "<strong>What I did:</strong> Wrote a Python script that analyzes file names and metadata, sorts them into folders (by date, topic, type), renames them according to a single template. The script saves 1-2 hours per week.",
        project2Stack: "<strong>Stack:</strong> Python (os, shutil, pathlib), regular expressions.",
        
        project3Title: "Console task scheduler (C++)",
        project3Goal: "<strong>Goal:</strong> Learn file operations, data structures, and sorting algorithms.",
        project3What: "<strong>What I did:</strong> Implemented a console application for task management with priorities and deadlines. Tasks are saved to a file, with functions for adding, deleting, editing and sorting by various criteria.",
        project3Stack: "<strong>Stack:</strong> C++, file I/O, data structures.",

        skillsTitle: "Technologies & Skills.",
        backendTitle: "Backend",
        backendItems: ["Python (main language)", "PHP (integration experience)", "REST API concepts"],
        
        dbTitle: "Databases",
        dbItems: ["PostgreSQL (complex queries, JOIN, VIEW)", "SQL", "Schema design"],
        
        frontendTitle: "Frontend & Other",
        frontendItems: ["HTML / CSS / JavaScript", "Git & GitHub", "C++ (basic level)"],
        
        interestsTitle: "Interests & Qualities",
        interestsItems: ["Process automation", "Solving algorithmic problems", "Self-learning (2-3 hrs/day)", "English B1/B2"],
        
        aboutTitle: "A bit about me.",
        aboutText1: "I'm a student who's tired of just studying — I want to apply knowledge in practice. I'm energized by tasks that require thinking about logic, data, and efficiency.",
        aboutText2: 'My approach: <strong>"First understand the essence of the problem, then automate the solution"</strong>. I\'m not afraid to dive into documentation and seek answers in the community.',
        aboutText3: "<strong>Goal for the next year:</strong> get a Junior Python Backend Developer position in a company with a strong team and mentor support to grow as a specialist.",
        
        factTitle: "Quick Fact",
        factText: "If a task repeats three times, it's time to write a script. I automated the sorting of study materials this way, saving myself dozens of hours per semester.",
        
        contactTitle: "Get in touch.",
        contactSubtitle: "Open to internship offers, Junior positions, or just interesting conversations about technology.",
        contactNote: "📄 Full resume with project details is available via the link in the header or ",
        
        footerText: "Saint Petersburg | SPbGUPTD Student | pavel.r.contact@mail.ru",
        
        resumeLink: "https://docs.google.com/document/d/e/2PACX-1vRPDAIOM0rISg_oP9FgiyJoYRrCPBu_P_IE_Hkh0sB9avkxzraMonykZ0Snix63Q1jra9FWcHV_wIw7/pub" 
    }
};