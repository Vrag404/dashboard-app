import { IInput } from "../../types/components.interfaces";

import { StyledInput } from "./styles/input.styled";

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