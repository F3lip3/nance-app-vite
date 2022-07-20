import { Container } from '~/app/modules/SignIn/styles';
import { Input } from '~/app/shared/components/Input';

export const SignIn = () => {
  return (
    <Container>
      <h1>Sign In</h1>
      <form action="#" autoComplete="off">
        <Input />
      </form>
    </Container>
  );
};
