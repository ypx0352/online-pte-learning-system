
import Hero from "components/Hero/Hero"
import { PracticeArea } from "components/PracticeArea/PracticeArea"
import StudyMaterial from "components/StudyMaterial/StudyMaterial"
import React from "react"
import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from "styled-components"
import theme from "styles/theme"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <PracticeArea />
      <StudyMaterial />
    </ThemeProvider>
  )
}

export default App
