import React from 'react'
import { NavLink } from 'react-router-dom'
import NavContainer from './styled'

const Header = () => {
  return (
    <NavContainer>
      <h2>Nicole Ferreira</h2>
      <nav>
        <NavLink to={'/'} end className={({ isActive }) =>
          isActive ? 'active' : undefined
        }>Home</NavLink>
        <NavLink to={'/projects'} className={({ isActive }) =>
          isActive ? 'active' : undefined
        }>Projetos</NavLink>
        <NavLink to={'/stack'} className={({ isActive }) =>
          isActive ? 'active' : undefined
        }>Stack</NavLink>
        <NavLink to={'/contact'} className={({ isActive }) =>
          isActive ? 'active' : undefined
        }>Contato</NavLink>
      </nav>
    </NavContainer>
  )
}

export default Header
