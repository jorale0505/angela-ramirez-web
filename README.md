# Angela Ramírez · Sitio Web Profesional

> **Contadora Pública · Especialista en Revisoría Fiscal y Auditoría Forense**  
> *Slogan:* **"Tu información, en buenas manos"**  
> *Sede:* Cali, Valle del Cauca, Colombia

Este repositorio contiene la plataforma web oficial de la firma de **Angela Ramírez**, diseñada bajo estándares editoriales de alto impacto y construida con **Astro** en modo de generación estática para máximo rendimiento (100 en Google Lighthouse), total seguridad y compatibilidad directa con **GitHub Pages**.

---

## 🎨 Identidad Visual y Manual de Marca

El sitio respeta rigurosamente los lineamientos cromáticos y visuales de la marca:

| Color | Hex | Significado Institucional |
| :--- | :--- | :--- |
| **Azul Ejecutivo** | `#163A5F` | Seguridad, Confianza y Autoridad |
| **Dorado Champagne** | `#B89B5E` | Prestigio, Calidad y Diferenciación |
| **Marfil Profesional**| `#F7F6F2` | Limpieza, Orden y Elegancia |
| **Azul Acero** | `#3F607A` | Profesionalismo y Estabilidad |
| **Azul Grisáceo** | `#71879A` | Equilibrio y Objetividad |
| **Gris Grafito** | `#252B31` | Exactitud y Seriedad |

---

## ✨ Características y Dinamismo

1. **Puntero Dinámico Sutil (Custom Cursor)**:
   - Punto central en Dorado Champagne con aro de arrastre suave en física amortiguada (`requestAnimationFrame` + LERP).
   - Reacción magnética y expansión al interactuar con botones, tarjetas y selectores.
   - Desactivación limpia y automática en pantallas táctiles (`@media (pointer: coarse)`) y respeto a preferencias de accesibilidad (`prefers-reduced-motion`).

2. **Calculadora Interactiva de Revisoría Fiscal en Colombia**:
   - Evalúa en tiempo real si una sociedad comercial en Colombia está obligada a nombrar Revisor Fiscal conforme a la **Ley 43 de 1990 (Art. 13 Parágrafo 2)** y el **Código de Comercio (Art. 203)**, contrastando ingresos y activos brutos contra los topes de **3.000 SMMLV** y **5.000 SMMLV**.

3. **Sección Enriquecida de Servicios Especializados**:
   - Revisoría Fiscal Integral (NIAS, control interno, dictamen).
   - Auditoría Forense & Prevención de Fraude (SAGRILAFT / PTEE).
   - Peritaje Contable Judicial (Ley 1564 de 2012 CGP, daño emergente, lucro cesante).
   - Planeación Tributaria & Cumplimiento DIAN / Cali (ICA).
   - Outsourcing Contable & Estados Financieros NIIF.

4. **Metodología Forense y Cadena de Custodia**:
   - 5 fases que aseguran la inmutabilidad y admisibilidad de la prueba financiera ante jueces y tribunales de arbitramento.

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

## 🌐 Publicación en GitHub Pages

El proyecto incluye un flujo de trabajo automatizado en `.github/workflows/deploy.yml`.

### Opción 1: Repositorio dedicado en GitHub (Recomendado)
1. Iniciar un repositorio Git dentro de esta carpeta:
   ```bash
   cd angela-ramirez-web
   git init
   git add .
   git commit -m "Initial commit: Sitio Web Profesional Angela Ramirez"
   ```
2. Crear un nuevo repositorio en tu cuenta de GitHub (ejemplo: `angela-ramirez` o `angela-ramirez-web`).
3. Vincular y subir:
   ```bash
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```
4. En GitHub, ve a **Settings** > **Pages**:
   - En **Build and deployment** > **Source**, selecciona **GitHub Actions**.
   - ¡Listo! El workflow desplegará el sitio automáticamente en `https://TU_USUARIO.github.io/TU_REPOSITORIO/`.

### Configuración de sub-ruta (Base Path):
Si tu repositorio se llama por ejemplo `angela-ramirez-web`, puedes definir la variable de entorno en tu build:
```bash
BASE_PATH="/angela-ramirez-web/" npm run build
```
O configurar directamente `base: '/angela-ramirez-web/'` en `astro.config.mjs`. Si usas un dominio personalizado (ej. `angelaramirezcontadora.com`), deja `base: undefined` o `'/'`.
