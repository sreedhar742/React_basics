import React,{useState,useEffect} from 'react'

function Inputsform() {
    
    const[names,setfname]=useState({firstname:'',lastname:'',fathername:'',mothername:'',mobile:'',gender:'select'})
    const[change,setchanges]=useState('')

    function handler(e){
        e.preventDefault();
        const form=e.target;
        const formData=new FormData(form);
        
        const formJson = Object.fromEntries(formData.entries());
        console.log(names.firstname)
    }

    useEffect((e)=>{
        console.log(names)
    },[handler])
    
  return (
    <>
    <form action='post' onSubmit={handler}>
    <label>Firstname: <input type="text" onChange={(e)=>setfname({...names,firstname:e.target.value})} ></input></label><br></br><hr></hr>
    <label>LastName: <input type="text" onChange={(e)=>setfname({...names,lastname:e.target.value})} ></input></label><br></br><hr></hr>
    <label>Fathername: <input type="text" onChange={(e)=>setfname({...names,fathername:e.target.value})} ></input></label><br></br>
    <label>Mothername: <input type="text" onChange={(e)=>setfname({...names,mothername:e.target.value})} ></input></label><br></br>
    <label>Mobile: <input type="text" onChange={(e)=>setfname({...names,mobile:e.target.value})} ></input></label><br></br>
    
    <button type="submit"> submit</button>
    </form>
    </>
  )
}

export default Inputsform