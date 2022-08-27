
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function AHeader() {
    const navigate=useNavigate();
    const adminDetails=  localStorage.getItem('admininfo')
    console.log(adminDetails);
  return (
    <Navbar>
    <Container>
      <Navbar.Brand href="#home">Admin Pannel</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
    { !adminDetails && <Nav.Link onClick={()=>{
        navigate('/adminlogin')
    }} >
        Login
        </Nav.Link  > }
      { adminDetails && <Nav.Link onClick={()=>{
              localStorage.removeItem('admininfo')
              navigate('/adminlogin')
            }} >
        Logout
        </Nav.Link> }
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AHeader