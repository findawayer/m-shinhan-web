import { fakeUser, type User } from '~/entities/user';

export const authenticate = (forceState: boolean): Promise<User> =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (forceState ? resolve(fakeUser()) : reject('error happened')),
      1000
    )
  );
