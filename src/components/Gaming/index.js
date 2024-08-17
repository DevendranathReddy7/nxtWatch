import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'

import LoaderComp from '../Loader'
import FailureView from '../common/FailureView'
import Navbar from '../common/Navbar'
import SideBar from '../common/SideBar'
import {MainContainer} from '../common/CommonStyles'
import {
  GamingContainer,
  GamingVideos,
  GamingVideoLi,
  GamingVideoImg,
  GamingVideoContent,
  P,
  IconBtn,
} from './GamingStyles'

class Gaming extends Component {
  state = {
    videosList: [],
    isLoading: true,
    err: false,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
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

  render() {
    const {isLoading, videosList, err} = this.state
    return (
      <div>
        <Navbar />
        <MainContainer>
          <SideBar />

          <GamingContainer data-testid="gaming">
            <h1>
              <IconBtn>
                <SiYoutubegaming color="red" size={30} />
              </IconBtn>{' '}
              Gaming
            </h1>

            {!err && isLoading ? (
              <LoaderComp />
            ) : (
              <GamingVideos>
                {videosList.map(video => {
                  const {
                    id,
                    title,
                    thumbnail_url: thumbnailUrl,
                    view_count: viewCount,
                  } = video
                  return (
                    <GamingVideoLi key={id}>
                      <GamingVideoImg src={thumbnailUrl} alt={title} />
                      <GamingVideoContent>
                        <h3>{title}</h3>
                        <P>{viewCount} watching worldwide</P>
                      </GamingVideoContent>
                    </GamingVideoLi>
                  )
                })}
              </GamingVideos>
            )}

            {err && <FailureView />}
          </GamingContainer>
        </MainContainer>
      </div>
    )
  }
}
export default Gaming
