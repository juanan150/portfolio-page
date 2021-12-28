import {
  ContactContainer,
  ContactDescriptionContainer,
  ContactImageContainer,
  ContactLink,
  ContactLinksContainer,
  ContactTitleContainer,
  StyledContactSection,
} from '../styles/sections/ContactSectionStyles'
import { IoMail } from 'react-icons/io5'
import { FaLinkedin } from 'react-icons/fa'

import { SectionEnd } from '../styles/common/SectionEnd'

const ContactSection = () => {
  return (
    <StyledContactSection id="contact">
      <ContactTitleContainer>
        <h1>Contact</h1>
        <p>Get in touch</p>
      </ContactTitleContainer>
      <ContactContainer>
        <ContactDescriptionContainer>
          <p>
            Feel free to contact me through any of the links below. I am always
            open to discussing new projects and opportunities.
          </p>
          <ContactLinksContainer>
            <ContactLink href="mailto:juanan0309@gmail.com" target="_blank">
              <IoMail />
              juanan0309@gmail.com
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/juan-andres-quiroz/"
              target="_blank"
            >
              <FaLinkedin />
              LinkedIn
            </ContactLink>
          </ContactLinksContainer>
        </ContactDescriptionContainer>
        <ContactImageContainer>
          <img src="/images/email.svg" alt="contact" />
        </ContactImageContainer>
      </ContactContainer>
      <SectionEnd />
    </StyledContactSection>
  )
}

export default ContactSection
