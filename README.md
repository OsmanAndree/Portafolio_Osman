# 🚀 Portafolio de Osman Barahona

Un portafolio web moderno y responsivo desarrollado con tecnologías web estándar, diseñado para mostrar mis habilidades como desarrollador Full Stack.

## ✨ Características

- **Diseño Moderno**: Glassmorphism y efectos visuales atractivos
- **Tema Claro/Oscuro**: Cambio dinámico de tema con persistencia
- **Animaciones Fluidas**: Transiciones suaves y efectos de entrada
- **Completamente Responsivo**: Optimizado para todos los dispositivos
- **PWA Ready**: Progressive Web App con service worker
- **SEO Optimizado**: Metadatos y structured data para mejor posicionamiento
- **Performance**: Carga rápida y optimizada

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Animaciones, grid, flexbox y variables CSS
- **JavaScript ES6+**: Funcionalidades interactivas y modernas
- **Font Awesome**: Iconografía profesional
- **Google Fonts**: Tipografía Inter para mejor legibilidad

## 📱 Funcionalidades

### Navegación
- Menú hamburguesa para móviles
- Navegación suave entre secciones
- Indicador de sección activa

### Secciones
- **Hero**: Presentación con animaciones de partículas
- **Sobre Mí**: Información personal y estadísticas
- **Experiencia**: Timeline de trayectoria profesional
- **Habilidades**: Tecnologías organizadas por categorías
- **Certificaciones**: Formación académica y cursos
- **Proyectos**: Portfolio con filtros y enlaces
- **Contacto**: Formulario funcional con validación

### Efectos Especiales
- Cursor personalizado
- Animaciones de partículas en el hero
- Efectos de hover y transiciones
- Loading screen animado
- Notificaciones toast

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno
- Servidor web local (opcional)

### Instalación Local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/OsmanAndree/portfolio.git
   cd portfolio
   ```

2. **Servir localmente**
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js
   npm run serve
   
   # Con PHP
   php -S localhost:8000
   ```

3. **Abrir en navegador**
   ```
   http://localhost:8000
   ```

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html          # Página principal
├── styles.css          # Estilos principales
├── script.js           # JavaScript funcional
├── sw.js              # Service Worker para PWA
├── manifest.json      # Configuración PWA
├── package.json       # Metadatos del proyecto
└── README.md          # Documentación
```

## 🎨 Personalización

### Colores
Los colores se definen en variables CSS en `:root`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  /* ... más variables */
}
```

### Contenido
- Editar `index.html` para cambiar información personal
- Actualizar proyectos en la sección correspondiente
- Modificar enlaces de redes sociales

### Animaciones
Las animaciones se controlan en `script.js` con Intersection Observer:
```javascript
const observer = new IntersectionObserver((entries) => {
  // Lógica de animaciones
});
```

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 PWA Features

- **Service Worker**: Cache de recursos para funcionamiento offline
- **Web App Manifest**: Instalable como app nativa
- **Responsive Design**: Adaptable a cualquier pantalla
- **Fast Loading**: Optimizado para conexiones lentas

## 📱 Compatibilidad

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers

## 🚀 Deployment

### GitHub Pages
1. Subir código a repositorio
2. Habilitar GitHub Pages en settings
3. Seleccionar branch main

### Netlify
1. Conectar repositorio
2. Deploy automático en cada push
3. Configurar dominio personalizado

### Vercel
1. Importar proyecto
2. Deploy con un click
3. URL personalizada incluida

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Osman Barahona**
- GitHub: [@OsmanAndree](https://github.com/OsmanAndree)
- Email: osmanbarahonas01@unicah.edu
- LinkedIn: [Osman Barahona](https://linkedin.com/in/osmanbarahona)

## 🙏 Agradecimientos

- [Font Awesome](https://fontawesome.com/) por los iconos
- [Google Fonts](https://fonts.google.com/) por la tipografía Inter
- Comunidad de desarrolladores por la inspiración

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

