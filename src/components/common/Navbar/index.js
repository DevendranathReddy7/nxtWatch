import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {FiSun, FiMoon} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {
  NavContainer,
  NavLogo,
  NavRight,
  NavIcons,
  LogoutBtn,
  ConfirmBtn,
  ConfirmModal,
} from './NavbarStyles'
import savedVideosContext from '../../../context/nxtWatchContext'

class Navbar extends Component {
  state = {logoutModal: false}

  logoutHandler = () => {
    this.setState({logoutModal: true})
  }

  closeModal = () => {
    this.setState({logoutModal: false})
  }

  handleConfirm = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.push('/login')
  }

  renderModal = () => {
    const {logoutModal} = this.state
    return (
      <Popup
        open={logoutModal}
        closeOnDocumentClick
        onClose={this.closeModal}
        modal
        className="popup-content"
      >
        <ConfirmModal>
          <p>Are you sure, you want to logout?</p>
          <div style={{marginTop: '20px'}}>
            <ConfirmBtn onClick={this.closeModal}>Cancel</ConfirmBtn>

            <ConfirmBtn
              confirm
              onClick={() => {
                this.handleConfirm()
                this.closeModal()
              }}
            >
              Confirm
            </ConfirmBtn>
          </div>
        </ConfirmModal>
      </Popup>
    )
  }

  render() {
    const {logoutModal} = this.state

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
                  <LogoutBtn type="button" onClick={this.logoutHandler}>
                    Logout
                  </LogoutBtn>
                </div>
              </NavRight>

              {logoutModal && this.renderModal()}
            </NavContainer>
          )
        }}
      </savedVideosContext.Consumer>
    )
  }
}

export default withRouter(Navbar)
