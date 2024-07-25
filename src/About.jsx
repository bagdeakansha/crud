


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

const About=()=>{

const [input,setinput]=useState({})

const handlechange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setinput(values=>({...values,[name]:value}))
}

const handleclick=()=>{
    // e.preventDefault();
    let url="http://localhost:3000/employee"
   axios.post(url,input).then((res)=>{
    alert("Posted")
    setinput({})

}).catch((err)=>{
    console.log("error",err)
})

}

    return(
        <>
        <h1>Insert</h1>
       
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>emp_id</Form.Label>
        <Form.Control type="text" name='emp_id' value={input.emp_id} placeholder="emp_id" onChange={handlechange} />      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} placeholder="Name" onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>designation</Form.Label>
        <Form.Control type="text" placeholder="designation" name='designation' value={input.designation} onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>department</Form.Label>
        <Form.Control type="text" placeholder="department" name='department' value={input.department} onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>basic_salary</Form.Label>
        <Form.Control type="text" placeholder="basic_salary" name='basic_salary' value={input.basic_salary} onChange={handlechange} />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleclick} >
        Submit
      </Button>
        </>
    )
}
export default About;
