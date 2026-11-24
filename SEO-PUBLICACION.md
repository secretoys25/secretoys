# SEO de Secretoys — configuración implementada

## Cambios realizados
- Título y descripción SEO orientados a tienda online de bienestar íntimo en Medellín y Valle de Aburrá.
- Directivas de indexación para rastreadores compatibles.
- Open Graph en español de Colombia para compartir la página.
- Datos estructurados Schema.org `OnlineStore`, sin dirección física inventada.
- Teléfono de atención en formato internacional: +57 322 815 6224.
- Texto introductorio ajustado para describir la cobertura de envíos.
- `robots.txt` que permite el rastreo.

## Pendiente antes de publicar
1. Definir el dominio definitivo. No se añadió `canonical`, `og:url`, imagen social absoluta ni sitemap porque el dominio sigue pendiente.
2. Una vez exista el dominio, crear `sitemap.xml` con las URLs públicas reales y añadir su URL al `robots.txt`.
3. Verificar el dominio en Google Search Console y Bing Webmaster Tools.
4. Comprobar que la cobertura de envíos a Valle de Aburrá coincide con la operación real.
5. Validar los datos estructurados con Schema Markup Validator y Rich Results Test.

## Alcance de esta versión
La web sigue siendo una página de catálogo con modales; no se crearon URLs individuales indexables para cada producto. Para que Google pueda indexar cada producto por separado, hará falta una página o ruta pública propia por producto con contenido visible y datos estructurados `Product`/`Offer`.

No se añadió una dirección, coordenadas, horarios, reseñas ni sucursal porque la tienda fue indicada como exclusivamente online.
