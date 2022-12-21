import React, { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import { Firebasecontext } from '../../store/Context';
import {useNavigate} from 'react-router-dom'
import './Signup.css';

import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
export default function Signup() {
const history=useNavigate()
  const [username, setusername] = useState('')
  const [mobile, setmobile] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const {firebase}=useContext(Firebasecontext)
  const handleSubmit=(e)=>{
    e.preventDefault()
    const auth=getAuth()
 createUserWithEmailAndPassword(auth,email,password).then((response)=>{

updateProfile(auth.currentUser,{displayName:username}).then(()=>{
firebase.firestore().collection('users').add({
  id:response.user.uid,
  username:username,
mobile:mobile
}).then(()=>{
  console.log('signup completed successfully');
history('/login')
})
})
    })

  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='img'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            name="name"

          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            name="email"

          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            value={mobile}
            onChange={(e) => setmobile(e.target.value)}

          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}

          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href='hello'>Login</a>
      </div>
    </div>
  );
}
