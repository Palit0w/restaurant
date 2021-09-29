function renderHome() {
  const main = document.querySelector('main');
  const mainContainer = document.createElement('div');
  mainContainer.id = "main-container";

  const aboutText = document.createElement('p');
  aboutText.id = "about-text";
  aboutText.innerText = "Las mejores pizzas que vas a comer en tu vida..."

  const slice = document.createElement('div');
  slice.classList.add('slice');

  const talvez = document.createElement('p');
  talvez.id = "talvez";
  talvez.innerText = ".........Tal vez O_O";

  mainContainer.append(aboutText, slice, talvez);
  main.appendChild(mainContainer);

}

export default renderHome;

