import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import operation from '../../../redux/operation/actions';
import { UiInput } from '../../ui/input/Input';
import { AppCard } from '../card/Card';
import operation_errors from '../../../errors/operation';
import { UiInputDate } from '../../ui/input/InputDate';
import { UiInputSelect } from '../../ui/input/InputSelect';
import { UiButton } from '../../ui/button/Button';
import './Form.scss';
import Loader from 'react-loader-spinner';

const text = {
  add: {
    title: 'Nuevo ingreso',
    button: 'Añadir',
  },
  sub: {
    title: 'Nuevo egreso',
    button: 'Retirar',
  },
  up: {
    title: 'Actualizar transaccion',
    button: 'Actualizar',
  },
};

const defaultValues = {
  concept: '',
  amount: '',
  date: '',
  categoryId: '',
};

export const AppForm = () => {
  const { register, errors, control, handleSubmit, reset, watch } = useForm();
  const { mode, categories, activeOperation } = useSelector(
    (state) => state.operation
  );
  const {
    isAddingOperation,
    isRemovingOperation,
    isUpdatingOperation,
  } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (mode === 'up') {
      dispatch(
        operation.startUpdateOperation({ ...data, id: activeOperation.id })
      );
    } else {
      dispatch(operation.startMakeOperation(data));
    }
    reset(defaultValues);
  };

  useEffect(() => {
    if (activeOperation) {
      reset(activeOperation);
    } else {
      reset(defaultValues);
    }
  }, [activeOperation]);

  return (
    <AppCard className="app-form">
      {isAddingOperation || isRemovingOperation || isUpdatingOperation ? (
        <div className="loading">
          <Loader type="Oval" color="#00BFFF" height={100} width={100} />
        </div>
      ) : (
        <>
          <div className="app-form__title">
            <h1>{text[mode]?.title}</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <UiInput
              className="app-form__expand"
              placeHolder="Concepto"
              componentRef={register({ required: true })}
              name="concept"
              autoComplete="off"
              value={watch('concept')}
              error={operation_errors.concept[errors.concept?.type]}
            />
            <UiInput
              placeHolder="Monto"
              type="number"
              componentRef={register({ required: true })}
              name="amount"
              autoComplete="off"
              value={watch('amount')}
              error={operation_errors.amount[errors.amount?.type]}
            />
            <UiInputDate
              placeHolder="Fecha"
              rules={{ required: true }}
              name="date"
              control={control}
              defaultValue=""
              value={watch('date')}
              error={operation_errors.date[errors.date?.type]}
            />
            <UiInputSelect
              className="app-form__expand"
              placeHolder="Categoria"
              componentRef={register()}
              name="categoryId"
              value={watch('categoryId')}
            >
              <option value=""></option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </UiInputSelect>
            <UiButton
              type="button"
              white
              onClick={() => dispatch(operation.changeModeOff())}
            >
              Cancelar
            </UiButton>
            <UiButton>{text[mode]?.button}</UiButton>
          </form>
        </>
      )}
    </AppCard>
  );
};
