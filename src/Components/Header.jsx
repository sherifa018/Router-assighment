import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavLink from "react-bootstrap/esm/NavLink";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar
        bg="light"
        data-bs-theme="light"
        className="d-flex flex-row justify-content-between"
      >
        <Container className="d-flex flex-row p-3 justify-content-between gap-3">
          <Navbar.Brand>Company Name</Navbar.Brand>
          <Nav className="">
            <NavLink className="nav-link" to="features">
              Features
            </NavLink>
            <NavLink className="nav-link" to="enterprize">
              Enterprize
            </NavLink>
            <NavLink className="nav-link" to="support">
              Support
            </NavLink>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
