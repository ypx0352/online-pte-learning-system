import Hero from "components/Hero/Hero"
import { PracticeArea } from "components/PracticeArea/PracticeArea"
import StudyMaterial from "components/StudyMaterial/StudyMaterial"
import React from "react"

import NavBar from "./components/Navbar/Navbar"

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
