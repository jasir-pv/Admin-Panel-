import { Visibility } from "@mui/icons-material"
import "./widgetsSm.css"

export default function WidgetsSm() {
  return (
    <div className="widgetsSm">
      <span className="widgetTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItems">
                <img src="" alt="" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername"> Anna keller</span>
                    <span className="widgetSmUserTitle">Softwear Engineer</span>

                </div>
                <button className="widgetSmButton">
                    <Visibility/>
                    Display
                </button>
        </li>
      </ul>
    </div>
  )
}
