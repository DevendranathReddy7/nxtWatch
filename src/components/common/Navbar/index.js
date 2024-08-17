import {useHistory} from 'react-router-dom'
import {FiSun, FiMoon} from 'react-icons/fi'

import Cookies from 'js-cookie'
import {
  NavContainer,
  NavLogo,
  NavRight,
  NavIcons,
  LogoutBtn,
} from './NavbarStyles'
import savedVideosContext from '../../../context/nxtWatchContext'

const Navbar = () => {
  const history = useHistory()
  const logoutHandler = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <savedVideosContext.Consumer>
      {value => {
        const {isDarkTheme, updateTheme} = value

        const Logo = !isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        const themeHandle = () => {
          updateTheme()
        }
        return (
          <NavContainer>
            <div className="nav__logo__container">
              <NavLogo src={Logo} alt="website logo" />
            </div>

            <NavRight>
              <div className="nav__logo__container">
                {/* <NavIcons src="" alt="theme" /> */}
                {isDarkTheme ? (
                  <FiSun size={30} onClick={themeHandle} />
                ) : (
                  <FiMoon size={30} onClick={themeHandle} />
                )}
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
      }}
    </savedVideosContext.Consumer>
  )
}

export default Navbar
