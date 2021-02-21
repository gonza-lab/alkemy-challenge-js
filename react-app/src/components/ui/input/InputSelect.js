import React, { useState } from 'react';
import './InputSelect.scss';

export const UiInputSelect = ({
  placeHolder,
  componentRef,
  onChange,
  error,
  children,
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
      className={
        'ui-input ui-input-select' +
        (isFocus ? ' ui-input__focus' : '') +
        (isWrite ? ' ui-input__writed' : '') +
        (className ? ' ' + className : '')
      }
    >
      <span>{placeHolder}</span>
      {/* <input ref={componentRef} onChange={handleChange} {...props} /> */}
      <select ref={componentRef} onChange={handleChange} {...props}>
        {children}
      </select>
      <div className="ui-input__border">
        <div></div>
      </div>
      <div className={'error' + (error ? ` show` : '')}>{error}</div>
    </div>
  );
};
