import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return ( <>
    <Navbar className='navbar_container' sticky="top" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Brand Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >       
            <Nav.Link href="#Action">Action</Nav.Link>
            <Nav.Link href="#Advendure">Advendure</Nav.Link>
            <Nav.Link href="#Arcade">Arcade</Nav.Link>
            <Nav.Link href="#Puzzle">Puzzle</Nav.Link>
            <Nav.Link href="#Sport">Sport</Nav.Link>
            <Nav.Link href="#Strategy">Strategy</Nav.Link>
            <Nav.Link href="#Favorites">Favorites</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <style>
      {
        `
        .navbar_container{
          margin-bottom:25px;
        }
        `
      }
    </style>
  </>
  );
}

export default NavScrollExample;