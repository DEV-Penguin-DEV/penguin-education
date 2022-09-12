import { changeElement } from '../utils.js';
import { getNameForServer } from '../utils.js';

const mainContainer = document.querySelector('.main-content');

function findAncestor(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

const onMenuListElementClick = (evt, menuList, data) => {
  const clickedButton = (evt.target.classList.contains('articles-menu__item')) ? evt.target : findAncestor(evt.target, 'articles-menu__item');
  if (clickedButton !== null && clickedButton.classList.contains('articles-menu__item')) {
    menuList.querySelectorAll('.articles-menu__item').forEach((menuItem) => {
      menuItem.classList.remove('articles-menu__item--active');
    })
    clickedButton.classList.add('articles-menu__item--active');
    const articlesType = getNameForServer(clickedButton.querySelector('.articles-menu__button').textContent);

    data.forEach((page) => {
      if (page.classList.contains(articlesType)) {
        changeElement(mainContainer, page);
      }
    })
  }
};

const addListenerOnArticlesMenu = (menuList, data) => {
  menuList.addEventListener('click', (evt) => {
    onMenuListElementClick(evt, menuList, data);
  });
};

export { addListenerOnArticlesMenu }
