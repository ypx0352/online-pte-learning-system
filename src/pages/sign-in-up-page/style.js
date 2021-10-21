import heroBackground from "assets/images/hero/group.png"
import styled from "styled-components"
import { StyledButton } from "styles/button"

export const LoginWrapper = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  padding: 0;
  min-height: 400px;
  //background-image: url(${heroBackground});
  background-position: top;
  background-size: cover;
  padding: ${(props) => props.theme.margin.padding_section};
  background: ${(props) => props.theme.color.background_color};
  @media (max-width: 768px) {
    background-repeat: no-repeat;
    background-size: auto 500px;
    background-position: bottom;
  }
`
export const LoginContainer = styled.div`
  display: flex;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => props.theme.margin.max_width};
  padding: ${(props) => props.theme.margin.container_padding};
  margin: auto;
`
export const InputContainer = styled.div`
  order: 2;
  display: flex;
  height: auto;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: ${(props) => props.theme.margin.input_margin};
`
export const LoginTitle = styled.div`
  order:1
  padding: ${(props) => props.theme.margin.padding_section};  
  font-size: ${(props) => props.theme.fontsize.title};
  font-weight: 700;
  border-bottom: 5px solid;
  border-color: ${(props) => props.theme.color.secondary};
  flex-basis: 50px;
`
export const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.color.login_input_background};
  width: 600px;
  margin: ${(props) => props.theme.margin.margin_content};
  padding: ${(props) => props.theme.margin.input_padding};
  box-sizing: border-box;
  border: none;
  border-radius: 15px;
  &.signup {
    height: 491px;
  }
  &.login {
    height: 327px;
  }
  &.signupsucc {
    height: 306px;
  }
`
export const InputItem = styled.input`
  border: none;
  outline: none;
  border-bottom: 1.5px solid;
  border-color: ${(props) => props.theme.color.text_gray};
  ::placeholder {
    color: ${(props) => props.theme.color.text_gray};
    font-size: ${(props) => props.theme.fontsize.caption};
  }
`
export const ImageContainer = styled.div`
  order: 1;
  flex-basis: 300px;
  flex-grow: 2;
`

export const HeroImage = styled.img`
  width: 100%;
  object-fit: contain;
`
export const SubmitButton = styled(StyledButton)``

export const TextContainer = styled.div`
  text-align: center;
`
export const StyledPSmall = styled.p`
  && {
    display: inline;
    font-size: ${(props) => props.theme.fontsize.caption};
    color: ${(props) => props.theme.color.accent};
    font-weight: bold;
  }
`
export const SytledA = styled.a`
  display: blcok;
  // margin: ${(props) => props.theme.margin.text_margin};
  font-size: ${(props) => props.theme.fontsize.caption};
  color: ${(props) => props.theme.color.primary};
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`
export const StyledSubtitleLg = styled.p`
  font-size: ${(props) => props.theme.fontsize.subtitle_lg};
  font-weight: 700;
  text-align: center;
  &.green {
    color: ${(props) => props.theme.color.primary};
  }
`
