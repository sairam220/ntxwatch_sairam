import React from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import Header from '../Header'
import MenuBar from '../MenuBar'
import ThemeContext from '../../context/ThemeContext'
import {BgContainer, Heading, BgContainer1} from './StyledComponent'
import NoVideos from '../NoVideos'
import SavedVideoItem from '../SavedVideoItem'
import './index.css'

class SavedVideos extends React.Component {
  renderTrendingVideosList = () => (
    <ThemeContext.Consumer>
      {value => {
        const {SavedVideoList} = value

        return SavedVideoList.length > 0 ? (
          <ul className="trending-video-container">
            {SavedVideoList.map(eachPlay => (
              <SavedVideoItem key={eachPlay.id} trendingVideo={eachPlay} />
            ))}
          </ul>
        ) : (
          <NoVideos />
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <BgContainer rule={isDark} data-testid="savedVideos">
              <Header />
              <div className="home-container">
                <MenuBar />
                <div className="trending" data-testid="savedVideos">
                  <BgContainer1 rule={isDark}>
                    <AiFillPlusCircle className="trending-icon" />
                    <Heading rule={isDark}>Saved Videos</Heading>
                  </BgContainer1>
                  {this.renderTrendingVideosList()}
                </div>
              </div>
            </BgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

SavedVideos.contextType = ThemeContext

export default SavedVideos
