import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {Title, Channel, Views, Time} from './StyledComponent'

import './index.css'

const VideoItem = props => {
  const {eachPlay, videosData} = props
  const {channel, publishedAt, thumbnailUrl, title, viewCount, id} = eachPlay
  const channelItem = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }
  console.log(videosData)
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <li>
            <Link to={`videos/${id}`} className="video-card">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumbnail-image"
              />
              <div className="content-card1">
                <img
                  src={channelItem.profileImageUrl}
                  className="channel-logo"
                  alt="channel logo"
                />
                <div className="content-container">
                  <Title rule={isDark}>{title}</Title>
                  <Channel rule={isDark}>{channelItem.name}</Channel>
                  <div className="channel-card-details">
                    <Views rule={isDark}>{viewCount} views</Views>
                    <Time rule={isDark}>
                      {formatDistanceToNow(new Date(publishedAt))}
                    </Time>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
