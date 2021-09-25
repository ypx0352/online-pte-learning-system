import "./WeeklyPredictionCard.css"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

export const PredictionCard = (props) => {
  return (
    <div className="PredictionCard">
      <div className="PredictionNum">{props.info.Num}</div>
      <div className="PredictionType">{props.info.Type}</div>
    </div>
  )
}

export const WeeklyPredictionCard = () => {
  const info = [
    { Type: "New", Num: "88" },
    { Type: "Predict", Num: "1120" },
    { Type: "Update", Num: "67" },
    { Type: "Repeat", Num: "60%" }
  ]
  const cards = info.map((item) => {
    return <PredictionCard info={item} key={item.Type} />
  })
  return (
    <div className="WeeklyPredictionCard">
      <div className="WeeklyPredictionCardDate">Weekly Prediction 13/09 - 19/09</div>
      <div className="WeeklyPredictionArea">{cards}</div>
      <div className="PredictionPractice">
        <div className="PredictionPracticWord">PRACTICE NOW</div>
        <ArrowForwardIcon fontSize="small" />
      </div>
    </div>
  )
}
