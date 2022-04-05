import { UserRoles } from '../enums/user-roles.enum';

export interface IUser {
  name: string;
  lastName: string;
  role: UserRoles;
  telephoneNumber?: string;
  address?: string;
  profilePicture?: string;
  email: string;
}

export type BaseUserInput = {
  email: string;
  password: string;
};

export type ExtendedUserInput = BaseUserInput & {
  name: string;
  lastName: string;
  telephoneNumber?: string;
  address?: string;
};
