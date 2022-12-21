import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import {Authcontext} from './store/Context'
import { getAuth, onAuthStateChanged } from "firebase/auth";
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Post from './store/PostContext';

function App() {
  const{setUser}=useContext(Authcontext)
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        console.log('user loggedout');
      }
    });
  })
  return (
    <div>
      <Post>
<Router>
<Routes>
<Route  exact path='/' element= {<Home/>}/>
<Route   path='/signup' element= {<Signup/>}/>
<Route   path='/login' element= {<Login/>}/>
<Route   path='/create' element= {<Create/>}/>
<Route  path='/viewpost' element= {<View/>}/>
</Routes>
</Router>
</Post>   
    </div>
  );
}

export default App;
