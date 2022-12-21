import React, { useContext, useEffect, useState } from 'react'
import { Firebasecontext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import './View.css';
function View() {
  const [userDetails, setuserDetails] = useState()
  const {Post} =useContext(PostContext)
  const {firebase}=useContext(Firebasecontext)
  useEffect(()=>{
   const {userId} =Post
firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
res.forEach(doc=>{
  setuserDetails(doc.data())
})
})
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={Post.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {Post.price}</p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
       { userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>1234567890</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
