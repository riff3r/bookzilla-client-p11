import React from "react";
import NewsLetter from "../../Layout/NewsLetter/NewsLetter";
import PopularAuthors from "../../Layout/PopularAuthors/PopularAuthors";
import PrimaryHeading from "../../Layout/PrimaryHeading/PrimaryHeading";
import Banner from "./Banner/Banner";
import BookList from "./BookList/BookList";

const Home = () => {
  return (
    <main>
      <Banner />
      <PrimaryHeading title="Book List" />
      <BookList />
      <NewsLetter />
      <PopularAuthors />
    </main>
  );
};

export default Home;
