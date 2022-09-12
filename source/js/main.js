import Presenter from './presenter/presenter.js';
import Model from './model/model.js';

const model = new Model();
const mainPresenter = new Presenter(model.articlesMenuItems);
mainPresenter.init();
