import { React, useState } from "react";
import { useForm } from "react-hook-form";
import GradientButton from "./GradientButton";
import { editCarMetadata, editCarStatus, addCar, setOwner } from "../../Web3Client";
const UserInput = ({ label, name, placeholder }) => {
  const { handleSubmit } = useForm();

  const [item, setItem] = useState("");
  let params;

  const onSubmit = async () => {
    switch (name) {
      case "editCarMetadata":
        params = item.split(", ");
        await editCarMetadata(params[0], params[1], params[2], params[3], params[4]);
        break;
      case "editCarStatus":
        await editCarStatus(item);
        break;
      case "addCar":
        params = item.split(", ");
        await addCar(params[0], params[1], params[2], params[3], params[4]);
        break;
      case "setOwner":
        await setOwner(item);
        break;
      default:
        console.warn("unrecognized field name");
        break;
    }
  };

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <form
      className="border-2 shadow-lg rounded-md p-4 mt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="gap-4 text-lrg font-semibold grid grid-flow-row">
        <label>{label}</label>

        <input
          className=" border-2 rounded-md p-2 mr-2"
          placeholder={placeholder}
          onChange={handleChange}
        />
        <GradientButton title="Submit" />
      </div>
    </form>
  );
};

export default UserInput;
