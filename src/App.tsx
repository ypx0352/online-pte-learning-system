import Footer from "pages/landing-page/components/Footer/Footer"
import Hero from "pages/landing-page/components/Hero/Hero"
import { PracticeArea } from "pages/landing-page/components/PracticeArea/PracticeArea"
import Login from "pages/landing-page/components/sign-in-up-page"
import StudyMaterial from "pages/landing-page/components/StudyMaterial/StudyMaterial"
import Testimonial from "pages/landing-page/components/Testimonial/Testimonial"
import React from "react"
import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from "styled-components"
import theme from "styles/theme"

import Navbar from "./pages/landing-page/components/Navbar/Navbar"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <PracticeArea />
      <StudyMaterial />
      <Testimonial />
      <Footer />
    </ThemeProvider>
  )
}

export default App
