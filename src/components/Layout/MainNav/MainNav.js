import { signOut } from "firebase/auth";
import React, { Fragment } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./MainNav.css";

const MainNav = () => {
  const [user, loading, error] = useAuthState(auth);

  // console.log(user);

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
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="manage-inventory"
            >
              Manage Inventories
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="blog"
            >
              Blog
            </NavLink>

            {!user ? (
              <Fragment>
                {" "}
                <Link to="login" className="btn btn-outline-dark py-2">
                  Login
                </Link>
                <Link to="signup" className="btn btn-danger text-white py-2">
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
