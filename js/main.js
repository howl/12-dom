'use strict';

/*
  Defino numCabecera global porque si el índice de la nueva
  cabecera aleatoria coincide la anterior, vuelvo a solicitar
  un nuevo índice.
*/
let numCabecera = -1;

/* Añado una variable fragmento que usaré para la galería de imágenes. */
const fragmento = document.createDocumentFragment();

/**
 * Cuando se llama a cabecera aleatoria se pone una nueva cabecera
 * en la cabecera inactiva y se hace la activa.
 */
const cabeceraAleatoria = () => {
  const cabeceras = [
    {
      src: 'assets/images/banner/1.jpg',
      autor: 'Anónimo, si si, ese es su nombre',
      titulo: 'Puesta de sol sobre lago',
    }, {
      src: 'assets/images/banner/2.jpg',
      autor: 'Quien sabe',
      titulo: 'Globos aeroestáticos sobre cielo nublado',
    }, {
      src: 'assets/images/banner/3.jpg',
      autor: 'Un indeseable',
      titulo: 'Estelas de aviones a contraluz',
    }, {
      src: 'assets/images/banner/4.jpg',
      autor: 'Anónimo Incógnito Décimo Meridio',
      titulo: 'Globos aeroestáticos sobre campo de trigo',
    }, {
      src: 'assets/images/banner/5.jpg',
      autor: 'El hombre lobo',
      titulo: 'Noche de luna llena',
    }, {
      src: 'assets/images/banner/6.jpg',
      autor: 'Probablemente el Yeti',
      titulo: 'Montañas nevadas',
    }, {
      src: 'assets/images/banner/7.jpg',
      autor: 'Uno que quería volar, esperemos que no sobre el nido del cuco',
      titulo: 'Bandada de pájaros',
    }, {
      src: 'assets/images/banner/8.jpg',
      autor: 'Uno con gustos dudosos',
      titulo: 'Ni yo lo sé ¿Pompones, moho?',
    },
  ];
  let nuevoNumCabecera;
  if (cabeceras.length > 1)
    do {
      /*
        Genera de 0 a cabeceras.length - 1 con probabilidades iguales.
        El motivo de -1 es porque random nunca genera el 1 exacto, por ello
        el valor máximo para por ejemplo 8 elementos será algo como 7,9999...
        y de ahí con floor tendremos enteros de 0 a 7 con igualdad de posibilidades
        de aparecer.
        Si usasemos round el primer y último elemento tienen un margen de 0,5 valores
        para aparecer, los demás de 1,0.
      */
      nuevoNumCabecera = Math.floor(Math.random() * cabeceras.length);
    } while (numCabecera === nuevoNumCabecera);
  else
    nuevoNumCabecera = cabeceras.length - 1;
  if (numCabecera !== nuevoNumCabecera) {
    numCabecera = nuevoNumCabecera;
    const cabeceraInactiva = document.querySelector('.imagenCabecera.inactiva');
    const cabeceraImagen = cabeceraInactiva.querySelector('img');
    cabeceraImagen.src = cabeceras[numCabecera].src;
    cabeceraImagen.alt = cabeceras[numCabecera].titulo;
    cabeceraInactiva.querySelector('figcaption>span[data-class="titulo"]').textContent = cabeceras[numCabecera].titulo;
    cabeceraInactiva.querySelector('figcaption>span[data-class="autor"]').textContent = cabeceras[numCabecera].autor;
    /*
      El cambio de la cabecera inactiva a activa se hace rápido
      y parece no haber diferencia en como hacer el proceso pero
      he elegido hacer:
        1.- Intercambio los estados de ambas.
        2.- Pongo la opacidad de la inactiva (que ahora es la activa) a 1,
            como está por debajo no se ve mal efecto.
        3.- Hago que la opacidad de la activa (que ahora es la inactiva),
            desvanezca a 0
    */
    const cabeceraActiva = document.querySelector('.imagenCabecera:not(.inactiva)');
    cabeceraActiva.classList.toggle('inactiva');
    cabeceraInactiva.classList.toggle('inactiva');
    cabeceraInactiva.style.opacity = '1';
    cabeceraActiva.style.opacity = '0';
  }
};

/**
 * Esta función anónima se llama automáticamente.
 * Llama a cabeceraAleatoria en el intervalo especificado y la
 * ejecuta una primera vez desde el principio para no esperar
 * a que el intervalo se cumpla al menos una vez para la primera
 * llamada.
 */
(() => {
  /*
    Hago que la cabecera se cambie cada 10 segundos.
    window.setInterval no ejecuta la función en el segundo cero
    por lo que hasta que no pasa el tiempo del intervalo no se
    pone una cabecera aleatoria.
    Por ello después de poner la función a intervalos la ejecuto
    una primera vez justo después.
  */
  window.setInterval(cabeceraAleatoria, 2000);
  cabeceraAleatoria();
})();

const cargarGaleria = (() => {
  const galeria = [
    {
      src: 'assets/images/viajes/viajes-1.jpg',
      pais: 'Cuba',
      descripcion: 'En Varadero encontrarás las mejores playas cristalinas.',
    }, {
      src: 'assets/images/viajes/viajes-2.jpg',
      pais: 'Maldivas',
      descripcion: 'Disfruta de los mejores atolones del mundo.',
    }, {
      src: 'assets/images/viajes/viajes-3.jpg',
      pais: 'Múltiples destinos',
      descripcion: 'Si no te decides que país quieres visitar hay disponibles viajes por varios de ellos a la vez.',
    }, {
      src: 'assets/images/viajes/viajes-4.jpg',
      pais: 'España',
      descripcion: 'Sevilla tiene un color especial.',
    }, {
      src: 'assets/images/viajes/viajes-5.jpg',
      pais: 'España',
      descripcion: 'La misma plaza desde otro lado, o quizás es Naboo.',
    }, {
      src: 'assets/images/viajes/viajes-6.jpg',
      pais: 'España',
      descripcion: 'Paseo del Arañón.',
    }, {
      src: 'assets/images/viajes/viajes-7.jpg',
      pais: 'España',
      descripcion: 'Castillo de la Yedra.',
    },
  ];

  const imgGalery = document.querySelector('#imgGalery');
  galeria.forEach((imagen, index) => {
    const imgFigureCaptionPais = document.createElement('p');
    imgFigureCaptionPais.textContent = `País: ${imagen.pais}`;

    const imgFigureCaptionDescripcion = document.createElement('p');
    imgFigureCaptionDescripcion.textContent = `Descripción: ${imagen.descripcion}`;

    const imgFigureCaption = document.createElement('figcaption');
    imgFigureCaption.classList.add('cardCaption');

    imgFigureCaption.appendChild(imgFigureCaptionPais);
    imgFigureCaption.appendChild(imgFigureCaptionDescripcion);

    const imgFigureImg = document.createElement('img');
    imgFigureImg.classList.add('cardImg');
    imgFigureImg.src = imagen.src;
    imgFigureImg.alt = imagen.descripcion;

    const imgFigure = document.createElement('figure');
    imgFigure.classList.add('cardFigure');
    imgFigure.appendChild(imgFigureImg);
    imgFigure.appendChild(imgFigureCaption);

    const imgCard = document.createElement('div');
    imgCard.id = `img${index}`;
    imgCard.classList.add('card');
    imgCard.appendChild(imgFigure);

    fragmento.append(imgCard);
  });
  imgGalery.appendChild(fragmento);
})();
