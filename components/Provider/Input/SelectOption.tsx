import React from "react";
import { Field, ErrorMessage } from "formik";
import cls from "../../../pages/providerAccount/provider.module.css";
function SelectOption(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field
        as="select"
        className={cls.businessInput}
        id={name}
        name={name}
        {...rest}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name}>
        {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
      </ErrorMessage>
    </div>
  );
}

export default SelectOption;
