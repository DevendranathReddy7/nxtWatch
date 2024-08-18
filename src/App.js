import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
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

  updateSavedVideos = (id, video) => {
    this.setState(prevState => {
      const isAlreadySaved = prevState.savedVideos.some(
        savedVideo => savedVideo.id === id,
      )

      if (isAlreadySaved) {
        return {
          savedVideos: prevState.savedVideos.filter(
            savedVideo => savedVideo.id !== id,
          ),
        }
      }

      return {
        savedVideos: [...prevState.savedVideos, video],
      }
    })
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
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </savedVideosContext.Provider>
      </div>
    )
  }
}

export default App
