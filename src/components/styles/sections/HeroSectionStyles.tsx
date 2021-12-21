import styled, { keyframes } from 'styled-components'

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
}

const typing = keyframes`
from{
    width: 0ch;
    color: rgba(249, 105, 14, 1);
},
to{
    width: 36ch
}`

const blink = keyframes`
from{
    border-right: 4px solid rgba(255, 255, 255, 0);
},
to{
    border-right: 4px solid rgba(255, 255, 255, 1);
}`

const bounce = keyframes`
0%, 20%, 50%, 80%, 100%{
    transform: translateY(0)
}
40%{
    transform: translateY(-30px)
}
60%{
    transform: translateY(-15px)
}
`

const rotate = keyframes`
from{
    transform: rotate(0deg)
}
to{
    transform: rotate(360deg)
}
`

export const StyledHeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  width: 100%;
  height: 90vh;
  background: linear-gradient(
      135deg,
      rgba(0, 64, 77, 0.9) 0%,
      rgba(2, 12, 27, 0.8) 100%
    ),
    url('./images/landing-page-bg.svg') center;
  background-size: contain;
  background-repeat: no-repeat;
`

export const HeroContent = styled.div`
  width: 100%;
  max-width: 58rem;
  color: ${(props: iProps): string => props.theme.colors.white};
  text-transform: uppercase;

  h1 {
    width: 37ch;
    letter-spacing: 1.2rem;
    font-size: 2rem;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    margin: auto;
    animation: ${typing} 5s steps(36), ${blink} 1s ease-in-out infinite;
    border-right: 4px solid #fefefe;
  }

  h3 {
    font-size: 4rem;
    margin: 1.5rem 0;
    background: linear-gradient(
      to right,
      ${(props: iProps): string => props.theme.colors.orange} 0%,
      ${(props: iProps): string => props.theme.colors.purple} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.7rem;
    font-weight: 400;
    text-transform: none;
  }

  div {
    margin: 2.5rem 0;
  }

  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    h1 {
      letter-spacing: 1rem;
      font-size: 1.5rem;
      width: 24ch;
    }
    h3 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
`

export const StyleArrowDown = styled.a`
  position: absolute;
  bottom: 50px;
  svg {
    font-size: 30px;
    color: ${(props: iProps): string => props.theme.colors.white};
    animation: ${bounce} 2s infinite 4s;

    &:hover {
      color: ${(props: iProps): string => props.theme.colors.orange};
    }
  }
`

export const HeroSocialIcons = styled.div`
  position: fixed;
  right: 20px;
  z-index: 10;
  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    bottom: 50px;
  }
`

export const SocialIcon = styled.a`
  height: 3.5rem;
  width: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(249, 105, 14, 0.1);
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 10px;

  svg {
    color: rgba(249, 105, 14);
    transition: ${(props: iProps): string => props.theme.transition};
  }

  &:hover {
    svg {
      color: ${(props: iProps): string => props.theme.colors.white};
      animation: ${rotate} 1.5s linear infinite;
    }
  }

  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    height: 2rem;
    width: 2rem;
  }
`
