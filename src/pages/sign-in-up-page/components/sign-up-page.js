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

const SignUpPage = () => {
  return (
    <LoginWrapper>
      <LoginContainer>
        <InputContainer>
          <LoginTitle>Create an account</LoginTitle>
          <LoginInput className="signup">
            <InputItem type="text" placeholder="Name" />
            <InputItem type="email" placeholder="Email" />
            <InputItem type="password" placeholder="Password" />
            <InputItem type="password" placeholder="Password Confirm" />
            <SubmitButton href="/signupsucc">Sign up</SubmitButton>
            <TextContainer>
              <StyledPSmall>
                By Clicking SIGN UP, you agree to our terms and have read and acknowledge our Privacy Statement.
              </StyledPSmall>
            </TextContainer>
            <TextContainer>
              <StyledPSmall>Already have an account? </StyledPSmall>
              <SytledA href="/login">Sign In Now</SytledA>
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
export default SignUpPage
