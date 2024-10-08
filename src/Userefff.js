import React, { useReducer, useRef, useState } from 'react'

function Userefff() {
    const element=useRef(100)
    // function handler(){
    //     console.log(element)
    //     console.log(element.current)
    //     element.current.innerHTML="changed"
        
    // }
// use ref does not re render the state only first time is render() butusing useste() give you re render optiion
    let x=useRef(10)
    let [y,sety]=useState(10);
    // add multiple elements to same hook
    let mulhook=useRef([])

    
    function changecolor(el){
        
        for (let ele of mulhook.current){
            ele.classList.remove("classnames")
        }
        el.classList.add('classnames')
    }
    
  return (
    <>
    <h1 ref={element}>hell point me</h1>
    <button onClick={()=>{
        element.current.innerHTML="changed"

    }}>click me</button>
    <h1>count is {x.current}</h1>
    <button onClick={()=>{
        x.current=x.current+10
        sety(y+100)
    }}>click me</button>
    
    


    <h1 ref={(el)=>{mulhook.current[0]=el}} onClick={(el)=>{
        changecolor(el)
    }}>hello1</h1>
    <h1>hello2</h1>
    <h1>hello3</h1>
    <h1>hello4</h1>
    <h1>hell05</h1>
    </>
  )
}

export default Userefff