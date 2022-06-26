import React from "react";
import { Field, ErrorMessage } from "formik";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name}>
        {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
      </ErrorMessage>
    </div>
  );
}

export default Input;
