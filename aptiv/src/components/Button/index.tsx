// components/Button.tsx
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, ...rest }) => {
  return <button type="button" onClick={onClick} {...rest} />;
};

export default Button;
