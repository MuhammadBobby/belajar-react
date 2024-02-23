const Input = ({ type, name, placeholder }) => {
  return <input type={type} name={name} className="w-full border-2 border-teal-600 rounded-md focus:ring focus:ring-teal-700 focus:outline-none p-2" placeholder={placeholder} />;
};

export default Input;
