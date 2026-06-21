const skillCategories = [
    {
        category: 'Legacy & Dominio Seguros',
        skills: [
            { name: 'Java (JDK 8/17)', level: 95, icon: '☕' },
            { name: 'Struts 2 / J2EE', level: 95, icon: '⚡' },
            { name: 'PL/SQL', level: 92, icon: '🗄️' },
            { name: 'Gestión de Siniestros', level: 95, icon: '📋' },
            { name: 'Unix / Git', level: 88, icon: '🐧' },
            { name: 'Maven / JBoss', level: 88, icon: '📦' }
        ]
    },
    {
        category: 'Spring Boot & Modernización',
        skills: [
            { name: 'Spring Boot 3', level: 72, icon: '🌱' },
            { name: 'REST API / JPA', level: 70, icon: '🔗' },
            { name: 'JUnit 5 / MockMvc', level: 68, icon: '🧪' },
            { name: 'PostgreSQL', level: 75, icon: '🐘' },
            { name: 'RabbitMQ', level: 65, icon: '📨' },
            { name: 'Docker Compose', level: 70, icon: '🐳' }
        ]
    },
    {
        category: 'IA Documental & Agentes',
        skills: [
            { name: 'Spring AI / LangChain4j', level: 72, icon: '🤖' },
            { name: 'Orquestación de Agentes', level: 88, icon: '⚙️' },
            { name: 'Apache Tika (extracción)', level: 68, icon: '📄' },
            { name: 'Prompt Engineering', level: 90, icon: '💬' },
            { name: 'Optimización de tokens', level: 85, icon: '⚡' },
            { name: 'GitHub Copilot', level: 85, icon: '💡' }
        ]
    },
    {
        category: 'Frontend & Web',
        skills: [
            { name: 'JavaScript', level: 88, icon: '✨' },
            { name: 'React', level: 82, icon: '⚛️' },
            { name: 'Astro', level: 85, icon: '🛸' },
            { name: 'HTML / CSS', level: 90, icon: '🎨' }
        ]
    }
];

function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;

    skillsContainer.innerHTML = skillCategories.map(category => `
        <div class="skill-category">
            <h3 class="skill-category-title">${category.category}</h3>
            <div class="skill-category-grid">
                ${category.skills.map(skill => `
                    <div class="skill-card">
                        <div class="skill-header">
                            <span class="skill-icon">${skill.icon}</span>
                            <h4 class="skill-name">${skill.name}</h4>
                            <span class="skill-level">${skill.level}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 0%" data-level="${skill.level}"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    setTimeout(() => {
        document.querySelectorAll('.skill-progress').forEach(bar => {
            bar.style.width = bar.getAttribute('data-level') + '%';
        });
    }, 100);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderSkills);
} else {
    renderSkills();
}
