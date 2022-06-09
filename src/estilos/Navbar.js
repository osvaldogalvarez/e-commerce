
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
const NavBarExample = () => {
    return (
      <div>
        <>
          <Navbar className="navBg" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className=" justify-content-md-center ">
                  <Nav.Link as={Link} to="/"> Inicio </Nav.Link>
                  <Nav.Link as={Link} to="/shop"> Shop </Nav.Link>
                  <Nav.Link as={Link} to="/servicios"> Servicios </Nav.Link>
                  <Nav.Link as={Link} to="/contacto"> Contacto </Nav.Link>
                 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <section>
              <Outlet></Outlet>
          </section>
        </>
      </div>
    );
}

export default NavBarExample