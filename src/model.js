// Import image and css convertor function
import image from './assets/title-image.jpg';
import { css } from './utils';
// ----->

// Import main blocks for creating basic/default output
import {
  TextBlock,
  TitleBlock,
  ImageBlock,
  TextColumnsBlock,
} from './classes/blocks';
// ----->

// Create default output model
export const model = [
  new TitleBlock('My testing webpack application for generating html blocks!', {
    tag: 'h1',
    styles: css({
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
      'font-weight': 'bold',
    }),
  }),
  new TextColumnsBlock(
    [
      'Used these technologies:',
      'JavaScript, CSS, HTML',
      'Bootstrap',
      'Webpack (Babel)',
    ],
    {
      styles: css({
        padding: '2rem 0',
        color: '#fff',
        background: 'linear-gradient(to right, #00f260, #0575e6)',
      }),
    }
  ),
  new TextBlock('Prepared by Mick Koryliuk', {
    styles: css({
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
    }),
  }),
  new ImageBlock(image, {
    styles: css({
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    }),
    alt: 'title-image',
    imageStyles: 'width: 300px; height: auto;',
  }),
];
// ----->
