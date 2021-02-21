import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import operation from '../../../redux/operation/actions';
import { UiInput } from '../../ui/input/Input';
import { AppCard } from '../card/Card';
import operation_errors from '../../../errors/operation';
import { UiInputDate } from '../../ui/input/InputDate';
import { UiInputSelect } from '../../ui/input/InputSelect';
import { UiButton } from '../../ui/button/Button';
import './Form.scss';

export const AppForm = ({ out }) => {
  const { register, errors, control, watch, handleSubmit } = useForm();
  const dispatch = useDispatch();

  return (
    <AppCard className="app-form">
      <div className="app-form__title">
        <h1>{out ? 'Nuevo egreso' : 'Nuevo ingreso'}</h1>
      </div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <UiInput
          className="app-form__expand"
          placeHolder="Concepto"
          componentRef={register({ required: true })}
          name="concept"
          autoComplete="off"
          error={operation_errors.concept[errors.concept?.type]}
        />
        <UiInput
          placeHolder="Monto"
          type="number"
          componentRef={register({ required: true })}
          name="amount"
          autoComplete="off"
          error={operation_errors.amount[errors.amount?.type]}
        />
        <UiInputDate
          placeHolder="Fecha"
          rules={{ required: true }}
          name="date"
          control={control}
          defaultValue=""
          error={operation_errors.date[errors.date?.type]}
        />
        <UiInputSelect
          className="app-form__expand"
          placeHolder="Categoria"
          componentRef={register()}
          name="categoryId"
        >
          <option value=""></option>
          <option value="categoria1">Categoria 1</option>
          <option value="categoria2">Categoria 2</option>
        </UiInputSelect>
        <UiButton type="button" white onClick={() => dispatch(operation.changeModeOff())}>
          Cancelar
        </UiButton>
        <UiButton>{out ? 'Retirar' : 'Ingresar'}</UiButton>
      </form>
    </AppCard>
  );
};
