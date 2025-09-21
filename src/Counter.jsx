import { useState } from "react"


export default function Counter() {
   const [count, setCount] = useState(0);

   const handleAdd = () =>{
      const newCount = count + 1;
      setCount(newCount);
   }
   return(
      <div style={{
         border: "1px solid purple",
         borderRadius: "10px",
      }}
      >
         <h1>Counter</h1>
         <h2>Count: {count}</h2>
         <button onClick={handleAdd}>Add</button>
      </div>
   )
}