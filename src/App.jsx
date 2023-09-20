import React, { useState } from 'react';

const App = () => {
  const[id,setId]=useState("")
  const[name,setName]=useState("")
  const[role,setRole]=useState("")
  const[employee,setEmployee]=useState([]);//storing add data

  const AddEmployees=()=>{
  // console.log(id,name,role)
  setEmployee([...employee,{id:id,name:name,role:role}])//array ya data va store pana
  setId("");
  setName("");
  setRole("");
  }

  const DeleteAll=()=>{
    setEmployee([])
  }

  const deleteIndiguval=(id)=>{
 console.log(id);
  }
  return (
    <div className="App">
      <h1>Employee management</h1>
      <div className="form">
        <input
        required type="number"
        placeholder="enter id"
        value={id}
        onChange={e=>setId(e.target.value)}
        
        />
        <input required type="text" placeholder="enter name"
         value={name}
         onChange={e=>setName(e.target.value)}
        />
        <input required type="text" placeholder="role"
         value={role}
         onChange={e=>setRole(e.target.value)}
        
        />
        <button onClick={AddEmployees}>ADD</button>
        <button onClick={DeleteAll}>Delete</button>

      </div>
      {/* //displaying details */}
      {employee.map((employee,index)=>{
        return(
          <div key={index} >
          {employee.id}
          {employee.name}
          {employee.role}
          <button className="del" onClick={()=>{
            deleteIndiguval(employee.id)}}>x</button>
          </div>
        )
      })}
      
    </div>
  );
};

export default App;