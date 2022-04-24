import { IBaseEntity } from './base-entity.interface';
import { IStage } from './stage.interface';
import { IUser } from './user.interface';

export interface ITrip extends IBaseEntity {
  title: string;
  ticket: string;
  description: string;
  price: number;
  requirements: string[];
  startDate: string;
  endDate: string;
  pictures: string[];
  reasonCancelled?: string;
  stages: IStage[];
  manager: IUser;
}
