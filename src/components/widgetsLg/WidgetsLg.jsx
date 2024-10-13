import { useEffect, useState } from "react"
import "./widgetsLg.css"
import { userRequest } from "../../requestMethods"
import { format } from "timeago.js";

export default function WidgetsLg() {

    const [orders,setOrders] = useState([])
  
    useEffect(()=>{
  const getOrders = async ()=>{
      try{
      
        const res = await userRequest.get("orders")
        setOrders(res.data)
      } catch(err) {}
    }
    getOrders()
    },[])


  const Button = ({type}) =>{
    return <button className={"widgetLgButton" + type}>{type}</button>
  }
  return (
    <div className="widgetsLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Data</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Stats</th>
          </tr>

          {orders.map((order)=> (
            
          <tr className="widgetLgTr" key={order.id}>
            <td className="widgetUser">
              <img src="https://avatars.githubusercontent.com/u/106402545?v=4" alt="" className="widgetLgImg" />
              <span className="widgetLgName">{order.useId}</span>
            </td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">${order.amount}</td>
            <td className="widgetLgStatus"><Button type={order.status} /></td>
          </tr>         
          ))}
          
        </table>
    </div>
  )
}
