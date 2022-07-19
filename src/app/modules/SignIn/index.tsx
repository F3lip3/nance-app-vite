import { Container } from '~/app/modules/SignIn/styles';

export const SignIn = () => {
  return (
    <Container
      size={{
        '@initial': 'full',
        '@bp2': 'md'
      }}
    >
      <h1>Sign In</h1>
    </Container>
  );
};
