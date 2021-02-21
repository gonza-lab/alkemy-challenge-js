import React, { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { Controller } from 'react-hook-form';
import './InputDate.scss';

export const UiInputDate = ({
  placeHolder,
  rules,
  error,
  className,
  ...props
}) => {
  const [isWrite, setIsWrite] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      className={
        'ui-input ui-input-date' +
        (isFocus ? ' ui-input__focus' : '') +
        (isWrite ? ' ui-input__writed' : '') +
        (className ? ' ' + className : '')
      }
    >
      <span>{placeHolder}</span>
      <Controller
        placeholder=""
        render={({ onChange }) => (
          <DayPickerInput
            placeholder=""
            onDayChange={(data) => {
              setIsWrite(true);
              onChange(data);
            }}
          />
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
