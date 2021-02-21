import React, { useState } from 'react';
import './Input.scss';

const ERRORS = {
  email: {
    required: 'Debe ingresar un email.',
    pattern: 'Debe ingresar un email válido.',
  },
  password: {
    required: 'Debe ingresar su contraseña',
  },
  repassword: {
    required: 'Debe repetir la contraseña',
    validatePass: 'Las contraseñas deben coincidir',
  },
};

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
      className={
        'auth-input' +
        (isFocus ? ' auth-input__focus' : '') +
        (isWrite ? ' auth-input__writed' : '') +
        (className ? ' ' + className : '')
      }
    >
      <span>{placeHolder}</span>
      <input ref={componentRef} onChange={handleChange} {...props} />
      <div className="auth-input__border">
        <div></div>
      </div>
      <div className={'error' + (error[props.name] ? ` show` : '')}>
        {ERRORS[props.name][error[props.name]?.type]}
      </div>
    </div>
  );
};
