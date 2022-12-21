import {createContext, useState} from 'react'

export const PostContext=createContext(null)

function Post({children}){
  const [Post, setPost] = useState([])
  return(
    <PostContext.Provider value={{Post,setPost}}>
{children}
    </PostContext.Provider>
  )
}

export default Post