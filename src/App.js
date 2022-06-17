import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import DescriptionUser from './Components/DescriptionUser';
import Home from './Components/Home';
import ListUsers from './Components/ListUsers';
import NavUser from './Components/NavUser';

function App() {
  const [users,setUsers] = useState([
    {name : 'Hachem', age : 1, id : Math.random()},
    {name :'Yassine', age : 2, id : Math.random()},
    {name : 'Assad', age : 3000, id : Math.random()}
  ])
  return (
   <div>
      <NavUser/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Users' element={<ListUsers users={users}/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Users/:id' element={<DescriptionUser users={users}/>}/>
      </Routes>
   </div>
  );
}

export default App;
