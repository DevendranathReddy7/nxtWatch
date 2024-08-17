import React from 'react'

const savedVideosContext = React.createContext({
  savedVideos: [],
  updateSavedVideos: () => {},
  isDarkTheme: false,
  updateTheme: () => {},
})

export default savedVideosContext
