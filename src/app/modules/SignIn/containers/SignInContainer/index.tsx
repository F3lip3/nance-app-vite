import { useCallback } from 'react';
import { Container } from '~/app/modules/SignIn/containers/SignInContainer/styles';
import { useSignInForm } from '~/app/modules/SignIn/forms/SignInForm/useSignInForm';
import EmailField from '~/app/shared/components/EmailField';
import PasswordField from '~/app/shared/components/PasswordField';

export const SignInContainer = () => {
  const { errors, handleSubmit, register } = useSignInForm();

  const onSubmit = useCallback((data: any) => {
    console.info(data);
  }, []);

  return (
    <Container onSubmit={handleSubmit(onSubmit)} noValidate>
      <EmailField label="Email" error={errors.email} {...register('email')} />
      <PasswordField
        label="Senha"
        error={errors.password}
        {...register('password')}
      />

      <button type="submit">Acessar</button>
    </Container>
  );
};
