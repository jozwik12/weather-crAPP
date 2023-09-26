import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import WeatherDetailsPage from '../pages/WeatherDetailsPage'
import AboutPage from '../pages/AboutPage'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: HomePage()
    },
    {
      path: '/weatherDetails',
      element: WeatherDetailsPage()
    },
    {
      path: '/about',
      element: AboutPage()
    }
  ])

  return <RouterProvider router={router} />
}

export default App
