console.log('hola');

import createHeader from "./header";
import renderHome from "./home";
import renderContact from "./contact"
import renderMenu from "./menu";

function renderFirstLoad() {
  const body = document.querySelector('body');
  const content = document.createElement('div');
  content.id = 'content';
  content.classList.add('bg');
  body.appendChild(content);
  content.append(createHeader());
  const main = document.createElement('main');
  content.appendChild(main);
  renderHome();
}
renderFirstLoad();

function clearMain() {
  const main = document.querySelector('main');
  main.removeChild(main.lastChild);
}

const navhome = document.querySelector('#navhome');
navhome.addEventListener('click', (() => {
  clearMain();
  renderHome();
}));

const navmenu = document.querySelector('#navmenu');
navmenu.addEventListener('click', (() => {
  clearMain();
  renderMenu();
}))

const navcontact = document.querySelector('#navcontact');
navcontact.addEventListener('click', (() => {
  clearMain();
  renderContact();
}))


