
// import { useState,useEffect } from "react";
// import axios from "axios";
// import Table from 'react-bootstrap/Table';
// const Home=()=>{

// const [mydata,setmydata]=useState([])

// const loadData=()=>{

//     let url="http://localhost:3000/employee"
//      axios.get(url).then((res)=>{
//         setmydata(res.data)
//      })
// }
//  useEffect(()=>{
//     loadData();
//  },[])

//  let ans=mydata.map((key)=>{
//     return(
//         <>
//         <tr>
//         <td>{key.Product_name}</td>
//             <td>{key.Product_city}</td>
//             <td>{key.Net_price}</td>
//             <td>{key.Customer_name}</td>
//             <td>{key.Product_no}</td>
        
//         </tr>
//         </>
//     )
//  })
//     return(
//         <>
//         <h1>Display</h1>

//         <Table striped bordered hover>
//       <thead>
//         <tr>
//         <th>Product Name</th>
//           <th>Product City</th>
//           <th>Net price</th>
//           <th>Customer Name</th>
//           <th>Product No</th>
//         </tr>
//       </thead>
//       <tbody>
//         {ans}
//         </tbody>
//         </Table>

//         </>
//     )
// }
// export default Home;
const Home=()=>{
  return(
    <>
    <h1>Home page of product...</h1>
    </>
  )
}
export default Home;