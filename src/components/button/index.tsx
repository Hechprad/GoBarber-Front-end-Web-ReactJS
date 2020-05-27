import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <StyledButton type="button" {...rest}>
    {children}
  </StyledButton>
);

export default Button;
