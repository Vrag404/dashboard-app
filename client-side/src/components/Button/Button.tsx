import { IButton } from "../../types/components.interfaces";

import { StyledButton } from "./Styles";

const Button = ({ text, onClick }: IButton) => {
  return (
    <StyledButton type='button' onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;