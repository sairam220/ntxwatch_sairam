import ThemeContext from '../../context/ThemeContext'
import {Heading, Paragraph} from './StyledComponent'
import './index.css'

const NoSearchResults = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
            className="failure-image"
          />
          <Heading rule={isDark}>No Search results found</Heading>
          <Paragraph rule={isDark}>
            Try different key words or remove search filter
          </Paragraph>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NoSearchResults
