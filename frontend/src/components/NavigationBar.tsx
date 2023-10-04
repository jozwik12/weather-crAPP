import React from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../pages/pagesConfig'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../app/reducers/appSlice'
import { type RootState } from '../app/store'

function NavigationBar (): React.ReactNode {
  const dispatch = useDispatch()
  const isDarkModeEnabled: boolean = useSelector((state: RootState) => state.app.isDarkModeEnabled)

  const action = (): void => {
    dispatch(toggleDarkMode(!isDarkModeEnabled))
  }

  return (
    <div>
      <Link to={paths.homePagePath}>Home Page</Link>
      <Link to={paths.weatherDetailsPagePath}>Details Page</Link>
      <Link to={paths.aboutPage}>About Page</Link>
      <Form.Check
        type="switch"
        id="darkModeSwitch"
        label="Dark mode"
        onClick={action}/>
    </div>
  )
}

export default NavigationBar
