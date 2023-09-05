import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () =>  {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/"><b>NoteZipper</b></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='mx-auto'>
            <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </Form>
          </Nav>

          <Nav>
            <Nav.Link>
              <Link to="/notes">
                Notes
              </Link>
            </Nav.Link>
            <NavDropdown title="Pranjal Bhadu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;