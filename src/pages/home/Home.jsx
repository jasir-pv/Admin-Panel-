import { useEffect, useMemo, useState } from "react"
import Chart from "../../components/chart/Chart"
import Featuredinfo from "../../components/featuredInfo/Featuredinfo"
import WidgetsLg from "../../components/widgetsLg/WidgetsLg"
import WidgetsSm from "../../components/widgetsSm/WidgetsSm"
import "./home.css"
import { userRequest } from "../../requestMethods"

export default function Home() {

  const [userStats, setUserStats] = useState([])

  const MONTHS = useMemo(
    () => [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ], 
    []
  );

  useEffect(()=>{
    const getStats = async ()=>{
      try{
          const res = await userRequest.get("/users/stats")
          res.data.map((item)=>
            setUserStats((prev)=>[
              ...prev,
              {name:MONTHS[item._id-1],"Active User": item.total},
            ])
          )
        }catch(err){}
    }

    getStats()
  },[MONTHS])

  console.log(userStats)

  return (
    <div className="home">
      <Featuredinfo/>
      <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetsSm/>
        <WidgetsLg/>
      </div> 
    </div> 
  )
}
