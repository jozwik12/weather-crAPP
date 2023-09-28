import React from 'react'
import logo from '../assets/mock_title_icon.png'

function HomePage (): React.ReactNode {
  return (
    <div className="main-container">
      <h1>Homepage title</h1>
      <h2>Weather is nice today</h2>
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
