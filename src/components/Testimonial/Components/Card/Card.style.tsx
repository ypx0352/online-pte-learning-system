import styled from 'styled-components'

export const Container = styled.div`
background-color: white;
z-index: 99;
max-width: 370px;
max-height: 215px;
border-radius: 5%;
`

export const Information = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
padding-right: 40px;
padding-left: 40px;
padding-top: 20px;
color: ${(props) => props.theme.color.text_dark};
`

export const UserDetail = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 177px;
max-height: 46px;
`

export const Avatar = styled.img`

`

export const UserName = styled.h3`
/* white-space: pre-line; */
padding-left: 20px;
`
export const Address = styled.h6`
margin: 0;
font-weight: 200;
`

export const Rating = styled.div`
display: flex;
align-items: center;
`

export const CardText = styled.div`
word-wrap: break-word;
max-width: 315px;
max-height: 93px;
padding-top: 20px;
padding-right: 40px;
padding-left: 40px;
padding-bottom: 40px;
font-size: ${(props) => props.theme.fontsize.paragraph};
color: ${(props) => props.theme.color.text_dark};
`