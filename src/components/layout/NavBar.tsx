import { useState } from 'react'
import {
  LineOne,
  LineThree,
  LineTwo,
  Logo,
  MenuIcon,
  NavItem,
  NavLink,
  NavList,
  NavStyles,
} from '../styles/layout/NavStyles'
import { NavItems } from '../../data/NavItems'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <NavStyles>
        <a href="#hero-section">
          <Logo src="./images/logo.png" alt="logo" />
        </a>
        <MenuIcon onClick={handleOpenMenu}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </MenuIcon>
        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((item, index) => (
              <NavItem
                key={item.text}
                index={index}
                menuOpen={menuOpen}
                onClick={() => setMenuOpen(false)}
              >
                <NavLink href={item.href}>{item.text}</NavLink>
              </NavItem>
            ))}
        </NavList>
      </NavStyles>
    </>
  )
}

export default NavBar
