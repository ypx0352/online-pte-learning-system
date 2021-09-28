import Hero from "components/Hero/Hero"
import StudyMaterial from "components/StudyMaterial/StudyMaterial"
import React from "react"

import NavBar from "./components/Navbar/Navbar"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <StudyMaterial />
    </ThemeProvider>
  )
}

export default App
