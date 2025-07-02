// JavaScript code
// Translations
const translations = {
    es: {
        "nav.about": "Inicio",
        "nav.experience": "Experiencia",
        "nav.skills": "Habilidades",
        "nav.projects": "Projectos",
        "nav.contact": "Contacto",
        "hero.name": "Shirot",
        "hero.role": "Ingeniero de Sistemas",
        "hero.description": "Desarrollador apasionado enfocado en aprender y mejorar en cualquier situación. Siempre buscando nuevos desafíos y oportunidades de crecimiento profesional.",
        "hero.languages": "Idiomas",
        "hero.technologies": "Tecnologías",
        "hero.location": "Ubicación",
        "skills.title": "Habilidades Técnicas",
        "projects.title": "Proyectos Destacados",
        "projects.project1.title": "Sistema de Gestión",
        "projects.project1.description": "Aplicación web completa para gestión empresarial con dashboard interactivo, autenticación de usuarios y reportes en tiempo real.",
        "projects.project2.title": "Bot de Automatización",
        "projects.project2.description": "Bot inteligente para automatizar tareas repetitivas con múltiples integraciones de API y sistema de notificaciones.",
        "projects.project3.title": "Aplicación Móvil",
        "projects.project3.description": "Aplicación móvil multiplataforma con funcionalidad offline, sincronización en la nube e interfaz intuitiva.",
        "contact.title": "Ponte en Contacto",
        "contact.subtitle": "¿Tienes un proyecto en mente? ¡Hablemos!",
        "contact.portfolio": "Portfolio",
        "footer.text": "&copy; 2025 Shirot - Programando mi camino hacia la libertad"
    },
    en: {
        "nav.about": "Home",
        "nav.experience": "Experience",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "hero.name": "Shirot",
        "hero.role": "Systems Engineer",
        "hero.description": "Passionate developer focused on learning and improving in any situation. Always seeking new challenges and opportunities for professional growth.",
        "hero.languages": "Languages",
        "hero.technologies": "Technologies",
        "hero.location": "Location",
        "skills.title": "Technical Skills",
        "projects.title": "Featured Projects",
        "projects.project1.title": "Management System",
        "projects.project1.description": "Complete web application for business management with interactive dashboard, user authentication and real-time reports.",
        "projects.project2.title": "Automation Bot",
        "projects.project2.description": "Intelligent bot for automating repetitive tasks with multiple API integrations and notification system.",
        "projects.project3.title": "Mobile App",
        "projects.project3.description": "Cross-platform mobile application with offline functionality, cloud synchronization and intuitive interface.",
        "contact.title": "Get In Touch",
        "contact.subtitle": "Have a project in mind? Let's talk!",
        "contact.portfolio": "Portfolio",
        "footer.text": "&copy; 2025 Shirot - Coding my way to freedom"
    },
    pt: {
        "nav.about": "Inicio",
        "nav.experience": "Experiência",
        "nav.skills": "Habilidades",
        "nav.projects": "Projetos",
        "nav.contact": "Contato",
        "hero.name": "Shirot",
        "hero.role": "Engenheiro de Sistemas",
        "hero.description": "Desenvolvedor apaixonado focado em aprender e melhorar em qualquer situação. Sempre buscando novos desafios e oportunidades de crescimento profissional.",
        "hero.languages": "Idiomas",
        "hero.technologies": "Tecnologias",
        "hero.location": "Localização",
        "skills.title": "Habilidades Técnicas",
        "projects.title": "Projetos em Destaque",
        "projects.project1.title": "Sistema de Gestão",
        "projects.project1.description": "Aplicação web completa para gestão empresarial com dashboard interativo, autenticação de usuários e relatórios em tempo real.",
        "projects.project2.title": "Bot de Automação",
        "projects.project2.description": "Bot inteligente para automatizar tarefas repetitivas com múltiplas integrações de API e sistema de notificações.",
        "projects.project3.title": "Aplicativo Móvel",
        "projects.project3.description": "Aplicativo móvel multiplataforma com funcionalidade offline, sincronização na nuvem e interface intuitiva.",
        "contact.title": "Entre em Contato",
        "contact.subtitle": "Tem um projeto em mente? Vamos conversar!",
        "contact.portfolio": "Portfolio",
        "footer.text": "&copy; 2025 Shirot - Programando meu caminho para a liberdade"
    }
};

