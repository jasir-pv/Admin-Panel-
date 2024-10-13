import { Visibility } from "@mui/icons-material"
import "./widgetsSm.css"
import { useEffect, useState } from "react"
import { userRequest } from "../../requestMethods"

export default function WidgetsSm() {


  const [users,setUsers] = useState([])

  useEffect(()=>{
const getUsers = async ()=>{
    try{
    
      const res = await userRequest.get("users/?new=true")
      setUsers(res.data)
    } catch(err) {}
  }
  getUsers()
  },[])

  return (
    <div className="widgetsSm">
      <span className="widgetTitle">New Join Members</span>
      <ul className="widgetSmList">
      {users.map((user)=>(
        <li className="widgetSmListItems" key={user._id}>
                <img src={user.img} 
                alt=""  className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername"> {user.username}</span>
                    <span className="widgetSmUserTitle">Softwear Engineer</span>

                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetIcon"/>
                    Display
                </button>
         
        </li>
             ))}
       </ul> 
    </div>
  )
}
