import {Component} from 'react'

import {NoSavedContent, Img} from './SavedVideosStyle'

class NoSaved extends Component {
  render() {
    return (
      <center>
        <NoSavedContent>
          <Img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved Videos"
          />
          <h1>No Saved videos found</h1>
          <p>You can save your videos while watching them</p>
        </NoSavedContent>
      </center>
    )
  }
}

export default NoSaved
