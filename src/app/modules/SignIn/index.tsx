import { Container, Form, Title } from '~/app/modules/SignIn/styles';
import { EmailField } from '~/app/shared/components/EmailField';
import { PasswordField } from '~/app/shared/components/PasswordField';
import { TextField } from '~/app/shared/components/TextField';

export const SignIn = () => {
  return (
    <Container>
      <Title>Sign In</Title>
      <Form action="#" autoComplete="off">
        <TextField id="name" name="name" label="Nome" icon="user" />
        <EmailField id="email" name="email" label="Email" />
        <PasswordField id="password" name="password" label="Senha" />
      </Form>
    </Container>
  );
};
