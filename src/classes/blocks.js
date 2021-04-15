// Import functions from utils for assisting purposes
import { col, row } from '../utils';
// ----->

// Create Root class for subclasses
class Block {
  constructor(textValue, options) {
    this.textValue = textValue;
    this.options = options;
  }

  // If someone tries to invoke this method here, it gives them error
  toHTML() {
    throw new Error(
      'There is no toHTML in this class, look for it in subclasses!'
    );
  }
  // ----->
}
// ----->

// Create subclass for title elements
export class TitleBlock extends Block {
  constructor(textValue, options) {
    super(textValue, options);
  }

  // Convert object to html, assign it to column, and then return it as row
  toHTML() {
    const { tag = 'h2', styles } = this.options;
    return row(
      col(`
      <${tag}>${this.textValue}</${tag}>
    `),
      styles
    );
  }
  // ----->
}
// ----->

// Create subclass for image elements
export class ImageBlock extends Block {
  constructor(textValue, options) {
    super(textValue, options);
  }

  // Convert object to html and then return it as row
  toHTML() {
    const {
      alt = 'image I added',
      styles,
      imageStyles = 'width: 300px; height: auto;',
    } = this.options;
    const html = `<img src="${this.textValue}" alt="${alt}" style="${imageStyles}" />`;

    return row(html, styles);
  }
  // ----->
}
// ----->

// Create subclass for text elements
export class TextBlock extends Block {
  constructor(textValue, options) {
    super(textValue, options);
  }

  // Convert object to html, assign it to column, and then return it as row
  toHTML() {
    return row(
      col(`
        <p style="margin-bottom: 0;">${this.textValue}</p>
      `),
      this.options.styles
    );
  }
  // ----->
}
// ----->

// Create subclass for multiple text elements and separate them by columns
export class TextColumnsBlock extends Block {
  constructor(textValue, options) {
    super(textValue, options);
  }

  // Convert object to html, assign it to column, and then return it as row
  toHTML() {
    const html = this.textValue.map((item) => col(item));
    return row(html.join(''), this.options.styles);
  }
  // ----->
}
// ----->
