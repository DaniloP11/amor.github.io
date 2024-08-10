const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const imagen = document.getElementById('imagen');
const mensaje = document.getElementById('mensaje');
const cancion = document.getElementById('cancionAmor');
const carpetaIMG = './imagenes/'; // Cambia la ruta a la carpeta 'imagenes'
const imagenes = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];
let index = -1;
let interval; // Variable para guardar el intervalo

btnSi.addEventListener('click', function () {
    Swal.fire({
        title: '¡Sabia que dirías que sí!',
        text: '¡Eres mía hasta el resto de mis días! 😊😘',
        imageUrl: carpetaIMG + 'image_SI.gif',
        confirmButtonText: 'Cerrar'
    }).then((result) => {
        felicidades();
        if (interval) {
            clearInterval(interval); // Limpiar el intervalo si ya está en ejecución
        }
        // Muestra las imágenes cambiando cada 3 segundos
        index = -1;
        interval = setInterval(() => {
            index++;
            if (index >= imagenes.length) {
                index = 0;
            }
            imagen.src = carpetaIMG + imagenes[index];
        }, 3000);
        btnSi.style.display = 'none';
        btnNo.style.display = 'none';
        mensaje.innerHTML = 'Eres la casualidad más bonita que me ha pasado<br>' +
                    'Quiero seguir contigo siempre<br>' +
                    '❤ ¡Te Amo! 🥰❤';

        // Reproduce la canción
        if (cancion) {
            cancion.play().catch(error => {
                console.error('Error al reproducir la canción:', error);
            });
        }
    });
});

btnNo.addEventListener('mouseover', function () {
    moverBoton();
});

function moverBoton() {
    const botonRect = btnNo.getBoundingClientRect();
    const width = window.innerWidth - botonRect.width;
    const height = window.innerHeight - botonRect.height;

    btnNo.style.position = "absolute";
    btnNo.style.left = (Math.random() * width) + "px";
    btnNo.style.top = (Math.random() * height) + "px";
}

function felicidades() {
    var bArray = [];
    var sArray = [2, 4, 6, 8];
    var contenedor = document.querySelector('.contenedor');
    for (var i = 0; i < contenedor.offsetWidth; i++) {
        bArray.push(i);
    }

    setInterval(function () {
        var size = random(sArray);
        var div = document.createElement('div');
        div.classList.add('individual-bubble');
        div.style.left = random(bArray) + 'px';
        div.style.width = size + 'px';
        div.style.height = size + 'px';
        div.style.bottom = '10px';
        div.style.position = 'absolute';
        div.style.zIndex = '1';
        contenedor.appendChild(div);

        animate(div);
    }, 150);
}

function animate(div) {
    var bottom = 10;
    var opacity = 1;

    var animationInterval = setInterval(function () {
        bottom += 2;
        opacity -= 0.007;
        div.style.bottom = bottom + '%';
        div.style.opacity = opacity;

        if (bottom >= 100) {
            clearInterval(animationInterval);
            div.remove();
        }
    }, 80);
}

function random(data) {
    return data[Math.floor(Math.random() * data.length)];
}
