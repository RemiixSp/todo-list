import cn from 'classnames';
import React from 'react';

interface TextAreaProps {
  cols?: number;
  rows?: number;
  className: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  cols,
  rows,
  className,
  placeholder,
  value,
  onChange,
}) => (
  <div className='form-group'>
    <textarea
      placeholder={placeholder}
      className={cn('form-control', className)}
      cols={cols}
      rows={rows}
      value={value}
      onChange={onChange}
    />
  </div>
);
export default TextArea;
