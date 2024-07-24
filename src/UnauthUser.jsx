import { useContext, useState } from "react";
import { myloginContext } from "./LoginContext";

const UnauthUser=()=>{
    const [nm,setNm]=useState("");
    const {login}=useContext(myloginContext);
    return(
        <>
        <h3>User Login System</h3>
        Enter Name:
        <input type="text" value={nm} onChange={(e)=>{setNm(e.target.value)}}/>
        <button onClick={()=>{login(nm)}}>Login</button>
        </>
    )
}
export default UnauthUser;