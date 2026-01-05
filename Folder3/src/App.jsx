// import { useState } from "react"
// function App(){
//   const[count,setCount]=useState(0)
//   return(
//     <div>
//       <h2>count:{count}</h2>
//       <button onClick={()=>{setCount(count+1)}}>Increase</button>
//       <button onClick={()=>{setCount(count-1)}}>Decrease</button>
//     </div>

import { useSearchParams } from "react-router-dom";

//   )
// }
// export default App;

// import { useState } from "react";
// function App(){
//   const[name,setName]=useState()
//   return(
//     <div>
//       <input 
//       type="text"
//       placeholder="Enter your name"
//       value={name}
//       onChange={(e)=>setName(e.target.value)}/>
//       <h3>Hyyy {name}</h3>
//     </div>


//   )
// }
// export default App;

import { useState } from "react";
function App(){
  const[isvisible,setIsvisible]=useState(false)
  return(
    <div>
      <button onClick={()=>setIsOn(!isvisible)}>{isOn ? "Show" : "Hide"}</button>
      {isOn && (
        <div style={{
            width: "200px",
            height: "100px",
            backgroundColor: "lightblue",
            marginTop: "20px",
            textAlign: "center",
            lineHeight: "100px",
            fontWeight: "bold",
          }}
        >
          I am a box
        </div>

      )}
    </div>

  )
}
export default App;