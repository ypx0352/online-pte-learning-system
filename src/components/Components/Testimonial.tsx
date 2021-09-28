import React from "react";
import Title from "./Components/Title/Title";
import Subtitle from "./Components/Subtitle/Subtitle";
import Card from './Components/Card/Card'
import { Container }from './Testimonial.style'
import { CardContainer } from "./Testimonial.style";


const Testimonial = () => {
    return (
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
    )
};

export default Testimonial;