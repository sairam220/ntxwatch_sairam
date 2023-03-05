import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import GamingVideoItem from '../GamingVideoItem'
import MenuBar from '../MenuBar'
import ThemeContext from '../../context/ThemeContext'
import FailureView from '../FailureView'
import {BgContainer, BgContainer1, Heading, Container} from './StyledComponent'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class GamingVideo extends Component {
  state = {videosData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getIbVideos()
  }

  getIbVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const videos = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({videosData: videos, apiStatus: apiStatusConstants.success})
    }
    if (response.ok !== true) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideosList = () => {
    const {videosData} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <Container data-testid="gaming" rule={isDark}>
              <ul className="video-container">
                {videosData.map(eachPlay => (
                  <GamingVideoItem key={eachPlay.id} eachPlay={eachPlay} />
                ))}
              </ul>
            </Container>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  getFailure = () => {
    this.getIbVideos()
  }

  renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderVideosFailureView = () => (
    <div className="failure-view">
      <FailureView />
      <button type="button" className="retry-button" onClick={this.getFailure}>
        Retry
      </button>
    </div>
  )

  renderFinalView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosList()
      case apiStatusConstants.failure:
        return this.renderVideosFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <BgContainer rule={isDark} data-testid="gaming">
              <Header />
              <div className="home-container">
                <MenuBar />
                <div className="trending" data-testid="gaming">
                  <BgContainer1 rule={isDark}>
                    <SiYoutubegaming className="trending-icon1" />
                    <Heading rule={isDark}>Gaming</Heading>
                  </BgContainer1>
                  {this.renderFinalView()}
                </div>
              </div>
            </BgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingVideo
