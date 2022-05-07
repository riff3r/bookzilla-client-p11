import axios from "axios";
import React, { useEffect, useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/inventory`)
      .then((response) => setBooks(response.data));
  }, []);

  return [books, setBooks];
};

export default useBooks;
