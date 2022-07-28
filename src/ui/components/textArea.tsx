import React from 'react';

interface TextAreaProps {
  cols: number;
  rows: number;
  className: string;
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  cols,
  rows,
  className,
  placeholder,
}) => (
  <textarea
    placeholder={placeholder}
    className={className}
    cols={cols}
    rows={rows}
  />
);
export default TextArea;
