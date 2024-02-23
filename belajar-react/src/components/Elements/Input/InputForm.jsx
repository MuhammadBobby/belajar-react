import Label from "./Label";
import Input from "./Input";

const InputForm = ({ nama, label, type, placeholder }) => {
  return (
    <div className="my-3">
      <Label htmlfor={nama}>{label}</Label>
      <Input type={type} name={nama} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
