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
  Profile,
  SocialIcons,
} from '../styles/layout/NavStyles'
import { NavItems } from '../../data/navItems'
import { CTAButton } from '../styles/common/CTAButtonStyles'
import useScrollDirection from '../../hooks/useScrollDirection'

import { FaLinkedin, FaGithub } from 'react-icons/fa'

const NavBar = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false)

  const yUp = useScrollDirection()

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <NavStyles yUp={yUp}>
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
                key={item.text || '0' + index}
                index={index}
                menuOpen={menuOpen}
                onClick={() => setMenuOpen(false)}
              >
                {item.isProfile && (
                  <NavLink href="#hero-section">
                    <Profile>
                      <img src="./images/prof-image.png" alt="Juan Quiroz" />
                      <span>Juan Andres QUiroz</span>
                    </Profile>
                  </NavLink>
                )}
                {item.hasSocialIcons && (
                  <SocialIcons>
                    <NavLink
                      href="https://www.linkedin.com/in/juan-andres-quiroz/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </NavLink>
                    <NavLink
                      href="https://github.com/juanan150"
                      target="_blank"
                    >
                      <FaGithub />
                    </NavLink>
                  </SocialIcons>
                )}
                <NavLink href={item.href}>{item.text}</NavLink>
                {item.hasCTA && (
                  <CTAButton href="#" target="_blank">
                    Contact Me
                  </CTAButton>
                )}
              </NavItem>
            ))}
        </NavList>
      </NavStyles>
    </>
  )
}

export default NavBar
