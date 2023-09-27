import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import AppRoot from '../components/AppRoot'
import * as Pages from '../pages/pagesConfig'

function App (): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppRoot />,
      errorElement: <Pages.ErrorPage />,
      children: [
        {
          path: Pages.paths.homePagePath,
          element: <Pages.HomePage />
        },
        {
          path: Pages.paths.weatherDetailsPagePath,
          element: <Pages.WeatherDetailsPage />
        },
        {
          path: Pages.paths.aboutPage,
          element: <Pages.AboutPage />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
