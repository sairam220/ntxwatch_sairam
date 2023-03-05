import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {Title, Views} from './StyledComponent'

import './index.css'

const GamingVideoItem = props => {
  const {eachPlay} = props
  const {thumbnailUrl, title, viewCount, id} = eachPlay

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Link to={`videos/${id}`} className="video-card1">
            <img src={thumbnailUrl} alt={title} className="thumbnail-image" />
            <div className="content-card1">
              <div className="content-container">
                <Title rule={isDark}>{title}</Title>
                <div className="channel-card-details">
                  <Views rule={isDark}>{viewCount} Watching Worldwide</Views>
                </div>
              </div>
            </div>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItem
