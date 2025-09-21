import { useState } from "react"

export default function Batsman2() {
   const [count, setCount] = useState(0);


   const handleSingle = () =>{
      let newNum = count + 1;
      setCount(newNum);
   }

   const handleFour = () =>{
      let newNum = count + 4;
      setCount(newNum);
   }

   const handleSix = () =>{
      let newNum = count + 6;
      setCount(newNum);
   }
   return(
      <div style={{
         border: "2px solid aquamarine",
         borderRadius: "20px",
         marginBottom: "10px",
         padding: "10px",
      }}
      >
         <h2>Batsman 2</h2>
         <h3>Count: {count}</h3>
         <button onClick={handleSingle}>Single</button>
         <button onClick={handleFour}>Four</button>
         <button onClick={handleSix}>Six</button>
      </div>
   )
}