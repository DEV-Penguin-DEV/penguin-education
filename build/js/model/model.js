import {articlesMenuItems} from './data.js';
import { generateArticlesMenuElements } from '../view/articles-menu/utils.js';

export default class Model {
  #articlesMenuItems = articlesMenuItems;

  get articlesMenuItems() {
    return generateArticlesMenuElements(this.#articlesMenuItems);
  }
}
