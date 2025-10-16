# 🎨 Características Detalladas

## 🌍 Internacionalización (i18n)

### Idiomas Soportados
- **Inglés (EN)** - Default para navegadores en inglés
- **Español (ES)** - Default para navegadores en español

### Detección Automática
El middleware detecta automáticamente el idioma del navegador del usuario y redirige a la ruta correcta (`/en` o `/es`).

### Cambio Manual
Los usuarios pueden cambiar el idioma usando el selector en el header (banderas 🇺🇸 🇪🇸).

### Archivos de Traducción
```
messages/
├── en.json  # 🇺🇸 Todas las traducciones en inglés
└── es.json  # 🇪🇸 Todas las traducciones en español
```

## 🎨 Sistema de Diseño

### Material UI (MUI)
- **Tema personalizado** con colores modernos
- **Componentes consistentes** en toda la aplicación
- **Sistema de breakpoints** responsive

### Colores Principales
```
Primary (Indigo):  #6366F1
Secondary (Pink):  #EC4899
Background Light:  #F9FAFB
Background Dark:   #0F172A
```

### Tipografía
- **Fuente**: Inter (Google Fonts)
- **Jerarquía clara** con 6 niveles de headings
- **Line-height optimizado** para legibilidad

## 🌓 Dark/Light Mode

### Características
- ✅ Toggle en el header (ícono sol/luna)
- ✅ Persistencia en localStorage
- ✅ Detección de preferencia del sistema
- ✅ Transiciones suaves entre temas
- ✅ Sin flash de contenido sin estilo (FOUC)

### Paleta de Colores por Tema

#### Light Mode
- Fondo: Blanco suave (#F9FAFB)
- Texto: Gris oscuro (#111827)
- Cards: Blanco puro (#FFFFFF)

#### Dark Mode
- Fondo: Azul oscuro (#0F172A)
- Texto: Gris claro (#F1F5F9)
- Cards: Azul medio (#1E293B)

## 🎬 Animaciones

### Framer Motion
Todas las secciones incluyen animaciones suaves:

- **Fade in + Slide up**: Al hacer scroll
- **Hover effects**: En cards y botones
- **Scale animations**: En CTAs principales
- **Stagger animations**: En listas y grids

### Tipos de Animaciones
1. **Entrada**: `opacity: 0 → 1`, `y: 30 → 0`
2. **Hover**: `transform: scale(1.05)`, `translateY(-10px)`
3. **Click**: `scale: 0.95` feedback táctil

## 📱 Responsive Design

### Breakpoints (MUI)
```
xs: 0px      (móvil pequeño)
sm: 600px    (móvil grande)
md: 900px    (tablet)
lg: 1200px   (desktop)
xl: 1536px   (desktop grande)
```

### Adaptaciones por Dispositivo

#### Mobile (< 600px)
- Header con menú hamburguesa
- Secciones en columna única
- Chatbot ocupa 100% del ancho
- Tipografía reducida

#### Tablet (600px - 900px)
- Grid de 2 columnas
- Navegación condensada
- Imágenes optimizadas

#### Desktop (> 900px)
- Grid completo (4 columnas para features)
- Navegación horizontal completa
- Hover effects activos

## 🧩 Componentes Principales

### Header
- Logo animado con gradiente
- Navegación con scroll suave
- Selector de idioma
- Toggle de tema
- Menú móvil responsive

### Hero Section
- Título impactante
- Subtítulo descriptivo
- CTA principal con ícono
- Fondo con gradiente y efectos blur
- Totalmente responsive

### Problem Section
- 4 tarjetas con problemas comunes
- Íconos representativos
- Hover effects
- Estadística destacada

### Solution Section
- 4 features con íconos flotantes
- Gradientes únicos por feature
- Animación de elevación
- Descripciones concisas

### How It Works
- 4 pasos numerados
- Línea conectora (desktop)
- Círculos con íconos
- Colores distintivos por paso

### Audit Section
- Fondo con gradiente
- Lista de beneficios con checkmarks
- CTA prominente
- Card informativa

### Blog Section
- Grid de 3 artículos
- Cards con imagen, categoría, fecha
- Autor y extracto
- Botón "Leer más"

### Newsletter
- Formulario inline
- Validación de email
- Diseño destacado con borde
- Feedback visual

### Contact Form
- 4 campos: Nombre, Email, Mensaje, Fecha
- Validación en tiempo real
- Mensajes de error claros
- Confirmación con Snackbar

### Chatbot Widget
- Botón flotante (bottom-right)
- Modal de chat deslizable
- Historial de mensajes
- Input con envío por Enter
- Avatar del bot
- Timestamps

### Footer
- Logo y descripción
- Enlaces rápidos
- Redes sociales
- Links legales
- Copyright dinámico

## 📋 Formularios

### Tecnología
- **React Hook Form** - Manejo de estado
- **Validación nativa** - HTML5 + custom
- **Feedback visual** - Errores en tiempo real

### Campos del Formulario de Contacto
1. **Nombre** (requerido)
2. **Email** (requerido, validación de formato)
3. **Mensaje** (requerido, textarea)
4. **Fecha** (opcional, datetime-local)

### Newsletter
- **Email** (requerido, validación de formato)
- Mensaje de éxito con Snackbar

## 🔌 APIs Preparadas

### Blog API
```
GET /api/blog
```
Retorna los posts del blog desde `data/blog.json`

### Contacto (Placeholder)
```
POST /api/contact
Body: { name, email, message, date }
```
Listo para implementar con tu backend

### Newsletter (Placeholder)
```
POST /api/newsletter
Body: { email }
```
Listo para integrar con Mailchimp, SendinBlue, etc.

## 🔍 SEO

### Metadatos Configurados
- Title tag optimizado
- Meta description
- Keywords relevantes
- Open Graph tags (Facebook)
- Twitter Card tags
- Viewport responsive
- Robots meta tag

### Sitemap y Robots
- `robots.txt` configurado
- Preparado para sitemap.xml

### Manifest
- PWA ready
- Íconos configurados
- Theme color

## ⚡ Performance

### Optimizaciones Implementadas
- ✅ Server Side Rendering (SSR)
- ✅ Static Site Generation (SSG)
- ✅ Code splitting automático
- ✅ Lazy loading de componentes
- ✅ Optimización de imágenes (Next.js Image)
- ✅ CSS-in-JS con Emotion (MUI)
- ✅ Fonts optimizadas con next/font

### Lighthouse Score Target
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: 100

## 🛠️ Herramientas de Desarrollo

### TypeScript
- Type safety en todo el código
- Interfaces bien definidas
- Props tipados
- Autocomplete mejorado

### ESLint
- Reglas de Next.js
- Configuración base de React
- Detección de problemas

### Prettier
- Formato automático
- Configuración consistente
- Integración con VSCode

## 📦 Dependencias Principales

```json
{
  "next": "14.2.33",
  "@mui/material": "^5.15.15",
  "next-intl": "^3.11.1",
  "framer-motion": "^11.0.28",
  "react-hook-form": "^7.51.3",
  "react": "^18.3.1",
  "typescript": "^5.4.5"
}
```

## 🚀 Listo para Producción

### Vercel Deploy
- Configuración automática
- Zero-config deployment
- Preview deployments
- Analytics integrado

### Environment Variables
Copia `.env.example` a `.env.local` y configura:
- API endpoints
- Email service keys
- Newsletter API keys
- Analytics IDs

---

**Tu landing page está completamente lista para lanzar** 🎉

