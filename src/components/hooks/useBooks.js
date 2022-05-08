import axios from "axios";
import React, { useEffect, useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`https://obscure-shelf-45865.herokuapp.com/inventory`)
      .then((response) => setBooks(response.data));
  }, []);

  return [books, setBooks];
};

export default useBooks;
