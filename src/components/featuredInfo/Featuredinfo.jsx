import React, { useEffect, useState } from 'react'
import "./featredinfo.css"
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import { userRequest } from '../../requestMethods'

export default function Featuredinfo() {

  const [income, setIncome] = useState([])
  const [perc, setPerc] = useState(0)

  useEffect(()=>{
    const getIncome = async ()=>{
       try{
        const res =await userRequest.get("orders/income")
        setIncome(res.data)
        setPerc((res.data[1].total*100) / res.data[0].total-100)
       }catch(err){ console.log(Error)}
    }
    getIncome()
  },[])
  console.log(perc)

  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${income[1]?.total || 0}</span>
          <span className="featuredMoneyRate">
          %{Math.floor(perc)} {" " }
          {perc < 0 ? (

          <ArrowDownward className='featuredIcon negative'/>
          ):(
            <ArrowUpward className='featuredIcon'/>
          )}
          </span>
        </div>
      <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,215</span>
          <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
      <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3,635</span>
          <span className="featuredMoneyRate">+2.4 <ArrowUpward className='featuredIcon'/></span>
        </div>
      <span className="featuredSub">Compare to last month</span>
      </div>

    </div>
  )
}
