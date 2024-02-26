import { useState } from "react";
import CardProducts from "../components/Fragments/Cards";
import { useEffect } from "react";
import { getProducts } from "../services/product.service";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { useContext } from "react";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { isDarkMode } = useContext(DarkMode);

  // const handleClick = (id) => {
  //   const newCart = products.find((product) => product.id === id);
  //   if (cart.find((item) => item.name === newCart.title)) {
  //     setCart(cart.map((item) => (item.name === newCart.title ? { ...item, qty: item.qty + 1 } : item)));
  //   } else {
  //     setCart([
  //       ...cart,
  //       {
  //         name: newCart.title,
  //         qty: 1,
  //         price: newCart.price,
  //       },
  //     ]);
  //   }
  // };

  const removeLocaleStorage = () => {
    localStorage.removeItem("cart");
    window.location.reload();
  };

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <div className={`flex justify-between pt-16 ${isDarkMode && "bg-slate-800 text-white"}`}>
        <div className="w-2/3 flex flex-wrap justify-rounded ">
          {products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Body title={product.title} url={product.image} id={product.id}>
                {product.description}
              </CardProducts.Body>
              <CardProducts.Footer price={product.price} id={product.id} />
            </CardProducts>
          ))}
        </div>
        <div className="w-1/3">
          <h1 className="text-xl font-bold text-blue-600">Cart</h1>
          <TableCart products={products} />
          <div>
            <button onClick={removeLocaleStorage} className="bg-red-600 text-white  ml-3 rounded-md p-1 m-1">
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
