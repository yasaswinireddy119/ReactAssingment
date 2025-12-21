function DeletePost(){
    const {posts,deletePost}=usePosts();
    return(
        <>
        <h2>All posts</h2>
        {posts.length === 0 && <p>No posts available</p>}
        {posts.map((posts)=>(
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