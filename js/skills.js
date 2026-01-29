// Datos de habilidades
const skills = [
    {
        name: "HTML5",
        level: 95,
        icon: "🌐"
    },
    {
        name: "CSS3",
        level: 90,
        icon: "🎨"
    },
    {
        name: "JavaScript",
        level: 85,
        icon: "⚡"
    },
    {
        name: "React",
        level: 80,
        icon: "⚛️"
    },
    {
        name: "Node.js",
        level: 75,
        icon: "🟢"
    },
    {
        name: "Git",
        level: 85,
        icon: "📦"
    },
    {
        name: "Responsive Design",
        level: 90,
        icon: "📱"
    },
    {
        name: "UI/UX",
        level: 80,
        icon: "✨"
    }
];

// Función para renderizar las habilidades
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    if (!skillsContainer) return;

    skillsContainer.innerHTML = skills.map(skill => `
        <div class="skill-card">
            <div class="skill-header">
                <span class="skill-icon">${skill.icon}</span>
                <h3 class="skill-name">${skill.name}</h3>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 0%" data-level="${skill.level}"></div>
            </div>
        </div>
    `).join('');

    // Animar las barras de progreso
    setTimeout(() => {
        const progressBars = document.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        });
    }, 100);
}

// Cargar habilidades cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderSkills);
} else {
    renderSkills();
}
