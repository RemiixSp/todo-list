import React from 'react';
import cn from 'classnames';

interface InputProps {
  className: string;
  placeholder?: string;
  value: string;

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  className,
  placeholder,
  value,
  onChange,
}) => (
  <div className='form-group'>
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type='text'
      className={cn('form-control', className)}
      id='usr'
    />
  </div>
);

export default Input;
