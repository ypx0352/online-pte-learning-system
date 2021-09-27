import styled from "styled-components"

import { PracticeAreaCards } from "./Components/PracticeAreaCard/PracticeAreaCard"
import { WeeklyPredictionCard } from "./Components/WeeklyPredictionCard/WeeklyPredictionCard"
const PracticeAreaStyle = styled.div`
   {
    background-color: #eeeded;
  }
`
const PracticeAreaTitle = styled.div`
   {
    padding: 20px 5px;
    width: 300px;
    font-size: 30px;
    font-weight: 700;
    border-bottom: 5px solid;
    border-color: #bfeee9;
  }
`

export const PracticeArea = () => {
  return (
    <PracticeAreaStyle>
      <PracticeAreaTitle>PTE Oline Practice</PracticeAreaTitle>
      <PracticeAreaCards />
      <WeeklyPredictionCard />
    </PracticeAreaStyle>
  )
}
