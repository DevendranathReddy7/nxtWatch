import Styled from 'styled-components'

export const NavContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5% 1%;
  padding:10px;
  `

export const NavLogo = Styled.img`
width: 100px;
`
export const NavRight = Styled.div`
 display: flex;
gap: 20px;
`

export const NavIcons = Styled.img`
width:30px;`

export const LogoutBtn = Styled.button`
border-style: none;
  border-radius: 3px;
  padding: 5px 10px;
  border: 2px solid #3b82f6;
  background-color: transparent;
  color: #3b82f6;
`

export const ConfirmModal = Styled.div`
padding: 20px; 
text-align: center;
background-color:#383838;
border-radius:5px;
color:white;
`

export const ConfirmBtn = Styled.button`
    margin-right: 10px;
    border-style: none;
    border-radius: 3px;
    padding: 10px 20px;
    border: 2px solid #3b82f6;
    background-color: ${props => (props.confirm ? '#3b82f6' : 'transparent')};
    color: ${props => (props.confirm ? 'white' : '#3b82f6')};
`
