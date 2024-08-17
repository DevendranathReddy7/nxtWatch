import Styled, {createGlobalStyle} from 'styled-components'

export const MainContainer = Styled.div`
display:flex;
gap:5px;
`

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.isDarkTheme ? '#121212' : '#ffffff')};
    color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`
