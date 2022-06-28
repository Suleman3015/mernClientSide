
import React,{useState , useEffect} from 'react'

function Signup() {
  const [user,setUser] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    cpassword:""

  })

  const handleChange = (e)=>{
    // e.preventDefault()
    console.log(e.target.value)
    const name = e.target.name
    const value = e.target.value
    setUser({...user,[name]:value})
    console.log(user.name)
  }


  return (
    <div >
    <form  className="hero">
      <div class=" form-group">
        <label for="exampleInputEmail1">name</label>
        <input
          type="email"
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
  
      <button  class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
  )
}

export default Signup