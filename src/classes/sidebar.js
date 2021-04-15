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

    const value =
        [...el.value].length > 1
          ? [...el.value].map((inputColumnEl) => inputColumnEl.value)
          : el.value.value,
      styles = el.styles.value;

    const blocks = new Map([
      ['text', TextBlock],
      ['title', TitleBlock],
      ['image', ImageBlock],
      ['column', TextColumnsBlock],
    ]);

    const Constructor = blocks.get(el.name);

    const newBlock = new Constructor(value, { styles });
    this.update(newBlock);

    [...el.value].length > 1
      ? [...el.value].map((inputField) => (inputField.value = ''))
      : (el.value.value = '');
    el.styles.value = '';
  }
}
