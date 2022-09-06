// Articles Menu's styles
const buttonElements = document.querySelectorAll('.articles-menu__button');
const iconElements = document.querySelectorAll('.articles-menu__icon');

// Articles Menu's opening
const buttonElement = document.querySelector('.nav__button');
const articlesMenuElement = document.querySelector('.articles-menu');

const articlesMenuStyles = () => {
  buttonElements.forEach((button, i) => {
    const elementName = button.textContent.toLocaleLowerCase().replace(/ /ig, '-')
    const className = 'articles-menu__button--' + elementName;
    button.classList.add(className)

    iconElements[i].innerHTML = `<img src="./img/${elementName}.svg" width="44" height="44">`;
  });
}

const startArticlesMenuButton = () => {
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
