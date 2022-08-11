import React from 'react';
import cn from 'classnames';

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
  children: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => (
  <button onClick={onClick} className={cn('btn', className)}>
    {children}
  </button>
);

export default Button;
