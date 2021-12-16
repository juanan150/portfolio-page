import styled, { keyframes, css } from 'styled-components'

interface iProps {
  theme: {
    colors: {
      white: string
      navyBlue: string
      lightNavyBlue: string
      green: string
      orange: string
      purple: string
    }
    mobile: string
    transition: string
  }
  menuOpen?: boolean
  index?: number
}

const navItemFade = keyframes`
from{
    opacity: 0;
    transform: translate(50px);
}
to{
    opacity: 1;
    transform: translate(0px);
}
`

const navItemAnimation = (props: iProps) => css`
  animation: ${navItemFade} 0.3s ease forwards ${props.index || 0 / 4}s;
`

export const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 98;
  transform: all 1s ease-in-out;
  height: 80px;
  width: 100%;
  padding: 0 20px;
  background: #fff;
`

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
`

export const MenuIcon = styled.div`
  cursor: pointer;
  background: ${(props: iProps) =>
    props.menuOpen ? 'none' : props.theme.colors.lightNavyBlue};
  transition: ${(props: iProps) => props.theme.transition};
  padding: 0.7rem;
  border-radius: 5px;
  display: none;
  position: absolute;
  right: 20px;
  z-index: 999;

  @media (max-width: ${(props: iProps) => props.theme.mobile}) {
    display: inline-block;
  }
`

export const LineOne = styled.div<{ menuOpen: boolean }>`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    ${(props: iProps) => props.theme.colors.orange} 0%,
    ${(props: iProps) => props.theme.colors.white} 100%
  );
  transition: ${(props: iProps) => props.theme.transition};
  transform: ${(props: iProps) =>
    props.menuOpen ? 'rotate(-45deg) translate(-5px, 6px) scaleX(2)' : 'none'};
`

export const LineTwo = styled.div<{ menuOpen: boolean }>`
  width: 30px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    ${(props: iProps) => props.theme.colors.orange} 0%,
    ${(props: iProps) => props.theme.colors.white} 100%
  );
  opacity: ${(props: iProps) => (props.menuOpen ? '0' : '1')};
  transition: ${(props) => props.theme.transition};
`

export const LineThree = styled.div<{ menuOpen: boolean }>`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  margin-left: ${(props: iProps) => (props.menuOpen ? '0' : '15px')};
  background: linear-gradient(
    135deg,
    ${(props: iProps) => props.theme.colors.orange} 0%,
    ${(props: iProps) => props.theme.colors.white} 100%
  );
  transition: ${(props) => props.theme.transition};
  transform: ${(props: iProps) =>
    props.menuOpen ? 'rotate(45deg) translate(-5px, -6px) scaleX(2)' : 'none'};
`

export const NavList = styled.ul<{ menuOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-sixe: 14px;
  flex-wrap: wrap;

  @media (max-width: ${(props: iProps) => props.theme.mobile}) {
    width: 24rem;
    height: 100vh;
    background: ${(props: iProps) => props.theme.colors.lightNavyBlue};
    position: fixed;
    top: 0;
    right: ${(props: iProps) => (props.menuOpen ? '0' : '-24rem')};
    padding-top: 3rem;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 998;
    transition: ${(props) => props.theme.transition};
  }
`

export const NavItem = styled.li<{
  index: number
  menuOpen: boolean
}>`
  margin: 0.2rem 0.7rem;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${(props: iProps) => props.theme.mobile}) {
    opacity: 0;
    margin: 1.2rem 0;
    ${(props) => (props.menuOpen ? navItemAnimation : null)}
  }
`

export const NavLink = styled.a`
  text-transform: uppercase;
  color: ${(props: iProps) => props.theme.colors.navyBlue};
  letter-spacing: 1.5px;

  &::after {
    content: '';
    display: block;
    height: 3px;
    width: 0%;
    background: ${(props: iProps) => props.theme.colors.orange};
    transition: 300ms all ease-in-out;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${(props: iProps) => props.theme.mobile}) {
    color: ${(props: iProps) => props.theme.colors.white};
  }
`
