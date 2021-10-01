import styled from "styled-components"

export const Container = styled.div`
  background-color: white;
  flex-basis: 250px;
  flex-grow: 1;
  z-index: 99;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 15px;
`

export const Information = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Avatar = styled.img`
  width: 25px;
  height: 25px;
`

export const UserName = styled.div`
  white-space: pre-line;
`

export const Rating = styled.div``

export const CardText = styled.p`
  max-width: 300px;
  margin-left: 20px;
  margin-right: 20px;
  word-wrap: break-word;
`
