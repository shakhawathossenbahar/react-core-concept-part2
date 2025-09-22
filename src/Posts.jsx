import { use } from "react"
import Post from "./Post";

export default function Posts({postsPromise}) {

   const posts = use(postsPromise);
   
   return(
      <div className="user-card">
         <h2>All posts are here: {posts.length}</h2>
         {
            posts.map(post => <Post key={post.id} post={post}></Post>)
         }
      </div>
   )
}