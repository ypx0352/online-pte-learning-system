import {
  LoginWrapper,
  LoginContainer,
  LoginTitle,
  HeroImage,
  ImageContainer,
  InputContainer,
  LoginInput,
  SubmitButton,
  StyledSubtitleLg
} from "pages/sign-in-up-page/style"
import heroImage from "assets/images/hero/Hero.png"

const SignUpSuccPage = () => {
  return (
    <LoginWrapper>
      <LoginContainer>
        <InputContainer>
          <LoginTitle>Sign up successfully</LoginTitle>
          <LoginInput className="signupsucc">
            <StyledSubtitleLg>Welcome to Cuckoo!</StyledSubtitleLg>
            <StyledSubtitleLg className="green">Cindy</StyledSubtitleLg>
            <SubmitButton href="/login">SIGN IN NOW</SubmitButton>
          </LoginInput>
        </InputContainer>
        <ImageContainer>
          <HeroImage src={heroImage} />
        </ImageContainer>
      </LoginContainer>
    </LoginWrapper>
  )
}
export default SignUpSuccPage
