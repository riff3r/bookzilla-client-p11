import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Books = [
  {
    title: "A Doctor in the House",
    year: 2015,
    price: 16.99,
    quantity: 100,
    sold: 0,
    description:
      "In his twenty-two years as Prime Minister of Malaysia Dr Mahathir Mohamad transformed his country from an agricultural backwater into an industrial powerhouse that would become the seventeenth-largest trading nation in the world.",
    image:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book11-copyright.jpg",
    author: "Candy Carson",
    publisher: "Brandon & Parthners",
    categories: ["Drama", "Mystery"],
    tag: "Best Sellers",
  },
  {
    title: "Wildflower",
    year: 2016,
    price: 20.0,
    quantity: 100,
    sold: 0,
    description:
      "Wildflower is a portrait of Drew's life in stories as she looks back on the adventures, challenges, and incredible experiences she’s had throughout her life. It includes tales of living in her first apartment as a teenager (and how laundry may have saved her life), getting stuck under a gas station overhang on a cross—country road trip, saying good-bye to her father in a way only he could have understood, and many more journeys and lessons that have led her to the successful, happy, and healthy place she is today.",
    image:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book13-copyright.jpg",
    author: "Drew Berrymore",
    publisher: "Manager FeedWise",
    categories: ["Drama", "Novels"],
    tag: "Award Winners",
  },

  {
    title: "A Doctor in the House",
    year: 2015,
    price: 16.99,
    description:
      "In his twenty-two years as Prime Minister of Malaysia Dr Mahathir Mohamad transformed his country from an agricultural backwater into an industrial powerhouse that would become the seventeenth-largest trading nation in the world.",
    image:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book11-copyright.jpg",
    author: "Candy Carson",
    publisher: "Brandon & Parthners",
    categories: ["Drama", "Mystery"],
    tag: "Best Sellers",
  },
  {
    title: "Wildflower",
    year: 2016,
    price: 20.0,
    description:
      "Wildflower is a portrait of Drew's life in stories as she looks back on the adventures, challenges, and incredible experiences she’s had throughout her life. It includes tales of living in her first apartment as a teenager (and how laundry may have saved her life), getting stuck under a gas station overhang on a cross—country road trip, saying good-bye to her father in a way only he could have understood, and many more journeys and lessons that have led her to the successful, happy, and healthy place she is today.",
    image:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book13-copyright.jpg",
    author: "Drew Berrymore",
    publisher: "Manager FeedWise",
    categories: ["Drama", "Novels"],
    tag: "Award Winners",
  },
  {
    title: "A Doctor in the House",
    year: 2015,
    price: 16.99,
    description:
      "In his twenty-two years as Prime Minister of Malaysia Dr Mahathir Mohamad transformed his country from an agricultural backwater into an industrial powerhouse that would become the seventeenth-largest trading nation in the world.",
    image:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book11-copyright.jpg",
    author: "Candy Carson",
    publisher: "Brandon & Parthners",
    categories: ["Drama", "Mystery"],
    tag: "Best Sellers",
  },
  {
    title: "Wildflower",
    year: 2016,
    price: 20.0,
    description:
      "Wildflower is a portrait of Drew's life in stories as she looks back on the adventures, challenges, and incredible experiences she’s had throughout her life. It includes tales of living in her first apartment as a teenager (and how laundry may have saved her life), getting stuck under a gas station overhang on a cross—country road trip, saying good-bye to her father in a way only he could have understood, and many more journeys and lessons that have led her to the successful, happy, and healthy place she is today.",
    image:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book13-copyright.jpg",
    author: "Drew Berrymore",
    publisher: "Manager FeedWise",
    categories: ["Drama", "Novels"],
    tag: "Award Winners",
  },
];

const BookList = () => {
  return (
    <div className="container">
      <Row>
        {Books.slice(0, 6).map((book) => (
          <Col xs={6} md={4} xl={6}>
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

                    <Link to="/inventory/1234" className="btn btn-danger">
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
        <a href="/" className="btn btn-dark px-3 py-2  shadow-lg ">
          Manage List
        </a>
      </div>
    </div>
  );
};

export default BookList;
