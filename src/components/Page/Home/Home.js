import React from "react";
import PrimaryHeading from "../../Layout/PrimaryHeading/PrimaryHeading";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <main>
      <Banner />
      <div className="container">
        <PrimaryHeading title="Book Inventory" />
      </div>
    </main>
  );
};

export default Home;
