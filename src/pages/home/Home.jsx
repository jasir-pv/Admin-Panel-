import Chart from "../../components/chart/Chart"
import Featuredinfo from "../../components/featuredInfo/Featuredinfo"
import WidgetsLg from "../../components/widgetsLg/WidgetsLg"
import WidgetsSm from "../../components/widgetsSm/WidgetsSm"
import { userData } from "../../dummyData"
import "./home.css"

export default function home() {
  return (
    <div className="home">
      <Featuredinfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetsSm/>
        <WidgetsLg/>
      </div> 
    </div>
  )
}
