import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import savedVideosContext from './context/nxtWatchContext'

import './App.css'
import {GlobalStyle} from './components/common/CommonStyles'

class App extends Component {
  state = {
    savedVideos: [],
    isDarkTheme: false,
  }

  updateSavedVideos = video => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, video],
    }))
  }

  updateTheme = () => {
    this.setState(prev => ({isDarkTheme: !prev.isDarkTheme}))
  }

  render() {
    const {savedVideos, isDarkTheme} = this.state

    return (
      <div>
        <savedVideosContext.Provider
          value={{
            savedVideos,
            updateSavedVideos: this.updateSavedVideos,
            isDarkTheme,
            updateTheme: this.updateTheme,
          }}
        >
          <GlobalStyle isDarkTheme={isDarkTheme} />

          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <Route component={NotFound} />
          </Switch>
        </savedVideosContext.Provider>
      </div>
    )
  }
}

export default App
