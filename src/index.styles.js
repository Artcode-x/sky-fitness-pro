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
  font-family: 'stratosskyengweb-regular', sans-serif;
  cursor: pointer;
}
button {
  font-family: 'stratosskyengweb-regular', sans-serif;
  font-weight: 400;
  font-style: normal;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: 'stratosskyengweb-regular';
  src: url('../public/fonts/stratosskyengweb-regular.eot');
  src:
    local('stratosskyengweb-regular'),
    local('stratosskyengweb-regular'),
    url('/fonts/stratosskyengweb-regular.eot?#iefix') format('embedded-opentype'), 
    url('/fonts/stratosskyengweb-regular.woff2') format('woff2'),
    url('/fonts/stratosskyengweb-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'stratosskyengweb-regular', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #ffffff;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`
export default GlobalStyle
