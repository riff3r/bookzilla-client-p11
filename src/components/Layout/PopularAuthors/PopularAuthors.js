import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PrimaryHeading from "../PrimaryHeading/PrimaryHeading";
import "./PopularAuthors.css";

const Authors = [
  {
    id: 1,
    name: "Amy Stevens",
    image:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/team1-copyright-570x741.jpg",
  },
  {
    id: 2,
    name: "Steven Moore",
    image:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/team2-copyright-570x741.jpg",
  },
  {
    id: 3,
    name: "Jenny Sanders",
    image:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/team3-copyright-570x741.jpg",
  },
  {
    id: 4,
    name: "Andrew Woods",
    image:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/team4-copyright-570x741.jpg",
  },
];

const PopularAuthors = () => {
  return (
    <div className="PopularAuthors">
      <Container>
        <PrimaryHeading title="Pick From Most Popular Authors" />

        <Row>
          {Authors.map((author) => (
            <Col key={author.id} xs={6} md={3}>
              <div className="card mb-4">
                <img src={author.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>{author.name}</h4>
                  <p className="card-text">Author</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PopularAuthors;
