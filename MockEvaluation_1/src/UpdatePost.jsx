import PostsContent from "./PostsContent";

function UpdatePost({post}){
    const {UpdatePost}=usePosts()
    return(
        <>
        <button onClick={()=>UpdatePost(post.id,{title:"Updated Title"})}>Edit</button>

        </>
    )
}
export default UpdatePost;