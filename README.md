# Secretoys — Boutique íntima

Tienda virtual desarrollada con HTML, CSS y JavaScript puro. No requiere frameworks ni instalación.

## Cómo abrir
1. Descomprime el ZIP.
2. Abre la carpeta `Secretoys` en Visual Studio Code.
3. Abre `index.html` en el navegador (recomendado: extensión Live Server).

## Estructura
- `index.html`: estructura y contenido de la página.
- `css/styles.css`: colores, tipografía, diseño y adaptación móvil.
- `js/app.js`: catálogo, filtros, búsqueda, carrito y pedidos por WhatsApp.
- `assets/`: imágenes del catálogo original (páginas renderizadas).

## Editar productos
Abre `js/app.js` y busca el arreglo `PRODUCTS`. Cada producto tiene:
- `id`: identificador único.
- `name`: nombre visible.
- `category`: Juguetes, Cosméticos o Lencería.
- `price`: valor numérico en pesos colombianos.
- `description`: descripción corta.
- `image`: ruta de imagen dentro de `assets`.

Para cambiar el WhatsApp, edita `WHATSAPP_NUMBER` al inicio de `js/app.js` usando indicativo de país y número, sin espacios ni signos. Actualmente está configurado para Colombia: `573228156224`.

## Importante antes de publicar
- Verifica inventario, nombres, precios y tallas con la propietaria.
- Las fotos usadas en las tarjetas son páginas del catálogo original como referencias visuales; se pueden reemplazar por fotos individuales de cada producto.
- Revisa las condiciones de pago, cobertura de domicilio y política de garantía antes de publicar.
- La pantalla de mayoría de edad es una confirmación visual del lado del navegador, no un sistema de verificación de identidad.
