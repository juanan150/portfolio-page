import styled from 'styled-components'

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

export const StyledProjectsSection = styled.section`
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

export const ProjectsTitleContainer = styled.div<iProps>`
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
    font-size: 1.2rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
  }
`

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 3rem 5%;
  perspective: 1000px;

  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    flex-direction: column;
  }
`

export const ProjectImageContainer = styled.div<iProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  max-width: 400px;
  height: 35%;
  min-height: 250px;
  margin: 0 5%;
  transition: ${(props: iProps): string => props.theme.transition};
  transform: rotateY(30deg);

  &:hover {
    transform: rotateY(0deg);
  }

  &:hover #background {
    transform: rotate(3deg);
  }

  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    width: 70%;
    transform: rotateY(0deg);
    margin-bottom: 20px;
  }
`

export const ProjectImageDark = styled.div`
  width: 100%;
  height: 100%;
  min-height: 250px;
  background: #000;
  border-radius: 20px;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.3rem;
    font-weight: 700;
    letter-spacing: 0.5rem;
    color: #f3003f;
    margin-bottom: 0.5rem;
  }

  img {
    width: 85%;
    margin: 0 auto;
    max-height: 175px;
  }
`

export const ProjectImageBackground = styled.div<iProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 250px;
  background: linear-gradient(
    to right,
    ${(props: iProps): string => props.theme.colors.orange} 0%,
    ${(props: iProps): string => props.theme.colors.purple} 100%
  );
  border-radius: 20px;
  transform: rotate(-3deg);
  z-index: -1;
  transition: ${(props: iProps): string => props.theme.transition};
`

export const ProjectDescriptionContainer = styled.div<iProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 40%;
  height: 300px;
  text-align: left;

  h3 {
    font-size: 2rem;
    margin: 1rem 0;
    background: linear-gradient(
      to right,
      ${(props: iProps): string => props.theme.colors.orange} 0%,
      ${(props: iProps): string => props.theme.colors.purple} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & > p {
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }

  @media (max-width: ${(props: iProps): string => props.theme.mobile}) {
    width: 70%;
    height: auto;
  }
`

export const ProjectTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem 0;
`

export const ProjectTag = styled.p<iProps>`
  margin-right: 0.5rem;
  padding: 0.3rem;
  color: ${(props) => props.theme.colors.white};
  background: rgba(0, 64, 77, 0.9);
  border-radius: 3px;
  font-size: 0.9rem;
`

export const ProjectLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
`

export const ProjectLink = styled.a<iProps>`
  ${(props: iProps): string => props.theme.colors.purple} 100%;
  margin-right: 1.5rem;

  svg {
    margin-right: 5px;
  }
`
