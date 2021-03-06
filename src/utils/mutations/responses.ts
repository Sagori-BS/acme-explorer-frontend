import { Trip } from 'src/app/modules/trip/graphql/types/trip.type';
import { IBaseEntity } from 'src/utils/interfaces/base-entity.interface';
import { IUser } from 'src/utils/interfaces/user.interface';

export interface ResponseLoginMutation {
  signInUser: {
    accessToken: string;
    user: IUser & IBaseEntity;
  };
}

export interface ResponseSignUpMutation {
  signUpUser: {
    accessToken: string;
    user: IUser & IBaseEntity;
  };
}

export interface ResponseCreateTrip {
  createTrip: Trip;
}

export interface ResponseUpdateTrip {
  updateTrip: Trip;
}

export interface ResponseDeleteTrip {
  deleteSelfTrip: Trip;
}

export interface ResponseCancelTrip {
  cancelTrip: Trip;
}
