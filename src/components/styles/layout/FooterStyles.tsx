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

export const StyledFooterSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  width: 100%;
  height: 25vh;
  background: rgba(2, 12, 27, 0.8);
`

export const FooterList = styled.ul<iProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-sixe: 14px;
  flex-wrap: wrap;
`

export const FooterItem = styled.li<iProps>`
  margin: 0.2rem 0.7rem;
`

export const FooterLink = styled.a<iProps>`
  color: ${(props: iProps): string => props.theme.colors.green};
  transition: 300ms all ease-in-out;
`

export const FooterTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;

  p {
    color: rgb(126, 145, 174);
    margin: 0.2rem 0;
  }
`
