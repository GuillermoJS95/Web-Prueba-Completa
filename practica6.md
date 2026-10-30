# Práctica 6 – Multimedia y página responsive

## 1. Formatos de audio y vídeo

### Audio

| Formato | Compresión | Calidad | Soporte web |
|---|---|---|---|
| WAV | Sin compresión | Máxima (sin pérdida), archivos muy pesados | Total |
| FLAC | Con compresión sin pérdida | Muy alta, ~50-60 % del WAV | Buena |
| MP3 | Con pérdida | Buena a 128-192 kbps | Total |
| AAC (M4A) | Con pérdida | Mejor que MP3 al mismo bitrate | Total |
| OGG (Vorbis/Opus) | Con pérdida | Muy buena, Opus excelente a bitrates bajos | Muy buena (Safari reciente) |

### Vídeo

| Formato / códec | Compresión | Calidad | Soporte web |
|---|---|---|---|
| MP4 (H.264) | Alta, con pérdida | Buena | Total (todos los navegadores) |
| MP4 (H.265/HEVC) | Muy alta | Muy buena | Limitado (licencias) |
| WebM (VP9) | Muy alta | Muy buena | Chrome, Firefox, Edge, Safari reciente |
| WebM/MP4 (AV1) | La más alta | Excelente | Creciente, codificación lenta |
| OGV (Theora) | Media | Aceptable | Obsoleto |

### Elección para esta web

- **Audio: MP3 (o AAC)** por compatibilidad universal y buen equilibrio peso/calidad; para música ambiental en bucle un archivo de ~1-2 MB a 128 kbps basta. La música es «Heroic Loop» de Zane Little Music (CC0, OpenGameArt), recomprimida a MP3 de 128 kbps (de 2,6 MB a 1 MB). Se controla con un botón de altavoz en la barra de navegación.
- **Vídeo: MP4 (H.264) con WebM (VP9) como alternativa**, declarados con varios `<source>`: el navegador usa el primero que soporte. H.264 garantiza reproducción en cualquier dispositivo y VP9 reduce peso donde se soporte.

## 2. Audio y vídeo en la web

Ver `index.html`, sección «Mira y escucha»:

```html
<video controls preload="metadata" poster="img/hero.jpg">
  <source src="media/presentacion.webm" type="video/webm">
  <source src="media/presentacion.mp4" type="video/mp4">
</video>

<audio id="bg-music" loop preload="none">
  <source src="media/musica-ambiental.mp3" type="audio/mpeg">
</audio>
```

El vídeo (19 s, 1280×720) está generado con un script de Python a partir de las imágenes de la propia web, y exportado a MP4 (H.264, 0,75 MB) y WebM (VP9, 0,86 MB).

## 3. Diseño responsive (`styles.css`)

Ejemplo 1 – Rejillas de juegos: 4 columnas → 2 en tablet → 1 en móvil.

```css
@media (max-width: 900px) {
  .genre-grid, .game-grid, .shop-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .genre-grid, .game-grid, .shop-grid { grid-template-columns: 1fr; }
}
```

Ejemplo 2 – Tienda: el filtro lateral pasa encima del listado.

```css
@media (max-width: 900px) {
  .shop-layout { grid-template-columns: 1fr; }
}
```

Ejemplo 3 – Navegación: se reorganiza en varias líneas y se oculta el botón secundario en móvil.

```css
@media (max-width: 600px) {
  .nav-links { width: 100%; justify-content: center; flex-wrap: wrap; }
  .btn-nav { display: none; }
}
```

Capturas: usar las herramientas de desarrollo del navegador (F12 → modo dispositivo) a 1200 px, 768 px y 375 px.

## 4. Mejoras desde la 1.ª entrega

Versión anterior: `git checkout 460aca9` (o `63f69f1` para la primera).

| Antes | Después |
|---|---|
| Sin contenido multimedia | Vídeo de presentación y música ambiental |
| Diseño de ancho fijo (rejillas de 3-4 columnas siempre) | Adaptable a tablet y móvil con media queries |
| Navegación fija en una línea | Navegación que se reorganiza en pantallas pequeñas |
| Footer, favicon y licencia CC (añadidos en la 2.ª versión) | Se mantienen |

Para mostrar el antes/después: capturas de la web en `460aca9` frente a la actual, a 375 px de ancho.
