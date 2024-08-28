import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { authenticationState } from './authentication.store';

export const useAuthentication = () => useRecoilState(authenticationState);
export const useSetAuthentication = () =>
  useSetRecoilState(authenticationState);
export const useResetAuthentication = () =>
  useResetRecoilState(authenticationState);

export const useAuthenticatedUser = () => {
  const [authentication] = useAuthentication();
  return authentication.user;
};
