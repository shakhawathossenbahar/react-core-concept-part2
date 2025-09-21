import { use } from "react"

export default function Friends({friendsName}) {

   const friends = use(friendsName);
   console.log(friends);

   return(
      <div className="user-card">
         <h2>Friends name list</h2>
         <h3>How many: {friends.length}</h3>
      </div>
   )
}