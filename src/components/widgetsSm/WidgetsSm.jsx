import { Visibility } from "@mui/icons-material"
import "./widgetsSm.css"

export default function WidgetsSm() {
  return (
    <div className="widgetsSm">
      <span className="widgetTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItems">
                <img src="https://avatars.githubusercontent.com/u/106402545?v=4" alt=""  className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername"> Anna keller</span>
                    <span className="widgetSmUserTitle">Softwear Engineer</span>

                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetIcon"/>
                    Display
                </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItems">
                <img src="https://avatars.githubusercontent.com/u/106402545?v=4" alt=""  className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername"> Anna keller</span>
                    <span className="widgetSmUserTitle">Softwear Engineer</span>

                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetIcon"/>
                    Display
                </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItems">
                <img src="https://avatars.githubusercontent.com/u/106402545?v=4" alt="img"  className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername"> Anna keller</span>
                    <span className="widgetSmUserTitle">Softwear Engineer</span>

                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetIcon"/>
                    Display
                </button>
        </li>
      </ul>
        <ul className="widgetSmList">
        <li className="widgetSmListItems">
                <img src="https://avatars.githubusercontent.com/u/106402545?v=4" alt=""  className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername"> Anna keller</span>
                    <span className="widgetSmUserTitle">Softwear Engineer</span>

                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetIcon"/>
                    Display
                </button>
        </li>
      </ul>
    </div>
  )
}
