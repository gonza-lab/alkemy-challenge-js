import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Fade } from 'react-slideshow-image';
import { AuthButton } from '../button/Button';
import { AuthCard } from '../card/Card';
import { AuthInput } from '../input/Input';

const ERROR = {
  pattern: 'Debe enviar un email valido',
};

export const AuthLogin = () => {
  const { register, handleSubmit, trigger, errors } = useForm();
  // const { nextStep, prevStep, step } = useStep({
  //   defaultValues: { email: 'hola', password: '' },
  // });
  const slideRef = useRef(null);
  console.log(errors);

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

  return (
    <AuthCard>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Fade
          ref={slideRef}
          canSwipe={false}
          indicators={false}
          arrows={false}
          autoplay={false}
          transitionDuration={200}
        >
          <div className="each-slide">
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
              error={ERROR[errors.email?.type]}
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
            />
            <AuthButton type="submit">Ingresar</AuthButton>
            <AuthButton type="button" onClick={prev} white>
              Regresar
            </AuthButton>
          </div>
        </Fade>
      </form>
    </AuthCard>
  );
};
