window.experience = [
    {
        company: 'Capgemini',
        role: 'Consultor / Desarrollador Senior',
        period: 'Jun 2018 – Actualidad',
        client: 'AXA Seguros · 9 años sector asegurador',
        description: 'Desarrollo y mantenimiento de aplicaciones de gestión de siniestros en entorno enterprise. Ciclo de vida completo: análisis funcional y técnico, desarrollo, producción y resolución de incidencias. Coordinación Agile, toma de requerimientos e integración de IA en el sistema de producción.',
        highlight: 'Migración Struts → Struts 2 (v6): JDK 8→17, JBoss 7.0.9→7.4.9, Maven y migración de librería con tags personalizados de alta complejidad. Transición de configuración XML a XML + anotaciones Java.',
        tags: ['Java 8/17', 'Struts 2', 'PL/SQL', 'JavaScript', 'Unix', 'Git', 'JBoss', 'Maven', 'IA en producción', 'Agile']
    },
    {
        company: 'La Pecera de Ideas',
        role: 'Consultor Junior',
        period: '2016 – 2017',
        client: 'Startup · Madrid',
        description: 'Desarrollo web en PHP y JavaScript. Captación y seguimiento de clientes en entorno startup.',
        tags: ['PHP', 'JavaScript']
    },
    {
        company: 'Vipicul',
        role: 'Desarrollador en Prácticas',
        period: '2018',
        client: 'Madrid',
        description: 'Mapeado interactivo con Google Maps API (JSP + Python/JSON) para visualización de radares de vipicultivos.',
        tags: ['JSP', 'Python', 'Google Maps API']
    }
];

function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    container.innerHTML = window.experience.map(item => {
        const tagsHTML = item.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('');
        const highlightHTML = item.highlight
            ? `<p class="experience-highlight">${item.highlight}</p>`
            : '';

        return `
            <article class="experience-card">
                <div class="experience-header">
                    <div>
                        <h3 class="experience-role">${item.role}</h3>
                        <p class="experience-company">${item.company}${item.client ? ` · ${item.client}` : ''}</p>
                    </div>
                    <span class="experience-period">${item.period}</span>
                </div>
                <p class="experience-description">${item.description}</p>
                ${highlightHTML}
                <div class="technologies">${tagsHTML}</div>
            </article>
        `;
    }).join('');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderExperience);
} else {
    renderExperience();
}
