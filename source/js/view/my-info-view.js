import AbstractView from "./abstract-view.js";

const createMyInfoTemplate = () =>
  (`
  <div class="my-info">
    <div class="my-info__text-content">
      <h2 class="my-info__title">Константин Лысенко</h2>

      <ul class="my-info__list">
        <li class="my-info__item">
          <img src="./img/dev-icon.svg" class="my-info__item-icon" width="67" height="69">
          <p class="my-info__content-title">Web разработчик в TakEmotion.agency (с 15.12.2021 по 1.03.2022)</p>
        </li>

        <li class="my-info__item">
          <img src="./img/project-works.svg" class="my-info__item-icon" width="75" height="65">
          <p class="my-info__content-title">6 месяцев проектных работ</p>
        </li>

        <li class="my-info__item">
          <img src="./img/teacher-work.svg" class="my-info__item-icon" width="81" height="65">
          <p class="my-info__content-title">Более 3-х месяцев преподавательского опыта</p>
        </li>
      </ul>
    </div>

    <div class="my-info__image">
      <img src="./img/myAvatar.png" alt="Моя фотография.">
    </div>
  </div>
  `);

export default class MyInfoView extends AbstractView {
  get template() {
    return createMyInfoTemplate();
  }
}
