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

const ContactSection = () => {
  return (
    <StyledContactSection>
      <ContactTitleContainer>
        <h1>Contact</h1>
        <p>Get in touch</p>
      </ContactTitleContainer>
      <ContactContainer>
        <ContactDescriptionContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga
            aspernatur veniam! Illum possimus quos ducimus saepe consectetur
            quisquam suscipit facere nobis soluta eum quas, ea tempore quae
            incidunt modi!
          </p>
          <ContactLinksContainer>
            <ContactLink href="mailto:juanan0309@gmail.com" target="_blank">
              <IoMail />
              juanan0309@gmail.com
            </ContactLink>
          </ContactLinksContainer>
        </ContactDescriptionContainer>
        <ContactImageContainer>
          <img src="/images/email.svg" alt="contact" />
        </ContactImageContainer>
      </ContactContainer>
    </StyledContactSection>
  )
}

export default ContactSection
