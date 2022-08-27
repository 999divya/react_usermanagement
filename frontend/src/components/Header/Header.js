import { Form, Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const userDetails = localStorage.getItem("userInfo");
  console.log("dd", userDetails);

  let user = JSON.parse(userDetails);

  let navigate = useNavigate();
  return (
    <div className="shadow-sm p-3 mb-5 bg-#f3969a" style={{color:"black", backgroundColor:"#f3969a"}}>


   
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container >
        <Navbar.Brand style={{color:"black"}}
          onClick={() => {
            navigate("/");
          }}
        >
          DivBooks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Form className="d-flex" bg="success">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {!userDetails && (
              <Nav.Link  
                onClick={() => {
                  navigate("/login");
                }}
                style={{color:"black"}}
              >
                Login
              </Nav.Link>
            )}

            {userDetails && (
              <NavDropdown style={{color:"black", fontcolor:"black"}}
                title={userDetails ? user.name : "Login"}
                
                id="navbarScrollingDropdown"
              >
                <NavDropdown />
                <NavDropdown.Item  style={{color:"black"}}
                  onClick={() => {
                    localStorage.removeItem("userInfo");

                    navigate("/login");
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
