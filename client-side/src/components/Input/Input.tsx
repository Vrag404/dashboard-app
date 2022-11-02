import React, { ChangeEventHandler } from "react";

import { StyledInput } from "./Styles";

interface IInput {
    type: string,
    placeholder: string,
    value: string | number | undefined,
    onChange: ChangeEventHandler<HTMLInputElement>
}

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