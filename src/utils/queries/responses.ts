import { ITrip } from 'src/app/shared/interfaces/trip.interface';

export interface ResponseListTripsQuery {
  listTrips: {
    count: number;
    data: ITrip[];
  };
}
