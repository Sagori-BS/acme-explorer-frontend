import { ITrip } from 'src/app/modules/trips/interfaces/trip.interface';

export interface ResponseListTripsQuery {
  listTrips: {
    count: number;
    data: ITrip[];
  };
}
