import {AiOutlineClose} from 'react-icons/ai'
import 'reactjs-popup/dist/index.css'
import {Component} from 'react'
import {BgContainer} from './StyledComponent'
import './index.css'

class Banner extends Component {
  state = {display: 'flex'}

  onClose = () => {
    this.setState({display: 'none'})
  }

  render() {
    const {display} = this.state
    return (
      <BgContainer display={display} data-testid="banner">
        <div className="banner-head">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            className="app-logo"
            alt="nxt watch logo"
          />
          <p className="para">Buy Nxt Watch Premium</p>
          <button type="button" className="get-btn">
            GET IT NOW
          </button>
        </div>

        <button
          type="button"
          className="btn1"
          onClick={this.onClose}
          data-testid="close"
        >
          <AiOutlineClose size={20} />
        </button>
      </BgContainer>
    )
  }
}
export default Banner
