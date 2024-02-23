import ButtonForm from "../Elements/Button/ButtonForm";
import InputForm from "../Elements/Input/InputForm";

const Formregister = () => {
  return (
    <form action="" className="my-5">
      <InputForm name="nama" label="Fullname" type="text" placeholder="Insert your name here..." />
      <InputForm name="email" label="Email" type="email" placeholder="example@gmail.com" />
      <InputForm name="password" label="Password" type="password" placeholder="*****" />
      <InputForm name="confirmpassword" label="Confirm Password" type="password" placeholder="*****" />
      <ButtonForm>Register</ButtonForm>
    </form>
  );
};

export default Formregister;
