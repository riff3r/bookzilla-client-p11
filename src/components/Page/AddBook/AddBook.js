import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { toast } from "react-toastify";

const AddBook = () => {
  const [user, loading, error] = useAuthState(auth);

  // console.log(user?.email);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let { price } = data;
    let newPrice = +price;
    // console.log(newPrice);

    data.email = user?.email;

    console.log(data);

    if (newPrice !== "number") toast("Please input number in price");

    axios
      .post(`https://obscure-shelf-45865.herokuapp.com/add`, { data })
      .then((res) => navigate("/myItems"));
  };

  return (
    <div onSubmit={handleSubmit(onSubmit)} className="container mt-5">
      <h1 className="text-center mb-3">Add New Book</h1>

      <form className="w-50 row g-3 mx-auto border p-3 mt-5">
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Title
            <span className="text-danger">*</span>
          </label>
          <input
            {...register("title")}
            type="text"
            className="form-control"
            id="title"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="author" className="form-label">
            Author
            <span className="text-danger">*</span>
          </label>
          <input
            {...register("author")}
            type="text"
            className="form-control"
            id="author"
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="url" className="form-label">
            Image Link
            <span className="text-danger">*</span>
          </label>
          <input
            {...register("image")}
            type="text"
            className="form-control"
            id="url"
            placeholder="http://...."
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="description" className="form-label">
            Description
            <span className="text-danger">*</span>
          </label>
          <textarea
            {...register("description")}
            type="text"
            className="form-control"
            id="description"
            placeholder="Book description"
            required
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="publisher" className="form-label">
            Publisher
            <span className="text-danger">*</span>
          </label>
          <input
            {...register("publisher")}
            type="text"
            className="form-control"
            id="publisher"
            required
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="price" className="form-label">
            Price
            <span className="text-danger">*</span>
          </label>
          <input
            {...register("price")}
            type="text"
            className="form-control"
            id="price"
            required
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="quantity" className="form-label">
            Quantity
            <span className="text-danger">*</span>
          </label>
          <input
            {...register("quantity")}
            type="number"
            className="form-control"
            id="quantity"
            required
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="year" className="form-label">
            Year
          </label>
          <input
            {...register("year")}
            type="number"
            className="form-control"
            id="year"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            {...register("category")}
            type="text"
            className="form-control"
            id="category"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            {...register("tag")}
            type="text"
            className="form-control"
            id="tag"
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
