import { useCallback } from 'react';
import { Resolver } from 'react-hook-form';
import * as yup from 'yup';

export const useYupValidationResolver = (
  formSchema: yup.SchemaOf<any>
): Resolver<any> =>
  useCallback(
    async data => {
      try {
        const values = await formSchema.validate(data, {
          abortEarly: false
        });

        return {
          values,
          errors: {}
        };
      } catch (errors: any) {
        return {
          values: {},
          errors: errors?.inner
            ? errors.inner.reduce(
                (
                  allErrors: Record<string, yup.CreateErrorOptions>,
                  currentError: yup.CreateErrorOptions
                ) => {
                  return {
                    ...allErrors,
                    [String(currentError.path)]: {
                      type: currentError.type ?? 'validation',
                      message: currentError.message
                    }
                  };
                },
                {}
              )
            : {}
        };
      }
    },
    [formSchema]
  );
