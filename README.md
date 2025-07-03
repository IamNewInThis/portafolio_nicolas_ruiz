# Portafolio Nicolas Ruiz

Este es mi portafolio personal desarrollado con React.js, que muestra mis proyectos, habilidades y experiencia profesional.

## 🚀 Despliegue

### Pasos para desplegar en GitHub Pages:

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Compilar el proyecto:**
   ```bash
   npm run build
   ```
   Este comando creará una carpeta `build` con los archivos optimizados para producción.

3. **Desplegar a GitHub Pages:**
   ```bash
   npm run deploy
   ```
   Este comando:
   - Ejecuta automáticamente `npm run build` (predeploy)
   - Sube los archivos de la carpeta `build` a la rama `gh-pages`
   - Hace el sitio disponible en: https://IamNewInThis.github.io/portafolio_nicolas_ruiz

### Comandos disponibles:

- `npm start` - Ejecuta la aplicación en modo desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm test` - Ejecuta las pruebas
- `npm run deploy` - Despliega la aplicación a GitHub Pages

## 🛠️ Tecnologías utilizadas

- React.js
- React Bootstrap
- React Router DOM
- React Multi Carousel
- Font Awesome
- Bootstrap
- Express.js (para el backend del formulario de contacto)
- Nodemailer (para el envío de emails)

## 📝 Notas importantes

- El proyecto está configurado para desplegarse en GitHub Pages
- La URL base está configurada como `/portafolio_nicolas_ruiz/`
- Los archivos estáticos se encuentran en la carpeta `build` después de compilar

## 🔧 Configuración

El archivo `package.json` incluye:
- **homepage**: Configurada para GitHub Pages
- **scripts de deploy**: Automatizados con gh-pages
- **dependencias**: Todas las librerías necesarias incluidas