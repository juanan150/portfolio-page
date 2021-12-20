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
  primary?: boolean
  margin?: string
}

export const CTAButton = styled.a<iProps>`
  background: ${(props: iProps): string =>
    props.primary ? props.theme.colors.green : 'none'};
  color: ${(props: iProps): string =>
    props.primary ? props.theme.colors.white : props.theme.colors.green};
  padding: 10px 20px;
  margin: ${(props: iProps): string => props.margin || '0'};
  border: 2px solid ${(props: iProps): string => props.theme.colors.green};
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  transition: ${(props: iProps): string => props.theme.transition};

  &:hover {
    background: ${(props: iProps): string =>
      props.primary ? props.theme.colors.orange : 'none'};
    color: ${(props: iProps): string =>
      props.primary ? props.theme.colors.white : props.theme.colors.orange};
    border: 2px solid ${(props: iProps): string => props.theme.colors.orange};
  }
`
