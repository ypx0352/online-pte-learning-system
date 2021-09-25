import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import heroImage from "assets/images/hero/Hero.png"
import line from "assets/images/hero/line.png"
import patter3 from "assets/images/hero/pattern3.png"
import waveImage1 from "assets/images/hero/wave1.png"
import waveImage2 from "assets/images/hero/wave2.png"
import styled from "styled-components"
import { StyledButton } from "styles/button"

const HeroWrapper = styled.div`
  // position: absolute;
  height: auto;
  padding: 2rem 0;
  min-height: 400px;
`

const HeroContainer = styled.div`
  display: flex;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: ${(props) => props.theme.margin.container};
`

const ImageContainer = styled.div`
  flex-basis: 330px;
  flex-grow: 2;
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-basis: 330px;
  flex-grow: 3;
  margin: 1rem;
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

const BackgroundWave = styled.img<{ fullWidth?: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  object-fit: cover;
  object-position: 100% 0;
  width: ${(props) => (props.fullWidth ? "100vw" : "75vw")};
  max-height: 300px;
  z-index: -1;
`

const BackgroundElement = styled.img<{ left?: string; right?: string; bottom?: string; width?: string }>`
  position: absolute;
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: ${(props) => props.width};
  object-fit: cover;
  z-index: -1;
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

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroContent>
          <StyledH5>The Best PTE Education</StyledH5>
          <StyledH2>Practice PTE Real Exam Questions for FREE</StyledH2>
          <StyledP>Join 100,000 PTE test takers to practice and share the latest exam questions.</StyledP>
          <PracticeNowButton variant="contained" endIcon={<ArrowForwardRoundedIcon />} disableElevation>
            Practice Now
          </PracticeNowButton>
        </HeroContent>
        <ImageContainer>
          <HeroImage src={heroImage} alt="cool kid study image" />
        </ImageContainer>
      </HeroContainer>
      <BackgroundWave fullWidth={false} src={waveImage2}></BackgroundWave>
      <BackgroundWave fullWidth={true} src={waveImage1}></BackgroundWave>
      <BackgroundElement bottom={"45vh"} right={"0"} width={"75vw"} src={line}></BackgroundElement>
      <BackgroundElement bottom={"38vh"} right={"40vw"} width={"3rem"} src={patter3}></BackgroundElement>
    </HeroWrapper>
  )
}

export default Hero
