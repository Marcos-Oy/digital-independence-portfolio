# Idiomas del sitio

## Flujo
1. `LanguageProvider` lee `motiarzo-language`. La selección manual siempre prevalece.
2. Sin selección guardada consulta `/cdn-cgi/trace` en el dominio actual (Cloudflare). Si no hay país, consulta `api.country.is`; no guarda la IP ni pide GPS. Una VPN puede alterar el país detectado.
3. El mapa de países selecciona uno de los 12 idiomas disponibles. Países multilingües o no incluidos usan `navigator.languages`; última alternativa: español.
4. `LanguageSelector` muestra banderas representativas, nombre nativo y nombre en el idioma actual. `Intl.DisplayNames` permite buscar los nombres en múltiples idiomas; normaliza acentos.
5. El proveedor conserva los nodos originales en español, traduce lotes secuenciales y aplica resultados a texto, placeholders, títulos y etiquetas accesibles. Observa contenido nuevo y restaura los originales al elegir español.
6. `site-translate` valida idioma/tamaño, consulta caché protegida y traduce únicamente faltantes mediante Lovable AI. No requiere nuevas variables frontend además de las existentes de Lovable Cloud.

## Seguridad y límites
- Claves privadas solo en la función. El endpoint es público porque el sitio no requiere registro; nunca permite elegir modelo o instrucciones.
- Máximo 60 fragmentos / 16.000 caracteres por lote. Las traducciones nuevas consumen uso de Lovable AI; las almacenadas no vuelven a llamar a IA.
- No traducir ni enviar valores de formularios, mensajes de visitantes o conversaciones privadas. Marcar esos contenedores con `data-no-translate`; también el selector y animaciones parciales.
- La función usa el SDK Responses, salida JSON estricta y cero reintentos automáticos. Los fallos 402/403 se guardan en `site_translation_control` y detienen llamadas nuevas. Tras restaurar acceso, el propietario debe eliminar explícitamente la fila `id = 'gateway'` y volver a seleccionar idioma. Nunca borrar la pausa automáticamente.
- Caché y estado solo tienen permisos `service_role` y RLS. No exponer escrituras al navegador.

## Cobertura
Incluye sitio, servicios, landing, bienvenida y controles de diagnóstico. No cambia imágenes con texto, sitios externos de Systeme.io, contenido de conversaciones ni documentos descargables. No genera URLs indexables por idioma ni traducciones SEO del contenido del head.

## Pruebas
`bunx vitest run src/test/languages.test.ts` valida búsquedas, país, alternativas y prioridad manual. Verificar además selección, traducción, navegación y vuelta a español en navegador; comprobar celular, banderas y desplegable sin desbordamiento.