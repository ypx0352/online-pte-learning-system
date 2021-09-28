<<<<<<< HEAD
||||||| d0894a6
import Hero from "components/Hero/Hero"
=======
import Hero from "components/Hero/Hero"
import StudyMaterial from "components/StudyMaterial/StudyMaterial"
>>>>>>> d03a1c9da6f31db027df22523c8a72e195bfebce
import React from "react"

import NavBar from "./components/Navbar/Navbar"

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <NavBar />
    </div>
||||||| d0894a6
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
    </ThemeProvider>
=======
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <StudyMaterial />
    </ThemeProvider>
>>>>>>> d03a1c9da6f31db027df22523c8a72e195bfebce
  )
}

export default App
