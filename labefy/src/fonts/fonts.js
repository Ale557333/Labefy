import { createGlobalStyle } from 'styled-components';

import NameOfYourFontWoff from './GothamPro.woff';
import NameOfYourFontWoff2 from './GothamPro.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Gotham Pro';
        src: local('Gotham Pro'), local('GothamPro'),
        url(${NameOfYourFontWoff2}) format('woff2'),
        url(${NameOfYourFontWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;