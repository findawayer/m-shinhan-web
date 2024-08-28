export type User = {
  createdAt: string;
  id: string;
  name: string;
};

export type UserSelector = Pick<User, 'id'>;
