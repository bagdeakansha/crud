

import { useState } from "react";


const Services=()=>{

    const [cnt,setCnt]=useState(0);
    const myInc=()=>{
        setCnt(cnt+15)
       }


   const myDec=()=>{
    setCnt(cnt-15)
   }

   const myReset=()=>{
    setCnt(0)
   }



return(

<>
   <h1>Counter</h1>
   <h2>My Count: {cnt}</h2>
   <button onClick={myInc}>Increment</button>
   <button onClick={myDec}>Decrement</button>
   <button onClick={myReset}>Reset</button>
</>

)

}



export default Services;