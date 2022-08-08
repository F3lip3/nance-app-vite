interface KnownError {
  code: string;
  message: string;
  description?: string;
  variant?: 'error' | 'info' | 'success';
}

const mappedErrors: KnownError[] = [
  {
    code: 'ERR_NETWORK',
    message: 'Unable to connect to the server',
    description: 'Please check your network connection...'
  },
  {
    code: 'INVALID_CREDENTIALS',
    message: 'Invalid credentials'
  }
];

const undefinedError: KnownError = {
  code: 'UNDEFINED',
  message: 'An uncaught error occurred!',
  description: 'Please try again...',
  variant: 'error'
};

export const mapError = (error: any): KnownError => {
  const code = error?.response?.data?.message ?? error?.code ?? 'UNDEFINED';
  const err = mappedErrors.find(err => err.code === code);
  if (err) return { ...err, variant: 'error' };

  return undefinedError;
};
