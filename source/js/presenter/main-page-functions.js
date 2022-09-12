import { changeElement } from '../utils.js';

const mainContainer = document.querySelector('.main-content');

const goToMainPage = (...pageElements) => {
  changeElement(mainContainer, ...pageElements);
  document.querySelector('.articles-menu__list').querySelectorAll('.articles-menu__item').forEach((menuItem) => {
    menuItem.classList.remove('articles-menu__item--active');
  })
};

const addMainPageButtonListener = (mainPageButtonElement, ...pageElements) => {
  mainPageButtonElement.addEventListener('click', () => goToMainPage(...pageElements));
}


export { addMainPageButtonListener };
