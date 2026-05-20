// --- Autoplay Carrusel con función temporizador ---
let autoplay = false;
let temporizadorId = null;

function temporizador(callback, intervalo) {
    return setInterval(callback, intervalo);
}

function detenerTemporizador(id) {
    clearInterval(id);
}

function setAutoplayState(isPlaying) {
    autoplay = isPlaying;
    const playShape = document.getElementById('playShape');
    const nextBtn = document.getElementById('nextBtn');
    if (autoplay) {
        // Cambia a icono de pausa
        playShape.setAttribute('points', '12,10 20,10 20,22 12,22');
        temporizadorId = temporizador(() => {
            nextBtn.click();
        }, 3000); // Cambia cada 3 segundos
    } else {
        // Cambia a icono de play
        playShape.setAttribute('points', '13,10 25,16 13,22');
        detenerTemporizador(temporizadorId);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const autoplayBtn = document.getElementById('autoplayBtn');
    if (autoplayBtn) {
        autoplayBtn.addEventListener('click', () => {
            setAutoplayState(!autoplay);
        });
    }
    // AUTOPLAY MÓVIL
    const autoplayBtnMobile = document.getElementById('autoplayBtnMobileHeader');
    if (autoplayBtnMobile) {
        autoplayBtnMobile.addEventListener('click', () => {
            setAutoplayState(!autoplay);
        });
    }
});
// Datos de las imágenes con títulos, descripciones y características
const images = [
    {
        file: "./img/despegando (2).png",
        title: "Despegando de Barcelona",
        description: "Inicio del viaje hacia Londres",
        caracteristicas: ["Primer día", "Barcelona-Londres", "Duración del vuelo: 2h 30m", "Londres: Capital de Reino Unido"]
    },
    {
        file: "./img/londres (2).png",
        title: "Vista de Londres desde una mochila",
        description: "Una perspectiva única de la ciudad",
        caracteristicas: ["Minomi aventurero", "Viajero", "Curioso", "Explorador urbano"]
    },
    {
        file: "./img/catedral.png",
        title: "Catedral de Westminster",
        description: "Uno de los monumentos más icónicos de Londres",
        caracteristicas: [
            "Construida entre 1895 y 1903",
            "Sede principal de la Iglesia católica en Inglaterra",
            "Arquitectura neobizantina",
            "Importante lugar religioso y turístico de Londres"]
    },

    {
        file: "./img/bigben.png",
        title: "El Big Ben de Londres",
        description: "La famosa torre del reloj",
        caracteristicas: [
            "Inaugurado en 1859",
            "Torre más famosa de Londres",
            "Símbolo histórico del Reino Unido",
            "Ubicado junto al Parlamento británico"]
    },
    {
        file: "./img/phone.png",
        title: "Cabina de teléfono londinense",
        description: "Las tradicionales cabinas rojas de Londres",
        caracteristicas: [
            "Minomi en Londres",
            "Cabina roja icónica",
            "Turismo británico",
            "Foto típica londinense"]
    },
    {
        file: "./img/halminton.png",
        title: "Musical Hamilton - Acto I",
        description: "Experiencia teatral en el West End",
        caracteristicas: [
            "Minomi y Yolanda en el West End",
            "Musical Hamilton",
            "Noche de teatro en Londres",
            "Experiencia inolvidable"]
    },
    {
        file: "./img/hamilton2.png",
        title: "Musical Hamilton - Acto II",
        description: "Una noche de teatro memorable",
        caracteristicas: [
            "Victoria Palace Theatre",
            "Creado por Lin-Manuel Miranda",
            "Estrenado en Londres en 2017",
            "Musical sobre la vida de Alexander Hamilton",
            "Éxito mundial ganador de premios Tony y Olivier"
        ]
    },
    {
        file: "./img/witches.png",
        title: "Musical Wicked",
        description: "La historia de las brujas del Mago de Oz",
        caracteristicas: [
            "Apollo Victoria Theatre",
            "Musical creado por Stephen Schwartz",
            "Estrenado en Londres en 2006",
            "Historia no contada de las brujas de Oz",
            "Uno de los musicales más exitosos del mundo"]
    },
    {
        file: "./img/nottinghillb.png",
        title: "Librería Notting Hill",
        description: "La famosa librería de la película Notting Hill",
        caracteristicas: [
            "The Notting Hill Bookshop",
            "Inspiró la película Notting Hill",
            "Barrio londinense de Notting Hill",
            "Lugar turístico muy visitado",
            "Escenario icónico del cine romántico"
        ]
    },
    {
        file: "./img/nottinghllinside.png",
        title: "Interior de Notting Hill",
        description: "Dentro de la icónica librería",
        caracteristicas: [
            "Interior acogedor y cinematográfico",
            "Librería especializada en viajes",
            "Ambiente clásico londinense",
            "Zona famosa por la película Notting Hill",
            "Experiencia cultural en Londres"
        ]
    },
    {
        file: "./img/nottinghillhouse.png",
        title: "Casa de la película Notting Hill",
        description: "Ubicación de rodaje principal",
        caracteristicas: [
            "Casa azul de la película Notting Hill",
            "Rodaje protagonizado por Julia Roberts",
            "Película estrenada en 1999",
            "Uno de los lugares más fotografiados",
            "Símbolo del cine romántico británico"
        ]
    },
    {
        file: "./img/portobello.png",
        title: "Paseando por Portobello",
        description: "Famoso mercado de antigüedades",
        caracteristicas: [
            "Portobello Road Market",
            "Mercado histórico de Londres",
            "Famoso por antigüedades y arte",
            "Ubicado en el barrio de Notting Hill",
            "Uno de los mercados más populares de Europa"
        ]
    },
    {
        file: "./img/relax.png",
        title: "Tomando té en el bar de Teatro Soho",
        description: "Un momento de relajación",
        caracteristicas: [
            "Barrio Soho de Londres",
            "Tradición británica del té",
            "Zona famosa por teatros y musicales",
            "Ambiente relajado y cultural",
            "Descanso después del recorrido turístico"
        ]
    },
    {
        file: "./img/puentelondres.png",
        title: "Mirando al puente de Londres",
        description: "Vistas del icónico Puente de la Torre",
        caracteristicas: [
            "Tower Bridge de Londres",
            "Inaugurado en 1894",
            "Uno de los puentes más famosos del mundo",
            "Símbolo arquitectónico británico",
            "Vistas panorámicas del río Támesis"
        ]
    },
    {
        file: "./img/visita.png",
        title: "Visita especial",
        description: "Un momento especial durante el viaje",
        caracteristicas: [
            "Encuentro inesperado",
            "Recuerdo inolvidable",
            "Nueva amistad",
            "Foto espontánea"
        ]
    },
    {
        file: "./img/adios.png",
        title: "Despedida de Londres",
        description: "Última foto antes de regresar",
        caracteristicas: [
            "Vista nocturna desde el avión",
            "Luces de Londres al anochecer",
            "Regreso después del viaje",
            "Últimos recuerdos de la ciudad",
            "Final de la aventura londinense"
        ]
    }
];

