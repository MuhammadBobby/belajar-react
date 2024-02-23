import { useState } from "react";
import CardProducts from "../components/Fragments/Cards";

const products = [
  {
    id: 1,
    url: "/images/shoes-1.jpg",
    title: "Sepatu Baru",
    price: 100000,
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, at! Iure veniam suscipit tempora qui, harum assumenda dolores quis velit cumque consequatur aliquid dolorem culpa, dicta odit fugit debitis minus.",
  },
  {
    id: 2,
    url: "/images/shoes-1.jpg",
    title: "Sepatu Lama",
    price: 50000,
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 3,
    url: "/images/shoes-1.jpg",
    title: "Sepatu Lama Jadi Baru",
    price: 150000,
    description: " Ntah kenapa ini disini wkwkkwkw",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };

  const handleClick = (id) => {
    const newCart = products.find((product) => product.id === id);
    if (cart.find((item) => item.name === newCart.title)) {
      setCart(cart.map((item) => (item.name === newCart.title ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([
        ...cart,
        {
          name: newCart.title,
          qty: 1,
          price: newCart.price,
        },
      ]);
    }
  };

  let number = 1;

  return (
    <>
      <div className="w-full h-10 flex justify-end items-center absolute top-0 left-0 bg-violet-400 text-white text-right px-10">
        <p>{email}</p>
        <button className="bg-red-600  ml-3 rounded-md p-1 m-1 items-center" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="flex justify-between mt-16">
        <div className="w-2/3 flex flex-wrap justify-rounded ">
          {products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Body title={product.title} url={product.url}>
                {product.description}
              </CardProducts.Body>
              <CardProducts.Footer price={product.price} handleClick={handleClick} id={product.id} />
            </CardProducts>
          ))}
        </div>
        <div className="w-1/3">
          <h1 className="text-xl font-bold text-blue-600">Cart</h1>
          <table className="w-full table-auto text-center my-5 text-sm">
            <tr>
              <th className="mx-1">No.</th>
              <th className="mx-1">Name</th>
              <th className="mx-1">Quantity</th>
              <th className="mx-1">Price</th>
              <th className="mx-1">Total Price</th>
            </tr>
            {cart.map((item) => (
              <tr>
                <td className="mx-1">{number++}</td>
                <td className="mx-1">{item.name}</td>
                <td className="mx-1">{item.qty}</td>
                <td className="mx-1">{item.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                <td className="mx-1">{(item.price * item.qty).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
