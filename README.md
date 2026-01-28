# 🚀 Portfolio Personal

Portfolio profesional moderno y responsive, diseñado para mostrar proyectos, habilidades y experiencia como desarrollador web.

## ✨ Características

- **Diseño Responsive**: Adaptado para todos los dispositivos (móvil, tablet, desktop)
- **Tema Claro/Oscuro**: Cambio dinámico entre modos con persistencia en localStorage
- **Animaciones Suaves**: Transiciones y efectos visuales elegantes
- **Navegación Fluida**: Scroll suave entre secciones
- **Menú Hamburguesa**: Navegación móvil intuitiva
- **Contenido Dinámico**: Proyectos y habilidades cargados mediante JavaScript
- **Optimizado para SEO**: Meta tags y estructura semántica HTML5

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS y Grid/Flexbox
- **JavaScript (Vanilla)**: Interactividad sin frameworks
- **Git**: Control de versiones

## 📁 Estructura del Proyecto

```
Portfolio/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos principales
├── js/
│   ├── main.js        # Lógica principal (tema, navegación, animaciones)
│   ├── projects.js    # Datos y renderizado de proyectos
│   └── skills.js      # Datos y renderizado de habilidades
└── README.md          # Documentación
```

## 🚀 Cómo Usar

### Visualización Local

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/AdrianMartinJimenez/portfolio.git
   cd portfolio
   ```

2. **Abrir con servidor local**:
   - Opción 1: Doble clic en `index.html`
   - Opción 2: Usar servidor HTTP (recomendado)
     ```bash
     # Python
     python -m http.server 8080
     
     # Node.js
     npx http-server
     ```

3. **Acceder**: Abrir navegador en `http://localhost:8080`

### Personalización

1. **Información Personal**: Editar `index.html`
   - Nombre, descripción, enlaces de contacto

2. **Proyectos**: Modificar `js/projects.js`
   ```javascript
   {
       title: "Tu Proyecto",
       description: "Descripción del proyecto",
       technologies: ["Tech1", "Tech2"],
       link: "URL del proyecto"
   }
   ```

3. **Habilidades**: Actualizar `js/skills.js`
   ```javascript
   {
       name: "Tecnología",
       level: 90,
       icon: "emoji"
   }
   ```

4. **Estilos**: Personalizar colores en `css/style.css` (variables CSS al inicio del archivo)

## 🌐 Despliegue

### GitHub Pages

1. Ir a Settings → Pages
2. Seleccionar branch `main`
3. Guardar y acceder a `https://AdrianMartinJimenez.github.io/portfolio`

### Otras Plataformas

Compatible con Netlify, Vercel, GitHub Pages, etc. Solo requiere hosting estático.

## 📧 Contacto

- **Email**: tu@email.com
- **GitHub**: [@AdrianMartinJimenez](https://github.com/AdrianMartinJimenez)
- **LinkedIn**: [Tu perfil](https://linkedin.com/in/tuusuario)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
