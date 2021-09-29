function renderContact() {
  const main = document.querySelector('main');
  const mainContainer = document.createElement('div');
  mainContainer.id = "main-container";

  const contactTitle = document.createElement('p');
  contactTitle.id = "contact-title";
  contactTitle.innerText = "Contacto"

  const contactInfo = document.createElement('p');
  contactInfo.id = "contact-info";
  contactInfo.innerText = "+123 12456789";

  const slice = document.createElement('div');
  slice.classList.add('slice');

  mainContainer.append(contactTitle,slice , contactInfo);
  main.appendChild(mainContainer);
}

export default renderContact;