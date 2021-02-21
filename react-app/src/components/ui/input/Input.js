import React, { useState } from 'react';
import './Input.scss';

export const UiInput = ({
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
      className={
        'ui-input' +
        (isFocus ? ' ui-input__focus' : '') +
        (isWrite ? ' ui-input__writed' : '') +
        (className ? ' ' + className : '')
      }
    >
      <span>{placeHolder}</span>
      <input ref={componentRef} onChange={handleChange} {...props} />
      <div className="ui-input__border">
        <div></div>
      </div>
      <div className={'error' + (error ? ` show` : '')}>{error}</div>
    </div>
  );
};
