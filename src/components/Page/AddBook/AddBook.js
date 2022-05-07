import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios.post(`http://localhost:5000/add`, { data });
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
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="price" className="form-label">
            Price
            <span className="text-danger">*</span>
          </label>
          <input
            {...register("price")}
            type="number"
            className="form-control"
            id="price"
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
