function renderHome() {
  const main = document.querySelector('main');
  //Clear the main
  const about = document.createElement('div');
  about.id = "about";

  const aboutText = document.createElement('p');
  aboutText.id = "about-text";
  aboutText.innerText = "Las mejores pizzas que vas a comer en tu vida..."

  const slice = document.createElement('div');
  slice.classList.add('slice');

  const talvez = document.createElement('p');
  talvez.id = "talvez";
  talvez.innerText = ".........Tal vez O_O";

  about.append(aboutText, slice, talvez);
  main.appendChild(about);

}

export default renderHome;

/* 

  <div id="about">
  <p id="about-text">Las mejores pizzas que vas a comer en tu vida...</p>
  <div class="slice"></div>
  <p id="talvez">.........Tal vez O_O</p> 

*/