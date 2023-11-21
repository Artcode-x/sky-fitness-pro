import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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

@font-face {
  font-family: 'StratosLCWeb-Regular';
  src: url('/fonts/StratosLCWeb-Regular.eot');
  src:
    local('StratosLCWeb-Regular'),
    local('StratosLCWeb-Regular'),
    url('/fonts/StratosLCWeb-Regular.eot?#iefix') format('embedded-opentype'), 
    url('/fonts/StratosLCWeb-Regular.woff2') format('woff2'),
    url('/fonts/StratosLCWeb-Regular.woff') format('woff');
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
export const MButton = css`
  width: 275px;
  height: 52px;
  border-radius: 46px;
  background: rgb(88, 14, 162);
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosLCWeb-Regular', sans-serif;
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

export const Wrapper = styled.div`
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
  background: #fafafa;
`

export default GlobalStyle
