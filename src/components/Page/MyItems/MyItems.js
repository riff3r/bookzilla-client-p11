import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const MyItems = () => {
  const [user, loading] = useAuthState(auth);
  const [myBooks, setMyBooks] = useState([]);
  const [reload, setReload] = useState(true);

  console.log(user?.email);
  console.log(myBooks);

  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/myItems?email=${email}`;

      const { data } = await axios.get(url);
      setMyBooks(data);
    };

    getMyItems();
  }, [user, reload]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete?");
    if (proceed) {
      axios
        .delete(`http://localhost:5000/inventory/${id}`)
        .then((res) => setReload(!reload));
    }
  };

  if (loading) {
    return (
      <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  console.log(myBooks);
  return (
    <div className="container my-5 py-5">
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
          {myBooks?.map((book) => (
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

export default MyItems;
