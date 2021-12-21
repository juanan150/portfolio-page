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

export const SectionEnd = styled.hr<iProps>`
  width: 70%;
  height: 2px;
  position: absolute;
  bottom: 0;
  margin-top: 30px;
  background: linear-gradient(
    to right,
    ${(props: iProps): string => props.theme.colors.orange} 0%,
    ${(props: iProps): string => props.theme.colors.purple} 100%
  );
`
