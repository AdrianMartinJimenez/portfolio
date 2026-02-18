// Array de proyectos - Fácil de actualizar
// Solo necesitas agregar nuevos objetos a este array para añadir proyectos

window.projects = [
    {
        title: 'Nicolocata',
        description: 'Blog de reseñas de catas de restauración, construido con Astro y Markdown. Completada con un panel de administración personalizado.',
        icon: '🛒',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
        tags: ['Astro', 'Markdown', 'Turso', 'Railway'],
        demo: 'https://wwww.nicolocata.com/'
    },
    {
        title: 'SoldaIg',
        description: 'Web para una empresa de soldadura, con catálogo de servicios y formulario de contacto.',
        icon: '⚡',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
        tags: ['Astro', 'Markdown', 'Render'],
        demo: 'https://soldaig.onrender.com/'
    },
    {
        title: 'Carmelart',
        description: 'Tienda de impresión 3D con catálogo de productos, carrito de compras y sistema de pago.',
        icon: '🖨️',
        image: 'https://images.unsplash.com/photo-1636690619421-21ebf9aecd54?w=600&h=400&fit=crop',
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
        
        let imageHTML;
        if (project.image) {
            imageHTML = `<img src="${project.image}" alt="Preview de ${project.title}" loading="lazy" onload="this.parentElement.style.animation='none'; this.parentElement.style.background='transparent';" onerror="this.parentElement.innerHTML='<div class=\\'project-preview-placeholder\\'>${project.icon}</div>'; this.parentElement.style.animation='none';">`;
        } else {
            imageHTML = `<div class="project-preview-placeholder">${project.icon}</div>`;
        }
        
        const linkHTML = project.demo !== 'PROXIMAMENTE' 
            ? `<a href="${project.demo}" target="_blank" class="project-link">Ver proyecto →</a>` 
            : `<span class="project-link" style="color: var(--secondary-color); cursor: default;">Próximamente</span>`;
        
        const tagsHTML = project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('');
        
        return `<div class="project-card"><div class="project-preview" id="preview-${projectId}">${imageHTML}</div><h3>${project.title}</h3><p>${project.description}</p><div class="technologies">${tagsHTML}</div>${linkHTML}</div>`;
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
