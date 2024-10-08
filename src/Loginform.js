import React,{useState,axios} from 'react'
import './app.css'
function Loginform() {
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const[uerror,seterror]=useState('')
    const[uperror,setperror]=useState('')

    function names(name){
        if (name!=null){
            return true
        }else{
            return false
        }
    }
    function passes(pass){
        if (pass.length>7){
            return true
        }else{
            return false
        }
    }
    const apicall=async(username,password)=>{
        const call=await axios.get("url",{'username':username,'password':password}).json()
        return call
    }
    const handler=(e)=>{
        const isname=names(username)
        const ispass=passes(password)
        if (!isname){
            seterror("name is invalid")
        }else{
            seterror('')
        }
        if (!ispass){
            setperror("password is invalid")
        }else{
            setperror('')
        }
        if (isname && ispass){
            console.log("username : ",username)
            console.log("password : ",password)
            const apcall=apicall(username,password)
        }
    }

  return (
    <>
    <div>
        <div>APPLICATION</div><label>username</label>
        <input type="text" onChange={(e)=>{setusername(e.target.value)}} />
        <div>{uerror}</div>
        <hr></hr>
        <label>password</label>
        <input type="password" onChange={(e)=>{setpassword(e.target.value)}} />
        <div>{uperror}</div>
        <hr></hr>
        <button onClick={e=>handler(e)}>Submit</button>
    </div>
    </>
  )
}

export default Loginform