let currentIndex = 0;

// Elementos del DOM
const mainImage = document.getElementById("mainImage");
const imageTitle = document.getElementById("imageTitle");
const imageDesc = document.getElementById("imageDesc");
const currentIndexSpan = document.getElementById("currentIndex");
const totalImagesSpan = document.getElementById("totalImages");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const thumbnailsContainer = document.getElementById("thumbnails");
const sidebarList = document.getElementById("sidebarList");
const caracteristicasList = document.getElementById("caracteristicasList");

// Actualizar total de imágenes
totalImagesSpan.textContent = images.length;

/**
 * Actualiza la galería con la imagen actual
 */
function updateGallery() {
    const image = images[currentIndex];
    // Animación de transición (fade)
    mainImage.classList.add("opacity-0", "transition-all", "duration-500");
    setTimeout(() => {
        mainImage.src = image.file;
        mainImage.alt = image.title;
        imageTitle.textContent = image.title;
        imageDesc.textContent = image.description;
        currentIndexSpan.textContent = currentIndex + 1;
        // Mostrar caracteristicas
        if (caracteristicasList) {
            caracteristicasList.innerHTML = "";
            if (image.caracteristicas && Array.isArray(image.caracteristicas)) {
                image.caracteristicas.forEach(carac => {
                    const li = document.createElement("li");
                    li.textContent = carac;
                    caracteristicasList.appendChild(li);
                });
            }
        }
        // Quitar animación después de cambiar la imagen
        setTimeout(() => {
            mainImage.classList.remove("opacity-0");
        }, 50);
    }, 250);
    // Actualizar estado de botones
    updateButtonStates();
    // Actualizar thumbnails activos
    updateThumbnailStates();
}

