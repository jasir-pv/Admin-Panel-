import './user.css'
import {Link} from "react-router-dom"
import { CalendarToday, EmailOutlined, LocationSearchingOutlined, PermIdentity, PhoneAndroidOutlined, Publish } from "@mui/icons-material"

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
        <button className="userAddButton">Create</button>
        </Link>
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
                <span className="userShowInfoTitle">jasir2003</span>
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
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form action="" className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label htmlFor="">username</label>
                  <input type="text" 
                  placeholder='jasir2003'
                   className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label htmlFor="">Full Name</label>
                  <input type="text" 
                  placeholder='Jasir Ahsan Pv'
                   className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label htmlFor="">Phone</label>
                  <input type="text" 
                  placeholder='7034081363'
                   className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label htmlFor="">Email</label>
                  <input type="text" 
                  placeholder='jasirahsanpv@gmail.com'
                   className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label htmlFor="">Address</label>
                  <input type="text" 
                  placeholder='India | Kerala'
                   className='userUpdateInput' />
                </div>
                
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img src="/images/small.jpg" alt="img" 
                  className='userUpdateImg'/>
                  <label htmlFor="file"> <Publish /></label>
                  <input type="file" id='file' style={{display:"none"}} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
      </div>
      </div>
    </div>
  )
}
