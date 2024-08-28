import type { User, UserSelector } from './user.models';
import { fakeUser } from './user.seed';

export const getUser = ({ id }: UserSelector): Promise<User> =>
  new Promise((resolve) => setTimeout(() => resolve(fakeUser()), 2000));
