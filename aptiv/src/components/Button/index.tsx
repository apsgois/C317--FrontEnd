// components/Button.tsx
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ onClick, ...rest }) => {
  return <button type="button" onClick={onClick} {...rest} />;
};

export default Button;
