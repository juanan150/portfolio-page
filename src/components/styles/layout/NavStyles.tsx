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
  yUp?: string
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
  animation: ${navItemFade} 1s ease forwards ${(props.index || 0) / 4}s;
`

export const NavStyles = styled.nav<iProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 98;
  transition: all 0.5s ease-in-out;
  height: 80px;
  width: 100%;
  padding: 0 20px;
  background: #fff;
  top: ${(props: iProps): string => (props.yUp === 'up' ? '0' : '-80px')};
`

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
`

export const MenuIcon = styled.div`
  cursor: pointer;
  background: ${(props: iProps): string =>
    props.menuOpen ? 'none' : props.theme.colors.lightNavyBlue};
  transition: ${(props: iProps): string => props.theme.transition};
  padding: 0.7rem;
  border-radius: 5px;
  display: none;
  position: absolute;
  right: 20px;
  z-index: 999;

  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    display: inline-block;
  }
`

export const LineOne = styled.div<iProps>`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    ${(props: iProps): string => props.theme.colors.orange} 0%,
    ${(props: iProps): string => props.theme.colors.white} 100%
  );
  transition: ${(props: iProps): string => props.theme.transition};
  transform: ${(props: iProps): string =>
    props.menuOpen ? 'rotate(-45deg) translate(-5px, 6px) scaleX(2)' : 'none'};
`

export const LineTwo = styled.div<iProps>`
  width: 30px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    ${(props: iProps): string => props.theme.colors.orange} 0%,
    ${(props: iProps): string => props.theme.colors.white} 100%
  );
  opacity: ${(props: iProps): string => (props.menuOpen ? '0' : '1')};
  transition: ${(props): string => props.theme.transition};
`

export const LineThree = styled.div<iProps>`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  margin-left: ${(props: iProps) => (props.menuOpen ? '0' : '15px')};
  background: linear-gradient(
    135deg,
    ${(props: iProps): string => props.theme.colors.orange} 0%,
    ${(props: iProps): string => props.theme.colors.white} 100%
  );
  transition: ${(props: iProps): string => props.theme.transition};
  transform: ${(props: iProps): string =>
    props.menuOpen ? 'rotate(45deg) translate(-5px, -6px) scaleX(2)' : 'none'};
`

export const NavList = styled.ul<iProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-sixe: 14px;
  flex-wrap: wrap;

  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    width: 24rem;
    height: 100vh;
    background: ${(props: iProps): string => props.theme.colors.lightNavyBlue};
    position: fixed;
    top: 0;
    right: ${(props: iProps): string => (props.menuOpen ? '0' : '-24rem')};
    padding-top: 3rem;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 998;
    transition: ${(props): string => props.theme.transition};
  }
`

export const NavItem = styled.li<iProps>`
  margin: 0.2rem 0.7rem;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    opacity: 0;
    margin: 1.2rem 0;
    ${(props: iProps) => (props.menuOpen ? navItemAnimation : null)}
  }
`

export const NavLink = styled.a`
  text-transform: uppercase;
  color: ${(props: iProps): string => props.theme.colors.navyBlue};
  letter-spacing: 1.5px;

  &::after {
    content: '';
    display: block;
    height: 3px;
    width: 0%;
    background: ${(props: iProps): string => props.theme.colors.orange};
    transition: 300ms all ease-in-out;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    color: ${(props: iProps): string => props.theme.colors.white};
  }
`

export const Profile = styled.div`
  display: none;

  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 9rem;
      width: auto;
      border: 50%;
      display: block;
      margin: 1.5rem 0;
    }
  }
`

export const SocialIcons = styled.div`
  display: none;
  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      margin: 0 0.5rem;
      font-size: 2rem;
    }
  }
`
