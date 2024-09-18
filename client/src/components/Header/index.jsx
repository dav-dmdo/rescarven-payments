import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" className="pe-1 ps-2">
        <Navbar.Brand as={Link} to="/">
          ResPay
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ps-1">
            <Nav.Link
              as={Link}
              to="/"
              active={location.pathname === "/" ? "true" : "false"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/payments"
              active={location.pathname === "/payments" ? "true" : "false"}
            >
              Payments
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              active={location.pathname === "/contact" ? "true" : "false"}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
