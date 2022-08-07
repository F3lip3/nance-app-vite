import { useMutation } from '@tanstack/react-query';
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
import { SignInFormFields } from '~/app/modules/SignIn/forms/SignInForm/interfaces/SignInFormFields';
import { SignInFormSchema } from '~/app/modules/SignIn/forms/SignInForm/validations/SignInFormSchema';
import { useToast } from '~/app/shared/hooks/useToast';
import { useYupValidationResolver } from '~/app/shared/hooks/useYupValidationResolver';
import { SignInResponse } from '~/app/shared/interfaces/User';
import api from '~/app/shared/services/api';

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

  const { addToast } = useToast();

  const signIn = useMutation(async (signInData: SignInFormFields) => {
    try {
      const response = await api.post<SignInResponse>('auth/login', signInData);
      console.info(response.data);
    } catch (error: any) {
      addToast({ title: error.message });
    }
  });

  const submitForm = async () => {
    await handleSubmit(async data => {
      await signIn.mutateAsync(data);
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
