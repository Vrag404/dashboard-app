import { MouseEventHandler } from "react";

import { StyledButton } from "./Styles";

interface IButton {
    text: string,
    onClick: MouseEventHandler<HTMLButtonElement> | undefined,
}

const Button = ({ text, onClick }: IButton) => {
  return (
    <StyledButton type='button' onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;