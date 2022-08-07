import {
  Container,
  SubmitButton
} from '~/app/modules/SignIn/containers/SignInContainer/styles';
import { useSignInForm } from '~/app/modules/SignIn/forms/SignInForm/useSignInForm';
import EmailField from '~/app/shared/components/EmailField';
import PasswordField from '~/app/shared/components/PasswordField';

export const SignInContainer = () => {
  const { errors, register, submitForm } = useSignInForm();

  return (
    <Container noValidate>
      <EmailField label="Email" error={errors.email} {...register('email')} />
      <PasswordField
        label="Senha"
        error={errors.password}
        {...register('password')}
      />

      <SubmitButton type="button" onClick={() => submitForm()}>
        Enviar
      </SubmitButton>
    </Container>
  );
};
