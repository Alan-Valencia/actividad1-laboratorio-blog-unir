# ✈️ Viajes - Proyecto

Bienvenido al repositorio de mi Actividad 1 (Laboratorio Blog) para la UNIR. 

Para este ejercicio he decidido llevar la práctica base un paso más allá, transformando el blog de viajes estándar en una **plataforma web moderna, limpia y con calidad de agencia** utilizando un enfoque de diseño *Premium*.

---

## 🔗 Enlace al Proyecto (Live Demo)

Puedes visualizar la página web 100% funcional y desplegada en GitHub Pages a través del siguiente enlace:
👉 **[Ver Proyecto en Vivo](https://alan-valencia.github.io/actividad1-laboratorio-blog-unir/)**

---

## 🎯 Cumplimiento de la Rúbrica (Checklist)

El proyecto ha sido desarrollado cumpliendo estrictamente con todos los requisitos solicitados por el profesor, aplicados de forma semántica y moderna:

- [x] **Barra de navegación:** Implementada en el `<header>` de todas las páginas con efecto *Glassmorphism* (desenfoque de fondo).
- [x] **Tabla:** Incluida en las páginas de los destinos (`australia.html`, `italia.html`, `japon.html`) para mostrar presupuestos estimados de vuelos y hotel.
- [x] **Elemento externo incrustado:** Uso de `<iframe>` interactivos de Google Maps en cada página de destino apuntando a los monumentos principales.
- [x] **Formulario:** Desarrollados dos formularios. El principal de acceso en `index.html` y uno secundario de suscripción a *Newsletter* en `dashboard.html`.
- [x] **Elemento multimedia:** Imágenes en alta resolución integradas con técnicas de `object-fit` y efectos hover de zoom mediante CSS.
- [x] **Enlace con ruta vacía:** Implementados en los enlaces rápidos del Footer (`href="#"`) y en el formulario del Newsletter.
- [x] **Comentarios de código:** Se ha documentado el HTML, CSS y JS explicando la lógica y las decisiones de diseño simulando un entorno de trabajo real.
- [x] **Herramienta adicional / Evento (Valor extra):** - Control del evento `submit` en JavaScript para un login dinámico sin usar `alert()`.
  - Animaciones CSS personalizadas (efecto cascada `fade-in` al cargar la página y efecto `shake` para rechazo de contraseñas).
  - Uso avanzado de Flexbox y Grid (`Bento Grid` y `Testimonials Grid`).

---

## 🚀 Características Adicionales del Diseño (UI/UX)

* **Estilo "Magazine"**: Las tarjetas de los artículos se superponen a las imágenes de cabecera usando márgenes negativos (`margin-top: -80px`), técnica habitual en portales de noticias y viajes premium.
* **Microinteracciones**: Los botones tienen efecto de hundimiento al clickear (`:active`), las tarjetas flotan sutilmente al pasar el cursor y los inputs de texto muestran un anillo de enfoque (focus ring).
* **Social Proof**: El Dashboard incluye un componente de métricas rápidas y una cuadrícula de testimonios para dar veracidad a la plataforma.
* **Badges Informativos**: Etiquetas redondeadas en cada destino para lectura rápida de datos (clima, moneda, idioma).

---

## 📁 Estructura del Proyecto

```text
blog-viajes/
├── index.html           # Página principal/acceso (Login UI y validación JS)
├── dashboard.html       # Landing page (Hero, Stats, Destinos, Testimonios y Newsletter)
├── australia.html       # Artículo completo (Itinerario, Tabla de Precios, Mapa)
├── italia.html          # Artículo completo (Itinerario, Tabla de Precios, Mapa)
├── japon.html           # Artículo completo (Itinerario, Tabla de Precios, Mapa)
├── assets/
│   ├── css/
│   │   └── style.css    # Variables globales, animaciones y diseño responsivo
│   ├── js/
│   │   └── login.js     # Lógica de manipulación del DOM y credenciales
│   └── img/
│       ├── australia.jpg
│       ├── italia.jpg
│       ├── japon.jpg
│       └── header.jpg
