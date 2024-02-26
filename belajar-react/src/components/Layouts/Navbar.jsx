import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const email = localStorage.getItem("email");

const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => acc + item.qty, 0);
    setTotalCart(sum);
  }, [cart]);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <div className="w-full h-10 flex justify-end items-center absolute top-0 left-0 bg-violet-400 text-white text-right px-10">
      <p>{email}</p>
      <button className="bg-red-600  ml-3 rounded-md p-1 m-1 items-center" onClick={handleLogout}>
        Logout
      </button>
      <div className="flex items-center bg-slate-800 p-2 rounded-full ml-5">{totalCart}</div>
      <button className="flex items-center bg-teal-600 p-2 rounded-full ml-5" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Navbar;
