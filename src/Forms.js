import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

function Forms() {
  const dispatch=useDispatch()
  const [amount,setamount]=useState('')
  const [names,setnames]=useState('')
  const [mobile,setmobile]=useState('')

  return (
    <div>
      <h1>account Form</h1>

    <input type="number" value={amount} placeholder='enter amount' onChange={(e)=>{
      let data=e.target.value
      setamount(data)
    }}/>
    <button onClick={()=>{
      dispatch({type:'deposit',payload:amount})
      setamount('')
    }} >deposit</button>
    <button onClick={()=>{
      dispatch({type:"withdraw",payload:amount})
      setamount('')
    }}>withdraw</button>
    
    <br></br>

    <input type="text" value={names} placeholder='enter name' onChange={(e)=>{
      let data=e.target.value
      setnames(data)
    }}/>
    <button onClick={()=>{
      dispatch({type:'fullname',payload:names})
      setnames('')
    }} >updatename</button>
    
    <br></br>

    <input type="number" value={mobile} placeholder='enter mobile number' onChange={(e)=>{
      let data=e.target.value
      setmobile(data)
    }}/>
    <button onClick={()=>{
      dispatch({type:'mobile',payload:mobile})
      setmobile('')
    }}>mobile number</button>
    <br></br>
    <button onClick={()=>{
      dispatch({type:'reset'})
    }}>Reset</button>
    </div>
  )
}

export default Forms


