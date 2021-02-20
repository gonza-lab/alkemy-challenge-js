import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Fade } from 'react-slideshow-image';
import { useDispatch, useSelector } from 'react-redux';
import user from '../../../redux/user/actions';
import { AuthButton } from '../button/Button';
import { AuthCard } from '../card/Card';
import { AuthInput } from '../input/Input';
import Loader from 'react-loader-spinner';

const ERROR = {
  email: {
    pattern: 'Debe ingresar un email valido',
    required: 'Debe ingresar un email',
  },
  password: {
    required: 'Debe ingresar una contraseña',
  },
};

export const AuthLogin = () => {
  const { register, handleSubmit, trigger, errors } = useForm();
  const dispatch = useDispatch();
  const slideRef = useRef(null);
  const formRef = useRef(null);
  const { isLogging } = useSelector((state) => state.ui);

  const next = useCallback(
    async (field) => {
      const result = await trigger(field);
      if (result) {
        slideRef.current.goNext();
      }
    },
    [slideRef]
  );

  const prev = useCallback(() => {
    slideRef.current.goBack();
  }, [slideRef]);

  const handleLogin = (data) => {
    dispatch(user.startLogin(data));
  };

  return (
    <AuthCard>
      <form ref={formRef} onSubmit={handleSubmit(handleLogin)}>
        {isLogging ? (
          <div className="loading">
            <Loader type="Oval" color="#00BFFF" height={100} width={100} />
          </div>
        ) : (
          <Fade
            ref={slideRef}
            canSwipe={false}
            indicators={false}
            arrows={false}
            autoplay={false}
            transitionDuration={200}
          >
            <div
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.code === 'Enter') {
                  e.preventDefault();
                  next('email');
                }
              }}
              className="each-slide"
            >
              <h1>Hola! Ingresá tu email</h1>
              <AuthInput
                componentRef={register({
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
                name="email"
                type="email"
                placeHolder="Email"
                autoComplete="off"
                error={ERROR.email[errors.email?.type]}
              />
              <AuthButton type="button" onClick={() => next('email')}>
                Continuar
              </AuthButton>
              <Link to="/auth/signup">
                <AuthButton type="button" white>
                  Registrarse
                </AuthButton>
              </Link>
            </div>
            <div className="each-slide">
              <h1>Ahora, tu clave</h1>
              <AuthInput
                componentRef={register({ required: true })}
                name="password"
                type="password"
                autoComplete="off"
                placeHolder="Clave"
                error={ERROR.password[errors.password?.type]}
              />
              <AuthButton type="submit">Ingresar</AuthButton>
              <AuthButton type="button" onClick={prev} white>
                Regresar
              </AuthButton>
            </div>
          </Fade>
        )}
      </form>
    </AuthCard>
  );
};
