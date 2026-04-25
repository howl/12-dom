'use strict';

/* Defino numCabecera global porque si el índice de la nueva
   cabecera aleatoria coincide la anterior, vuelvo a solicitar
   un nuevo índice. */
let numCabecera;
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
  const cabeceraInactiva = document.querySelector('.imagenCabecera.inactiva');
  let nuevoNumCabecera;
  do {
    /* Genera de 0 a cabeceras.length - 1 con probabilidades iguales.
       El motivo de -1 es porque random nunca genera el 1 exacto, por ello
       el valor máximo para por ejemplo 8 elementos será algo como 7,9999...
       y de ahí con floor tendremos enteros de 0 a 7 con igualdad de posibilidades
       de aparecer.
       Si usasemos round el primer y último elemento tienen un margen de 0,5 valores
       para aparecer, los demás de 1,0. */
    nuevoNumCabecera = Math.floor(Math.random() * cabeceras.length);
  } while (numCabecera === nuevoNumCabecera);
  numCabecera = nuevoNumCabecera;
  const cabeceraImagen = cabeceraInactiva.querySelector('img');
  cabeceraImagen.src = cabeceras[numCabecera].src;
  cabeceraImagen.alt = cabeceras[numCabecera].titulo;
  /* TODO: Cabmiar a no usar indices para actuar sobre el span de titulo y autor. */
  const cabeceraCaption = cabeceraInactiva.querySelectorAll('figcaption>span');
  cabeceraCaption[0].textContent = cabeceras[numCabecera].titulo;
  cabeceraCaption[1].textContent = cabeceras[numCabecera].autor;
  const cabeceraActiva = document.querySelector('.imagenCabecera:not(.inactiva)');
  cabeceraActiva.style.opacity = '0';
  cabeceraInactiva.style.opacity = '1';
  cabeceraActiva.classList.toggle('inactiva');
  cabeceraInactiva.classList.toggle('inactiva');
};

(() => {
  /* Hago que la cabecera se cambie cada 10 segundos.
    window.setInterval no ejecuta la función en el segundo cero
    por lo que hasta que no pasa el tiempo del intervalo no se
    pone una cabecera aleatoria.
    Por ello después de poner la función a intervalos la ejecuto
    una primera vez justo después. */

  window.setInterval(cabeceraAleatoria, 1000);
  cabeceraAleatoria();
})();
