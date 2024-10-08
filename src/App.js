// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// const Home=()=>{
//   return <h1>this is home</h1>
// }
// const About=()=>{
//   return <h1>about you</h1>
// }
// const Contact=()=>{
//   return <h1>mobile number</h1>
// }

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/hiiabout">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route exact path="/" component={<Home></Home>} />
//           <Route path="/about" component={<About></About>} />
//           <Route path="/contact" component={Contact} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import './app.css'
// import './Store'
// import {store} from './Store'
// import Forms from './Forms'
// import Accounts from './Accounts'

// // import { BrowserRouter as router,Routes,Route, BrowserRouter } from "react-router-dom"

// // function App(){
// //     return(
// //       <BrowserRouter>

// //       <Routes>
        
// //       </Routes>
// //       </BrowserRouter>
      
// //     )
// // }

// // export default App

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// function Home() {
//   return <h2>Home Page</h2>;
// }

// function About() {
//   return <h2>About Page</h2>;
// }

// function Contact() {
//   return <h2>Contact Page</h2>;
// }

// function Homes(){
//     return (<div>
//       <Home />
//       <About />
//     </div>)
// }

// function Acc(){
//   return(
//     <div>
//       <Forms />
//       <Accounts />
//     </div>
//   )
// }

// function App() {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to='/account'>Accounts</Link></li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Homes/>} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/account" element={<Acc />}></Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState([]);
//   const [newName, setNewName] = useState('');
//   const [newDescription, setNewDescription] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:8000/mymodels/')
//       .then(response => setData(response.data))
//       .catch(error => console.error('There was an error fetching the data!', error));
//   }, []);

//   const handleAdd = () => {
//     axios.post('http://localhost:8000/mymodels/', {
//       name: newName,
//       description: newDescription,
//     })
//     .then(response => {
//       setData([...data, response.data]);
//       setNewName('');
//       setNewDescription('');
//     })
//     .catch(error => console.error('There was an error adding the data!', error));
//   };
  

//   const handleUpdate = (id) => {
//     axios.put(`http://localhost:8000/mymodels/${id}/`, {
//       name: newName,
//       description: newDescription,
//     })
//     .then(response => {
//       setData(data.map(item => item.id === id ? response.data : item));
//     })
//     .catch(error => console.error('There was an error updating the data!', error));
//   };

//   return (
//     <div>
//       <h1>My Models</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>
//             <p>{item.name} - {item.description}</p>
//             <input 
//               type="text" 
//               placeholder="New name" 
//               onChange={(e) => setNewName(e.target.value)}
//             />
//             <input 
//               type="text" 
//               placeholder="New description" 
//               onChange={(e) => setNewDescription(e.target.value)}
//             />
//             <button onClick={() => handleUpdate(item.id)}>Update</button>
            
//             <button onClick={() => handleAdd(item.id)}>ADD</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import Loginform from "./Loginform"
function App(){
  return (
    <Loginform></Loginform>
  )
}
export default App;