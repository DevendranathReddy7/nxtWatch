import Styled from 'styled-components'
import {Link} from 'react-router-dom'

// Sidebar Start

export const SideBarContainer = Styled.div`
flex:1;
height:100vh;
`

export const Li = Styled.li`
list-style-type:none;
padding:0px 20px;
background-color:${props => props.isActive && '#d7dfe9'};
border-radius:10px;


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
top:70vh;
`

export const ContactUsImg = Styled.div`
display:flex;
gap:25px;

`

export const Img = Styled.img`
width:40px;
`
// Sidebar End
