import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import useBooks from "../../hooks/useBooks";
import { Link } from "react-router-dom";

const ManageInventory = () => {
  const [books, setBooks] = useState([]);
  const [reload, setReload] = useState(true);

  // All books
  useEffect(() => {
    axios
      .get(`http://localhost:5000/inventory`)
      .then((response) => setBooks(response.data));
  }, [reload]);

  // Delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete?");
    if (proceed) {
      axios
        .delete(`http://localhost:5000/inventory/${id}`)
        .then((res) => setReload(!reload));
    }
  };

  return (
    <div className="container my-5">
      <div className="mb-3">
        <Link to="/add" className="btn btn-danger">
          Add New Book
        </Link>
      </div>

      <Table striped bordered hover>
        <thead className="">
          <tr>
            <th scope="col">Book Name</th>
            <th scope="col">Author</th>
            <th scope="col">Publisher</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.quantity}</td>
              <td>${book.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="btn btn-danger"
                >
                  <i className="bi bi-x-circle me-2"></i>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageInventory;
