
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

const Insert=()=>{

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
        <div id="form">

        
        <h1>DETAILS...</h1>
       
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" name='Product_name' value={input.Product_name} placeholder="enter prodduct name" onChange={handlechange} />      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product City</Form.Label>
        <Form.Control type="text" name='Product_city' value={input.Product_city} placeholder="enter city" onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Net Price</Form.Label>
        <Form.Control type="text" placeholder="enter price" name='Net_price' value={input.Net_price} onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control type="text" placeholder="enter name" name='Customer_name' value={input.Customer_name} onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product No</Form.Label>
        <Form.Control type="text" placeholder="enter product no" name='Product_no' value={input.Product_no} onChange={handlechange} />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleclick} >
        Submit
      </Button>
      </div>
        </>
    )
}
export default Insert;
