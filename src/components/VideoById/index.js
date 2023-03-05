import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import MenuBar from '../MenuBar'
import {
  BgVideoContainerContainer,
  Title1,
  Views1,
  Time1,
  Title2,
  Views2,
  Button,
} from './StyledComponent'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoById extends Component {
  state = {
    videoObject: {},
    apiStatus: apiStatusConstants.initial,
    chanelObject: {},
    isLiked: false,
    isDisLiked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoById()
  }

  componentWillUnmount() {
    this.mounted = false
  }

  getVideoById = async () => {
    this.mounted = true
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const videoDetails = data.video_details
      const videosData = {
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        videoURL: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        chanelName: videoDetails.channel.name,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
      }

      this.setState({
        videoObject: videosData,
        apiStatus: apiStatusConstants.success,
        chanelObject: videoDetails.channel,
      })
    } else if (response.status === 401) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  updateLikeStatus = () => {
    const {isLiked, isDisLiked} = this.state
    if (isDisLiked) {
      this.setState({isDisLiked: false})
    }
    if (isLiked) {
      this.setState({isLiked: false})
    } else {
      this.setState({isLiked: true})
    }
  }

  updateDisLikeStatus = () => {
    const {isLiked, isDisLiked} = this.state
    if (isLiked) {
      this.setState({isLiked: false})
    }
    if (isDisLiked) {
      this.setState({isDisLiked: false})
    } else {
      this.setState({isDisLiked: true})
    }
  }

  addToWatchLaterItem = async () => {
    const {isSaved} = this.state

    if (isSaved) {
      await this.setState({isSaved: false})
    } else {
      await this.setState({isSaved: true})
    }
  }

  renderVideoItem = () => {
    const {videoObject, isLiked, isDisLiked, chanelObject} = this.state
    const {publishedAt, title, viewCount, videoURL, description} = videoObject
    const chanelObject1 = {
      name: chanelObject.name,
      profileImageUrl: chanelObject.profile_image_url,
      subscriberCount: chanelObject.subscriber_count,
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, onClickAddToWatchLater, isSaved1} = value

          const addToWatchLaterItem = () => {
            onClickAddToWatchLater(videoObject)
            this.addToWatchLaterItem()
          }

          const color = isDark === true ? '#64748b' : '#64748b'

          return (
            <div className="video-container1">
              <ReactPlayer url={videoURL} className="palyer" />
              <Title1 rule={isDark}>{title}</Title1>
              <div className="like-btns">
                <div className="channel-card-details1">
                  <Views1 rule={isDark}>{viewCount} views</Views1>
                  <Time1 rule={isDark}>
                    . {formatDistanceToNow(new Date(publishedAt))}
                  </Time1>
                </div>
                <div className="buttons-card">
                  <div className="button-item">
                    <Button
                      type="button"
                      onClick={this.updateLikeStatus}
                      rule={isLiked ? '#2563eb' : color}
                    >
                      <AiOutlineLike size={20} />
                      Like
                    </Button>
                  </div>

                  <div className="button-item">
                    <Button
                      type="button"
                      onClick={this.updateDisLikeStatus}
                      rule={isDisLiked ? '#2563eb' : color}
                    >
                      <AiOutlineDislike size={20} />
                      Dislike
                    </Button>
                  </div>

                  <div className="button-item">
                    <Button
                      type="button"
                      onClick={addToWatchLaterItem}
                      rule={isSaved1 ? '#2563eb' : color}
                    >
                      <MdPlaylistAdd size={20} />
                      {isSaved1 ? 'Saved' : 'Save'}
                    </Button>
                  </div>
                </div>
              </div>
              <hr className="hr" />
              <div className="channel-subscribe">
                <img
                  src={chanelObject1.profileImageUrl}
                  className="channel-url-logo"
                  alt="channel logo"
                />
                <div>
                  <Title2 rule={isDark}>{chanelObject1.name}</Title2>
                  <Views2 rule={isDark}>
                    {chanelObject1.subscriberCount} subscribers
                  </Views2>
                  <Views2 rule={isDark}>{description}</Views2>
                </div>
              </div>
            </div>
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
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const Image = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return <img src={Image} alt="Failure View" className="failure-image" />
      }}
    </ThemeContext.Consumer>
  )

  renderFinalView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItem()
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
            <BgVideoContainerContainer rule={isDark}>
              <Header />
              <div className="home-container1">
                <MenuBar />
                {this.renderFinalView()}
              </div>
            </BgVideoContainerContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoById
