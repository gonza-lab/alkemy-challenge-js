import React, { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { Controller } from 'react-hook-form';
import useInputEffect from '../../../hooks/useInputEffect';
import './InputDate.scss';

export const UiInputDate = ({
  placeHolder,
  rules,
  error,
  className,
  value,
  ...props
}) => {
  const { isFocus, onBlur, onFocus } = useInputEffect();

  return (
    <div
      onFocus={onFocus}
      onBlur={onBlur}
      className={
        'ui-input ui-input-date' +
        (isFocus ? ' ui-input__focus' : '') +
        (value ? ' ui-input__writed' : '') +
        (className ? ' ' + className : '')
      }
    >
      <span>{placeHolder}</span>
      <Controller
        placeholder=""
        render={({ onChange, value }) => (
          <DayPickerInput value={value} placeholder="" onDayChange={onChange} />
        )}
        defaultValue=""
        rules={rules}
        {...props}
      />
      <div className="ui-input__border">
        <div></div>
      </div>
      <div className={'error' + (error ? ` show` : '')}>{error}</div>
    </div>
  );
};
