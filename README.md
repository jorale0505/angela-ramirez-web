# Angela Ramírez · Sitio Web Profesional

> **Contadora Pública · Especialista en Revisoría Fiscal y Auditoría Forense**  
> *Slogan:* **"Tu información, en buenas manos"**  
> *Cobertura Estratégica:* **Eje Cafetero y Norte del Valle** (Colombia)  
> 🌐 **Sitio Oficial en Vivo:** [https://jorale0505.github.io/angela-ramirez-web/](https://jorale0505.github.io/angela-ramirez-web/)

Este repositorio contiene la plataforma web oficial de la firma de **Angela Ramírez**, diseñada bajo estándares editoriales de alto impacto y construida con **Astro** en modo de generación estática para máximo rendimiento (100 en Google Lighthouse), total seguridad y despliegue automatizado en **GitHub Pages**.

---

## 🎨 Identidad Visual y Manual de Marca

El sitio respeta rigurosamente los lineamientos cromáticos y visuales de la identidad institucional:

| Color | Hex | Significado Institucional |
| :--- | :--- | :--- |
| **Azul Ejecutivo** | `#163A5F` | Seguridad, Confianza y Autoridad |
| **Dorado Champagne** | `#B89B5E` / `#DFCA8D` | Prestigio, Calidad y Diferenciación |
| **Marfil Profesional**| `#F7F6F2` | Limpieza, Orden y Elegancia |
| **Azul Acero** | `#3F607A` | Profesionalismo y Estabilidad |
| **Azul Grisáceo** | `#71879A` | Equilibrio y Objetividad |
| **Gris Grafito** | `#252B31` | Exactitud y Seriedad |

---

## ✨ Contenido Real y Arquitectura del Sitio

El sitio web está estructurado en secciones y componentes modulares que reflejan fielmente el portafolio y los servicios de la firma:

### 1. Encabezado Institucional (`Header`)
- Navegación superior fija con efecto de desenfoque de fondo (*backdrop-filter*).
- Logotipo oficial corporativo 3D y enlaces directos a las secciones clave: Inicio, Sobre Mí, Servicios y Recursos Gratuitos.
- Botón directo de llamada a la acción hacia WhatsApp.

### 2. Sección Principal de Impacto (`Hero`)
- Propuesta de valor clara y credenciales profesionales verificables.
- Tarjetas rotativas interactivas de servicios destacados con resumen normativo.
- Acceso rápido a consulta personalizada con Angela Ramírez.

### 3. Semblanza y Pilares Profesionales (`About`)
- Presentación de Angela Ramírez: trayectoria como Contadora Pública y Auditora Forense.
- Fotografía profesional y pilares de confianza: rigor técnico, independencia de criterio, confidencialidad y blindaje normativo.

### 4. Servicios Especializados en 4 Ejes Estratégicos (`Services`)
Estructura unificada en una sola tarjeta compacta y moderna, con selector superior tipo píldora en azul corporativo (`#112B47`) que resalta en Dorado Champagne (`#DFCA8D`) al seleccionarse:
- **Eje 1: Aseguramiento & Control**:
  - Revisoría Fiscal Integral
  - Auditoría Financiera y de Control Interno
  - Auditoría Forense & Prevención de Fraude
- **Eje 2: Inteligencia Financiera & Forense**:
  - Peritaje Contable Judicial
  - Diagnóstico y Valoración Financiera
  - Detección de Irregularidades y Análisis de Evidencia
- **Eje 3: Eficiencia & Cumplimiento Fiscal**:
  - Planeación y Consultoría Tributaria
  - Auditoría y Cumplimiento Fiscal
  - Diagnóstico de Riesgos Tributarios
- **Eje 4: Gobierno & Continuidad del Negocio**:
  - Estructuración de Gobierno Corporativo
  - Gestión de Riesgos Empresariales (SAGRILAFT / PTEE)
  - Asesoría Contable Estratégica

Cada servicio cuenta con su fundamentación legal y botón para solicitar propuesta directa por WhatsApp.

### 5. Herramientas y Recursos Gratuitos (`FreeResources`)
Conjunto de recursos prácticos descargables formulados para empresarios, contadores y directivos:
- **Calendario Tributario 2026**: Cronograma consolidado en PDF interactivo con fechas de vencimientos DIAN e impuestos distritales.
- **Diagnóstico de Control Interno & SAGRILAFT**: Matriz parametrizada en Excel para autoevaluar riesgos corporativos y cumplimiento antilavado.
- **Guía de Cierre Contable & Revelaciones NIIF**: Manual técnico con 25 puntos críticos para grupos 1 y 2.
- **Checklist Documental para Declaración de Renta**: Guía detallada de soportes probatorios para personas naturales y empresas.

### 6. Pie de Página con Línea de Luz Dorada (`Footer`)
- Línea divisoria animada que converge en un nodo central resplandeciente.
- Reconocimiento geográfico destacado: **Eje Cafetero** y **Norte del Valle**.
- Derechos de autor e identidad de marca.

### 7. Experiencia Interactiva y Fondo Vectorial
- **Fondo Contable Especializado (`AccountingBackground`)**: Cuadrícula de papel de seguridad y 13 motivos vectoriales originales (balanza, libro mayor, ábaco, lupa forense, calculadora, escudo, etc.) con micro-animaciones fluidas.
- **Puntero Dinámico Sutil (`CustomCursor`)**: Cursor en Dorado Champagne con aro de arrastre amortiguado (LERP), reacción magnética a botones y desactivación en dispositivos móviles táctiles.
- **Contacto Flotante Permanente (`FloatingContact`)**: Acceso inmediato a WhatsApp siempre accesible desde cualquier punto de la navegación.

---

## 🚀 Cómo Ejecutar en Local

1. Navegar a la carpeta del proyecto:
   ```bash
   cd angela-ramirez-web
   ```

2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abrir en el navegador en `http://localhost:4321`.

3. Compilar para producción:
   ```bash
   npm run build
   ```
   Los archivos estáticos optimizados se generarán en la carpeta `dist/`.

---

## 🌐 Despliegue en GitHub Pages (CI/CD)

El sitio cuenta con integración y despliegue continuo automatizado mediante **GitHub Actions** en `.github/workflows/deploy.yml`:

- **Repositorio Oficial**: `jorale0505/angela-ramirez-web`
- **Flujo de Trabajo**: Al realizar cualquier `git push` a la rama `main`, GitHub Actions compila automáticamente el sitio con Node.js 22 y Astro, y publica los artefactos en GitHub Pages.
- **Configuración Dinámica de Rutas**: `astro.config.mjs` detecta automáticamente la variable `GITHUB_REPOSITORY` para ajustar de forma transparente el `site` y el `base` (`/angela-ramirez-web/`) en producción, manteniendo `/` en desarrollo local.
- **URL Oficial en Producción**:  
  👉 **[https://jorale0505.github.io/angela-ramirez-web/](https://jorale0505.github.io/angela-ramirez-web/)**

