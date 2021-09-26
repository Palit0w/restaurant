import './style.css';
import renderHome from './home';

function createHeader() {
  const header = document.createElement('header');
  header.append(createTitles(), createNav());
  
  return header;
}

function createTitles() {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.innerText = "Muzzalagua";

  const h2 = document.createElement('h2');
  h2.innerText = "Pizzeria";

  div.append(h1,h2);
  return div;
}

function createNav() {
  const nav = document.createElement('ul');
  nav.classList.add('navbar');

  const home = document.createElement('li');
  home.classList.add('navitem');
  home.id = 'navhome';
  home.innerText = 'Home';
  

  const menu = document.createElement('li');
  menu.classList.add('navitem');
  menu.innerText = "Menu";
  menu.id = 'navmenu';


  const contact = document.createElement('li');
  contact.classList.add('navitem');
  contact.innerText = "Contact";
  contact.id = 'navcontact';
  

  nav.append(home, menu, contact);

  return nav;
}

export default createHeader;