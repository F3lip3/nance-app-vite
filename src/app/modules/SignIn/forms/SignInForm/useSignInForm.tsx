import React, { createContext, useCallback, useContext } from 'react';
import {
  Control,
  FieldErrors,
  useForm,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetError,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SignInFormFields } from '~/app/modules/SignIn/forms/SignInForm/interfaces/SignInFormFields';
import { SignInFormSchema } from '~/app/modules/SignIn/forms/SignInForm/validations/SignInFormSchema';
import { useYupValidationResolver } from '~/app/shared/helpers/validationResolvers';
import { useAuth } from '~/app/shared/hooks/useAuth';

interface SignInFormContextData {
  clearErrors: UseFormClearErrors<SignInFormFields>;
  control: Control<SignInFormFields>;
  errors: FieldErrors<SignInFormFields>;
  getValues: UseFormGetValues<SignInFormFields>;
  handleSubmit: UseFormHandleSubmit<SignInFormFields>;
  register: UseFormRegister<SignInFormFields>;
  reset: UseFormReset<SignInFormFields>;
  setError: UseFormSetError<SignInFormFields>;
  setValue: UseFormSetValue<SignInFormFields>;
  trigger: UseFormTrigger<SignInFormFields>;
  watch: UseFormWatch<SignInFormFields>;
  submitForm: () => void;
}

interface SignInFormProps {
  children: React.ReactNode;
}

const SignInFormContext = createContext<SignInFormContextData>(
  {} as SignInFormContextData
);

const SignInFormProvider: React.FC<SignInFormProps> = ({ children }) => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const resolver = useCallback(useYupValidationResolver(SignInFormSchema), []);

  const {
    clearErrors,
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
    setError,
    setValue,
    trigger,
    watch
  } = useForm<SignInFormFields>({
    resolver,
    reValidateMode: 'onChange'
  });

  const submitForm = async () => {
    await handleSubmit(async data => {
      await signIn(data);
      navigate('/dashboard', { replace: true });
    })();
  };

  return (
    <SignInFormContext.Provider
      value={{
        clearErrors,
        control,
        errors,
        getValues,
        handleSubmit,
        register,
        reset,
        setError,
        setValue,
        submitForm,
        trigger,
        watch
      }}
    >
      {children}
    </SignInFormContext.Provider>
  );
};

const useSignInForm = (): SignInFormContextData => {
  const context = useContext(SignInFormContext);
  if (!context) {
    throw new Error('useSignInForm must be used within a SignInFormProvider');
  }

  return context;
};

export { useSignInForm, SignInFormProvider };
