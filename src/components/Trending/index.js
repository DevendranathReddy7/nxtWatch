import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {FaFire} from 'react-icons/fa'

import Cookies from 'js-cookie'
import Navbar from '../common/Navbar'
import SideBar from '../common/SideBar'
import {MainContainer} from '../common/CommonStyles'
import {
  TrendingContainer,
  TrendingVideos,
  TrendingVideoLi,
  TrendingVideoImg,
  TrendingVideoContent,
  SpanTitle,
  P,
  IconBtn,
} from './TrendingStyles'
import LoaderComp from '../Loader'
import FailureView from '../common/FailureView'

class Trending extends Component {
  state = {
    videosList: [],
    isLoading: true,
    err: false,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.setState({isLoading: false, err: false, videosList: data.videos})
    } else {
      this.setState({isLoading: false, err: true, videosList: []})
    }
  }

  getDate = val => {
    const date = new Date(val)
    return formatDistanceToNow(date)
  }

  retryHandler = () => {
    this.getTrendingVideos()
  }

  handleVideoClick = id => {
    const {history} = this.props
    history.push(`/videos/${id}`)
  }

  render() {
    const {isLoading, videosList, err} = this.state
    return (
      <div>
        <Navbar />
        <MainContainer>
          <SideBar />

          <TrendingContainer data-testid="trending">
            <h1>
              <IconBtn>
                {' '}
                <FaFire color="red" size={30} />
              </IconBtn>{' '}
              Trending
            </h1>

            {!err && isLoading ? (
              <LoaderComp />
            ) : (
              <TrendingVideos>
                {videosList.map(video => {
                  const {
                    id,
                    title,
                    thumbnail_url: thumbnailUrl,
                    channel: {name},
                    view_count: viewCount,
                    published_at: publishedAt,
                  } = video
                  return (
                    <TrendingVideoLi
                      key={id}
                      onClick={() => this.handleVideoClick(id)}
                    >
                      <TrendingVideoImg src={thumbnailUrl} alt={title} />
                      <TrendingVideoContent>
                        <h3>{title}</h3>
                        <P>{name}</P>
                        <SpanTitle>
                          {viewCount} Views •
                          <p>{this.getDate(publishedAt)} ago</p>
                        </SpanTitle>
                      </TrendingVideoContent>
                    </TrendingVideoLi>
                  )
                })}
              </TrendingVideos>
            )}

            {err && <FailureView handleRetry={this.retryHandler} />}
          </TrendingContainer>
        </MainContainer>
      </div>
    )
  }
}
export default withRouter(Trending)
