

import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
const Home=()=>{

const [mydata,setmydata]=useState([])

const loadData=()=>{

    let url="http://localhost:3000/employee"
     axios.get(url).then((res)=>{
        setmydata(res.data)
     })
}
 useEffect(()=>{
    loadData();
 },[])

 let ans=mydata.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.emp_id}</td>
            <td>{key.name}</td>
            <td>{key.designation}</td>
            <td>{key.department}</td>
            <td>{key.basic_salary}</td>
        
        </tr>
        </>
    )
 })
    return(
        <>
        <h1>Display</h1>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>emp_id</th>
          <th>Name</th>
          <th>designation</th>
          <th>department</th>
          <th>basic_salary</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>

        </>
    )
}
export default Home;