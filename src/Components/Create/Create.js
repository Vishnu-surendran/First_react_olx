import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {ref,uploadBytes,getDownloadURL,getStorage} from "firebase/storage"
import {Authcontext, Firebasecontext} from '../../store/Context'
import { useNavigate } from 'react-router-dom';
const Create = () => {
  let date=new Date()
  const navigate=useNavigate()
  const {firebase}=useContext(Firebasecontext)
  const storage=getStorage()
  const {user}=useContext(Authcontext)
  const [Name, setName] = useState('')
  const [Category, setCategory] = useState('')
  const [Price, setPrice] = useState('')
  const [Image, setImage] = useState(null)
  const handleSubmit=(e)=>{
      const storageRef = ref(storage,`/image/${Image.name}`)
    uploadBytes(storageRef,Image).then((snapshot) => {
      getDownloadURL(ref(storage,`/image/${Image.name}`))
  .then((url) => {
    firebase.firestore().collection('products').add({
      Name,
      Category,
      Price,
      url,
      userId:user.uid,
      createdAt:date.toDateString()
    })
    navigate('/')
  })
    });}
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
            value={Name}
            onChange={(e)=>setName(e.target.value)}
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="category"
              name="category"
              value={Category}
              onChange={(e)=>setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input className="input" type="number" id="price" name="Price"   value={Price}
            onChange={(e)=>setPrice(e.target.value)} />
            <br />
        
          <br />
          <img alt="Posts" width="200px" height="200px" src={Image ? URL.createObjectURL(Image):''}></img>

            <br />
            <input onChange={(e)=>{
                 setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
