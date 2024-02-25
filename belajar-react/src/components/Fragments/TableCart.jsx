import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const TableCart = ({ products }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    if (cart.length > 0 && products.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  let number = 1;
  return (
    <table className="w-full table-auto text-center my-5 text-sm">
      <thead>
        <tr>
          <th className="mx-1">No.</th>
          <th className="mx-1">Name</th>
          <th className="mx-1">Price</th>
          <th className="mx-1">Quantity</th>
          <th className="mx-1">Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td>{number++}</td>
                <td>{product.title.substring(0, 20)}...</td>
                <td>{product.price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}</td>
                <td>{item.qty}</td>
                <td>{(product.price * item.qty).toLocaleString("id-ID", { style: "currency", currency: "USD" })}</td>
              </tr>
            );
          })}
      </tbody>
      <tfoot>
        {cart.length > 0 && (
          <tr className="font-bold pt-2">
            <td className="text-left px-5" colSpan="4">
              Total Price
            </td>
            <td className="">{totalPrice.toLocaleString("id-ID", { style: "currency", currency: "USD" })}</td>
          </tr>
        )}
      </tfoot>
    </table>
  );
};

export default TableCart;
