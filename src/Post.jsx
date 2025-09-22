export default function Post({post}){
   const {title, body} = post;
   return(
      <div className="user-card">
         <h3>Title: {title}</h3>
         <p>{body}</p>
      </div>
   )
}