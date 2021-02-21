import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import user from '../../../redux/user/actions';
import { AuthButton } from '../button/Button';
import { AuthCard } from '../card/Card';
import { AuthInput } from '../input/Input';

export const AuthSignup = () => {
  const { register, errors, watch, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { isRegistering } = useSelector((state) => state.ui);

  const validatePass = useCallback(() => {
    return watch('password') === watch('repassword');
  }, []);

  const signup = ({ email, password }) => {
    dispatch(user.startSignUp({ email, password }));
  };

  return (
    <AuthCard>
      <form className="auth-signup" onSubmit={handleSubmit(signup)}>
        {isRegistering ? (
          <div className="loading">
            <Loader type="Oval" color="#00BFFF" height={100} width={100} />
          </div>
        ) : (
          <>
            <h1>Completa con tus datos</h1>
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
            <AuthInput
              componentRef={register({
                required: true,
                validate: { validatePass },
              })}
              name="repassword"
              type="password"
              autoComplete="off"
              placeHolder="Repetí la contraseña porfavor"
              error={errors}
            />
            <div>
              <AuthButton>Registrarse</AuthButton>
              <Link to="/auth/login">
                <AuthButton type="button" white>
                  Ingresá
                </AuthButton>
              </Link>
            </div>
          </>
        )}
      </form>
    </AuthCard>
  );
};
