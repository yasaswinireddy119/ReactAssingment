import PostsContent from "./PostsContent";

function DeletePost(){
    const {posts,deletePost}=usePosts();
    return(
        <>
        <h2>All posts</h2>
        {PostsContent.length === 0 && <p>No posts available</p>}
        {PostsContent.map((posts)=>(
            <div ket={posts.id}>
                <h4>{posts.title}</h4>
                <p>
                    {posts.content}
                </p>
                <button onClick={()=>deletePost(posts.id)}>Delete</button>

            </div>
        ))}
        </>
    )
        

    
}
export default DeletePost;