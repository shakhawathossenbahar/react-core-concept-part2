import { use } from "react"
import Friend from "./Friend";

export default function Friends({friendsName}) {

   const friends = use(friendsName);

   return(
      <div className="user-card">
         <h2>Friends name list</h2>
         {
            friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
         }
      </div>
   )
}