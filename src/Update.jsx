import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
// import edtimg from "./edit.png";
import delimg from "./delete.png"
import { useNavigate } from "react-router-dom";

const Update=()=>{
    const [mydata, setMydata]=useState([]);

    const myNav= useNavigate();

    const loadData=()=>{
     let url="http://localhost:3000/employee";
     axios.get(url).then((res)=>{
        setMydata(res.data)
     })
    }
    useEffect(()=>{
        loadData();
    }, [])
    const myDel=(myid)=>{
        let url=`http://localhost:3000/employee/${myid}`;
        axios.delete(url).then((res)=>{
            alert("Record Deleted!!!");
            loadData();
        })
    }


    // const myEdit=(myid)=>{
    //   let url=`http://localhost:3000/employee/${myid}`;
    //     axios.get(url).then((res)=>{
    //         alert("Record Edited!!!");
    //         loadData();
       
      // myNav(`/EditData/${myid}`)    // /myedit/101 
       
    // }

  const ans=mydata.map((key)=>{
       return(
        
        <>
           <tr>
           <td>{key.Product_name}</td>
            <td>{key.Product_city}</td>
            <td>{key.Net_price}</td>
            <td>{key.Customer_name}</td>
            <td>{key.Product_no}</td>
            <td> 
          <a href="#">
          <img src={delimg}  width="30" height="30"  onClick={()=>{myDel(key.id)}} />
          </a>
            </td>

            {/* <td> 
          <a href="#">
          <img src={edtimg}  width="30" height="30"  onClick={()=>{myEdit(key.id)}} />
          </a>
            </td> */}
           </tr>
        </>
       )
  })
    return(
        <>
         <h1>Update data</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
        <th>Product Name</th>
          <th>Product City</th>
          <th>Net price</th>
          <th>Customer Name</th>
          <th>Product No</th>
          <th> </th>
          {/* <th> </th> */}
        </tr>
      </thead>
      <tbody>
       {ans}
        </tbody>
        </Table>
         </>
    )
}

export default Update;