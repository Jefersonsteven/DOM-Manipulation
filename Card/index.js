'use strict';

// * app
const app = document.querySelector('#App');

// * button
const button = document.createElement('button');
button.classList.add('button');
button.id = 'button';
button.innerText = 'Change';
app.insertAdjacentElement('beforeend', button);
const buttonAction = document.querySelector('#button');

// * container #1
const container = document.createElement('div');
container.classList.add('container');
container.classList.add('item1');
container.setAttribute('id', '1');
const div = document.createElement('div');
div.classList.add('container__div');
const h2 = document.createElement('h2');
h2.classList.add('container__subtitle');
h2.innerText = 'Este es el Default: React 1';
const p = document.createElement('p');
p.classList.add('container__paragraph');
p.innerText = 'Card 1';
container.append(div, h2, p);

// * container #2
const container2 = document.createElement('div');
container2.classList.add('container');
container2.classList.add('item2');
container2.setAttribute('id', '2');
const div2 = document.createElement('div');
div2.classList.add('container__div');
const h22 = document.createElement('h2');
h22.classList.add('container__subtitle');
h22.innerText = 'Este es el Change: React 2';
const p2 = document.createElement('p');
p2.classList.add('container__paragraph');
p2.innerText = 'Card 2';
container2.append(div2, h22, p2);

// * inserte el container #1 para que este por default
app.insertBefore(container, buttonAction);

// * funcion eventListener de click button cambiar container

let currentContainer = document.querySelector('.container');
function changeContainer() {
  switch (currentContainer.id) {
    case "1":
      currentContainer.remove();
      app.insertBefore(container2, buttonAction);
      currentContainer = document.querySelector(".container");
      break;
    case "2":
      currentContainer.remove();
      app.insertBefore(container, buttonAction);
      currentContainer = document.querySelector(".container");
  }
}

buttonAction.addEventListener("click", changeContainer);

// *