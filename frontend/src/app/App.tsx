import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import AppRoot from '../components/AppRoot'
import pages from '../pages/pagesConfig'

function App (): JSX.Element {
  const router = createBrowserRouter([
    {
      element: <AppRoot />,
      errorElement: pages.ErrorPage(),
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
