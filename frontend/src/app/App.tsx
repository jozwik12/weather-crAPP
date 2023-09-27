import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import AppRoot from '../components/AppRoot'
import pages from '../pages/pagesConfig'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App () {
  const router = createBrowserRouter([
    {
      element: <AppRoot />,
      children: [
        {
          path: '/',
          element: pages.HomePage()
        },
        {
          path: '/weatherDetails',
          element: pages.WeatherDetailsPage()
        },
        {
          path: '/about',
          element: pages.AboutPage()
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
