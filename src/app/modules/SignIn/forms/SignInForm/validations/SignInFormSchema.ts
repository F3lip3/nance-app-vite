import * as yup from 'yup';
import { SignInFormFields } from '~/app/modules/SignIn/forms/SignInForm/interfaces/SignInFormFields';

export const SignInFormSchema: yup.SchemaOf<SignInFormFields> = yup.object({
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Informe o email'),
  password: yup
    .string()
    .min(3, 'A senha tem no mínimo 3 caracteres')
    .required('Informe a senha')
});
