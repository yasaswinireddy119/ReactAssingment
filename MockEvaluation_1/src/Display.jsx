function Display({posts,onDisplay,onEdit}){
    return(
        <>
        {posts.map((post)=>(
            <div key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
            </div>
        ))}
        <button onClick={()=>onDisplay(posts)}>Display</button>
        <button onClick={()=>onEdit(posts)}>Edit</button>
        </>
    )
}
export default Display;
