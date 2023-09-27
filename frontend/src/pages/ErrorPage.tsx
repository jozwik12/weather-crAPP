import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { paths } from './pagesConfig'

function ErrorPage (): JSX.Element {
  const error: any = useRouteError()
  return (
    <div>
      <h1>Error Page</h1>
      <p>Oh no!</p>
      <p>Something went wrong!</p>
      <p>
        <i>{error.error.message}</i>
      </p>
      <Link to={paths.homePagePath}>Go back to homepage</Link>
    </div>
  )
}

export default ErrorPage
