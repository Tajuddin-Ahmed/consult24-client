import React from "react";
import { Field, ErrorMessage } from "formik";
import cls from "../../../pages/providerAccount/provider.module.css";

function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <fieldset className="mb-2">
      <p
        className={`card-text  ${cls.font}`}
        style={{ cursor: "pointer", color: "black" }}
      >
        {label}
      </p>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <div className="d-flex align-items-center border-bottom py-2">
                  <input
                    type="radio"
                    className="me-1"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </div>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name}>
        {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
      </ErrorMessage>
    </fieldset>
  );
}

export default RadioButtons;
