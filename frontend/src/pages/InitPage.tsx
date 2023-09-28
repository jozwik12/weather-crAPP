import React from 'react'
import { Navigate } from 'react-router-dom'
import { paths } from './pagesConfig'

function InitPage (): JSX.Element {
  // eslint-disable-next-line no-console
  console.log('initialization logic')
  return <Navigate to={paths.homePagePath} />
}

export default InitPage
