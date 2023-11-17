import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  &:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  &:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosLCWeb-Regular', sans-serif;
  cursor: pointer;
}
button {
  font-family: 'StratosLCWeb-Regular', sans-serif;
  font-weight: 400;
  font-style: normal;
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: 'StratosLCWeb-Regular';
  src: url('../public/fonts/StratosLCWeb-Regular.eot');
  src:
    local('StratosLCWeb-Regular'),
    local('StratosLCWeb-Regular'),
    url('../public/fonts/StratosLCWeb-Regular.eot?#iefix') format('embedded-opentype'), 
    url('../public/fonts/StratosLCWeb-Regular.woff2') format('woff2'),
    url('../public/fonts/StratosLCWeb-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'StratosLCWeb-Regular', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #ffffff;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`
export default GlobalStyle