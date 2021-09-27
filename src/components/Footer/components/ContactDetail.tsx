import AddIcon from "@mui/icons-material/Add"
import styled from "styled-components"

const DetailWrapper = styled.div`
  margin: 0 20px;
`

const DetailDownlist = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 20px;
    border-bottom: 1px solid #ffffff;
    display: flex;
    justify-content: space-between;

    &:hover {
      cursor: pointer;
    }
  }
`

const DetailTitle = styled.h3`
  font-size: 1.25rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const DetailContent = styled.ul`
  list-style-type: none;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const StyledLi = styled.li`
  padding: 5px 0;
`

const StyledA = styled.a`
  color: #a1a1a6;
  text-decoration: none;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`

const ADD = styled(AddIcon)`
  position: relative;
  top: 5px;
`

const ContactDetail = (props: { title: string; line1: string; line2: string; line3: string }) => {
  return (
    <DetailWrapper>
      <DetailDownlist>
        {props.title}
        <span>
          <ADD />
        </span>
      </DetailDownlist>
      <DetailTitle>{props.title}</DetailTitle>
      <DetailContent>
        <StyledLi>
          <StyledA href="#">{props.line1}</StyledA>
        </StyledLi>
        <StyledLi>
          <StyledA href="#">{props.line2}</StyledA>
        </StyledLi>
        <StyledLi>
          <StyledA href="#">{props.line3}</StyledA>
        </StyledLi>
      </DetailContent>
    </DetailWrapper>
  )
}

export default ContactDetail
