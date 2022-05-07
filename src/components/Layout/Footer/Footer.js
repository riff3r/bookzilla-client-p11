import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  // fixed-bottom
  return (
    <footer className="footer mt-5 pt-5">
      <div className="container">
        <div className="text-center">
          <h2>
            <div
              className="fs-1 d-flex gap-2 align-items-center justify-content-center"
              href="#home"
            >
              <i className="bi bi-book text-danger"></i>

              <div>
                Book<span className="text-danger">Zilla</span>{" "}
              </div>
            </div>
          </h2>

          <Navbar variant="light">
            <Container className="d-flex justify-content-center">
              <Nav className=" text-center ">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">Manage Inventories</Nav.Link>
                <Nav.Link href="#pricing">Blog</Nav.Link>
                <Nav.Link href="#pricing">About Us</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <hr />
        </div>
        <div className="copyright text-center text-black-50 pb-3 pt-2">
          <span>BookZilla © 2022. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
