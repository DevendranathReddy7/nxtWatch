import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {withRouter} from 'react-router-dom'

import {RiMenuAddFill} from 'react-icons/ri'

import Navbar from '../common/Navbar'
import {MainContainer} from '../common/CommonStyles'
import SideBar from '../common/SideBar'

import {
  SavedContainer,
  SavedVideosContainer,
  SavedVideoLi,
  SavedVideoImg,
  SavedVideoContent,
  SpanTitle,
  P,
  IconBtn,
} from './SavedVideosStyle'
import savedVideosContext from '../../context/nxtWatchContext'
import NoSaved from './NoSaved'

class SavedVideos extends Component {
  getDate = val => {
    const date = new Date(val)
    return formatDistanceToNow(date)
  }

  handleVideoClick = id => {
    const {history} = this.props
    history.push(`/videos/${id}`)
  }

  render() {
    return (
      <savedVideosContext.Consumer>
        {value => {
          const {savedVideos} = value
          console.log(savedVideos)
          return (
            <div>
              <Navbar />
              <MainContainer>
                <SideBar />

                <SavedContainer data-testid="Saved">
                  <h1>
                    <IconBtn>
                      <RiMenuAddFill color="red" size={30} />
                    </IconBtn>{' '}
                    Saved Videos
                  </h1>

                  <SavedVideosContainer>
                    {savedVideos.length > 0 &&
                      savedVideos.map(video => {
                        const {
                          id,
                          title,
                          thumbnail_url: thumbnailUrl,
                          channel: {name},
                          view_count: viewCount,
                          published_at: publishedAt,
                        } = video
                        return (
                          <SavedVideoLi
                            key={id}
                            onClick={() => this.handleVideoClick(id)}
                          >
                            <SavedVideoImg src={thumbnailUrl} alt={title} />
                            <SavedVideoContent>
                              <h3>{title}</h3>
                              <P>{name}</P>
                              <SpanTitle>
                                {viewCount} Views •
                                <p>{this.getDate(publishedAt)} ago</p>
                              </SpanTitle>
                            </SavedVideoContent>
                          </SavedVideoLi>
                        )
                      })}

                    {savedVideos.length === 0 && <NoSaved />}
                  </SavedVideosContainer>
                </SavedContainer>
              </MainContainer>
            </div>
          )
        }}
      </savedVideosContext.Consumer>
    )
  }
}

export default withRouter(SavedVideos)
