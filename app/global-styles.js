import { injectGlobal } from 'styled-components';
import { colors } from './styles';

/* eslint no-unused-expressions: 0 */
injectGlobal`

  @font-face {
    font-family: 'calendas_plusregular';
    src: url('calendas_plus-webfont.eot');
    src: url('calendas_plus-webfont.eot?#iefix') format('embedded-opentype'),
      url('calendas_plus-webfont.woff2') format('woff2'),
      url('calendas_plus-webfont.woff') format('woff'),
      url('calendas_plus-webfont.ttf') format('truetype'),
      url('calendas_plus-webfont.svg#calendas_plusregular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'calendas_plusregular', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
