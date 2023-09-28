// local reviews data
const reviews = [
    {
    id: 1,
    name: 'Calculadora',
    tecnologias: 'HTML - CSS - JAVASCRIPT',
    text: "Calculadora completa con html, css y Javascript",
    link: 'Proyectos/calculadora-js-main/index.html',
    },
    {
    id: 2,
    name: 'Paleta de colores',
    tecnologias: 'HTML - CSS - JAVASCRIPT',
    text: 'Paleta de colores con Html, Css y Javascript',
    link: 'Proyectos/Paleta de colores/index.html',
    },
    {
    id: 3,
    name: 'Generador de contraseña',
    tecnologias: 'HTML - CSS - JAVASCRIPT',
    text: 'Generador de contraseñas (proyecto de Youtube) con Html, Css y Javascript',
    link: 'Proyectos/Generador contraseña/index.html',
    },
    {
    id: 4,
    name: 'Listado de Personas',
    tecnologias: 'HTML - CSS - JAVASCRIPT',
    text: 'Proyecto como material de un curso en Udemy, listado de persona con Html, Css y Javascript',
    link: 'Proyectos/Listado personas/index.html',
    },
    {
      id: 5,
    name: 'Reviews',
    tecnologias: 'HTML - CSS - JAVASCRIPT',
    text: 'Proyecto reviews con Html, Css y Javascript',
    link: 'Proyectos/calculadora-js-main/index.html',
    },
];
  // select items
const author = document.getElementById('author');
const tecnologias = document.getElementById('tecnologias');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.getElementById("proyecto");
const verProyectoLink = document.querySelector(".review a");

  // set starting item
let currentItem = 0;

  // load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson[currentItem];
});

  // show person based on item
function showPerson(person) {
    const item = reviews[person];
    author.textContent = item.name;
    tecnologias.textContent = item.tecnologias;
    info.textContent = item.text;
    verProyectoLink.href = item.link;
}


  // show next person
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
    currentItem = 0;
    }
    showPerson(currentItem);
});
  // show prev person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
  // show random person





