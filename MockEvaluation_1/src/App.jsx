import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayPost from './DeletePost.jsx'
import UpdatePost from './Updatepost'
import DeletePost from './DeletePost.jsx'
import PostsContent from './PostsContent.jsx'
import Display from './Display.jsx'

function App() {
  const [count, setCount] = useState(0)
          const [posts,setPosts]=useState([])
          const [loading,setLoading]=useState(true)
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
    posts={PostsContent}
    onDelete={DeletePost}
    onEdit={UpdatePost}
    onDisplay={Display}
    />
    
     <h2>posts</h2>
     {posts.localeCompare((post)=>(
      <div key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
     ))}
    </>
  )
}

export default App
