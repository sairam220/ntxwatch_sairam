import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import VideoById from './components/VideoById'
import Home from './components/Home'
import TrendingVideo from './components/TrendingVideos'
import GamingVideo from './components/GamingVideo'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    isDark: true,
    isSaved1: false,
    SavedVideoList: [],
  }

  changeTheme = () => {
    this.setState(prevSate => ({isDark: !prevSate.isDark}))
  }

  onClickAddToWatchLater = async savedItems => {
    this.setState(prevState => ({isSaved1: !prevState.isSaved1}))
    const {SavedVideoList} = this.state
    if (SavedVideoList.length > 0) {
      const filteredList = SavedVideoList.filter(
        eachVideo => eachVideo.id === savedItems.id,
      )
      const filteredList1 = SavedVideoList.filter(
        eachVideo => eachVideo.id !== savedItems.id,
      )
      if (filteredList.length === 0) {
        await this.setState({SavedVideoList: [...SavedVideoList, savedItems]})
      } else {
        await this.setState({SavedVideoList: filteredList1})
      }
    } else {
      await this.setState({SavedVideoList: [...SavedVideoList, savedItems]})
    }
  }

  render() {
    const {isDark, SavedVideoList, isSaved1} = this.state

    console.log(SavedVideoList)

    return (
      <>
        <ThemeContext.Provider
          value={{
            isDark,
            changeTheme: this.changeTheme,
            isSaved1,
            SavedVideoList,
            onClickAddToWatchLater: this.onClickAddToWatchLater,
          }}
        >
          <BrowserRouter>
            <Switch>
              <ProtectedRoute exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/gaming" component={GamingVideo} />
              <ProtectedRoute exact path="/videos/:id" component={VideoById} />
              <ProtectedRoute
                exact
                path="/saved-videos"
                component={SavedVideos}
              />
              <ProtectedRoute
                exact
                path="/trending"
                component={TrendingVideo}
              />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </BrowserRouter>
        </ThemeContext.Provider>
      </>
    )
  }
}

export default App
