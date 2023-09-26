import React from 'react'
import './App.css'
import logo from '../assets/mock_title_icon.png'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App () {
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

export default App
