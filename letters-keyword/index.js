app.innerHTML = `
  <div class="input-container">
    <label id="label">
      Hello!
      <input id="input" type="text" placeholder="Writing here...">
      <button id="button">SEND</button>
    </label>
  </div>
`;

const characters = [];

function click(cb = function(){}()){
  
  return console.log('Hicistes un click en button!')
}
function click2(event){
  if(event.target.nodeName === 'BUTTON') {
    console.log(event.target);
  }
  return console.log('Hicistes un click en label!!')
}
function click3(event){
  event.stopPropagation();
  return console.log('Hicistes un click en input!');
}



function pushChar(event) {
  console.log(event);
}

input.addEventListener('click', click3);
input.addEventListener('keydown', pushChar);
button.addEventListener('click', () => click(input.removeEventListener('keydown', pushChar)))
label.addEventListener('click', click2);


