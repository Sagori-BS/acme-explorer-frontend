import { IBaseEntity } from './base-entity.interface';

export interface IStage extends IBaseEntity {
  title: string;
  description: string;
  price: number;
}
