import React from 'react';

interface InputProps {
  className: string;
  placeholder?: string;
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  className,
  placeholder,
  value,
  onChange,
  type,
}) => (
  <input
    placeholder={placeholder}
    className={className}
    value={value}
    onChange={onChange}
    type={type}
  />
);
export default Input;
