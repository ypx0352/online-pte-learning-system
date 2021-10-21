import Footer from "pages/landing-page/components/Footer/Footer"
import Hero from "pages/landing-page/components/Hero/Hero"
import { PracticeArea } from "pages/landing-page/components/PracticeArea/PracticeArea"
import StudyMaterial from "pages/landing-page/components/StudyMaterial/StudyMaterial"
import Testimonial from "pages/landing-page/components/Testimonial/Testimonial"
import { SignUpPage, LoginPage, SignUpSuccPage } from "pages/sign-in-up-page/"
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
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
      <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero />
            <PracticeArea />
            <StudyMaterial />
            <Testimonial />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>
          <Route exact path="/signupsucc">
            <SignUpSuccPage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
