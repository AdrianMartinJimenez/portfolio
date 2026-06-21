window.projects = [
    {
        title: 'Claims API — Automatización de siniestros',
        description: 'Pipeline documental: PDF/imagen/email → extracción con Apache Tika → validación IA estructurada → alta automática (straight-through) o revisión humana vía email. Arquitectura multi-agente: Extractor, Clasificador, Validador y Orquestador con reglas en Java.',
        icon: '🏥',
        image: 'images/proyectos/seguros-automatizacion.jpg',
        tags: ['Spring Boot 3', 'Spring AI', 'PostgreSQL', 'RabbitMQ', 'Docker', 'FNOL'],
        demo: 'PROXIMAMENTE',
        github: 'PROXIMAMENTE'
    },
    {
        title: 'Nicolocata',
        description: 'Blog de reseñas de catas de restauración con Astro y Markdown. Panel de administración personalizado. Proyecto full-cycle desarrollado con agentes de IA.',
        icon: '🍷',
        image: 'images/proyectos/nicolocata.jpg',
        tags: ['Astro', 'Markdown', 'Turso', 'Railway'],
        demo: 'https://www.nicolocata.com/'
    },
    {
        title: 'SoldaIg',
        description: 'Web corporativa para empresa de soldaje con catálogo de servicios y formulario de contacto. Desarrollo y despliegue orquestado con agentes de IA.',
        icon: '⚡',
        image: 'images/proyectos/soldaig.jpg',
        tags: ['Astro', 'Markdown', 'Render'],
        demo: 'https://soldaig.onrender.com/'
    },
    {
        title: 'Carmelart',
        description: 'Tienda de impresión 3D con catálogo, carrito de compras e integración de pagos con Stripe. Desde el prompt inicial hasta producción con dominio propio.',
        icon: '🖨️',
        image: 'images/proyectos/carmelart.jpg',
        tags: ['Next.js', 'React', 'Turso', 'Stripe', 'Railway'],
        demo: 'https://carmelart.es/'
    }
];

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const projectsHTML = window.projects.map(project => {
        const projectId = project.title.replace(/\s+/g, '-').toLowerCase();
        const isAvailable = project.demo !== 'PROXIMAMENTE';

        let imageHTML;
        if (project.image) {
            imageHTML = `<img src="${project.image}" alt="Preview de ${project.title}" loading="lazy" onload="this.parentElement.parentElement.style.animation='none'; this.parentElement.parentElement.style.background='transparent';" onerror="this.parentElement.parentElement.innerHTML='<div class=\\'project-preview-placeholder\\'>${project.icon}</div>'; this.parentElement.parentElement.style.animation='none';">`;
        } else {
            imageHTML = `<div class="project-preview-placeholder">${project.icon}</div>`;
        }

        const imageWrapperHTML = isAvailable
            ? `<div class="project-preview" id="preview-${projectId}"><a href="${project.demo}" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none;">${imageHTML}</a></div>`
            : `<div class="project-preview" id="preview-${projectId}">${imageHTML}</div>`;

        const titleHTML = isAvailable
            ? `<h3><a href="${project.demo}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">${project.title}</a></h3>`
            : `<h3>${project.title}</h3>`;

        const tagsHTML = project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('');

        return `<div class="project-card">${imageWrapperHTML}${titleHTML}<p>${project.description}</p><div class="technologies">${tagsHTML}</div></div>`;
    }).join('');

    container.innerHTML = projectsHTML;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderProjects);
} else {
    renderProjects();
}
