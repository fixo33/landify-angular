# Landify - Angular 20 Landing Page

Este proyecto es la conversión de la landing page original de HTML/Tailwind CSS a Angular 20, manteniendo toda la funcionalidad y diseño original.

## 🎨 Prototipo Original

Este proyecto se basa en el prototipo de Figma:
**[Landify - Landing Page UI Kit](https://www.figma.com/community/file/894552273937682724)**

El diseño original fue creado en Figma y convertido completamente a Angular 20, manteniendo la fidelidad visual y funcional del prototipo original.

## 🚀 Características

- **Angular 20**: Utiliza la última versión de Angular con componentes standalone
- **Tailwind CSS**: Configurado y funcionando perfectamente
- **Responsive Design**: Diseño completamente responsive para móvil y desktop
- **Accesibilidad**: Implementa las mejores prácticas de accesibilidad
- **Formularios Reactivos**: Formulario de contacto con validación completa
- **Componentización**: Código organizado en componentes reutilizables
- **Docker**: Configuración completa para despliegue en contenedores
- **Nginx**: Servidor web optimizado para producción

## 🐳 Despliegue con Docker

### Prerrequisitos

- Docker
- Docker Compose

### Despliegue Rápido

```bash
# Desplegar en modo desarrollo
./scripts/deploy.sh dev

# Desplegar en modo producción
./scripts/deploy.sh prod

# Ver logs
./scripts/deploy.sh logs prod

# Parar aplicación
./scripts/deploy.sh stop prod

# Limpiar contenedores
./scripts/deploy.sh cleanup
```

### Despliegue Manual

```bash
# Construir y ejecutar en desarrollo
docker-compose up --build -d

# Construir y ejecutar en producción
docker-compose -f docker-compose.prod.yml up --build -d

# Acceder a la aplicación
http://localhost
```

### Configuración de Nginx

El proyecto incluye configuraciones optimizadas de Nginx para:

- **Compresión Gzip**: Para archivos estáticos y dinámicos
- **Cache**: Configuración de cache para archivos estáticos
- **Seguridad**: Headers de seguridad configurados
- **SPA Routing**: Soporte para Angular Router
- **SSL**: Configuración para HTTPS (opcional)

### Optimizaciones de Producción

- **Multi-stage build**: Reduce el tamaño de la imagen final
- **Compresión**: Gzip habilitado para todos los tipos de archivo
- **Cache**: Headers de cache optimizados
- **Security**: Headers de seguridad configurados
- **Health checks**: Monitoreo de salud de la aplicación
- **Resource limits**: Límites de CPU y memoria configurados

## 📁 Estructura del Proyecto

```
landify-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/          # Navegación principal
│   │   │   ├── hero/            # Sección principal
│   │   │   ├── stats/           # Estadísticas
│   │   │   ├── services/        # Servicios ofrecidos
│   │   │   ├── portfolio/       # Galería de trabajos
│   │   │   ├── testimonial/     # Testimonios de clientes
│   │   │   ├── contact/         # Formulario de contacto
│   │   │   └── footer/          # Pie de página
│   │   ├── pages/
│   │   │   └── home/            # Página principal
│   │   ├── app.component.ts     # Componente raíz
│   │   ├── app.config.ts        # Configuración de la app
│   │   └── app.routes.ts        # Rutas de la aplicación
│   ├── assets/
│   │   └── images/              # Imágenes del proyecto
│   ├── styles.scss              # Estilos globales con Tailwind
│   ├── main.ts                  # Punto de entrada
│   └── index.html               # HTML principal
├── tailwind.config.js           # Configuración de Tailwind
├── postcss.config.js            # Configuración de PostCSS
├── angular.json                 # Configuración de Angular
├── tsconfig.json                # Configuración de TypeScript
└── package.json                 # Dependencias del proyecto
```

## 🛠️ Instalación

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar o descargar el proyecto**
   ```bash
   # Si tienes el proyecto en un repositorio
   git clone <url-del-repositorio>
   cd landify-angular
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Copiar la imagen principal**
   ```bash
   # Copiar la imagen desde el proyecto original
   cp ../landify/images/image1.png src/assets/images/
   ```

4. **Ejecutar el proyecto**
   ```bash
   npm start
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:4200
   ```

## 🏗️ Scripts Disponibles

- `npm start` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run watch` - Construye en modo watch
- `npm test` - Ejecuta las pruebas

## 🎨 Componentes Principales

### HeaderComponent
- Navegación responsive con menú móvil
- Logo y enlaces de navegación
- Botón de contacto

### HeroComponent
- Sección principal con título y descripción
- Botón de reproducción de video
- Imagen principal

### StatsComponent
- Estadísticas de la empresa
- Diseño en grid responsive

### ServicesComponent
- Tres servicios principales
- Iconos y enlaces "Learn more"
- Efectos hover

### PortfolioComponent
- Galería de trabajos seleccionados
- Imágenes con efectos hover
- Navegación por proyectos

### TestimonialComponent
- Testimonios de clientes
- Navegación entre testimonios
- Diseño responsive

### ContactComponent
- Formulario de contacto reactivo
- Validación en tiempo real
- Manejo de envío

### FooterComponent
- Enlaces de navegación
- Redes sociales
- Información de copyright

## 🔧 Configuración de Tailwind CSS

El proyecto está configurado con Tailwind CSS y colores personalizados:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        secondary: '#6D28D9',
        dark: '#1F2937',
      }
    },
  },
}
```

## 📱 Funcionalidades Interactivas

### Menú Móvil
- Toggle del menú móvil
- Cierre automático al hacer clic en enlaces
- Navegación suave entre secciones

### Formulario de Contacto
- Validación en tiempo real
- Mensajes de error personalizados
- Estado de envío
- Reset del formulario

### Testimonios
- Navegación entre testimonios
- Diseño responsive para móvil/desktop
- Animaciones suaves

### Galería de Portafolio
- Efectos hover en imágenes
- Navegación por proyectos
- Carga lazy de imágenes

## 🎯 Mejoras Implementadas

### Accesibilidad
- Etiquetas ARIA apropiadas
- Navegación por teclado
- Skip to main content
- Contraste de colores adecuado

### Performance
- Lazy loading de imágenes
- Componentes standalone
- Optimización de CSS

### UX/UI
- Transiciones suaves
- Estados hover
- Feedback visual
- Diseño responsive

## 🚀 Despliegue

### Para producción
```bash
npm run build
```

Los archivos generados estarán en `dist/landify-angular/`

### Para GitHub Pages
```bash
ng deploy --base-href=/landify-angular/
```

## 📝 Notas de Desarrollo

- Todos los componentes son standalone (Angular 20)
- Se mantiene la funcionalidad JavaScript original
- Tailwind CSS está completamente configurado
- El proyecto es completamente responsive
- Se incluye documentación Javadoc en español

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Fixo33** - [devawsoftware@gmail.com](mailto:devawsoftware@gmail.com)

---

**Nota**: Este proyecto es una conversión completa de la landing page original de HTML/Tailwind CSS a Angular 20, manteniendo toda la funcionalidad y mejorando la estructura del código. 