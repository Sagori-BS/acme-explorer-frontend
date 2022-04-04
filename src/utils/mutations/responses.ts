import { IUser } from 'src/app/shared/intefaces/user.interface';

export interface ResponseLoginMutation {
  data: {
    signInUser: {
      accessToken: string;
      user: IUser;
    };
  };
}
