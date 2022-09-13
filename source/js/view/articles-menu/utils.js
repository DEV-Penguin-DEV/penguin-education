import { createElement } from '../../render.js';
import { getNameForServer } from "../../utils.js";
import ArticleTopicsView from './articles-topics-view.js';

const getButtonContainerElement = (name) => {
  return createElement(`
  <div class="articles-page__button-container">
    <h4 class="articles-page__button-title">${name}</h4>
    <button class="articles-page__button"><span class="visually-hidden">Статья об ${name}</span></button>
  </div>
  `)
};

const getTemplate = (key) => {
  return `
  <div class="articles-page">
    <h3 class="articles-page__title">${key}</h3>
    <div class="articles-page__buttons-container">

    </div>
  </div>`;
};



const generateArticlesMenuElements = (data) => {
  const result = [];
  for (let key in data) {
    const template = getTemplate(key);
    const articlesPage = createElement(template);
    articlesPage.classList.add(key);
    if (data[key].length > 0) {
      data[key].forEach((element) => {
        const buttonElement = getButtonContainerElement(element);
        buttonElement.querySelector('.articles-page__button').style.background = `url("img/articles-topic/${getNameForServer(element)}.jpeg") no-repeat center`;
        buttonElement.querySelector('.articles-page__button').style.backgroundSize = getNameForServer(element) === 'js' ? 'contain' : `cover`;
        articlesPage.querySelector('.articles-page__buttons-container').append(buttonElement)
      });
    }
    const articleBlockView = new ArticleTopicsView(articlesPage);
    result.push(articleBlockView.template);

  }
  return result;

}

export { generateArticlesMenuElements };
