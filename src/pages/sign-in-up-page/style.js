import heroBackground from "assets/images/hero/group.png"
import heroImage from "assets/images/hero/Hero.png"
import styled from "styled-components"
import { StyledButton } from "styles/button"

const LoginWrapper = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  padding: 0;
  min-height: 400px;
  background-image: url(${heroBackground});
  background-position: top;
  background-size: cover;
  padding: ${(props) => props.theme.margin.padding_section};
  @media (max-width: 768px) {
    background-repeat: no-repeat;
    background-size: auto 500px;
    background-position: bottom;
  }
`

const LoginContainer = styled.div`
  display: flex;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => props.theme.margin.max_width};
  padding: ${(props) => props.theme.margin.container_padding};
  margin: auto;
`

const ImageContainer = styled.div`
  flex-basis: 300px;
  flex-grow: 2;
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-basis: 300px;
  flex-grow: 3;
  margin-right: 1rem;
`

const HeroImage = styled.img`
  width: 100%;
  object-fit: contain;
`

const PracticeNowButton = styled(StyledButton)`
  && {
    margin: 2rem 0;
  }
`
const StyledH5 = styled.h5`
  && {
    font-size: ${(props) => props.theme.fontsize.subtitle};
    font-weight: 500;
  }
`

const StyledH2 = styled.h2`
  && {
    font-size: ${(props) => props.theme.fontsize.title_lg};
  }
`

const StyledP = styled.p`
  && {
    font-size: ${(props) => props.theme.fontsize.paragraph};
    color: ${(props) => props.theme.color.text_gray};
  }
`

export { LoginWrapper, LoginContainer }
