import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useBooks from "../../../hooks/useBooks";

const BookList = () => {
  const [books] = useBooks();

  return (
    <div className="container">
      <Row>
        {books.slice(0, 6).map((book) => (
          <Col key={book._id} xs={6} md={4} xl={6}>
            <div className="card mb-3" style={{ maxWidth: "660px" }}>
              <div className="row g-0">
                <div className=" col-lg-12 col-xl-5">
                  <img
                    src={book.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className=" col-lg-12 col-xl-7">
                  <div className="card-body">
                    <h4 className="card-title">{book.title}</h4>
                    <h5>Price: ${book.price}</h5>
                    <h5>Quantity: {book.quantity}</h5>
                    <p className="card-text">
                      {book.description.slice(0, 250)}...
                    </p>

                    <p>
                      <span>Publisher:</span> {book.publisher}
                    </p>

                    <Link
                      to={`/inventory/${book._id}`}
                      className="btn btn-danger"
                    >
                      Update
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5">
        <Link to="manage" className="btn btn-dark px-3 py-2  shadow-lg ">
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default BookList;
