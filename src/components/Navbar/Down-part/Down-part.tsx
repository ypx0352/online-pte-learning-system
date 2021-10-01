import { KeyboardArrowDown as KeyboardArrowDownIcon } from "@material-ui/icons"
import styled from "styled-components"

const DIV = styled.div`
  max-width: 1440px;
  height: 72px;
  position: relative;
  background-color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.margin.container_padding};
  margin: auto;
`
const STRONG = styled.strong`
  position: relative;
  font-size: ${(props) => props.theme.fontsize.title_sm};
  color: white;
`
const UL = styled.ul`
  width: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  font-size: ${(props) => props.theme.fontsize.button};
  color: white;
  list-style: none;
  && {
    margin: 0;
    padding: 0.5rem 0;
  }
`

const LI = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.theme.margin.item};
`

const ALink = styled.a<{ white?: boolean }>`
  position: relative;
  text-decoration: none;
  font-weight: bold;
  ${({ white }) => (white ? "background-color: white; color: black" : "background-color:#3BCBBE; color: white")};
  border-radius: 10px;
  padding: 15px;
`
const NavbarWrapper = styled.div`
  background-color: ${(props) => props.theme.color.primary};
`

const Down = () => (
  <NavbarWrapper>
    <DIV>
      <STRONG>Cuckoo</STRONG>
      <UL>
        <LI>
          <ALink href="#">Home</ALink>
        </LI>
        <LI>
          <ALink href="#" className="title">
            PTE Practice
          </ALink>
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </LI>
        <LI>
          <ALink href="#">Login</ALink>
        </LI>
        <LI>
          <ALink href="#" white>
            Sign up
          </ALink>
        </LI>
      </UL>
    </DIV>
  </NavbarWrapper>
)

export default Down
