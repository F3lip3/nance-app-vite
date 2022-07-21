import { Container, Form } from '~/app/modules/SignIn/styles';
import { Input } from '~/app/shared/components/Input';

export const SignIn = () => {
  return (
    <Container>
      <h1>Sign In</h1>
      <Form action="#" autoComplete="off">
        <Input id="name" label="Nome" icon="user" />
        <Input id="email" label="Email" type="email" icon="email" />
        <Input id="password" label="Senha" type="password" icon="password" />
      </Form>
    </Container>
  );
};
