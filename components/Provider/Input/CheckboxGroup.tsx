import React from "react";
import { Field, ErrorMessage } from "formik";
import cls from "../../../pages/providerAccount/provider.module.css";

function CheckboxGroup(props) {
  const { name, options, ...rest } = props;
  let isCheck = false;
  return (
    <div>
      <Field name={name}>
        {({ field }) => {
          if (field.value.includes("all")) {
            isCheck = true;
          }
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
                    checked={
                      isCheck ? isCheck : field.value.includes(option.value)
                    }
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
    </div>
  );
}

export default CheckboxGroup;
