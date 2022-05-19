import React from "react";
import { Field, ErrorMessage } from "formik";
import cls from "../../../pages/providerAccount/provider.module.css";

function CheckboxGroup(props) {
  const { name, isChecked, options, ...rest } = props;
  console.log("Ischecked", isChecked);
  return (
    <div>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <div className="form-check pb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label
                    className={`form-check-label ${cls.font}`}
                    htmlFor={option.value}
                  >
                    {option.key}
                  </label>
                </div>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name}>
        {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
      </ErrorMessage>
    </div>
  );
}

export default CheckboxGroup;
