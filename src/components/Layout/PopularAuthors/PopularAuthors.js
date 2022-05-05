import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PrimaryHeading from "../PrimaryHeading/PrimaryHeading";
import "./PopularAuthors.css";

const Authors = [
  {
    name: "Amy Stevens",
    image:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/team1-copyright-570x741.jpg",
  },
  {
    name: "Steven Moore",
    image:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/team2-copyright-570x741.jpg",
  },
  {
    name: "Jenny Sanders",
    image:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/team3-copyright-570x741.jpg",
  },
  {
    name: "Andrew Woods",
    image:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/team4-copyright-570x741.jpg",
  },
];

const PopularAuthors = () => {
  return (
    <div className="PopularAuthors">
      <Container>
        <PrimaryHeading title="Most Popular Authors" />

        <Row>
          {Authors.map((author) => (
            <Col xs={6} md={3}>
              <div className="card">
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
