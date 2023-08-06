import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://63bb90b3cf99234bfa5e3b48.mockapi.io/Products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return {
    products,
  };
};

export default useProducts;
