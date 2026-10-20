# 🧊 Explore Calafate

Guía turística independiente de **El Calafate** (Santa Cruz, Argentina), puerta de entrada al Parque Nacional Los Glaciares.

Reúne **qué hacer**, excursiones, gastronomía y consejos prácticos, y suma algo que las guías habituales no tienen: **reseñas reales de turistas**, filtrables por país e idioma.

## 🌐 Demo

🔗 **https://cuutii.github.io/Explore-Calafate/**

## ✨ Qué ofrece

### Qué hacer
Seis tarjetas con las opciones principales, agrupadas por zona:
- **Glaciar Perito Moreno** — pasarelas, mini trekking sobre el hielo, navegación, Big Ice.
- **Glaciar Spegazzini** — navegación de día completo desde Puerto Bandera.
- **El Chaltén** — Laguna de los Tres y Laguna Torre, con distancias y dificultad.
- **El pueblo** — Avenida Libertador, museo, cambios y cajeros.
- **Gastronomía** — cordero patagónico, trucha, guiso y el fruto del calafate.
- **Antes de salir** — temporada, viento, nieve y qué llevar en el pack.

### Reseñas de turistas
- ✍️ Cualquier visitante puede dejar su reseña con nombre, país, idioma, lugar, puntuación y fecha.
- 🏳️ Cada reseña muestra la **bandera del país** del turista, para ver de un vistazo de dónde es.
- 🔎 **Filtro por país** y **filtro por idioma** (español, inglés, portugués) — así alguien de Estados Unidos puede encontrar al instante lo que escribieron otros estadounidenses.
- 📅 Ordenadas de más reciente a más antigua.
- ⭐ Puntuación del 1 al 5 con estrellas y etiqueta accesible para lectores de pantalla.

### Cómo se publican (importante)

Las reseñas **no se publican solas**. El flujo es:

1. El turista llena el formulario de la página.
2. La reseña llega al responsable del sitio por correo.
3. Se revisa a mano para confirmar que sea **real**.
4. Se pega en `resenas.js` y aparece en la página.

Esto es deliberado: es la única forma de que las reseñas sean **100% verídicas** y de evitar el spam y los bots. La desventaja es que pueden tardar unos días en mostrarse.

## 📁 Estructura

```
03-explore-calafate/
├── index.html            ← la página (abrí este archivo)
├── resenas.js            ← ⭐ ARCHIVO DE DATOS: acá cargás las reseñas
├── img/                  ← 5 fotos locales (ver créditos abajo)
├── servidor-prueba.ps1   ← servidor local para probarla en la compu
├── README.md             ← este archivo
└── INSTRUCCIONES.md      ← apuntes del dueño (local, no se publica)
```

## ➕ Cómo agregar una reseña

Solo tenés que tocar **`resenas.js`**. No hace falta saber programar.

1. Abrí `resenas.js` con el Bloc de notas.
2. Buscá el bloque que dice `const RESENAS = [`
3. Copiá el **MODELO** que está justo debajo (el bloque que empieza con `nombre:`).
4. Pegálo dentro de los corchetes, **después del último `},`** que ya exista.
5. Cambiá los textos entre comillas.
6. Guardá y subilo a GitHub.

### Los 7 campos

| Campo | Qué es | Ejemplo |
| --- | --- | --- |
| `nombre` | Cómo quiere firmar | `"María González"` |
| `pais` | De dónde es — alimenta el filtro y la bandera | `"Estados Unidos"` |
| `idioma` | Clave exacta: `"es"`, `"en"` o `"pt"` | `"en"` |
| `lugar` | De qué lugar es la reseña (sale de título) | `"Glaciar Perito Moreno"` |
| `puntuacion` | Del 1 al 5 | `5` |
| `fecha` | Formato `"AAAA-MM-DD"` | `"2026-01-20"` |
| `texto` | La reseña, entera | `"..."` |

### Tres errores comunes

- **Comillas dentro del texto.** Si el texto tiene `"` rompe el archivo. Usá `« »` o las comillas tipográficas `“ ”`.
- **Coma al final.** Cada reseña termina con `},` menos la última.
- **Idioma mal escrito.** El `idioma` tiene que ser exactamente `"es"`, `"en"` o `"pt"`, entre comillas.

## 🛠️ Cómo probarla en la computadora

```powershell
powershell -ExecutionPolicy Bypass -File servidor-prueba.ps1
```

Después abrí `http://localhost:8124`. (Con doble clic también se abre, pero sin las fotos ni las reseñas.)

## ⚙️ Antes de publicar / configurar

- [ ] **Verificar el formulario de Formspree.** El endpoint actual (`formspree.io/f/xyzdknkw`) debe reemplazarse por el que genere Formspree al crear la cuenta, o el formulario no envía nada.
- [ ] Cargar las primeras reseñas en `resenas.js` (arranca vacío a propósito: no se inventan reseñas).
- [ ] Si se cambia el nombre del sitio, actualizar las URLs en las etiquetas `og:url` y `_next`.

## 📸 Créditos de imágenes

Las 5 fotos están **guardadas localmente en `img/`** y vienen de [Wikimedia Commons](https://commons.wikimedia.org/):

- **Glaciar Perito Moreno** — © [Fernando](https://commons.wikimedia.org/wiki/User:Fernando) ([archivo original](https://commons.wikimedia.org/wiki/File:Perito_Moreno_Glacier_2023.jpg)). Licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0).
- **Glaciar Spegazzini** — © [Fernando](https://commons.wikimedia.org/wiki/User:Fernando) ([archivo original](https://commons.wikimedia.org/wiki/File:Spegazzini_Glacier_2023.jpg)). Licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0).
- **El Chaltén (sendero a la Laguna Torre)** — © [Los Paseos](https://commons.wikimedia.org/wiki/File:Always_Pointed_Up_(31669732336).jpg). Licencia [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0).
- **El Calafate (Avenida Libertador)** — © [flopisubmarina](https://commons.wikimedia.org/wiki/File:El_Calafate_Village.jpg). Licencia [CC BY 2.0](https://creativecommons.org/licenses/by/2.0).
- **Cordero patagónico** — © [Ccarosio](https://commons.wikimedia.org/wiki/User:Ccarosio) ([archivo original](https://commons.wikimedia.org/wiki/File:Cordero-patagonico.jpg)). Licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0).

Las licencias **CC BY-SA** exigen que cualquier obra derivada (recorte, reescalado) se publique bajo la misma licencia e incluya la atribución.

> **Nota:** la versión anterior de esta página cargaba las fotos desde Pinterest, Wallpapercave y Civitatis (imágenes de terceros, sin licencia). Se reemplazaron por estas, que son libres y están alojadas en el propio sitio.

## ✏️ Personalización

- **Qué hacer:** las tarjetas están en `index.html`, dentro de `<section id="que-hacer">`.
- **Estilos:** el CSS está al principio de `index.html`, en el bloque `<style>`.
- **Filtros y reseñas:** todo vive en `resenas.js`.

## ⚠️ Aclaraciones

- Las **distancias y dificultades** de los trekking son aproximadas y pueden variar con el clima.
- Los **precios y horarios** no están listados porque cambian cada temporada; consultá siempre con la operadora oficial.
- Para datos oficiales, visitá el sitio del [Parque Nacional Los Glaciares](https://www.argentina.gob.ar/ambiente/parquesnacionales/losglaciares).

## 📄 Licencia

MIT — libre para usar, modificar y compartir, respetando la atribución de las imágenes.
