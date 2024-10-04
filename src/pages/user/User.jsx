import './user.css'
import { CalendarToday, EmailOutlined, LocationSearchingOutlined, PermIdentity, PermIdentityIcon, PhoneAndroidOutlined } from "@mui/icons-material"

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>

      <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://avatars.githubusercontent.com/u/106402545?v=4" alt="Img" className='userShowImg'/>
                <div className="usersShowTopTitle">
                    <span className="userShowUsername">Jasir</span>
                    <span className="userShowUserTitle">Nothing</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                <PermIdentity className='userShowIcon'/>
                <span className="userShowInfoTitle">Jasir Ahsan</span>
                </div>
                <div className="userShowInfo">
                <CalendarToday className='userShowIcon'/>
                <span className="userShowInfoTitle">24/04/2003</span>
                </div>
                <div className="userShowInfo">
                <PhoneAndroidOutlined />
                <span className="userShowInfoTitle">7034081363</span>
                </div>    
                <div className="userShowInfo">
                <EmailOutlined className='userShowIcon'/>
                <span className="userShowInfoTitle">Jasirahsanpv@gmil.com</span>
                </div>
                <div className="userShowInfo">
                <LocationSearchingOutlined className='userShowIcon'/>
                <span className="userShowInfoTitle">India kerala</span>
                </div>
            </div>
        </div>
        <div className="userUpdate"></div>
            <div className="userUpdateTitle">Edit</div>
            <form action="" className="userUpdatdeForm"></form>
      </div>
    </div>
  )
}
