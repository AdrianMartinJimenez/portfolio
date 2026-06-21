// Fecha de entrada en Capgemini / AXA
window.CAREER_START = { year: 2018, month: 5, day: 15 };

window.getYearsOfExperience = function () {
    const { year, month, day } = window.CAREER_START;
    const now = new Date();
    let years = now.getFullYear() - year;

    if (now.getMonth() < month || (now.getMonth() === month && now.getDate() < day)) {
        years--;
    }

    return Math.max(0, years);
};

window.formatYears = function (format) {
    const years = window.getYearsOfExperience();

    switch (format) {
        case 'number':
            return String(years);
        case 'plus-years':
            return `+${years} años`;
        case 'stat':
        default:
            return `${years}+`;
    }
};

window.updateYearsInPage = function () {
    document.querySelectorAll('[data-years-format]').forEach(el => {
        el.textContent = window.formatYears(el.dataset.yearsFormat);
    });

    const meta = document.getElementById('meta-description');
    if (meta) {
        const years = window.getYearsOfExperience();
        meta.content = `Adrián Martín Jiménez — Senior Java Developer con +${years} años en gestión de siniestros. Spring Boot, IA documental y automatización de claims.`;
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.updateYearsInPage);
} else {
    window.updateYearsInPage();
}
