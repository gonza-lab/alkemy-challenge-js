import React, { useState } from 'react';
import useInputEffect from '../../../hooks/useInputEffect';
import './Input.scss';

export const UiInput = ({
  placeHolder,
  componentRef,
  onChange,
  error,
  className,
  value,
  ...props
}) => {
  const { isFocus, onBlur, onFocus } = useInputEffect();

  const handleChange = (e) => {
    if (onChange) onChange(e);
  };

  return (
    <div
      onFocus={onFocus}
      onBlur={onBlur}
      className={
        'ui-input' +
        (isFocus ? ' ui-input__focus' : '') +
        (value ? ' ui-input__writed' : '') +
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
