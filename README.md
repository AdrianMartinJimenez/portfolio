<div align="center">

# 🚀 Portfolio Personal

### Portfolio profesional moderno y responsive para desarrollador web

[![GitHub Pages](https://img.shields.io/badge/demo-online-brightgreen)](https://adrianmartinjimenez.github.io/portfolio)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Demo en Vivo](https://adrianmartinjimenez.github.io/portfolio) • [Reportar Bug](https://github.com/AdrianMartinJimenez/portfolio/issues) • [Solicitar Feature](https://github.com/AdrianMartinJimenez/portfolio/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Características](#-características)
- [Tecnologías](#%EF%B8%8F-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Personalización](#-personalización)
- [Despliegue](#-despliegue)
- [Roadmap](#-roadmap)
- [Contribución](#-contribución)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🎯 Sobre el Proyecto

Portfolio web personal diseñado para destacar proyectos, habilidades y experiencia profesional como desarrollador. Construido con tecnologías web fundamentales (HTML, CSS, JavaScript) sin dependencias de frameworks externos, garantizando un rendimiento óptimo y fácil mantenimiento.

### ¿Por qué este portfolio?

- ✅ **100% Vanilla JavaScript** - Sin dependencias, carga rápida
- ✅ **Mobile First** - Diseño responsive desde el principio
- ✅ **Accesible** - Cumple estándares WCAG
- ✅ **SEO Optimizado** - Meta tags y estructura semántica
- ✅ **Fácil de personalizar** - Código limpio y bien documentado

## ✨ Características

### 🎨 Diseño y UI/UX

- **Diseño Responsive**: Adaptación perfecta a todos los dispositivos (móvil, tablet, desktop)
- **Tema Claro/Oscuro**: Cambio dinámico entre modos con persistencia en localStorage
- **Animaciones Suaves**: Transiciones CSS y efectos visuales elegantes con scroll reveal
- **Navegación Fluida**: Smooth scroll entre secciones con indicadores visuales
- **Menú Hamburguesa**: Navegación móvil intuitiva con animaciones

### ⚡ Funcionalidad

- **Contenido Dinámico**: Proyectos y habilidades cargados mediante JavaScript modular
- **Sistema de Grid Responsive**: Layout adaptativo usando CSS Grid y Flexbox
- **Lazy Loading**: Optimización de carga de imágenes
- **Formulario de Contacto**: Validación en tiempo real
- **Scroll Tracking**: Navegación activa según posición en la página

### 🔧 Técnicas

- **Variables CSS**: Sistema de diseño consistente y fácilmente personalizable
- **Código Modular**: JavaScript organizado en módulos reutilizables
- **Accesibilidad**: ARIA labels, navegación por teclado, contraste WCAG AA
- **SEO**: Meta tags, Open Graph, Schema.org markup
- **Performance**: Código optimizado, sin dependencias pesadas

## 🛠️ Tecnologías

Este proyecto está construido con tecnologías web fundamentales:

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **HTML5** | - | Estructura semántica del documento |
| **CSS3** | - | Estilos modernos, Grid, Flexbox, Variables CSS |
| **JavaScript** | ES6+ | Lógica de interactividad (Vanilla JS) |
| **Git** | 2.x | Control de versiones |

### Características Modernas Utilizadas

- CSS Grid & Flexbox
- CSS Custom Properties (Variables)
- ES6+ (Arrow Functions, Template Literals, Modules)
- LocalStorage API
- Intersection Observer API
- Fetch API

## 📁 Estructura del Proyecto

```
Portfolio/
├── 📄 index.html              # Página principal (HTML semántico)
├── 📄 README.md               # Documentación del proyecto
├── 📁 css/
│   └── 📄 style.css           # Estilos principales (variables, responsive, animaciones)
└── 📁 js/
    ├── 📄 main.js             # Lógica principal (tema, navegación, animaciones, scroll)
    ├── 📄 projects.js         # Datos y renderizado dinámico de proyectos
    └── 📄 skills.js           # Datos y renderizado dinámico de habilidades
```

### Descripción de Archivos

- **`index.html`**: Estructura HTML5 semántica con secciones (hero, sobre mí, proyectos, habilidades, contacto)
- **`css/style.css`**: Estilos organizados con variables CSS, media queries, y animaciones
- **`js/main.js`**: Funcionalidad core (toggle tema, menú móvil, scroll suave, animaciones)
- **`js/projects.js`**: Array de proyectos con renderizado dinámico en el DOM
- **`js/skills.js`**: Array de habilidades técnicas con barras de progreso animadas

## 🚀 Instalación

### Prerrequisitos

No se requieren dependencias npm ni frameworks. Solo necesitas:

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- (Opcional) Servidor HTTP local para mejor desarrollo

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/AdrianMartinJimenez/portfolio.git
   cd portfolio
   ```

2. **Abrir el proyecto**
   
   **Opción A: Navegador directo**
   ```bash
   # Doble clic en index.html
   # O desde terminal (Windows)
   start index.html
   ```
   
   **Opción B: Servidor HTTP (Recomendado)**
   ```bash
   # Python 3
   python -m http.server 8080
   
   # Python 2
   python -m SimpleHTTPServer 8080
   
   # Node.js (http-server)
   npx http-server -p 8080
   
   # PHP
   php -S localhost:8080
   
   # VS Code - Extensión Live Server
   # Click derecho > Open with Live Server
   ```

3. **Acceder**
   ```
   http://localhost:8080
   ```

## 💻 Uso

### Navegación

El portfolio incluye las siguientes secciones:

- **Inicio**: Presentación y llamada a la acción
- **Sobre Mí**: Información personal y profesional
- **Proyectos**: Galería de proyectos destacados
- **Habilidades**: Tecnologías y nivel de dominio
- **Contacto**: Formulario y enlaces sociales

### Características Interactivas

- **Cambio de Tema**: Click en el botón sol/luna en la navbar
- **Navegación Móvil**: Menú hamburguesa para pantallas pequeñas
- **Scroll Suave**: Click en enlaces de navegación para transición suave
- **Animaciones**: Los elementos aparecen al hacer scroll

## 🎨 Personalización

### 1. Información Personal

Edita [`index.html`](index.html) y actualiza:

```html
<!-- Líneas 37-42: Hero Section -->
<h1 class="fade-in">Hola, soy <span class="highlight">Tu Nombre</span></h1>
<p class="subtitle fade-in">Tu Título | Tu Descripción</p>
<p class="description fade-in">
    Tu biografía o mensaje principal
</p>
```

### 2. Proyectos

Modifica [`js/projects.js`](js/projects.js):

```javascript
const projects = [
    {
        title: "Nombre del Proyecto",
        description: "Descripción detallada del proyecto y sus objetivos",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/tu-usuario/proyecto",
        demo: "https://proyecto-demo.com" // Opcional
    },
    // Más proyectos...
];
```

### 3. Habilidades

Actualiza [`js/skills.js`](js/skills.js):

```javascript
const skills = [
    {
        name: "JavaScript",
        level: 90,        // Porcentaje (0-100)
        icon: "⚡",       // Emoji o clase de ícono
        category: "Frontend" // Opcional
    },
    // Más habilidades...
];
```

### 4. Colores y Estilos

Personaliza colores editando las variables CSS en [`css/style.css`](css/style.css):

```css
:root {
    /* Colores principales */
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    
    /* Colores de fondo */
    --bg-color: #ffffff;
    --surface-color: #f8f9fa;
    
    /* Colores de texto */
    --text-primary: #2d3748;
    --text-secondary: #4a5568;
    
    /* Tipografía */
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-size-base: 16px;
}
```

### 5. Enlaces de Contacto

Actualiza los enlaces sociales en [`index.html`](index.html) (sección contacto):

```html
<a href="https://github.com/tu-usuario" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/tu-perfil" target="_blank">LinkedIn</a>
<a href="mailto:tu-email@example.com">Email</a>
```

## 🌐 Despliegue

### GitHub Pages (Gratis)

1. **Push tu código a GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Activar GitHub Pages**
   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` → `/root`
   - Guardar

3. **Acceder**
   ```
   https://tu-usuario.github.io/portfolio
   ```

### Netlify (Gratis)

1. Conecta tu repositorio de GitHub
2. Build settings: Ninguno (sitio estático)
3. Deploy automático en cada push

### Vercel (Gratis)

```bash
npx vercel
```

### Otras Opciones

- **Cloudflare Pages**: Deploy desde GitHub
- **GitLab Pages**: Similar a GitHub Pages
- **Surge.sh**: `npx surge ./`
- **Firebase Hosting**: `firebase deploy`

## 🗺️ Roadmap

Funcionalidades planeadas para futuras versiones:

- [ ] Integración con blog personal (Markdown support)
- [ ] Sistema de filtrado de proyectos por tecnología
- [ ] Modo de alto contraste para accesibilidad
- [ ] Internacionalización (i18n) - Múltiples idiomas
- [ ] Integración con CMS headless (Contentful/Strapi)
- [ ] Análisis de métricas (Google Analytics)
- [ ] Formulario de contacto con backend (EmailJS)
- [ ] Animaciones 3D con Three.js
- [ ] PWA (Progressive Web App) support
- [ ] Tests automáticos (Jest/Cypress)

¿Tienes una idea? [Abre un issue](https://github.com/AdrianMartinJimenez/portfolio/issues) para discutirla.

## 🤝 Contribución

Las contribuciones son bienvenidas y apreciadas. Si deseas mejorar este proyecto:

1. **Fork** el proyecto
2. **Crea** tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add: nueva característica increíble'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Convenciones de Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Cambios en documentación
- `style:` Formato de código (sin cambios funcionales)
- `refactor:` Refactorización de código
- `test:` Añadir o corregir tests
- `chore:` Tareas de mantenimiento

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License - Puedes usar este código libremente para proyectos personales o comerciales.
```

## 📧 Contacto

**Adrián Martín Jiménez**

- 📧 Email: [adrian.martin.jimenez@gmail.com](mailto:adrian.martin.jimenez@gmail.com)
- 💼 GitHub: [@AdrianMartinJimenez](https://github.com/AdrianMartinJimenez)
- 🔗 Portfolio: [adrianmartinjimenez.github.io/portfolio](https://adrianmartinjimenez.github.io/portfolio)

---

<div align="center">

**Hecho con ❤️ y mucho ☕**

⭐ Si te gusta este proyecto, considera darle una estrella en GitHub

[⬆ Volver arriba](#-portfolio-personal)

</div>
- **LinkedIn**: [Tu perfil](https://www.linkedin.com/in/adrian-mj/)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
