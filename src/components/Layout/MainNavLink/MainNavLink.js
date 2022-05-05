import React, { Fragment } from "react";
import { Nav, NavDropdown } from "react-bootstrap";

const MainNavLink = () => {
  return (
    <Fragment>
      <Nav.Link className="active" href="/">
        Home
      </Nav.Link>
      <Nav.Link href="/">Manage Inventories</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
    </Fragment>
  );
};

export default MainNavLink;
