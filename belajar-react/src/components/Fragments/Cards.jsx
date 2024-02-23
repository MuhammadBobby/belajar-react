const CardProducts = ({ children }) => {
  return <div className="w-full lg:w-1/3 m-3 p-5 rounded-md bg-slate-800 border-2 border-slate-700 text-white flex flex-col justify-between shadow-md">{children}</div>;
};

const Body = ({ title, url, children }) => {
  return (
    <a href="">
      <img src={url} alt={url} className="w-full rounded-lg" />

      <div className=" my-3">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-md font-light mt-2 text-justify leading-4">{children}</p>
      </div>
    </a>
  );
};

const Footer = ({ price, handleClick, id }) => {
  return (
    <div className="flex justify-between items-center">
      <p className="font-bold text-lg">{price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
      <button onClick={() => handleClick(id)} type="button" className="w-1/3 p-2 text-center font-semibold rounded-md bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
