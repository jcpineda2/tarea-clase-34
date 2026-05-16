# Proyecto Integrador

Aplicación web desarrollada con **React**, **Vite**, **Tailwind CSS** y **Zustand**. El proyecto consiste en una tienda simple con catálogo de productos, carrito de compras y una estructura preparada para seguir agregando páginas y componentes.

La idea principal del proyecto es mantener una base clara, fácil de entender y escalable, separando las páginas, los componentes reutilizables, el estado global y los datos del catálogo.

---

## Tecnologías utilizadas

- **React**: biblioteca principal para construir la interfaz.
- **Vite**: herramienta de desarrollo y empaquetado del proyecto.
- **Tailwind CSS**: framework de estilos utilitario.
- **Zustand**: manejo simple del estado global del carrito.
- **React Router DOM**: navegación entre páginas.
- **SweetAlert2**: alertas visuales para acciones del usuario.
- **ESLint**: análisis básico del código para mantener buenas prácticas.

---

## Funcionalidades principales

Actualmente el proyecto cuenta con:

- Página de inicio.
- Página de productos.
- Lectura de productos desde un archivo JSON local.
- Tarjetas de productos con imagen, título, precio y botón para agregar al carrito.
- Carrito global administrado con Zustand.
- Contador de productos agregados.
- Cálculo del total de la compra.
- Acción de pago con alerta visual usando SweetAlert2.
- Layout base con cabecera y pie de página.
- Configuración inicial de Tailwind CSS.

---

## Estructura del proyecto

```txt
proyecto-integrador/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── componentes/
│   │   ├── Boton.jsx
│   │   ├── Buscador.jsx
│   │   ├── Cabecera.jsx
│   │   ├── Canasta.jsx
│   │   ├── Menu.jsx
│   │   ├── Pie.jsx
│   │   └── Tarjeta.jsx
│   │
│   ├── contexto/
│   │   └── carrito.js
│   │
│   ├── datos/
│   │   └── productos.json
│   │
│   ├── ganchos/
│   │   └── useProductos.js
│   │
│   ├── layout/
│   │   └── Base.jsx
│   │
│   ├── paginas/
│   │   ├── Carrito.jsx
│   │   ├── Inicio.jsx
│   │   ├── Login.jsx
│   │   ├── Panel.jsx
│   │   └── Productos.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Instalación del proyecto

Clonar o descargar el proyecto y entrar a la carpeta principal:

```bash
cd proyecto-integrador
```

Instalar las dependencias:

```bash
npm install
```

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Luego abrir la URL que muestra Vite en la terminal. Normalmente es:

```txt
http://localhost:5173
```

---

## Scripts disponibles

### Ejecutar en modo desarrollo

```bash
npm run dev
```

Inicia el servidor local de Vite.

### Generar versión de producción

```bash
npm run build
```

Compila el proyecto para producción.

### Revisar el código con ESLint

```bash
npm run lint
```

Ejecuta las reglas configuradas de ESLint.

### Previsualizar la versión compilada

```bash
npm run preview
```

Sirve localmente el resultado generado por `npm run build`.

---

## Rutas del sistema

El proyecto utiliza `react-router-dom` para manejar las rutas.

| Ruta | Página |
| --- | --- |
| `/` | Inicio |
| `/inicio` | Inicio |
| `/home` | Inicio |
| `/productos` | Productos |

Las rutas no existentes muestran un mensaje básico de página no encontrada.

---

## Manejo del carrito

El carrito se administra desde:

```txt
src/contexto/carrito.js
```

El estado global contiene:

```js
cantidad: 0,
total: 0
```

Y expone dos acciones principales:

```js
inc(monto)
venderTodo()
```

### `inc(monto)`

Agrega un producto al carrito e incrementa el total según el precio recibido.

### `venderTodo()`

Limpia el carrito después de confirmar la compra.

---

## Componentes principales

### `Cabecera.jsx`

Muestra la información superior del sitio, incluyendo:

- total acumulado del carrito;
- cantidad de productos agregados;
- botón para pagar;
- alerta de confirmación de compra.

### `Tarjeta.jsx`

Representa un producto individual del catálogo. Recibe por propiedades:

```jsx
imagen
titulo
precio
```

Cada tarjeta permite agregar el producto al carrito.

### `Base.jsx`

Layout general del proyecto. Envuelve el contenido de cada página con:

- cabecera;
- contenido principal;
- pie de página.

### `Pie.jsx`

Componente destinado al pie de página del sitio.

### `Menu.jsx`

Componente reservado para la navegación principal.

---

## Datos de productos

Los productos se encuentran en:

```txt
src/datos/productos.json
```

Actualmente se consumen desde:

```txt
src/ganchos/useProductos.js
```

Este archivo contiene la función encargada de leer los productos y devolverlos a la página `Productos.jsx`.

---

## Estilos

Los estilos globales se cargan desde:

```txt
src/index.css
```

Tailwind CSS se importa mediante:

```css
@import "tailwindcss";
```

La configuración relacionada con Vite y Tailwind se encuentra en:

```txt
vite.config.js
tailwind.config.js
```

---

## Estado actual del desarrollo

El proyecto tiene una base funcional, pero todavía hay componentes que pueden completarse o mejorarse progresivamente.

Componentes pendientes o en desarrollo:

- `Boton.jsx`
- `Buscador.jsx`
- `Canasta.jsx`
- `Carrito.jsx`
- `Login.jsx`
- `Panel.jsx`

Mejoras recomendadas para próximas etapas:

- mejorar visualmente la página de productos;
- agregar búsqueda de productos;
- crear una página de carrito más completa;
- mejorar el menú de navegación;
- reemplazar enlaces HTML simples por enlaces de React Router cuando corresponda;
- limpiar textos del JSON que contienen entidades HTML;
- mejorar el formato de precios en guaraníes;
- agregar una pantalla amigable para rutas no encontradas;
- separar utilidades comunes en una carpeta propia.

---

## Recomendaciones de desarrollo

Para mantener el proyecto ordenado, se recomienda:

1. Crear componentes pequeños y reutilizables.
2. No mezclar lógica de negocio directamente con estilos extensos.
3. Mantener las páginas dentro de `src/paginas`.
4. Mantener componentes compartidos dentro de `src/componentes`.
5. Centralizar estados globales dentro de `src/contexto`.
6. Evitar rutas absolutas ligadas a `localhost` cuando sea posible.
7. Probar cada cambio por partes antes de continuar con la siguiente mejora.

---

## Problemas conocidos

### Dependencias dentro del ZIP

Si el proyecto fue compartido comprimido junto con `node_modules`, puede aparecer algún error al ejecutar Vite. En ese caso, se recomienda eliminar la carpeta `node_modules` e instalar nuevamente:

```bash
rm -rf node_modules
npm install
npm run dev
```

En Windows, se puede eliminar la carpeta `node_modules` manualmente y luego ejecutar:

```bash
npm install
npm run dev
```

---

## Autor

Proyecto integrador desarrollado como práctica de aplicación web con React, Vite, Tailwind CSS y manejo de estado global.