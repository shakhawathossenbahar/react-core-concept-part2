export default function Friend({friend}) {

   const {name, email, phone} = friend;
   return(
      <div className="user-card"
      >
         <h2>Name: {name}</h2>
         <h3>Email: {email}</h3>
         <h3>Phone: {phone}</h3>
      </div>
   )
}