import "./PracticeAreaCard.css"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CreateIcon from "@mui/icons-material/Create"
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice"

export const PracticeAreaCard = (props) => {
  const IconGraph = () => {
    switch (props.info.title) {
      case "Speaking":
        return <SettingsVoiceIcon fontSize="large" sx={{ color: "white" }} />
      case "Listening":
        return <HeadphonesOutlinedIcon fontSize="large" sx={{ color: "white" }} />

      case "Reading":
        return <MenuBookIcon fontSize="large" sx={{ color: "white" }} />

      case "Writing":
        return <CreateIcon fontSize="large" sx={{ color: "white" }} />

      default:
        return <div></div>
    }
  }

  return (
    <div className="PracticeAreaCard">
      <div className="CardIcon">
        <IconGraph />
      </div>
      <div className="CardTitle">{props.info.title}</div>
      <div className="CardContent">Weekly Update</div>
      <div className="CardPractice">
        <div className="CardPracticWord">PRACTICE</div>
        <ArrowForwardIcon />
      </div>
    </div>
  )
}

export const PracticeAreaCards = () => {
  const info = [
    { title: "Speaking", icon: "microphone", url: "" },
    { title: "Listening", icon: "headphones", url: "" },
    { title: "Reading", icon: "book-open", url: "" },
    { title: "Writing", icon: "edit", url: "" }
  ]

  const cards = info.map((item) => {
    return <PracticeAreaCard info={item} key={item.title} />
  })

  return <div className="PracticeAreaCards">{cards}</div>
}
