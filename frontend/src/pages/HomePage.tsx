import React from 'react'
import logo from '../assets/mock_title_icon.png'
import '../styles/HomePage.scss'
import { useSelector } from 'react-redux'
import { type RootState } from '../app/store'

function HomePage (): React.ReactNode {
  const isDarkModeEnabled: boolean = useSelector((state: RootState) => state.app.isDarkModeEnabled)

  return (
    <div className="main-container">
      <div className={`page-header-${isDarkModeEnabled ? 'dark' : 'light'}`}>
        <h1>Homepage title</h1>
        <h2>Weather is nice today</h2>
      </div>
      <header className="display-body">
        <img src={logo} className="placeholder-logo" alt="logo" />
        <p>
          This the weather crApp
        </p>
      </header>
    </div>
  )
}

export default HomePage
