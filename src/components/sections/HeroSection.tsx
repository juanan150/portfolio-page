import { CTAButton } from '../styles/common/CTAButtonStyles'
import {
  HeroContent,
  HeroSocialIcons,
  StyleArrowDown,
  StyledHeroSection,
  SocialIcon,
} from '../styles/sections/HeroSectionStyles'

import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <HeroContent>
        <h1>Juan Andres Quiroz</h1>
        <h3>{'{Full Stack Web Developer}'}</h3>
        <p>JavaScript . React . Node.js</p>
        <div>
          <CTAButton href="#projects">Projects</CTAButton>
        </div>
      </HeroContent>
      <StyleArrowDown href="#about">
        <FaArrowDown />
      </StyleArrowDown>
      <HeroSocialIcons>
        <SocialIcon href="https://github.com/juanan150" target="_blank">
          <FaGithub />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/juan-andres-quiroz/"
          target="_blank"
        >
          <FaLinkedin />
        </SocialIcon>
      </HeroSocialIcons>
    </StyledHeroSection>
  )
}

export default HeroSection
