import React from 'react'
import { NavItems } from '../../data/navItems'

import {
  FooterItem,
  FooterLink,
  FooterList,
  FooterTextSection,
  StyledFooterSection,
} from '../styles/layout/FooterStyles'

const Footer = () => {
  return (
    <StyledFooterSection>
      <FooterList>
        {NavItems.map((item, index) => (
          <FooterItem key={item.text || '0' + index}>
            <FooterLink href={item.href}>{item.text}</FooterLink>
          </FooterItem>
        ))}
      </FooterList>
      <FooterTextSection>
        <p>Coded with React and Styled Components 💅</p>
        <p>December 2021</p>
      </FooterTextSection>
    </StyledFooterSection>
  )
}

export default Footer
