import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar (): JSX.Element {
  return (
    <div>
      <Link to={'/'}>Home Page</Link>
      <Link to={'/weatherDetails'}>Details Page</Link>
      <Link to={'/about'}>About Page</Link>
    </div>
  )
}

export default NavigationBar
