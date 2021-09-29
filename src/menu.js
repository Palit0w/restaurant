import randomPizza from './randomPizza.png';

function renderMenu() {
  const main = document.querySelector('main');
  const mainContainer = document.createElement('div');
  mainContainer.id = "main-container";

  const menuTitle = document.createElement('p');
  menuTitle.id = "menu-title";
  menuTitle.innerText = "Menu";

  const slice = document.createElement('div');
  slice.classList.add('slice');

  const food1 = makeFood('Pizza Random Nº1', 'Una pizza de una pizzeria', '$$$$$', randomPizza);


  mainContainer.append(menuTitle, slice, food1);
  main.appendChild(mainContainer);
}

function makeFood(foodName, description, price, imgUrl) {
  const foodDiv = document.createElement('div');
  foodDiv.classList.add('food');

  const ImgContainer = document.createElement('div');
  ImgContainer.classList.add('img-container');

  const foodImg = new Image();
  foodImg.src = imgUrl;
  foodImg.classList.add('food-img');
  ImgContainer.append(foodImg);


  const foodText = document.createElement('div');


  const nameP = document.createElement('p');
  nameP.classList.add('food-name');
  nameP.innerText = foodName;


  const descriptionP = document.createElement('p');
  descriptionP.classList.add('food-description');
  descriptionP.innerText = description;
  
  const priceDiv = document.createElement('div');
  priceDiv.classList.add('price-div');
  const priceP = document.createElement('p');
  priceP.classList.add('food-price');
  priceP.innerText = price;
  priceDiv.append(priceP);

  foodText.append(nameP, descriptionP);

  foodDiv.append(ImgContainer, foodText, priceDiv);
  return foodDiv;
}

export default renderMenu;