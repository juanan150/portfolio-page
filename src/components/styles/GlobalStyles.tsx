import { createGlobalStyle } from 'styled-components'

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
  }
}

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
    font-family: 'Share Tech Mono', monospace;
    color: ${(props: iProps): string => props.theme.colors.white};
    background: ${(props: iProps): string => props.theme.colors.navyBlue};
    font-sixe: 12px;
    scroll-behavior: smooth;
}

a {
    text-decoration: none;
    color: ${(props: iProps): string => props.theme.colors.green};
    transition: all 250ms ease-in.out;

    &:hover{
        color: ${(props: iProps): string => props.theme.colors.orange};
    }
}

ul{
    list-style: none;
}

hr{
    background: linear-gradient(
        to right,
        ${(props): string => props.theme.colors.orange} 0%,
        ${(props): string => props.theme.colors.purple} 100%
    );
    border: 0;
    height: 1px;
}
`
