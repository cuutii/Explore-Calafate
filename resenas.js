/* ============================================================
   RESEÑAS DE EXPLORE CALAFATE — archivo de datos
   ============================================================
   Este es el ÚNICO archivo que tenés que tocar para agregar
   una reseña. No hace falta saber programar: copiás el modelo
   de abajo, pegás un bloque nuevo DESPUÉS del último que ya
   esté, y cambiás los textos.

   ⚠️ REGLA DE ORO: solo agregá reseñas REALES, de personas
   que de verdad fueron. Toda la gracia del sitio es que sean
   verídicas. Si no estás seguro de un dato, no lo pongas.

   ------------------------------------------------------------
   CÓMO AGREGAR UNA RESEÑA — 3 pasos
   ------------------------------------------------------------
   1. Copiá el modelo que está más abajo (el que empieza con
      "nombre:").
   2. Pegálo DENTRO de los corchetes [ ... ], después de la
      última llave cerrada "}," que ya exista.
   3. Cambiá los textos entre comillas. LISTO.

   📌 Si es la PRIMERA reseña de la página, borrá la línea
      que dice "const RESENAS = [];" y pegá tu bloque ahí,
      empezando con "const RESENAS = [".
   ============================================================ */


/* ============================================================
   ACÁ VAN LAS RESEÑAS
   ------------------------------------------------------------
   Cada reseña tiene 7 campos. Esto es lo que significa cada uno:

   nombre     → nombre de la persona (o cómo quiera firmar)
   pais       → de dónde es. IMPORTANTE: sirve para que otros
                turistas de su mismo país filtren y la encuentren.
   idioma     → idioma en que escribió la reseña. Usá una de
                estas tres claves exactas:
                    "es"  → español
                    "en"  → inglés
                    "pt"  → portugués
   lugar      → de qué lugar es la reseña (aparece como título)
   puntuacion → del 1 al 5 (5 es lo mejor)
   fecha      → fecha en que estuvo, con este formato: "AAAA-MM-DD"
                por ejemplo "2026-01-20"
   texto      → la reseña en sí. Acá va TODO el texto entre
                comillas. Si necesitás saltar de línea dentro
                del texto, usá \n

   ⚠️ OJO con las comillas: si el texto contiene " (comilla
      normal), rompe el archivo. Usá « » o " " (comillas
      tipográficas) en ese caso.
   ============================================================ */

const RESENAS = [

  /* -------------------------------------------------------
     MODELO — copiá este bloque entero para crear una reseña.
     (Borralo antes de publicar, es solo una guía.)
     -------------------------------------------------------
  {
    nombre: "Nombre y Apellido",
    pais: "Estados Unidos",
    idioma: "en",
    lugar: "Glaciar Perito Moreno",
    puntuacion: 5,
    fecha: "2026-01-20",
    texto: "Pegá acá el texto de la reseña. Contá qué te gustó, qué no, cuánto tiempo te tomó y qué le recomendarías a alguien de tu país."
  },
  ------------------------------------------------------- */

];


/* ============================================================
   ============================================================
   NO TOCAR NADA DE ACÁ PARA ABAJO
   ============================================================
   Estas líneas son las que leen las reseñas y las dibujan en
   la página. Si las cambiás, se puede romper la lista.
   ============================================================
   ============================================================ */

