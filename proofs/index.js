const body = document.querySelector('body');
const container = document.querySelector('.container');

const h2 = document.createElement('h2');
const p = document.createElement('p');

h2.innerText = '4: H2';
h2.classList.add('fourth-h2');
p.innerText = 'El de atras no tiene etiqueta pero yo soy una etiqueta p';
container.appendChild(h2);
body.append('Solo soy texto no tengo etiqueta', p);

// * ------ insertBefore *

const secondh2 = document.createElement('h2');
secondh2.classList.add('second-h2');
secondh2.innerText = '2: H2';
const reference = document.querySelector('.thirth-h2');

container.insertBefore(secondh2, reference);

// * ------ insertAdjecentElement *
const infiltrado = document.createElement('h2');
const infiltrado2 = document.createElement('h2');
infiltrado.classList.add('infiltrado-h2');
infiltrado2.classList.add('infiltrado-h2-2');
infiltrado.innerText = 'INFILTRADO';
infiltrado2.innerText = 'INFILTRADO';
const reference2 = document.querySelector('.second-h2');

reference2.insertAdjacentElement('afterend', infiltrado);
reference2.insertAdjacentElement('afterend', infiltrado2);


// * ------ Remove Child *

const removeInfiltrado = document.querySelector('.infiltrado-h2');
removeInfiltrado.parentElement.removeChild(removeInfiltrado);

// * Remove

const removeInfiltrado2 = document.querySelector('.infiltrado-h2-2');
removeInfiltrado2.remove();

// * Replace

const twoDotFive = document.createElement('h2');
twoDotFive.classList.add('two-dot-five-h2');
twoDotFive.textContent = '2.5: H2';
container.replaceChild(twoDotFive, reference2);
// container.replaceChild(reference2, twoDotFive);

// * Operations in lote

const div = document.createElement('div');
div.classList.add('div-container');
body.appendChild(div);

const nodes = [];
for (let i = 0; i < 50; i++) {
  const node = document.createElement('input');
  node.textContent = "newNode";
  nodes.push(node);
}
const containerDiv = document.querySelector('.div-container');
containerDiv.append( ...nodes );