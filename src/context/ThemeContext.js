import React from 'react'

const ThemeContext = React.createContext({
  isDark: true,

  changeTheme: () => {},
  SavedVideoList: [],
  isSaved1: false,
  onClickAddToWatchLater: () => {},
})

export default ThemeContext
