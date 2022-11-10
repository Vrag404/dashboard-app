import { IInput } from "../../types/components.interfaces";

import { StyledInput } from "./Styles";

const Input = ({ type, placeholder, value, onChange }: IInput) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;