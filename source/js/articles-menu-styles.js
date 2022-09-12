import { getNameForServer } from "./utils.js";

const articlesMenuStyles = (buttonElements, iconElements) => {
  buttonElements.forEach((button, i) => {
    const elementName = getNameForServer(button.textContent);
    const className = 'articles-menu__button--' + elementName;
    button.classList.add(className)

    iconElements[i].innerHTML = `<img src="./img/${elementName}.svg" width="44" height="44">`;
  });
}

const startArticlesMenuButton = (buttonElement, articlesMenuElement) => {
  buttonElement.addEventListener('click', () => {
    if(!(articlesMenuElement.classList.contains('open'))) {
      articlesMenuElement.classList.remove('articles-menu-closing');
      articlesMenuElement.classList.add('articles-menu-opening');
      buttonElement.classList.add('articles-menu-button-open');
      buttonElement.classList.remove('articles-menu-button-close');
      articlesMenuElement.classList.add('open');
    } else {
      articlesMenuElement.classList.remove('articles-menu-opening');
      articlesMenuElement.classList.add('articles-menu-closing');
      buttonElement.classList.remove('articles-menu-button-open');
      buttonElement.classList.add('articles-menu-button-close');
      articlesMenuElement.classList.remove('open');
    }

  })
};

export { articlesMenuStyles, startArticlesMenuButton};
