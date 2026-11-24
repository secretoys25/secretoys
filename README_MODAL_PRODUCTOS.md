# Secretoys — Vista previa de productos

Se añadió un modal reutilizable de vista previa para todos los productos del catálogo.

## Cómo funciona
- Haz clic en la imagen o en el botón **Vista previa** para abrir el modal.
- El modal muestra imagen, categoría, nombre, descripción y precio del producto seleccionado.
- El botón **Agregar a mi bolsa** agrega ese producto al carrito existente.
- Se cierra con el botón X, al hacer clic fuera del modal o con la tecla ESC.

## Cómo agregar un producto
Edita el arreglo `PRODUCTS` en `js/app.js` y agrega un objeto con esta estructura:

```js
{
  id: 37,
  name: "Nombre del producto",
  category: "Juguetes",
  price: 45000,
  description: "Descripción y características del producto.",
  image: "assets/nombre-imagen.jpg"
}
```
Usa un `id` nuevo y único, el precio como número sin puntos ni símbolo, y la ruta de la imagen que exista en `assets/`. El modal se reutiliza automáticamente.
