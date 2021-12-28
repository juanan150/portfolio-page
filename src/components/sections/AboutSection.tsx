import {
  AboutImage,
  AboutImageContainer,
  AboutTextContainer,
  StyledAboutSection,
} from '../styles/sections/AboutSectionStyles'

import { SectionEnd } from '../styles/common/SectionEnd'

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
          I am Juan Andrés Quiroz, a software developer based in Colombia. I
          develop full-blown web applications using the MERN Stack, and as I
          have more skills in the front-end with React, I am currently studying
          and learning a lot from the back-end witn Node.js and Serverless with
          Firebase.
        </p>
      </AboutTextContainer>
      <SectionEnd />
    </StyledAboutSection>
  )
}

export default AboutSection
