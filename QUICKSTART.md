# 🚀 Guía de Inicio Rápido

## Instalación y Ejecución

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: **http://localhost:3000**

El idioma se detectará automáticamente según tu navegador y te redirigirá a:
- `/en` para inglés
- `/es` para español

## 🎯 Características Implementadas

✅ **Framework**: Next.js 14 con App Router  
✅ **UI**: Material UI con tema personalizado  
✅ **Idiomas**: Inglés y Español con detección automática  
✅ **Tema**: Dark/Light mode con persistencia  
✅ **Animaciones**: Framer Motion  
✅ **Formularios**: React Hook Form con validación  
✅ **100% Responsive**: Mobile, Tablet, Desktop  

## 📱 Secciones Incluidas

1. **Hero Section** - Título principal con CTA impactante
2. **Problem Section** - Identifica los pain points del cliente
3. **Solution Section** - 4 características principales del servicio
4. **How It Works** - Proceso en 4 pasos
5. **Audit Section** - CTA para auditoría gratuita
6. **Blog Section** - Últimas entradas (mock data)
7. **Newsletter** - Formulario de suscripción
8. **Contact Section** - Formulario de contacto completo
9. **Chatbot Widget** - Widget flotante (placeholder)

## 🔧 Personalización Rápida

### Cambiar Colores

Edita `lib/theme.ts`:

```typescript
primary: {
  main: '#6366F1', // Tu color primario
},
secondary: {
  main: '#EC4899', // Tu color secundario
},
```

### Editar Textos

Los textos están en:
- `messages/en.json` - Traducciones en inglés
- `messages/es.json` - Traducciones en español

### Modificar Blog

Edita `data/blog.json` para cambiar las entradas del blog.

## 🌐 Cambiar Idioma

Puedes cambiar el idioma de dos formas:

1. **Selector en el Header**: Click en EN/ES
2. **URL directa**: 
   - `http://localhost:3000/en`
   - `http://localhost:3000/es`

## 🎨 Cambiar Tema (Dark/Light)

Click en el ícono de sol/luna en el header.  
El tema se guarda en localStorage y persiste entre sesiones.

## 📧 Integraciones Futuras

Los formularios están listos para integrar con:

### Formulario de Contacto
```typescript
// components/sections/ContactSection.tsx
// Línea ~40 - Agregar tu API endpoint
await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

### Newsletter
```typescript
// components/sections/NewsletterSection.tsx
// Línea ~30 - Integrar con Mailchimp/SendinBlue
await fetch('/api/newsletter', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

### Chatbot
```typescript
// components/ChatbotWidget.tsx
// Línea ~50 - Conectar con tu servicio de chat
// Puedes integrar con Dialogflow, OpenAI, etc.
```

## 🚀 Desplegar en Vercel

1. Sube el código a GitHub
2. Conecta tu repo en [vercel.com](https://vercel.com)
3. Vercel detectará Next.js automáticamente
4. ¡Despliega!

O usando CLI:
```bash
npm i -g vercel
vercel
```

## 📝 Scripts Disponibles

```bash
npm run dev      # Desarrollo
npm run build    # Build de producción
npm start        # Servidor de producción
npm run lint     # Ejecutar linter
npm run format   # Formatear código con Prettier
```

## 🐛 Solución de Problemas

### Error de Node Version
Si ves advertencias sobre la versión de Node, actualiza a Node 18+:
```bash
# Usando nvm
nvm install 18
nvm use 18
```

### Errores de Compilación
```bash
# Limpia cache y reinstala
rm -rf node_modules .next
npm install
npm run dev
```

### Hot Reload No Funciona
Reinicia el servidor:
```bash
# Ctrl+C para detener
npm run dev
```

## 📚 Documentación

- [Next.js Docs](https://nextjs.org/docs)
- [Material UI](https://mui.com/material-ui/getting-started/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [React Hook Form](https://react-hook-form.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 🎉 ¡Listo!

Tu landing page está completamente funcional y lista para personalizar.

Para cualquier duda, revisa el archivo `README.md` con información más detallada.

---

**Desarrollado con ❤️ para LuminaAI**

