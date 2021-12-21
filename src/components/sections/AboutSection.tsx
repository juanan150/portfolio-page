import {
  AboutImage,
  AboutImageContainer,
  AboutSectionEnd,
  AboutTextContainer,
  StyledAboutSection,
} from '../styles/sections/AboutSectionStyles'

const AboutSection = () => {
  return (
    <StyledAboutSection id="about">
      <AboutImageContainer></AboutImageContainer>
      <AboutImage src="./images/prof-image.png" />
      <AboutTextContainer>
        <div>
          Hello <span>👋</span>
        </div>
        <p>
          I am Juan Andrés, a software developer based in Colombia. I develop
          full-blown web applications using the MERN Stack, and as I have more
          skills in the front-end with React, I am currently studying and
          learning a lot from the back-end witn Node.
        </p>
      </AboutTextContainer>
      <AboutSectionEnd />
    </StyledAboutSection>
  )
}

export default AboutSection
