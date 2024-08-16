import {Component} from 'react'

import {FailureContent, Img, Button} from './FailureViewStyles'

class FailureView extends Component {
  render() {
    return (
      <center>
        <FailureContent>
          <Img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            alt="failure view"
          />
          <h1>Oops! Something Went Wrong</h1>
          <p>We are having some trouble to complete your request.</p>
          <p>Please try again.</p>
          <Button>Retry</Button>
        </FailureContent>
      </center>
    )
  }
}

export default FailureView
