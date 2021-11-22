import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ListUsers from './Component/ListUsers/ListUsers';


function App() {

  const [users,setUsers]=useState([])
  const [loading,setLoading]= useState(false)
  
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>setUsers(res.data)).then(()=>setLoading(true))
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
      {
        loading === true ? <ListUsers users={users}/>: <h1>Mezel</h1>
      }
      
    </div>
    
  );
}

export default App;
