import "./login.css"
import {useState} from "react"
import {useDispatch} from "react-redux"
import {login} from "../../redux/apiCalls"



const Login = () => {

    const [username, setUsername] =useState("")
    const [password, setpassword] =useState("")
    const dispatch = useDispatch()

    const handleClick =(e)=>{
        e.preventDefault()
        login(dispatch,{username,password})
    }

  return (
    <div style={{
        height:"100vh",
        flex:4,
        display:"flex", 
        flexDirection:"column",
        alignItems:"center",
        justifyContent: "center",
    
    }}>
      <input
      style={{
        padding:10,
        marginBottom:20,

      }}
       type="text" placeholder="username" 
      onChange={e=> setUsername(e.target.value)} />
      <input
       style={{
        padding:10,
        marginBottom:20,
      }}
       type="password" name="" placeholder="password" id=""
       onChange={e=> setpassword(e.target.value)} />
      <button 
      style={{
        padding:10,
        width:100,
        
      }}
      onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login

