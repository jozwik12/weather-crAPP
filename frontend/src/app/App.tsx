import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import AppRoot from '../components/AppRoot'
import { paths, pages } from '../pages/pagesConfig'

function App (): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppRoot />,
      errorElement: pages.ErrorPage(),
      children: [
        {
          path: paths.homePagePath,
          element: pages.HomePage()
        },
        {
          path: paths.weatherDetailsPagePath,
          element: pages.WeatherDetailsPage()
        },
        {
          path: paths.aboutPage,
          element: pages.AboutPage()
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
