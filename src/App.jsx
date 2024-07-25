import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Placement from "./Placement";
import Services from "./Services";
import Gallery from "./Gallery";

const App=()=>{
  return(
    <>
    

    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>

        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="placement" element={<Placement/>}/>
        {/* <Route path="gallery" element={<Gallery/>}/> */}
        <Route path="gallery" element={<Gallery/>}/>
        <Route path="contactus" element={<Contact/>}/>

        </Route>
      </Routes>     
    </BrowserRouter>
    </>
  )
}
export default App;
