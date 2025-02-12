import React from 'react'
import { MenuNav } from '../Components/MenuNav'
import { NavBar } from '../Components/NavBar'

export const Menu = () => {
  return (
    <div>
      <NavBar/>
      <div>
        <MenuNav/>
      </div>
    </div>
  )
}
