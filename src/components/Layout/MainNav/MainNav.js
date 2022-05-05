import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./MainNav.css";

const MainNav = () => {
  return (
    <Navbar
      sticky="top"
      className="main-navbar shadow-sm py-3"
      collapseOnSelect
      expand="lg"
      variant="light"
    >
      <Container>
        <Navbar.Brand
          className="fs-1 d-flex gap-2 align-items-center"
          href="#home"
        >
          <i className="bi bi-book text-danger"></i>

          <div>
            Book<span className="text-danger">Zilla</span>{" "}
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-3 fs-6">
            <Nav.Link className="active" href="/">
              Home
            </Nav.Link>
            <Nav.Link href="/">Manage Inventories</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <button className="btn btn-outline-dark ">Login</button>
            <button className="btn btn-danger text-white">Signup</button>

            <NavDropdown
              title={<i className="bi bi-person"></i>}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                {" "}
                Manage Items
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">add item</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">My items</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
