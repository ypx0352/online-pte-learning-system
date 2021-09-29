import React from 'react'
import { Container } from './Card.style'
import { Information } from './Card.style'
import { Avatar } from '@mui/material'
import { UserName } from './Card.style'
import { Rating } from './Card.style'
import { CardText } from './Card.style'
import StarRateIcon from '@material-ui/icons/StarRate'

const Card = ({
    // items,
}) => {
    return (
        <Container>
        {/* {items.map(({
            key,
            avatar,
            userName,
            rating,
            cardText,
        }) => (
            <> */}
                <Information>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"></Avatar>
                    <UserName>Viezh Rober {'\n'} Warsay, Poland </UserName>
                    <Rating>
                        4.5 <StarRateIcon sx={{color:'#FEA250'}} />
                    </Rating>
                </Information>
                <CardText>Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard.</CardText>
            {/* </>
        )
        )} */}
    </Container>
    )  
}

export default Card