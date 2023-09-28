import React from 'react'
import NavigationBar from './NavigationBar'
import { Outlet } from 'react-router-dom'

function AppRoot (): React.ReactNode {
  return (
    <div>
      This is the app Root
      <NavigationBar />
      <Outlet />
    </div>
  )
}

export default AppRoot
