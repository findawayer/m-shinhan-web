import { createContext, useContext } from 'react';
import type { LoginFormValues } from './-schema';

type LoginState = {
  busy: boolean;
  onLogin(values: LoginFormValues): unknown;
};

export const LoginContext = createContext<LoginState | null>(null);

export const useLoginContext = () => {
  const value = useContext(LoginContext);

  if (!value) {
    throw new Error(
      'Login components cannot be rendered outside of <LoginContext />.'
    );
  }

  return value;
};
