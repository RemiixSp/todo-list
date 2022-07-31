import React from 'react';

interface TextAreaProps {
  cols: number;
  rows: number;
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
  <textarea
    placeholder={placeholder}
    className={className}
    cols={cols}
    rows={rows}
    value={value}
    onChange={onChange}
  />
);
export default TextArea;
