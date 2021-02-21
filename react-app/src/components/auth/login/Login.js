import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import user from '../../../redux/user/actions';
import { AuthButton } from '../button/Button';
import { AuthCard } from '../card/Card';
import { AuthInput } from '../input/Input';
import Loader from 'react-loader-spinner';

export const AuthLogin = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const { isLogging } = useSelector((state) => state.ui);

  const handleLogin = (data) => {
    dispatch(user.startLogin(data));
  };

  return (
    <AuthCard>
      <form onSubmit={handleSubmit(handleLogin)}>
        {isLogging ? (
          <div className="loading">
            <Loader type="Oval" color="#00BFFF" height={100} width={100} />
          </div>
        ) : (
          <>
            <h1>Ingresa tus datos :)</h1>
            <AuthInput
              componentRef={register({
                required: true,
                pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              })}
              name="email"
              autoComplete="off"
              placeHolder="Email"
              error={errors}
            />
            <AuthInput
              componentRef={register({ required: true })}
              name="password"
              type="password"
              autoComplete="off"
              placeHolder="Contraseña"
              error={errors}
            />
            <div>
              <AuthButton>Ingresar</AuthButton>
              <Link to="/auth/signup">
                <AuthButton type="button" white>
                  No tenes cuenta?
                </AuthButton>
              </Link>
            </div>
          </>
        )}
      </form>
    </AuthCard>
  );
};
