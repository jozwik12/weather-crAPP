import React from 'react'
import { Navigate } from 'react-router-dom'
import { paths } from './pagesConfig'

function InitPage (): React.ReactNode {
  // eslint-disable-next-line no-console
  console.log('initialization logic')
  return <Navigate to={paths.homePagePath} />
}

export default InitPage
