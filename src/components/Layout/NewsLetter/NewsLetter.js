import React from "react";
import PrimaryHeading from "../PrimaryHeading/PrimaryHeading";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter ">
      <div className="container">
        <div className=" my-5 py-5 text-center">
          <PrimaryHeading title="Stay in Touch with Our Inventory Updates" />

          <form className="row g-3 justify-content-center">
            <div className="col-auto">
              <input
                type="email"
                className="form-control py-2"
                id="nl-email"
                placeholder="your@email.com"
              />
            </div>

            <div className="col-auto">
              <button type="submit" className="px-4 py-2 btn btn-dark mb-3">
                Get In Touch
              </button>
            </div>

            <div className="mb-3 form-check text-center d-flex justify-content-center gap-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I agree to the Privacy Policy.
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
