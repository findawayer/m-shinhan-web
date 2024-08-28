import type { User } from './user.models';

export function fakeUser(): User {
  return {
    createdAt: new Date().toISOString(),
    id: '000000',
    name: '사용자',
  };
}
