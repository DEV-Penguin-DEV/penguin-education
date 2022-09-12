import HeaderView from '../view/header-view.js';
import ArticlesMenuView from '../view/articles-menu-view.js';
import MyInfoView from '../view/my-info-view.js';
import MyProjectsView from '../view/my-projects-view.js';

import {
  render,
  RenderPosition
} from '../render.js';
import { articlesMenuStyles, startArticlesMenuButton } from '../articles-menu-styles.js';
import { addListenerOnArticlesMenu } from './articles-menu-functions.js';
import { addMainPageButtonListener } from './main-page-functions.js';

export default class Presenter {
  #headerContainer = document.querySelector('.main-page__main-header');
  #contentContainer = document.querySelector('.content-container');
  #mainContent = document.querySelector('.main-content');
  #data = null;

  constructor(data) {
    this.#data = data;
  }

  #header = new HeaderView();
  #articlesMenu = new ArticlesMenuView();
  #myInfo = new MyInfoView();
  #myProjects = new MyProjectsView();

  init() {
    render(this.#header, this.#headerContainer);
    render(this.#articlesMenu, this.#contentContainer, RenderPosition.AFTERBEGIN);
    render(this.#myInfo, this.#mainContent);
    render(this.#myProjects, this.#mainContent);

    // Articles Menu's styles
    const buttonElements = document.querySelectorAll('.articles-menu__button');
    const iconElements = document.querySelectorAll('.articles-menu__icon');
    // Articles Menu's opening
    const buttonElement = document.querySelector('.nav__button');
    const articlesMenuElement = document.querySelector('.articles-menu');
    // for activation articles Menu
    const menuListElement = document.querySelector('.articles-menu__list');
    // for activation main page button
    const mainPageButtonElement = document.querySelector('.nav__link');

    articlesMenuStyles(buttonElements, iconElements);
    startArticlesMenuButton(buttonElement, articlesMenuElement);
    addListenerOnArticlesMenu(menuListElement, this.#data);
    addMainPageButtonListener(mainPageButtonElement, this.#myInfo.element, this.#myProjects.element);
  }
}
