import { SignInContainer } from '~/app/modules/SignIn/containers/SignInContainer';
import { SignInFormProvider } from '~/app/modules/SignIn/forms/SignInForm/useSignInForm';
import { Container, Title } from '~/app/modules/SignIn/styles';

export const SignIn = () => {
  return (
    <Container>
      <Title>Sign In</Title>
      <SignInFormProvider>
        <SignInContainer />
      </SignInFormProvider>
    </Container>
  );
};
