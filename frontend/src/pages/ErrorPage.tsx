import React from 'react'
import { Link } from 'react-router-dom'
import { paths } from './pagesConfig'

function ErrorPage (): JSX.Element {
  return (
    <div>
      <h1>Error Page</h1>
      <p>Oh no!</p>
      <p>Something went wrong!</p>
      <Link to={paths.homePagePath}>Go back to homepage</Link>
    </div>
  )
}

export default ErrorPage