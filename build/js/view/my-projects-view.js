import AbstractView from "./abstract-view.js";

const createMyProjectsTemplate = () =>
  (`
  <div class="my-projects">
    <ul class="my-project__list">
      <li class="my-projects__item">
        <a href="https://htmlacademy-htmlcss.github.io/586823-device-33/master/" class="my-projects__link"
          target="_blank"><img src="img/device.png" class="my-project__img" alt="Проект Device." width="281"
            height="181"></a>
      </li>

      <li class="my-projects__item">
        <a href="https://htmlacademy-adaptive.github.io/586823-cat-energy-25/12/" class="my-projects__link"
          target="_blank"><img src="img/catEnergy.jpeg" class="my-project__img" alt="Проект Cat Energy." width="295"
            height="181"></a>
      </li>

      <li class="my-projects__item">
        <a href="https://dev-penguin-dev.github.io/586823-kekstagram-26/" class="my-projects__link" target="_blank"><img
            src="img/keksogram.png" class="my-project__img" alt="Проект Keksogram." width="281" height="181"></a>
      </li>
    </ul>
  </div>
  `);

export default class MyProjectsView extends AbstractView {
  get template() {
    return createMyProjectsTemplate();
  }
}
