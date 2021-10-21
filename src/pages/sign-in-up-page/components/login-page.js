import {
  LoginWrapper,
  LoginContainer,
  LoginTitle,
  HeroImage,
  ImageContainer,
  InputContainer,
  LoginInput,
  InputItem,
  SubmitButton,
  StyledPSmall,
  SytledA,
  TextContainer
} from "pages/sign-in-up-page/style"
import heroImage from "assets/images/hero/Hero.png"

const LoginPage = () => {
  return (
    <LoginWrapper>
      <LoginContainer>
        <InputContainer>
          <LoginTitle>Sign In</LoginTitle>
          <LoginInput className="login">
            <InputItem type="email" placeholder="Email" />
            <InputItem type="password" placeholder="Password" />
            <SubmitButton>Sign In</SubmitButton>
            <TextContainer>
              <StyledPSmall>Don't have an account? </StyledPSmall>
              <SytledA href="/signup">Sign up</SytledA>
            </TextContainer>
          </LoginInput>
        </InputContainer>
        <ImageContainer>
          <HeroImage src={heroImage} />
        </ImageContainer>
      </LoginContainer>
    </LoginWrapper>
  )
}

export default LoginPage
