import "./widgetsLg.css"

export default function WidgetsLg() {

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
          <tr className="widgetLgTr">
            <td className="widgetUser">
              <img src="https://avatars.githubusercontent.com/u/106402545?v=4" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Jasir</span>
            </td>
            <td className="widgetLgDate">2 jun 2024</td>
            <td className="widgetLgAmount">$1022</td>
            <td className="widgetLgStatus"><Button type="Approved" /></td>
          </tr>
         
          <tr className="widgetLgTr">
            <td className="widgetUser">
              <img src="https://avatars.githubusercontent.com/u/106402545?v=4" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Jasir</span>
            </td>
            <td className="widgetLgDate">2 jun 2024</td>
            <td className="widgetLgAmount">$1022</td>
            <td className="widgetLgStatus"><Button type="Declined" /></td>
          </tr>
         
          <tr className="widgetLgTr">
            <td className="widgetUser">
              <img src="https://avatars.githubusercontent.com/u/106402545?v=4" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Jasir</span>
            </td>
            <td className="widgetLgDate">2 jun 2024</td>
            <td className="widgetLgAmount">$1022</td>
            <td className="widgetLgStatus"><Button type="Pending" /></td>
          </tr>
         
          <tr className="widgetLgTr">
            <td className="widgetUser">
              <img src="https://avatars.githubusercontent.com/u/106402545?v=4" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Jasir</span>
            </td>
            <td className="widgetLgDate">2 jun 2024</td>
            <td className="widgetLgAmount">$1022</td>
            <td className="widgetLgStatus"><Button type="Approved" /></td>
          </tr>
        </table>
    </div>
  )
}
