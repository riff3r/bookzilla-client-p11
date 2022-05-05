import { signOut } from "firebase/auth";
import React, { Fragment } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./MainNav.css";

const MainNav = () => {
  const [user, loading, error] = useAuthState(auth);

  console.log(user);

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
          as={Link}
          to="/"
        >
          <i className="bi bi-book text-danger"></i>

          <div>
            Book<span className="text-danger">Zilla</span>{" "}
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-3 fs-6">
            <Nav.Link className="active" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="manage-inventory">
              Manage Inventories
            </Nav.Link>
            <Nav.Link as={Link} to="blog">
              Blog
            </Nav.Link>

            {!user ? (
              <Fragment>
                {" "}
                <Link to="login" className="btn btn-outline-dark ">
                  Login
                </Link>
                <Link to="signup" className="btn btn-danger text-white">
                  Signup
                </Link>
              </Fragment>
            ) : (
              <NavDropdown
                title={<i className="bi bi-person"> {user?.displayName}</i>}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  {" "}
                  Manage Items
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">add item</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">My items</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/"
                  onClick={() => signOut(auth)}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
