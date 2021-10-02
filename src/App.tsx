import Footer from "components/Footer/Footer"
import Hero from "components/Hero/Hero"
import { PracticeArea } from "components/PracticeArea/PracticeArea"
import StudyMaterial from "components/StudyMaterial/StudyMaterial"
import Testimonial from "components/Testimonial/Testimonial"
import React from "react"
import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from "styled-components"
import theme from "styles/theme"

import Navbar from "./components/Navbar/Navbar"

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
