import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const ItemDetails = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const [book, setBook] = useState({});
  const [reload, setReload] = useState(true);

  let {
    image,
    title,
    author,
    description,
    price,
    quantity,
    publisher,
    sold,
    tag,
    year,
  } = book;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/inventory/${id}`)
      .then((response) => setBook(response.data));
  }, [reload]);

  const onHandleDelivery = () => {
    quantity -= 1;
    ++sold;

    console.log(quantity, sold);

    axios
      .put(`http://localhost:5000/inventory/${id}`, { quantity, sold })
      .then((res) => setReload(!reload));
  };

  const onHandleRestock = (data) => {
    const { restock } = data;

    const newStock = quantity + +restock;

    axios
      .put(`http://localhost:5000/inventory/${id}`, { restock: newStock })
      .then((res) => {
        reset();
        setReload(!reload);
      });
  };

  return (
    <Container className="mt-5">
      <Row md={4}>
        <Col xs={6} md={4}>
          <img className="img-fluid" src={image} alt="" />
        </Col>

        <Col xs={12} md={8}>
          <h1>{title}</h1>
          <p>Author: {author}</p>
          <h4>
            Price: <span className="text-danger">${price}</span>{" "}
          </h4>
          <p>{description}</p>
          <p>
            Publisher: <strong>{publisher}</strong>
          </p>
          <p>
            Year of Publishing: <strong>{year}</strong>
          </p>
          <p>
            Quantity: <strong>{quantity}</strong>
          </p>
          {sold ? (
            <p>
              Sold: <strong>{sold}</strong>{" "}
            </p>
          ) : (
            ""
          )}

          <p>
            Tag: <strong>{tag}</strong>
          </p>

          <Button className="mb-3" onClick={onHandleDelivery} variant="danger">
            Delivered
          </Button>

          <form className="w-50" onSubmit={handleSubmit(onHandleRestock)}>
            <div className="input-group">
              <input
                {...register("restock", { required: true })}
                type="number"
                className="form-control"
                placeholder="Restock Quantity"
                aria-label="Restock Quantity"
                required
              />
              <button className="btn btn-outline-danger" type="submit">
                Restock
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetails;
