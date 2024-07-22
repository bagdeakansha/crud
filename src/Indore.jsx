import { useContext } from "react"
import { courseContext } from "./App"

const Indore=()=>{
    const {course,setCourse}=useContext(courseContext);
    return(
        <>
        <h1>welcome to Indore: {course}</h1>
        <button onClick={()=>{setCourse("Delhi")}}>Click here</button>
        </>
    )
}
export default Indore;
    