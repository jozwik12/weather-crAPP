import HomePage from '../pages/HomePage'
import WeatherDetailsPage from '../pages/WeatherDetailsPage'
import AboutPage from '../pages/AboutPage'
import ErrorPage from './ErrorPage'

const paths = {
  homePagePath: '/',
  weatherDetailsPagePath: '/weatherDetails',
  aboutPage: '/about'
}

const pages = {
  HomePage,
  WeatherDetailsPage,
  AboutPage,
  ErrorPage
}

export {
  paths,
  pages
}
