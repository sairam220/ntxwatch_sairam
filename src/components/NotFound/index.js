import Header from '../Header'
import MenuBar from '../MenuBar'
import ThemeContext from '../../context/ThemeContext'
import {Heading, Paragraph, BgContainer} from './StyledComponent'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const ImageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <BgContainer rule={isDark} data-testid="home">
          <Header />
          <div className="home-container">
            <MenuBar />

            <div className="failure-view">
              <img src={ImageUrl} alt="not found" className="failure-image" />
              <Heading rule={isDark}>Page Not Found</Heading>
              <Paragraph rule={isDark}>
                we are sorry, the page you requested could not be found.
              </Paragraph>
            </div>
          </div>
        </BgContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
