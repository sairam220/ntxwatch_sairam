import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiFillFire} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import MenuBar from '../MenuBar'
import ThemeContext from '../../context/ThemeContext'
import {BgContainer, Heading, BgContainer1, Container} from './StyledComponent'
import TrendingVideoItem from '../TrendingVideoItem'
import FailureView from '../FailureView'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class TrendingVideo extends Component {
  state = {apiStatus: apiStatusConstants.initial, TrendingList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/trending'
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
      const TrendingVideos = data.videos.map(eachVideo => ({
        channel: eachVideo.channel,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        TrendingList: TrendingVideos,
      })
    }
    if (response.ok !== true) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  getFailure = () => {
    this.getTrendingVideos()
  }

  renderTrendingVideosList = () => {
    const {TrendingList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <Container data-testid="trending" rule={isDark}>
              <ul className="trending-video-container">
                {TrendingList.map(eachPlay => (
                  <TrendingVideoItem
                    key={eachPlay.id}
                    trendingVideo={eachPlay}
                  />
                ))}
              </ul>
            </Container>
          )
        }}
      </ThemeContext.Consumer>
    )
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
        return this.renderTrendingVideosList()
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
            <BgContainer rule={isDark} data-testid="trending">
              <Header />
              <div className="home-container" data-testid="trending">
                <MenuBar />
                <div className="trending" data-testid="trending">
                  <BgContainer1 rule={isDark}>
                    <AiFillFire className="trending-icon" />
                    <Heading rule={isDark}>Trending</Heading>
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

export default TrendingVideo
