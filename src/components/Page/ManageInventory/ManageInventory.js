import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const ManageInventory = () => {
  const [user] = useAuthState(auth);

  const [books, setBooks] = useState([]);
  const [reload, setReload] = useState(true);

  console.log(user.email);
  // All books
  useEffect(() => {
    const email = user.email;
    axios
      .get(
        `https://obscure-shelf-45865.herokuapp.com/inventory?email=${email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((response) => setBooks(response.data));
  }, [user, reload]);

  // Delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete?");
    if (proceed) {
      axios
        .delete(`https://obscure-shelf-45865.herokuapp.com/inventory/${id}`)
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

      <Table responsive striped bordered hover>
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
