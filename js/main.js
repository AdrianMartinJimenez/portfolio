// Menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

function setMenuOpen(isOpen) {
    if (!navMenu || !menuToggle) return;

    navMenu.classList.toggle('active', isOpen);
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    document.body.classList.toggle('menu-open', isOpen);
}

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        setMenuOpen(!navMenu.classList.contains('active'));
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.classList.contains('active')) return;
        if (navMenu.contains(e.target) || menuToggle.contains(e.target)) return;
        setMenuOpen(false);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) setMenuOpen(false);
    });
}

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 72;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Enlace activo según sección visible
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            navLinksAll.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

function observeAnimatedElements() {
    document.querySelectorAll('.project-card, .skill-card, .about-text, .contact-link, .experience-card').forEach(el => {
        if (el.dataset.observed) return;
        el.dataset.observed = 'true';
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

const dynamicObserver = new MutationObserver(observeAnimatedElements);

function initDynamicObservers() {
    observeAnimatedElements();
    ['experience-container', 'projects-container', 'skills-container'].forEach(id => {
        const el = document.getElementById(id);
        if (el) dynamicObserver.observe(el, { childList: true });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDynamicObservers);
} else {
    initDynamicObservers();
}

// Navbar scroll effect (desactivado en móvil y con menú abierto)
let lastScroll = 0;

window.addEventListener('scroll', () => {
    if (!navbar) return;

    const currentScroll = window.pageYOffset;
    const menuOpen = navMenu?.classList.contains('active');

    if (currentScroll > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (menuOpen || window.innerWidth <= 992) {
        navbar.style.transform = 'translateY(0)';
        lastScroll = currentScroll;
        return;
    }

    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});
