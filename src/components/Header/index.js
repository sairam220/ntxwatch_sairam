import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ThemeContext from '../../context/ThemeContext'
import {NavBar, NavImage, LogoutButton1, NavBar1, Time} from './StyledComponent'

class Header extends Component {
  logout = () => {
    const {history} = this.props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, changeTheme} = value
          const navLogo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          const toggleTheme = () => {
            changeTheme()
          }

          return (
            <NavBar rule={isDark}>
              <Link to="/">
                <NavImage src={navLogo} alt="website logo" rule={isDark} />
              </Link>
              <div className="logout-container">
                <button type="button" className="theme-btn" data-testid="theme">
                  {isDark ? (
                    <BsMoon onClick={toggleTheme} className="icon3" />
                  ) : (
                    <BsBrightnessHigh onClick={toggleTheme} className="icon" />
                  )}
                </button>

                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                  className="profile-image"
                />

                <div className="popup-container">
                  <Popup
                    modal
                    trigger={
                      <LogoutButton1
                        type="button"
                        rule={isDark}
                        data-testid="iconButton"
                      >
                        Logout
                      </LogoutButton1>
                    }
                  >
                    {close => (
                      <NavBar1 rule={isDark}>
                        <Time rule={isDark}>
                          Are you sure, you want to logout
                        </Time>
                        <div className="logout-btns">
                          <LogoutButton1
                            type="button"
                            className="trigger-button"
                            data-testid="closeButton"
                            onClick={() => close()}
                            rule={isDark}
                          >
                            Cancel
                          </LogoutButton1>
                          <div>
                            <LogoutButton1
                              type="button"
                              onClick={this.logout}
                              rule={isDark}
                            >
                              Confirm
                            </LogoutButton1>
                          </div>
                        </div>
                      </NavBar1>
                    )}
                  </Popup>
                </div>
              </div>
            </NavBar>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
