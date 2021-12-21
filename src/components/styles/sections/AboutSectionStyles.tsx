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

const rotate = keyframes`
from{
    transform: rotate(0deg)
}
to{
    transform: rotate(360deg)
}
`

const rotateHand = keyframes`
0%, 30%, 60%{
    transform: rotate(0deg)
}
15%, 45%{
    transform: rotate(20deg)
}
`

export const StyledAboutSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  text-align: center;
  padding: 0 15%;
  width: 100%;
  height: 70vh;
  background: rgba(2, 12, 27, 0.8);

  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    flex-direction: column;
  }
`

export const AboutImageContainer = styled.div<iProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  z-index: 1;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.orange} 0%,
    ${(props) => props.theme.colors.green} 50%,
    ${(props) => props.theme.colors.purple} 100%
  );
  animation: ${rotate} 4s linear infinite;
  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    height: 170px;
    width: 170px;
    margin: 30px;
  }
`

export const AboutImage = styled.img`
  width: 190px;
  position: absolute;
  top: calc(50% - 95px);
  left: calc(15% + 5px);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 5px solid rgba(2, 12, 27, 0.8);
  z-index: 2;
  object-fit: cover;
  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    width: 160px;
    top: 35px;
    left: calc(50% - 80px);
  }
`

export const AboutTextContainer = styled.div<iProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 200px);
  max-width: 58rem;
  padding-left: 3rem;
  color: ${(props: iProps): string => props.theme.colors.white};

  div {
    font-size: 2.3rem;
    font-weight: 400;
    white-space: nowrap;
    margin-bottom: 1rem;

    span {
      display: inline-block;
      animation: ${rotateHand} 2s infinite 6s;
    }
  }

  p {
    text-align: left;
    font-size: 1.2rem;
  }

  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    padding-left: 0;
    width: 80%;
    min-width: 320px;
  }
`
