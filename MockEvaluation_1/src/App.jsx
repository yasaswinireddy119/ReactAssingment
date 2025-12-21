import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayPost from './DeletePost.jsx'
import UpdatePost from './Updatepost'
import DeletePost from './DeletePost.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [posts,setPosts]=useState("")
  const [loading,setLoading]=useState("")
  
  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
    .then((data)=>
    {
      setPosts(data);
      setLoading(false);
    })
    .catch((error)=>{
      console.eroor("Error fetching posts",error);
      setLoading(false)
    })
  })
  return (
    <>
    <h2>Posts</h2>
    <postsList 
    posts={posts}
    onDelete={DeletePost}
    onEdit={UpdatePost}
    />
    
  
     
    </>
  )
}

export default App
