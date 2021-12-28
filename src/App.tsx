import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/styles/GlobalStyles'
import NavBar from './components/layout/NavBar'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/layout/Footer'

function App(): JSX.Element {
  const theme = {
    colors: {
      white: 'rgba(240, 247, 255, 1)',
      navyBlue: 'rgba(2,12,27,1)',
      lightNavyBlue: 'rgba(4, 22, 48, 1)',
      green: 'rgba(0, 206, 158, 1)',
      orange: 'rgba(249, 105, 14, 1)',
      purple: 'rgba(102, 51, 153, 1)',
    },
    mobile: '768px',
    transition: 'all 650ms ease-in-out',
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
