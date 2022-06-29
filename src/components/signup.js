
import React,{useState , useEffect} from 'react'
import { useNavigate } from "react-router-dom";
// import {useHistory} from "react-router-dom"
function Signup() {
  // let history = useHistory()
  const [user,setUser] = useState({
    name:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    cpassword:""

  })

  const handleChange = (e)=>{
    // e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    setUser({...user,[name]:value})
  }

  const Clicked = async(e)=>{
    // let history = useNavigate();
    e.preventDefault()
    console.log("clicked")
    const {name,email,phone,work,password,cpassword} = user
      const rawResponse = await fetch('/reg',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,email,phone,work,password,cpassword
        })
      });
      const content = await rawResponse.json();
    
      if(content.status === 422 || !content){
        console.log("failed to reg")
      }else{
        window.alert("registration successfully")
        console.log(content,"success")
        // history.push("/signin")
        // history.push("http://localhost:3000/signin");
      }
  
  }


  return (
    <div >
    <form method='POST' className="hero">
      <div class=" form-group">
        <label for="exampleInputEmail1">name</label>
        <input
          type="name"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={handleChange}
          value={user.name}
          name="name"
          placeholder="Enter email"

          
        />
    
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputPassword1"
          onChange={handleChange}
          value={user.email}
          name="email"
          placeholder="Password"
          autoComplete='0ff'
        />
            <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Phone</label>
        <input
          type="tel"
          class="form-control"
          id="exampleInputPassword1"
          onChange={handleChange}
          value={user.phone}
          name="phone"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Work</label>
        <input
          type="tel"
          class="form-control"
          id="exampleInputPassword1"
          onChange={handleChange}
          value={user.work}
          name="work"
          placeholder="work"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          onChange={handleChange}
          value={user.password}
          name="password"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">cPassword</label>
        <input
          type="password"
          class="form-control"
          onChange={handleChange}
          value={user.cpassword}
          name="cpassword"
          placeholder="Password"
        />
      </div>
      <div className='form-group form-button'>
        <input 
        type="submit" name="signup"  id="signup" className='form-submit' value="register" onClick={Clicked}
        
        />

      </div>
  
      {/* <button type="submit" onClick={Clicked}  class="btn btn-primary">
        Submit
      </button> */}
    </form>
  </div>
  )
}

export default Signup