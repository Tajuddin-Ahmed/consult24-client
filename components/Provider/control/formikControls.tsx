import React from "react";
import CategoryOption from "../Input/CategoryOption";
// import Input from './Input'
// import Textarea from './Textarea'
// import Select from './Select'
// import RadioButtons from './RadioButtons'
import CheckboxGroup from "../Input/CheckboxGroup";
import Input from "../Input/inputCheck";
import RadioButtons from "../Input/RadioButtons";
import SelectOption from "../Input/SelectOption";
// import DatePicker from './DatePicker'
// import ChakraInput from './ChakraInput'

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
    //   return <Textarea {...rest} />
    case "select":
      return <SelectOption {...rest} />;
    case "category":
      return <CategoryOption {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
    //   return <DatePicker {...rest} />
    case "chakraInput":
    //   return <ChakraInput {...rest} />
    default:
      return null;
  }
}

export default FormikControl;
