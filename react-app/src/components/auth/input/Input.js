import React, { useState } from 'react';
import './Input.scss';

export const AuthInput = ({
  placeHolder,
  componentRef,
  onChange,
  error,
  className,
  ...props
}) => {
  const [isWrite, setIsWrite] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const handleChange = (e) => {
    setIsWrite(Boolean(e.target.value));
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      className={'auth-input' + (isFocus ? ' auth-input__focus' : '') + (className ? ' ' + className : '')}
    >
      <span className={isWrite ? 'auth-input__writed' : ''}>{placeHolder}</span>
      <input ref={componentRef} onChange={handleChange} {...props} />
      <div className={'error' + (error ? ` show` : '')}>{error}</div>
    </div>
  );
};
