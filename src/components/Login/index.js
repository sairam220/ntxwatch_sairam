import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    userNameErr: '',
    passWordErr: '',
    isShowErr: false,
    username: '',
    password: '',
    isShowPassword: false,
    wrongDetails: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailure = error => {
    this.setState({wrongDetails: `*${error}`})
  }

  getNameErr = event => {
    if (event.target.value === '') {
      this.setState({
        userNameErr: '*Please Enter A Valid Username',
        isShowErr: true,
      })
    } else {
      this.setState({
        isShowErr: false,
      })
    }
  }

  getPasswordErr = event => {
    if (event.target.value === '') {
      this.setState({
        passWordErr: '*Please Enter A Valid Password',
        isShowErr: true,
      })
    } else {
      this.setState({
        isShowErr: false,
      })
    }
  }

  getUserName = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async event => {
    const {username, password} = this.state
    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  showPassword = () => {
    const {isShowPassword} = this.state
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
    console.log(isShowPassword)
  }

  renderUserNameField = () => {
    const {userNameErr, isShowErr, username} = this.state
    return (
      <>
        <label className="label" htmlFor="username">
          USERNAME
        </label>
        <input
          className="user-input"
          type="text"
          onChange={this.getUserName}
          onBlur={this.getNameErr}
          value={username}
          id="username"
          placeholder="Username"
        />
        {isShowErr && <p className="err-msg">{userNameErr}</p>}
      </>
    )
  }

  renderPasswordField = () => {
    const {passWordErr, isShowErr, isShowPassword, password} = this.state
    return (
      <>
        <label className="label" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="user-input"
          type={isShowPassword ? 'text' : 'password'}
          id="password"
          onBlur={this.getPasswordErr}
          onChange={this.getPassword}
          value={password}
          placeholder="Password"
        />
        {isShowErr && <p className="err-msg">{passWordErr}</p>}
      </>
    )
  }

  renderShowPassword = () => (
    <>
      <input type="checkbox" id="checkbox" onClick={this.showPassword} />
      <label className="checkbox" htmlFor="checkbox">
        Show Password
      </label>
    </>
  )

  render() {
    const {wrongDetails} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            className="app-logo"
            alt="website logo"
          />
          <div className="username-container">{this.renderUserNameField()}</div>
          <div className="password-container">{this.renderPasswordField()}</div>
          <div className="checkbox-container">{this.renderShowPassword()}</div>
          <button className="login-button" type="submit">
            Login
          </button>
          <p className="err-msg">{wrongDetails}</p>
        </form>
      </div>
    )
  }
}
export default Login
