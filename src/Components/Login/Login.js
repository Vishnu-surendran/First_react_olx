import React, { useState,useContext } from 'react';
import {Firebasecontext} from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
function Login() {
  const history=useNavigate()
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const {firebase}=useContext(Firebasecontext)
  const handleLogin =(e)=>{
e.preventDefault()
const auth = getAuth();
signInWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
    // Signed in 
  /*   const user = userCredential.user; */
 history('/')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage);
  });
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
           value={Email}
           onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