let currentLanguage = 'es';
const languageFlags = {
    es: '🇪🇸',
    en: '🇺🇸',
    pt: '🇧🇷'
};

function changeLanguage(lang) {
    currentLanguage = lang;

    document.getElementById('currentLang').textContent = languageFlags[lang];

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.innerHTML.includes('&copy;')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });

    localStorage.setItem('preferred-language', lang);
}

function initializePreferences() {
    const savedLang = localStorage.getItem('preferred-language') || 'es';

    changeLanguage(savedLang);
    document.body.setAttribute('data-theme', 'dark');
}

document.addEventListener('DOMContentLoaded', function() {
    initializePreferences();

    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');

    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });

    document.addEventListener('click', function() {
        languageDropdown.classList.remove('show');
    });

    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            languageDropdown.classList.remove('show');
        });
    });




    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');

    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    const year = new Date().getFullYear();
    const footerElements = document.querySelectorAll('[data-i18n="footer.text"]');
    footerElements.forEach(element => {
        const currentText = element.innerHTML;
        element.innerHTML = currentText.replace('2025', year);
    });
});

const mobileToggle = document.getElementById('mobileToggle');
if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
        console.log('Mobile menu clicked');
    });
}

function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const projectContent = {
        'project1': {
            title: 'Sistema de Gestión',
            image: 'https://blog.kawak.net/hs-fs/hubfs/muestra-software-kawak.jpg?width=710&name=muestra-software-kawak.jpg',
            description: 'Aplicación web completa para gestión empresarial con dashboard interactivo, autenticación de usuarios y reportes en tiempo real.',
            features: ['Interfaz de usuario dinámica y receptiva', 'Dashboard con gráficas en tiempo real', 'Autenticación segura de usuarios'],
            tech: ['React', 'Node.js', 'PostgreSQL'],
            link: '#'
        },
        'project2': {
            title: 'Bot de Automatización',
            image: 'https://files.liveconnect.chat/421/lc/2/usuarios/1310/files/noticias/activar_chat_gpt_en_chatbots.png',
            description: 'Bot inteligente para automatizar tareas repetitivas con múltiples integraciones de API y sistema de notificaciones.',
            features: ['Automatización de tareas repetitivas', 'Integración con múltiples APIs', 'Sistema de notificaciones automáticas'],
            tech: ['Python', 'APIs', 'MongoDB'],
            link: '#'
        },
        'project3': {
            title: 'Aplicación Móvil',
            image: 'https://www.trecebits.com/wp-content/uploads/2023/02/crear-backup-cuenta-Telegram.webp',
            description: 'Aplicación móvil multiplataforma con funcionalidad offline, sincronización en la nube e interfaz intuitiva.',
            features: ['Funcionalidad offline', 'Sincronización con la nube', 'Interfaz intuitiva'],
            tech: ['React Native', 'Firebase', 'Redux'],
            link: '#'
        }
    };

    const content = projectContent[projectId];

    modalBody.innerHTML = `
        <div class="modal-project">
            <img src="${content.image}" alt="${content.title}" class="modal-image">
            <h2 class="modal-title">${content.title}</h2>
            <p class="modal-description">
                ${content.description}
            </p>
            <div class="modal-features">
                <h4>Características:</h4>
                <ul>
                    ${content.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="modal-tech">
                ${content.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="modal-actions">
                <a href="${content.link}" class="modal-btn" target="_blank">Ver Proyecto</a>
                <button class="modal-btn secondary" onclick="closeModal()">Cerrar</button>
            </div>
        </div>
    `;
    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');
}