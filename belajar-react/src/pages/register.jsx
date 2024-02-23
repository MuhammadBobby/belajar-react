import Formregister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPages = () => {
  return (
    <AuthLayout title="Register" type="register">
      <Formregister />
    </AuthLayout>
  );
};

export default RegisterPages;
