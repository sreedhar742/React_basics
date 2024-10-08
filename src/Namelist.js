import React from 'react'

function Namelist() {
    const hel=[10,20,30,40,50]
//   for (let i=0;i<hel.length;i++){
//     return (<div>
//         hello from {hel[i]}
//     </div>)
//   }  
    const obj=[
        {name:"sreedhar",
            age:22,
            native:"bengaluru"
        },
        {
            name:"sai",
            age:23,
            native:"iisc"
        }
    ]
    const objnames=obj.map((person,index)=>(
        <p key={index}>
            my name is {person.name} and my age is {person.age} and i am from {person.native}
        </p>)
    )
    const names=hel.map(name=><h1>{name}</h1>)
        return (<div>
            {/* {hel.map(name=><h1>{name}</h1>)} */}
            {names}
            {objnames}
            </div>)
}

export default Namelist