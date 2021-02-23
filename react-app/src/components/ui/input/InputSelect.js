import React from 'react';
import useInputEffect from '../../../hooks/useInputEffect';
import './InputSelect.scss';

export const UiInputSelect = ({
  placeHolder,
  componentRef,
  onChange,
  error,
  children,
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
        'ui-input ui-input-select' +
        (isFocus ? ' ui-input__focus' : '') +
        (value ? ' ui-input__writed' : '') +
        (className ? ' ' + className : '')
      }
    >
      <span>{placeHolder}</span>
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
