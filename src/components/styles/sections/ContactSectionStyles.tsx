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

const bounce = keyframes`
0%, 50%, 100% {
  transform: translateY(0);
}
25%, 75% {
  transform: translateY(-20px);
}
`

export const StyledContactSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  width: 100%;
  background: rgba(2, 12, 27, 0.8);
`

export const ContactTitleContainer = styled.div<iProps>`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  color: ${(props: iProps): string => props.theme.colors.white};

  h1 {
    font-size: 2.3rem;
    font-weight: 400;
    white-space: nowrap;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 3rem 10%;

  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    flex-direction: column;
  }
`

export const ContactDescriptionContainer = styled.div<iProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  height: 300px;
  text-align: left;

  & > p {
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }

  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    width: 80%;
    height: auto;
  }
`

export const ContactLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 1.2rem 0;
  font-size: 1.2rem;
`

export const ContactLink = styled.a<iProps>`
  ${(props: iProps): string => props.theme.colors.purple} 100%;
  margin-right: 1.5rem;

  svg {
    margin-right: 5px;
  }
`

export const ContactImageContainer = styled.div`
  width: 40%;
  height: 300px;

  img {
    width: 100%;
    margin: 0 auto;
    max-height: 230px;
    animation: ${bounce} 6s ease-in-out infinite;
  }

  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    margin-top: 20px;
  }
`
