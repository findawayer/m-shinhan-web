import type { User } from '~/entities/user';

export type AuthenticationPayload = {
  persist: boolean;
  user: User | null;
};
