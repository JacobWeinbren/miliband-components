import { create } from '@storybook/theming';
import Cover from '../stories/assets/cover.png';

export default create({
    base: 'light',

    // Typography
    fontBase: '"Libre Franklin", sans-serif',
    fontCode: 'monospace',

    //Brand
    brandTitle: 'Miliband Components',
    brandUrl: 'https://github.com/JacobWeinbren/miliband-components',
});