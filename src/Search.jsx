import { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
const Search=()=>{
//   const [rollno, setRollno]=useState("");
  const [Product_no, setprono]=useState("");
  const [mydata, setMydata] = useState([])
  const mySearch=()=>{
     let url=`http://localhost:3000/employee/?Product_no=${Product_no}`
     axios.get(url).then((res)=>{
        setMydata(res.data);
     });
  }
   const ans=mydata.map((key)=>{
      return(
        <>
           <tr>
           <td>{key.Product_name}</td>
            <td>{key.Product_city}</td>
            <td>{key.Net_price}</td>
            <td>{key.Customer_name}</td>
            <td>{key.Product_no}</td>
           </tr>
        </>
      )
   })
    return(
        <>
         <h1>Search data</h1>
         Enter Product no : <input type="text" value={Product_no} 
         onChange={(e)=>{setprono(e.target.value)}} />
         <button onClick={mySearch}> Search </button>  
         <hr />
         <Table striped bordered hover>
      <thead>
        <tr>
        <th>Product Name</th>
          <th>Product City</th>
          <th>Net price</th>
          <th>Customer Name</th>
          <th>Product No</th>
        </tr>
      </thead>
      <tbody>
          {ans}
        </tbody>
        </Table>
        </>
    )
}
export default Search;