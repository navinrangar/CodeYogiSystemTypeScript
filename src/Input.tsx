import { useField, validateYupSchema } from "Formik";
import { memo } from "react";
import withFormik from "./withFormik";

const Input = ({ id, type, name, touched, error, ...rest }) => {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {" "}
        Password{" "}
      </label>
      <input
        id={id}
        name={name}
        type={type || "text"}
        {...rest}
        className="appearance-none rounded-none h-full w-full relative block"
      />

      {touched && error && <span className="text-red-400 text-sm"> {error}</span>}
    </>
  );
};

const FormikInput = withFormik(Input);
export const MemoisedFormikInput = memo(FormikInput);

export default memo(Input);
