import { Link } from "react-router-dom";

const AuthLayout = ({ children, title, type }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs text-center">
        <h1 className="text-4xl font-bold text-teal-600">{title}</h1>
        {children}
        <p className="text-sm font-semibold">
          {type === "login" ? "Dont Have an Account?" : "Already Have an account?"}{" "}
          {type === "login" ? (
            <Link to="/register" className="text-teal-600 font-bold">
              Register
            </Link>
          ) : (
            <Link to="/" className="text-teal-600 font-bold">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
