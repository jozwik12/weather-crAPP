import InitPage from './InitPage'
import HomePage from '../pages/HomePage'
import WeatherDetailsPage from '../pages/WeatherDetailsPage'
import AboutPage from '../pages/AboutPage'
import ErrorPage from './ErrorPage'

type PathsType = Record<string, string>

const paths: PathsType = {
  initPagePath: '/',
  homePagePath: '/home',
  weatherDetailsPagePath: '/weatherDetails',
  aboutPage: '/about'
}

export {
  paths,
  InitPage,
  HomePage,
  WeatherDetailsPage,
  AboutPage,
  ErrorPage
}
