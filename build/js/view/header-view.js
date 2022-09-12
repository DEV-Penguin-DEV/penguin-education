import AbstractView from "./abstract-view.js";

const createHeaderTemplate = () =>
  (`
  <nav class="main-header__nav nav">
    <ul class="nav__list">
      <li class="nav__item nav__item--articles-menu">
        <button class="nav__button"><span class="visually-hidden">Меню статей</span></button>

      </li>

      <li class="nav__item nav__item--top-menu">
        <a href="#" class="nav__link">PENGUIN Education</a>
      </li>
    </ul>
  </nav>
  `);

export default class HeaderView extends AbstractView {
  get template() {
    return createHeaderTemplate();
  }
}
