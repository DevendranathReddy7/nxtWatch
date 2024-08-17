import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoMdSearch} from 'react-icons/io'

import Navbar from '../common/Navbar'

import {
  HomeMainContent,
  Banner,
  BannerImg,
  ButtonGet,
  Close,
  SearchContainer,
  SearchInput,
  SearchBtn,
} from './HomeStyles'
import {MainContainer} from '../common/CommonStyles'

import LoaderComp from '../Loader'
import VideoList from './VideoList'
import SideBar from '../common/SideBar'
import FailureView from '../common/FailureView'

class Home extends Component {
  state = {
    showBanner: true,
    searchValue: '',
    videosList: [],
    isLoading: true,
    err: false,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchValue} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`

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

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  searchHandler = e => {
    const {value} = e.target
    this.setState({searchValue: value})
  }

  searchButtonHandle = () => {
    this.getVideos()
  }

  render() {
    const {showBanner, searchValue, isLoading, err, videosList} = this.state
    return (
      <div>
        <Navbar />
        <MainContainer data-testid="home">
          <SideBar />

          <HomeMainContent>
            {showBanner && (
              <Banner>
                <div>
                  <BannerImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                  <h4>Buy Nxt Watch Premium prepaid plans with UPI</h4>
                  <ButtonGet>GET IT NOW</ButtonGet>
                </div>

                <div>
                  <Close data-testid="close" onClick={this.closeBanner}>
                    X
                  </Close>
                </div>
              </Banner>
            )}

            <SearchContainer>
              <SearchInput
                type="search"
                placeholder="Search"
                value={searchValue}
                onChange={this.searchHandler}
              />
              <SearchBtn
                onClick={this.searchButtonHandle}
                data-testid="searchButton"
              >
                <IoMdSearch size={20} />
              </SearchBtn>
            </SearchContainer>

            {err && <FailureView />}
            {isLoading ? <LoaderComp /> : <VideoList videos={videosList} />}
          </HomeMainContent>
        </MainContainer>
      </div>
    )
  }
}

export default Home
