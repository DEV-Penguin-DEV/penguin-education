import AbstractView from "./abstract-view.js";

const createArticlesMenuTemplate = () =>
  (`
  <nav class="nav__articles-menu articles-menu open">
    <h2 class="articles-menu__title">Статьй</h2>

    <ul class="articles-menu__list">
      <li class="articles-menu__item">
        <span class="articles-menu__icon"></span>
        <button class="articles-menu__button" type="button">VS CODE</button>
      </li>

      <li class="articles-menu__item">
        <span class="articles-menu__icon"></span>
        <button class="articles-menu__button" type="button">GIT</button>
      </li>

      <li class="articles-menu__item">
        <span class="articles-menu__icon"></span>
        <button class="articles-menu__button" type="button">HTML</button>
      </li>

      <li class="articles-menu__item">
        <span class="articles-menu__icon"></span>
        <button class="articles-menu__button" type="button">STYLES</button>
      </li>

      <li class="articles-menu__item">
        <span class="articles-menu__icon"></span>
        <button class="articles-menu__button" type="button">JavaScript</button>
      </li>

      <li class="articles-menu__item">
        <span class="articles-menu__icon"></span>
        <button class="articles-menu__button" type="button">Gulp</button>
      </li>
    </ul>
  </nav>
  `);

export default class ArticlesMenuView extends AbstractView {
  get template() {
    return createArticlesMenuTemplate();
  }
}
