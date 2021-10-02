import styled from 'styled-components'

export const Container = styled.div`
background-color: ${(props) => props.theme.color.background_color};
padding: ${(props) => props.theme.margin.padding_section};
`

export const Box = styled.div`
max-width: 1440px;
margin: auto;
padding: ${(props) => props.theme.margin.container_padding};
`