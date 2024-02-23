import ButtonForm from "../Elements/Button/ButtonForm";
import InputForm from "../Elements/Input/InputForm";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };

  return (
    <form className="my-5" onSubmit={handleLogin}>
      <InputForm nama="email" label="Email" type="email" placeholder="example@gmail.com" />
      <InputForm nama="password" label="Password" type="password" placeholder="*****" />
      <ButtonForm>Login</ButtonForm>
    </form>
  );
};

export default FormLogin;
