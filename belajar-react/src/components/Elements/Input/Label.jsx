const Label = ({ htmlfor, children }) => {
  return (
    <label htmlFor={htmlfor} className="block text-left text-lg font-semibold">
      {children}
    </label>
  );
};

export default Label;
