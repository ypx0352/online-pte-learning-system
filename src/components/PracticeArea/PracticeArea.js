import "./PracticeArea.css"

import { PracticeAreaCards } from "./Components/PracticeAreaCard/PracticeAreaCard"
import { WeeklyPredictionCard } from "./Components/WeeklyPredictionCard/WeeklyPredictionCard"

export const PracticeArea = () => {
  return (
    <div className="PracticeArea">
      <div className="PracticeAreaTitle">PTE Oline Practice</div>
      <PracticeAreaCards />
      <WeeklyPredictionCard />
    </div>
  )
}
