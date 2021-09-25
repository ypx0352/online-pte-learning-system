import "./PracticeAreaCard.css"

// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";
// import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import CreateIcon from "@mui/icons-material/Create"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faArrowRight, faBookOpen, faEdit, faHeadphones, faMicrophone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
library.add(faMicrophone, faHeadphones, faBookOpen, faEdit, faArrowRight)

export const PracticeAreaCard = (props) => {
  // const IconGraph = () => {
  //     switch(props.info.title){
  //         case'Speaking':
  //             return <SettingsVoiceIcon fontSize="small" sx={{ color: "white"}} />
  //         case 'Listening':
  //             return <HeadphonesOutlinedIcon  fontSize="small" sx={{ color: "white"}} />

  //         case 'Reading':
  //             return <MenuBookIcon fontSize="small" sx={{ color: "white"}} />

  //         case 'Writing':
  //             return <CreateIcon fontSize="small" sx={{ color: "white"}} />

  //         default:
  //             return <div></div>
  //     }
  // }

  return (
    <div className="PracticeAreaCard">
      <div className="CardIcon">
        <FontAwesomeIcon icon={["fas", props.info.icon]} size="lg" color="white" />
      </div>
      <div className="CardTitle">{props.info.title}</div>
      <div className="CardContent">Weekly Update</div>
      <div className="CardPractice">
        <div className="CardPracticWord">PRACTICE</div>
        <FontAwesomeIcon icon={faArrowRight} />
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
