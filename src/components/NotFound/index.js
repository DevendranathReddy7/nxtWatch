import {Component} from 'react'
import SideBar from '../SideBar'
import Navbar from '../Navbar'

import {NotFoundContent, Img} from './NotFoundStyles'

import {MainContainer} from '../common/CommonStyles'

class NotFound extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainContainer>
          <SideBar />
          <NotFoundContent>
            <Img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
              alt="not found"
            />
            <h1>Page Not Found</h1>
            <p>We are sorry, the page you requested could not be found.</p>
          </NotFoundContent>
        </MainContainer>
      </div>
    )
  }
}

export default NotFound
