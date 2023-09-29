import React from 'react'
import '../styles/App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import AppRoot from '../components/AppRoot'
import * as Pages from '../pages/pagesConfig'
import { Provider } from 'react-redux'
import store from './store'

function App (): React.ReactNode {
  const router = createBrowserRouter([
    {
      element: <AppRoot />,
      errorElement: <Pages.ErrorPage />,
      children: [
        {
          path: Pages.paths.initPagePath,
          element: <Pages.InitPage />
        },
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

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
