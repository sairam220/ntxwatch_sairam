import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {Title, Channel, Views, Time} from './StyledComponent'

import './index.css'

const TrendingVideoItem = props => {
  const {trendingVideo} = props
  const {
    channel,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    id,
  } = trendingVideo
  const channelItem = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <li>
            <Link to={`videos/${id}`} className="trending-video-card">
              <img
                src={thumbnailUrl}
                alt={title}
                className="trnding-thumbnail-image"
              />

              <div className="content-container">
                <Title rule={isDark}>{title}</Title>
                <Channel rule={isDark}>{channelItem.name}</Channel>
                <div className="channel-card-details">
                  <Views rule={isDark}>{viewCount} views</Views>
                  <Time rule={isDark}>
                    . {formatDistanceToNow(new Date(publishedAt))}
                  </Time>
                </div>
              </div>
            </Link>
          </li>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoItem
