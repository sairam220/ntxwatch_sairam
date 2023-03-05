import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import VideoItem from '../VideoItem'
import MenuBar from '../MenuBar'
import ThemeContext from '../../context/ThemeContext'
import {BgContainer} from './StyledComponent'
import FailureView from '../FailureView'
import Banner from '../Banner'
import NoSearchResults from '../NoSearchResults'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class Home extends Component {
  state = {
    videosData: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    searchValue: '',
  }

  componentDidMount() {
    this.getIbVideos()
  }

  getIbVideos = async () => {
    const {searchValue} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
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
        channel: eachVideo.channel,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
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

  onEnterClickSearch = event => {
    if (event.key === 'Enter') {
      const {searchInput} = this.state
      this.setState({searchValue: searchInput}, this.getIbVideos)
      this.setState({searchInput: ''})
    }
  }

  getSearchQuery = event => {
    this.setState({searchInput: event.target.value})
  }

  displayResults = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput}, this.getIbVideos)
    this.setState({searchInput: ''})
  }

  renderVideosList = () => {
    const {videosData} = this.state
    return videosData.length ? (
      <ul className="video-container">
        {videosData.map(eachPlay => (
          <VideoItem key={eachPlay.id} eachPlay={eachPlay} />
        ))}
      </ul>
    ) : (
      <div className="failure-view">
        <NoSearchResults />
        <button
          type="button"
          className="retry-button"
          onClick={this.getIbVideos()}
        >
          Retry
        </button>
      </div>
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
    const {searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <BgContainer rule={isDark} data-testid="home">
              <Header />

              <div className="home-container">
                <MenuBar />
                <div>
                  <Banner />
                  <div className="input-container">
                    <input
                      className="input"
                      placeholder="Search"
                      type="search"
                      value={searchInput}
                      onChange={this.getSearchQuery}
                      onKeyDown={this.onEnterClickSearch}
                    />
                    <button type="button" data-testid="searchButton">
                      <AiOutlineSearch
                        className={
                          !isDark ? 'icon1 search-icon' : 'icon2 search-icon'
                        }
                        onClick={this.displayResults}
                      />
                    </button>
                  </div>
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

export default Home
