import { atom } from 'recoil';
import type { AuthenticationPayload } from './authentication.models';

const createDefault = (): AuthenticationPayload => ({
  persist: false,
  user: null,
});

export const authenticationState = atom<AuthenticationPayload>({
  key: 'authentication',
  default: createDefault(),
});
