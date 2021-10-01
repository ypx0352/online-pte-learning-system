import React from "react"

import Card from "./Components/Card/Card"
import Subtitle from "./Components/Subtitle/Subtitle"
import Title from "./Components/Title/Title"
import { Container, Wrapper } from "./Testimonial.style"
import { CardContainer } from "./Testimonial.style"

const Testimonial = () => {
  return (
    <Wrapper>
      <Container>
        <Title />
        <Subtitle />
        <CardContainer>
          {/* <Card>
                    items={[{
                        key: 'KEY',
                        avatar: 'dd',
                        userName: 'Bob',
                        cardText: 'dddddd',
                    }]}
                </Card> */}
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </Container>
    </Wrapper>
  )
}

export default Testimonial
