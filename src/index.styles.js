import styled, { createGlobalStyle, css } from 'styled-components'

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
  font-family: 'stratosskyengweb-regular';
  src: url('/fonts/stratosskyengweb-regular.eot');
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
  font-family: 'StratosLCWeb-Regular', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #ffffff;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`

export const Heading = css`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
`
export const Button = css`
  width: 275px;
  height: 52px;
  border-radius: 46px;
  background: rgb(88, 14, 162);
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'stratosskyengweb-regular', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background: #3f007d;
  }

  &:active {
    background: rgb(39, 26, 88);
  }
`

export default GlobalStyle
