import { useState } from "react"

export default function Batsman() {
   const [count, setCount] = useState(0);

   const handleAdd = () =>{
      let newCount = count + 1;
      setCount(newCount);
   }
   return(
      <div style={{
         border: "2px solid blue",
         padding: "20px",
         borderRadius: "15px",
      }} 
      >
         <h1>Batsman</h1>
         <h2>Count : {count}</h2>
         <button onClick={handleAdd}>Add</button>
      </div>
   )
}