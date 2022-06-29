import React, { useState } from "react";
import "./navbar.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const Changed = (e) => {
  // const name = e.name
  // if(name == "email"){
  //   setEmail(e.target.value)
  // }else if(name =="password"){
  //   setPassword(e.target.value)
  // }

  // };

  const Submit = async (e) => {
    e.preventDefault();

    const postData = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const resp = await postData.json()
    if(resp.status === 422 || !resp){
      console.log("can not loged in")
      window.alert("can not loged in")
    }else{
      console.log("loged in")
      window.alert("loged in")
    }

  };

  return (
    <div>
      <form method="POST" className="hero">
        <div class=" form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button onClick={Submit} class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signin;
