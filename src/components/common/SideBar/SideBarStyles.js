import Styled from 'styled-components'
import {Link} from 'react-router-dom'

// Sidebar Start

export const SideBarContainer = Styled.div`
flex:1;
height:100vh;
`

export const Li = Styled.li`
  list-style-type: none;
  padding: 0px 20px;
  background-color: ${props => {
    if (props.isActive) {
      return props.darkMode ? '#383838' : '#d7dfe9'
    }
    return ''
  }};
  border-radius: 10px;

`

export const Span = Styled.span`
display:flex;
align-items:center;
gap:10px;

`

export const StyledLink = Styled(Link)`
  text-decoration: none;
  color: inherit; 
  &:hover {
    text-decoration: none;
  }
`

export const ContactUs = Styled.div`
display:flex;
flex-direction:column;
margin-left:2%;
position:fixed;
top:65vh;
`

export const ContactUsImg = Styled.div`
display:flex;
gap:25px;

@media (max-width:1024px){
    gap:10px;
}

`

export const Img = Styled.img`
width:40px;
`

export const P = Styled.p`
width:50%;

@media (max-width:1024px){
    width:30%;
}

`
// Sidebar End
