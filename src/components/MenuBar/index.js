import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillFire} from 'react-icons/ai'
import {HiHome} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../context/ThemeContext'
import {
  MenuContainer,
  IconContainer,
  Paragraph,
  Paragraph1,
  Paragraph2,
} from './StyledComponent'
import './index.css'

class MenuBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <MenuContainer rule={isDark}>
              <div className="menu-container">
                <Link to="/" className="link">
                  <IconContainer rule={isDark}>
                    <HiHome size={40} className={!isDark ? 'icon1' : 'icon2'} />
                    <Paragraph rule={isDark}>Home</Paragraph>
                  </IconContainer>
                </Link>

                <Link to="/trending" className="link">
                  <IconContainer rule={isDark}>
                    <AiFillFire
                      size={40}
                      className={!isDark ? 'icon1' : 'icon2'}
                    />
                    <Paragraph rule={isDark}>Trending</Paragraph>
                  </IconContainer>
                </Link>

                <Link to="/gaming" className="link">
                  <IconContainer rule={isDark}>
                    <SiYoutubegaming
                      size={40}
                      className={!isDark ? 'icon1' : 'icon2'}
                    />
                    <Paragraph rule={isDark}>Gaming</Paragraph>
                  </IconContainer>
                </Link>

                <Link to="/saved-videos" className="link">
                  <IconContainer rule={isDark}>
                    <MdPlaylistAdd
                      size={40}
                      className={!isDark ? 'icon1' : 'icon2'}
                    />
                    <Paragraph rule={isDark}>Saved Videos</Paragraph>
                  </IconContainer>
                </Link>
              </div>
              <div className="contact-card">
                <Paragraph1 rule={isDark}>CONTACT US</Paragraph1>
                <div className="image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="contact-logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="contact-logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    className="contact-logo"
                  />
                </div>
                <Paragraph2 rule={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </Paragraph2>
              </div>
            </MenuContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default MenuBar
