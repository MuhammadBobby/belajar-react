const ButtonForm = ({ children }) => {
  return (
    <button type="submit" className="px-5 py-2 text-center bg-teal-600 rounded-lg font-bold hover:scale-105 hover:bg-opacity-75">
      {children}
    </button>
  );
};

export default ButtonForm;
