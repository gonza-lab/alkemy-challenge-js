const auth_errors = {
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

export default auth_errors;
