import axios from "axios";

export const getProducts = () => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getDetailProducts = (id) => {
  return axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
