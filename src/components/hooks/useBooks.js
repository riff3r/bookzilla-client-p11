import React, { useEffect, useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return [books, setBooks];
};

export default useBooks;
