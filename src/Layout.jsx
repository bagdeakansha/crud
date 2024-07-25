
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,Outlet } from 'react-router-dom';

const Layout=()=>{
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Cybrom</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="services">Services</Nav.Link>
            <Nav.Link as={Link} to="placement">Placement</Nav.Link>
            <Nav.Link as={Link} to="gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="contactus">Contact Us</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>

      <div className='maindiv'>
    <Outlet/>
      </div>
        </>
    )
}
export default Layout;