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
