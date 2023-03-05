import ThemeContext from '../../context/ThemeContext'
import {Heading, Paragraph} from './StyledComponent'
import './index.css'

const NoVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <div className="failure-view">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
            className="failure-image"
          />
          <Heading rule={isDark}>No saved videos found</Heading>
          <Paragraph rule={isDark}>
            You can save your videos while watching theme
          </Paragraph>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NoVideos
