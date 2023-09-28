import React from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../pages/pagesConfig'

function NavigationBar (): React.ReactNode {
  return (
    <div>
      <Link to={paths.homePagePath}>Home Page</Link>
      <Link to={paths.weatherDetailsPagePath}>Details Page</Link>
      <Link to={paths.aboutPage}>About Page</Link>
    </div>
  )
}

export default NavigationBar
