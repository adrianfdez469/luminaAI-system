# LuminaAI Landing Page

Una landing page moderna y profesional construida con Next.js, Material UI y TypeScript para promocionar servicios de automatización inteligente.

## 🚀 Características

- ✅ **Next.js 14** con App Router
- ✅ **Material UI (MUI)** con tema personalizado
- ✅ **TypeScript** para type safety
- ✅ **Internacionalización** (i18n) con next-intl (Inglés/Español)
- ✅ **Detección automática de idioma** del navegador
- ✅ **Dark/Light Mode** con persistencia
- ✅ **Framer Motion** para animaciones suaves
- ✅ **React Hook Form** para validación de formularios
- ✅ **Totalmente responsive** (mobile, tablet, desktop)
- ✅ **SEO optimizado** con metadatos y Open Graph
- ✅ **Chatbot widget** (placeholder para integración futura)
- ✅ **Formulario de contacto** con validaciones
- ✅ **Suscripción al boletín**
- ✅ **Sección de blog** con datos mock

## 📁 Estructura del Proyecto

```
landing/
├── app/
│   └── [locale]/
│       ├── layout.tsx          # Layout principal con i18n
│       └── page.tsx             # Página principal
├── components/
│   ├── Header.tsx              # Navegación principal
│   ├── Footer.tsx              # Pie de página
│   ├── Logo.tsx                # Componente del logo
│   ├── ChatbotWidget.tsx       # Widget de chatbot flotante
│   └── sections/               # Secciones de la landing
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       ├── SolutionSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── AuditSection.tsx
│       ├── BlogSection.tsx
│       ├── ContactSection.tsx
│       └── NewsletterSection.tsx
├── lib/
│   ├── theme.ts                # Configuración del tema MUI
│   └── ThemeProvider.tsx       # Provider del tema con dark mode
├── messages/
│   ├── en.json                 # Traducciones en inglés
│   └── es.json                 # Traducciones en español
├── data/
│   └── blog.json               # Datos mock del blog
├── styles/
│   └── globals.css             # Estilos globales
├── i18n.ts                     # Configuración de i18n
├── middleware.ts               # Middleware de Next.js para i18n
└── package.json
```

## 🛠️ Instalación

1. **Instalar dependencias:**

```bash
npm install
```

2. **Ejecutar en modo desarrollo:**

```bash
npm run dev
```

3. **Abrir en el navegador:**

```
http://localhost:3000
```

La aplicación detectará automáticamente el idioma de tu navegador y te redirigirá a `/en` o `/es`.

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint
- `npm run format` - Formatea el código con Prettier

## 🎨 Personalización

### Colores del Tema

Edita `lib/theme.ts` para cambiar los colores principales:

```typescript
primary: {
  main: '#6366F1', // Indigo
},
secondary: {
  main: '#EC4899', // Pink
},
```

### Traducciones

Edita los archivos en `messages/`:
- `en.json` - Traducciones en inglés
- `es.json` - Traducciones en español

### Contenido del Blog

Edita `data/blog.json` para modificar las entradas del blog.

## 🌐 Internacionalización

La aplicación soporta cambio de idioma dinámico:

- Detección automática del idioma del navegador
- Selector de idioma en el header
- URLs localizadas: `/en/*` y `/es/*`

## 📱 Secciones de la Landing

1. **Hero** - Título principal con CTA
2. **Problema** - Identifica los pain points del cliente
3. **Solución** - Presenta las características del servicio
4. **Cómo Funciona** - 4 pasos del proceso
5. **Auditoría Gratuita** - CTA para agendar consulta
6. **Blog** - Últimas entradas del blog
7. **Newsletter** - Suscripción al boletín
8. **Contacto** - Formulario de contacto

## 🤖 Chatbot Widget

El widget de chatbot está ubicado en la esquina inferior derecha. Es un placeholder que incluye:

- UI completa de chat
- Mock de conversación
- Listo para integrar con un backend real

Para conectarlo a un servicio real, edita `components/ChatbotWidget.tsx`.

## 📧 Formularios

### Formulario de Contacto

Ubicado en `components/sections/ContactSection.tsx`:
- Validación con React Hook Form
- Campos: Nombre, Email, Mensaje, Fecha preferida
- Listo para integración con API REST

### Suscripción Newsletter

Ubicado en `components/sections/NewsletterSection.tsx`:
- Validación de email
- Listo para integrar con Mailchimp, SendinBlue, etc.

## 🚀 Despliegue en Vercel

1. Sube el código a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. ¡Vercel detectará automáticamente Next.js y desplegará!

```bash
# O usando Vercel CLI
npm i -g vercel
vercel
```

## 🔧 Próximas Integraciones

- [ ] Backend API para formulario de contacto
- [ ] Integración con servicio de newsletter (Mailchimp)
- [ ] Chatbot con IA real
- [ ] Blog dinámico con CMS
- [ ] Analytics (Google Analytics, Plausible)
- [ ] Sistema de comentarios

## 📄 Licencia

Este proyecto es privado y está desarrollado para LuminaAI.

## 👨‍💻 Desarrollo

Construido con ❤️ usando:
- [Next.js](https://nextjs.org/)
- [Material UI](https://mui.com/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)

