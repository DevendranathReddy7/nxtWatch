import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  NavContainer,
  NavLogo,
  NavRight,
  NavIcons,
  LogoutBtn,
} from './NavbarStyles'

const Navbar = () => {
  const history = useHistory()
  const logoutHandler = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NavContainer>
      <div className="nav__logo__container">
        <NavLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
      </div>

      <NavRight>
        <div className="nav__logo__container">
          <NavIcons src="" alt="theme" />
        </div>

        <div className="nav__logo__container">
          <NavIcons
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
        </div>

        <div className="nav__logo__container">
          <LogoutBtn type="button" onClick={logoutHandler}>
            Logout
          </LogoutBtn>
        </div>
      </NavRight>
    </NavContainer>
  )
}

export default Navbar
