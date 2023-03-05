import ThemeContext from '../../context/ThemeContext'
import {Heading, Paragraph} from './StyledComponent'
import './index.css'

const FailureView = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const Image = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      return (
        <>
          <img src={Image} alt="failure view" className="failure-image" />
          <Heading rule={isDark}>Oops! Something Went Wrong</Heading>
          <Paragraph rule={isDark}>
            We are having some trouble to complete your request. Please try
            again.
          </Paragraph>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default FailureView
