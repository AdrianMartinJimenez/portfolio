// Array de proyectos - Fácil de actualizar
// Solo necesitas agregar nuevos objetos a este array para añadir proyectos

window.projects = [
    {
        title: 'Nicolocata',
        description: 'Blog de reseñas de catas de restauración, construido con Astro y Markdown. Completada con un panel de administración personalizado.',
        icon: '🛒',
        image: 'images/proyectos/nicolocata.jpg',
        tags: ['Astro', 'Markdown', 'Turso', 'Railway'],
        demo: 'https://www.nicolocata.com/'
    },
    {
        title: 'SoldaIg',
        description: 'Web para una empresa de soldadura, con catálogo de servicios y formulario de contacto.',
        icon: '⚡',
        image: 'images/proyectos/soldaig.jpg',
        tags: ['Astro', 'Markdown', 'Render'],
        demo: 'https://soldaig.onrender.com/'
    },
    {
        title: 'Carmelart',
        description: 'Tienda de impresión 3D con catálogo de productos, carrito de compras y sistema de pago.',
        icon: '🖨️',
        image: 'images/proyectos/carmelart.jpg',
        tags: ['Next.js', 'React.js', 'Turso', 'Stripe', 'Railway'],
        demo: 'https://carmelart.up.railway.app/'
    },
    {
        title: 'RPG Admaji',
        description: 'RPG a través de las tareas diarias, con sistema de niveles, recompensas y estadísticas de progreso.',
        icon: '🎮',
        image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop',
        tags: ['Next.js', 'Markdown', 'Vercel'],
        demo: 'PROXIMAMENTE',
        github: 'PROXIMAMENTE'
    }
];

// Función para renderizar los proyectos dinámicamente
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) {
        console.error('No se encontró el contenedor de proyectos');
        return;
    }

    console.log('Cargando', window.projects.length, 'proyectos...');
    
    const projectsHTML = window.projects.map(project => {
        const projectId = project.title.replace(/\s+/g, '-').toLowerCase();
        const isAvailable = project.demo !== 'PROXIMAMENTE';
        
        let imageHTML;
        if (project.image) {
            imageHTML = `<img src="${project.image}" alt="Preview de ${project.title}" loading="lazy" onload="this.parentElement.parentElement.style.animation='none'; this.parentElement.parentElement.style.background='transparent';" onerror="this.parentElement.parentElement.innerHTML='<div class=\\'project-preview-placeholder\\'>${project.icon}</div>'; this.parentElement.parentElement.style.animation='none';">`;
        } else {
            imageHTML = `<div class="project-preview-placeholder">${project.icon}</div>`;
        }
        
        // Envolver imagen en enlace si está disponible
        const imageWrapperHTML = isAvailable 
            ? `<div class="project-preview" id="preview-${projectId}"><a href="${project.demo}" target="_blank" style="display: block; text-decoration: none;">${imageHTML}</a></div>`
            : `<div class="project-preview" id="preview-${projectId}">${imageHTML}</div>`;
        
        // Envolver título en enlace si está disponible
        const titleHTML = isAvailable
            ? `<h3><a href="${project.demo}" target="_blank" style="color: inherit; text-decoration: none;">${project.title}</a></h3>`
            : `<h3>${project.title}</h3>`;
        
        const linkHTML = isAvailable
            ? `<a href="${project.demo}" target="_blank" class="project-link">Ver proyecto →</a>` 
            : `<span class="project-link" style="color: var(--secondary-color); cursor: default;">Próximamente</span>`;
        
        const tagsHTML = project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('');
        
        return `<div class="project-card">${imageWrapperHTML}${titleHTML}<p>${project.description}</p><div class="technologies">${tagsHTML}</div>${linkHTML}</div>`;
    }).join('');
    
    container.innerHTML = projectsHTML;
    console.log('Proyectos cargados exitosamente');
}

// Cargar proyectos cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderProjects);
} else {
    renderProjects();
}
