# Idiomas del sitio: Google Translate

## Flujo paso a paso
1. `src/lib/languages.ts` contiene 25 idiomas. Cada idioma tiene una bandera real en `LanguageFlag`.
2. `LanguageProvider` lee la elección manual de `motiarzo-language`; como alternativa lee `googtrans`. La elección manual prevalece sobre país y navegador.
3. Sin elección consulta `/cdn-cgi/trace`, luego `api.country.is`, con límite de 3,5 segundos. No almacena IP ni pide GPS. País desconocido: idioma del navegador; última alternativa: español.
4. Antes de cargar Google escribe `googtrans=/es/<código>` en el dominio actual. Chino simplificado usa `zh-CN`.
5. El primer `LanguageSelector` monta UN contenedor global y carga `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`.
6. La función global inicializa `TranslateElement({ pageLanguage: "es", includedLanguages: ..., autoDisplay: false })`. Google realiza la traducción en el navegador según la cookie. Su control y atribución permanecen al final del documento; no ocultar atribución ni barra de Google.
7. Elegir otro idioma guarda preferencia y cookie, limpia cookies de dominio previas y recarga la misma URL (incluye ruta y ancla). Elegir español escribe `/es/es` y recarga originales. Esto evita intentar restaurar manualmente los nodos que Google modifica.
8. `Intl.DisplayNames` crea nombres de búsqueda en los 25 idiomas. Ejemplos: inglés/English → en; 德语/allemand → de. La búsqueda ignora acentos.

## Seguridad y límites
- No requiere conexión Google Cloud, API key ni variables nuevas en Cloudflare. No usa Lovable AI ni llama a `site-translate`.
- El script público depende de disponibilidad, políticas de Google, conexión y bloqueadores; no tiene garantía de traducción completa. Si Google falla, el sitio sigue disponible y el selector muestra un error.
- Google recibe el contenido traducible y solicitudes del navegador. No traducir conversaciones ni entradas personales: usar `data-no-translate`, convertido por el proveedor a `notranslate` y `translate="no"`. Nuevos contenedores privados deben incluir esas marcas directamente antes de mostrar contenido.
- No ocultar la atribución de Google. El cambio recarga la página: una conversación o formulario sin guardar puede perderse.
- Las animaciones TypewriterText muestran texto completo y estable fuera de español para que Google pueda traducirlo.
- Las funciones/tablas antiguas de traducción quedan sin uso por el navegador, pero no se eliminan. Mantener su protección service-role y pausas existentes hasta retirarlas explícitamente.
- No traduce imágenes con texto, archivos descargables ni páginas externas de Systeme.io. No genera páginas SEO independientes por idioma. Google puede omitir contenido dinámico y atributos accesibles; revisar cada flujo.

## Cambios futuros
1. Añadir idioma en LANGUAGES y mapa de países.
2. Descargar bandera a /tmp y crear puntero con lovable-assets; importarla en LanguageFlag.
3. Añadir prueba concreta de búsqueda, país o cookie.
4. Ejecutar `bunx vitest run src/test/languages.test.ts`.
5. Verificar en navegador selección, recarga, cookie, traducción visible, vuelta a español, navegación y celular. No confundir un script cargado con una traducción verificada.