(function () {
  "use strict";

  /* Traducciones: así se ven los mismos textos en los 3 idiomas.
     ATENCIÓN: los NOMBRES de las claves son siempre los mismos
     (en inglés, a modo de "identificador interno"). Lo que cambia
     es únicamente el TEXTO de cada una. Si se mezclan los nombres,
     el programa no encuentra la clave y se rompe. */
  const TXT = {
    es: {
      title: "Reseñas de turistas",
      sub: "Experiencias reales de quienes ya visitaron El Calafate.",
      total: n => n + (n === 1 ? " reseña" : " reseñas"),
      filterCountry: "Filtrar por país",
      filterLanguage: "Filtrar por idioma",
      all: "Todos",
      empty: "Todavía no hay reseñas publicadas.",
      emptySub: "Si visitaste El Calafate, sé la primera persona en contar tu experiencia.",
      leave: "Dejar mi reseña",
      stars: n => n + " de 5 estrellas",
      by: "por",
      from: "de",
      clear: "Limpiar filtros",
      found: n => n + (n === 1 ? " reseña encontrada" : " reseñas encontradas")
    },
    en: {
      title: "Traveller reviews",
      sub: "Real experiences from people who already visited El Calafate.",
      total: n => n + (n === 1 ? " review" : " reviews"),
      filterCountry: "Filter by country",
      filterLanguage: "Filter by language",
      all: "All",
      empty: "No reviews published yet.",
      emptySub: "If you visited El Calafate, be the first to share your experience.",
      leave: "Leave my review",
      stars: n => n + " out of 5 stars",
      by: "by",
      from: "from",
      clear: "Clear filters",
      found: n => n + (n === 1 ? " review found" : " reviews found")
    },
    pt: {
      title: "Avaliações de turistas",
      sub: "Experiências reais de quem já visitou El Calafate.",
      total: n => n + (n === 1 ? " avaliação" : " avaliações"),
      filterCountry: "Filtrar por país",
      filterLanguage: "Filtrar por idioma",
      all: "Todos",
      empty: "Ainda não há avaliações publicadas.",
      emptySub: "Se você visitou El Calafate, seja a primeira pessoa a contar sua experiência.",
      leave: "Deixar minha avaliação",
      stars: n => n + " de 5 estrelas",
      by: "por",
      from: "de",
      clear: "Limpar filtros",
      found: n => n + (n === 1 ? " avaliação encontrada" : " avaliações encontradas")
    }
  };

  /* Mapa de banderas por país — para que se vea de un vistazo
     de dónde es cada turista. Si falta un país, no pasa nada:
     simplemente no se dibuja bandera. */
  const BANDERAS = {
    "argentina": "🇦🇷", "uruguay": "🇺🇾", "chile": "🇨🇱", "brasil": "🇧🇷",
    "paraguay": "🇵🇾", "bolivia": "🇧🇴", "perú": "🇵🇪", "peru": "🇵🇪",
    "colombia": "🇨🇴", "méxico": "🇲🇽", "mexico": "🇲🇽", "venezuela": "🇻🇪",
    "ecuador": "🇪🇨", "cuba": "🇨🇺", "españa": "🇪🇸", "spain": "🇪🇸",
    "estados unidos": "🇺🇸", "united states": "🇺🇸", "usa": "🇺🇸",
    "canadá": "🇨🇦", "canada": "🇨🇦", "reino unido": "🇬🇧", "united kingdom": "🇬🇧",
    "alemania": "🇩🇪", "germany": "🇩🇪", "francia": "🇫🇷", "france": "🇫🇷",
    "italia": "🇮🇹", "italy": "🇮🇹", "portugal": "🇵🇹", "países bajos": "🇳🇱",
    "netherlands": "🇳🇱", "suecia": "🇸🇪", "sweden": "🇸🇪", "noruega": "🇳🇴",
    "dinamarca": "🇩🇰", "suiza": "🇨🇭", "austria": "🇦🇹", "bélgica": "🇧🇪",
    "israel": "🇮🇱", "japón": "🇯🇵", "japan": "🇯🇵", "corea del sur": "🇰🇷",
    "china": "🇨🇳", "australia": "🇦🇺", "nueva zelanda": "🇳🇿",
    "nueva zelanda": "🇳🇿", "sudáfrica": "🇿🇦", "india": "🇮🇳",
    "polonia": "🇵🇱", "rusia": "🇷🇺", "hungría": "🇭🇺", "república checa": "🇨🇿"
  };

  const NOMBRES_IDIOMA = { es: "Español", en: "English", pt: "Português" };

  /* Pone la primera letra en mayúscula sin romper nada */
  const mayus = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : "";

  function bandera(pais) {
    if (!pais) return "";
    const clave = pais.toString().trim().toLowerCase();
    return BANDERAS[clave] || "";
  }

  function estrellas(n, idiomaUI) {
    const total = Math.max(0, Math.min(5, Number(n) || 0));
    const llenas = "★".repeat(total);
    const vacias = "☆".repeat(5 - total);
    const t = TXT[idiomaUI] || TXT.es;
    return '<span class="estrellas" role="img" aria-label="' + t.stars(total) + '">' +
           llenas + vacias + "</span>";
  }

  /* Arma el HTML de UNA reseña */
  function tarjeta(r, idiomaUI) {
    const t = TXT[idiomaUI] || TXT.es;
    const art = document.createElement("article");
    art.className = "resena";

    const encabezado = document.createElement("div");
    encabezado.className = "resena-cab";

    const izq = document.createElement("div");
    izq.innerHTML =
      '<h3 class="resena-lugar"></h3>' +
      '<p class="resena-meta"></p>';
    izq.querySelector(".resena-lugar").textContent = r.lugar || "El Calafate";
    izq.querySelector(".resena-meta").textContent =
      t.by + " " + (r.nombre || "Anónimo") + " · " + bandera(r.pais) + " " + (r.pais || "");

    const der = document.createElement("div");
    der.innerHTML = estrellas(r.puntuacion, idiomaUI) +
      (r.fecha ? '<p class="resena-fecha"></p>' : "");
    if (r.fecha) {
      der.querySelector(".resena-fecha").textContent = r.fecha;
    }

    encabezado.appendChild(izq);
    encabezado.appendChild(der);

    const cuerpo = document.createElement("p");
    cuerpo.className = "resena-texto";
    cuerpo.textContent = r.texto || "";

    const pie = document.createElement("p");
    pie.className = "resena-idioma";
    pie.textContent = NOMBRES_IDIOMA[r.idioma] || "";

    art.appendChild(encabezado);
    art.appendChild(cuerpo);
    art.appendChild(pie);
    return art;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const cont = document.getElementById("lista-resenas");
    const selPais = document.getElementById("filtro-pais");
    const selIdioma = document.getElementById("filtro-idioma");
    const cajaTotal = document.getElementById("resenas-total");
    const cajaVacio = document.getElementById("resenas-vacio");
    const btnLimpiar = document.getElementById("limpiar-filtros");

    /* Si el contenedor no existe en esta página, no hacemos nada */
    if (!cont) return;

    const datos = Array.isArray(RESENAS) ? RESENAS.slice() : [];

    /* Orden: primero las más recientes */
    datos.sort((a, b) => (b.fecha || "").localeCompare(a.fecha || ""));

    /* Armamos las opciones de los filtros a partir de lo que
       realmente hay cargado, así nunca aparece un país vacío.
       OJO: el "value" de cada opción debe ser el dato CRUDO
       (el idioma como "es", el país como "Argentina"), porque
       es con lo que después se filtra. El texto visible sí puede
       llevar bandera o nombre bonito. */
    function cargarPaises() {
      if (!selPais) return;
      selPais.innerHTML = "";
      const todos = document.createElement("option");
      todos.value = "";
      todos.textContent = "Todos los países";
      selPais.appendChild(todos);

      Array.from(new Set(datos.map(r => r.pais).filter(Boolean)))
        .sort((a, b) => a.localeCompare(b, "es"))
        .forEach(p => {
          const o = document.createElement("option");
          o.value = p;                                        // crudo
          o.textContent = (bandera(p) + " " + p).trim();      // visible
          selPais.appendChild(o);
        });
    }

    function cargarIdiomas() {
      if (!selIdioma) return;
      selIdioma.innerHTML = "";
      const todos = document.createElement("option");
      todos.value = "";
      todos.textContent = "Todos los idiomas";
      selIdioma.appendChild(todos);

      Array.from(new Set(datos.map(r => r.idioma).filter(Boolean))).sort().forEach(k => {
        const o = document.createElement("option");
        o.value = k;                                          // crudo: "es", "en", "pt"
        o.textContent = NOMBRES_IDIOMA[k] || k;               // visible: "Español"...
        selIdioma.appendChild(o);
      });
    }

    function pintar() {
      const paisSel = selPais ? selPais.value : "";
      const idiomSel = selIdioma ? selIdioma.value : "";

      const filtradas = datos.filter(r =>
        (!paisSel || (r.pais || "").toLowerCase() === paisSel.toLowerCase()) &&
        (!idiomSel || (r.idioma || "").toLowerCase() === idiomSel.toLowerCase())
      );

      cont.innerHTML = "";
      filtradas.forEach(r => cont.appendChild(tarjeta(r, document.documentElement.lang || "es")));

      if (cajaTotal) {
        cajaTotal.textContent = filtradas.length === datos.length
          ? TXT.es.total(datos.length)
          : TXT.es.found(filtradas.length);
      }
      /* El mensaje de "no hay reseñas" solo aparece si de verdad
         no hay ninguna cargada (no cuando un filtro la vacía) */
      if (cajaVacio) {
        cajaVacio.hidden = datos.length > 0;
      }
    }

    if (datos.length > 0) {
      cargarPaises();
      cargarIdiomas();
    }

    if (selPais) selPais.addEventListener("change", pintar);
    if (selIdioma) selIdioma.addEventListener("change", pintar);
    if (btnLimpiar) btnLimpiar.addEventListener("click", function () {
      if (selPais) selPais.value = "";
      if (selIdioma) selIdioma.value = "";
      pintar();
    });

    pintar();
  });
})();
