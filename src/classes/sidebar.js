import { TextBlock, TitleBlock, ImageBlock, TextColumnsBlock } from './blocks';
import { block } from '../utils';

export class Sidebar {
  constructor(selector, update) {
    this.$el = document.querySelector(selector);
    this.update = update;

    this.init();
  }

  init() {
    this.$el.addEventListener('submit', this.addBlock.bind(this));
    this.$el.innerHTML = this.template;
  }

  get template() {
    return [
      block('text'),
      block('title'),
      block('image'),
      block('column'),
    ].join('');
  }

  addBlock(event) {
    event.preventDefault();

    const el = event.target;

    let value;

    const styles = el.styles.value;
    el.styles.value = '';

    if (NodeList.prototype.isPrototypeOf(el.value)) {
      const iteratableArr = [...el.value];

      value = iteratableArr.map((inputColumnEl) => inputColumnEl.value);
      iteratableArr.map((inputField) => (inputField.value = ''));
    } else {
      value = el.value.value;
      el.value.value = '';
    }

    const blocks = new Map([
      ['text', TextBlock],
      ['title', TitleBlock],
      ['image', ImageBlock],
      ['column', TextColumnsBlock],
    ]);

    const Constructor = blocks.get(el.name);
    const newBlock = new Constructor(value, { styles });
    this.update(newBlock);
  }
}
