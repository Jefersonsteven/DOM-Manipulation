const body = document.querySelector('body');

const h2 = document.createElement('h2');
const p = document.createElement('p');

h2.innerText = '4: H2';
h2.classList.add('fourth-h2');
p.innerText = 'El de atras no tiene etiqueta pero yo soy una etiqueta p';
body.appendChild(h2);
body.append('Solo soy texto no tengo etiqueta', p);

// * ------ insertBefore *

const secondh2 = document.createElement('h2');
secondh2.classList.add('second-h2');
secondh2.innerText = '2: H2';
const container = document.querySelector('.container');
const reference = document.querySelector('.thirth-h2');

container.insertBefore(secondh2, reference);

// * ------ insertAdjecentElement *
const infiltrado = document.createElement('h2');
const infiltrado2 = document.createElement('h2');
infiltrado.classList.add('inflitrado-h2');
infiltrado2.classList.add('inflitrado-h2-2');
infiltrado.innerText = 'INFILTRADO';
infiltrado2.innerText = 'INFILTRADO';
const reference2 = document.querySelector('.second-h2');

reference2.insertAdjacentElement('afterend', infiltrado);
reference2.insertAdjacentElement('afterend', infiltrado2);


// * ------ Remove Child *

const nodeToRemove = document.querySelector('.infiltrado-h2');
reference2.remove();