/**
 * Actualiza el estado de los botones según la posición actual
 */
function updateButtonStates() {
    // Carrusel circular: los botones nunca se deshabilitan ni cambian de estilo
    prevBtn.disabled = false;
    nextBtn.disabled = false;
    prevBtn.classList.remove("opacity-50", "cursor-not-allowed");
    nextBtn.classList.remove("opacity-50", "cursor-not-allowed");
}

/**
 * Actualiza el estado visual de las miniaturas
 */
function updateThumbnailStates() {
    const thumbnails = document.querySelectorAll(".thumbnail-btn");
    thumbnails.forEach((btn, index) => {
        if (index === currentIndex) {
            btn.classList.add("ring-4", "ring-yellow-400", "scale-105", "opacity-100");
            btn.classList.remove("opacity-60");
        } else {
            btn.classList.remove("ring-4", "ring-yellow-400", "scale-105", "opacity-100");
            btn.classList.add("opacity-60");
        }
    });
}

/**
 * Genera las miniaturas de navegación
 */
function generateThumbnails() {
    thumbnailsContainer.innerHTML = "";
    images.forEach((image, index) => {
        const btn = document.createElement("button");
        btn.className = "thumbnail-btn relative w-full aspect-square rounded overflow-hidden transition-all duration-200 hover:opacity-100 hover:drop-shadow-2xl hover:ring-2 hover:ring-red-500 opacity-60 bg-gray-200 flex-shrink-0";
        btn.innerHTML = `
            <img src="${image.file}" alt="${image.title}" class="w-full h-full object-cover" loading="lazy">
        `;
        btn.addEventListener("click", () => {
            currentIndex = index;
            updateGallery();
            mainImage.scrollIntoView({ behavior: "smooth", block: "center" });
        });
        thumbnailsContainer.appendChild(btn);
    });
}

/**
 * Genera la lista lateral (para pantallas grandes)
 */
function generateSidebarList() {
    sidebarList.innerHTML = "";
    images.forEach((image, index) => {
        const li = document.createElement("li");
        li.className = "cursor-pointer p-2 rounded transition-all duration-300 hover:text-red-200 hover:font-bold hover:drop-shadow-lg hover:translate-x-1";
        li.textContent = `${index + 1}. ${image.title}`;
        if (index === currentIndex) {
            li.classList.add("text-red-300", "font-bold");
        }
        li.addEventListener("click", () => {
            currentIndex = index;
            updateGallery();
            mainImage.scrollIntoView({ behavior: "smooth", block: "center" });
        });
        sidebarList.appendChild(li);
    });
}

// Event Listeners
prevBtn.addEventListener("click", (e) => {
    e.currentTarget.classList.add("scale-95", "ring-2", "ring-red-400");
    setTimeout(() => {
        e.currentTarget.classList.remove("scale-95", "ring-2", "ring-red-400");
    }, 180);
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
    mainImage.scrollIntoView({ behavior: "smooth", block: "center" });
});

nextBtn.addEventListener("click", (e) => {
    e.currentTarget.classList.add("scale-95", "ring-2", "ring-red-400");
    setTimeout(() => {
        e.currentTarget.classList.remove("scale-95", "ring-2", "ring-red-400");
    }, 180);
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
    mainImage.scrollIntoView({ behavior: "smooth", block: "center" });
});

// Navegación por teclado (izquierda/derecha)
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
        mainImage.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
        mainImage.scrollIntoView({ behavior: "smooth", block: "center" });
    }
});

// Inicialización
generateThumbnails();
generateSidebarList();
updateGallery();
