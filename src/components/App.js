
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [obj,setObj]=useState({name:'',email:'',password:''});
  
  function submitFn(e){
    e.preventDefault();
    console.log(obj);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={submitFn}>
          <label htmlFor="nameInput">Name</label>
          <input type="text" onChange={(e)=>{const data=e.target.value; setObj({...obj,name:data});}}/> <br />
          <label htmlFor="emailInput">Email</label>
          <input type="email" onChange={(e)=>{const data=e.target.value; setObj({...obj,email:data});}}/>  <br />
          <label htmlFor="passwordInput">Password</label>
          <input type="password" onChange={(e)=>{const data=e.target.value; setObj({...obj,password:data});}}/>
          <br />
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App
