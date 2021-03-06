import { UpdateTripInput } from './inputs/update-trip.input';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FilterInputParams } from 'src/utils/inputs/filter-input-params';
import {
  APPLY_TO_TRIP,
  CANCEL_TRIP,
  CREATE_TRIP,
  DELETE_TRIP,
  UPDATE_TRIP
} from 'src/utils/mutations/mutations';
import {
  ResponseCancelTrip,
  ResponseCreateTrip,
  ResponseDeleteTrip,
  ResponseUpdateTrip
} from 'src/utils/mutations/responses';
import {
  GET_TRIP,
  GET_TRIPS,
  LIST_TRIPS,
  PUBLISH_TRIP
} from 'src/utils/queries/queries';
import {
  ResponseGetTripsQuery,
  ResponseListTripsQuery,
  ResponsePublishSelfTripQuery,
  ResponseTripByIDQuery
} from 'src/utils/queries/responses';
import { SELF_TRIPS } from './graphql/queries/self-trips.query';
import { ResponseSelfTripsQuery } from './graphql/responses/self-trips.response';
import { CreateTripInput } from './inputs/create-trip.input';
import { CancelTripInput } from './inputs/cancel-trip.input';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  start = 0;
  limit = 10;
  where: unknown = {};

  constructor(private apollo: Apollo) {}

  fetch(listTripsParams?: FilterInputParams) {
    if (listTripsParams) {
      const { start, limit, where } = listTripsParams;
      this.start = start || this.start;
      this.limit = limit || this.limit;
      this.where = where || this.where;
    }

    return this.apollo.query<ResponseListTripsQuery>({
      query: LIST_TRIPS,
      variables: {
        start: this.start,
        limit: this.limit,
        where: this.where
      }
    });
  }

  getTrips(listTripsParams?: FilterInputParams) {
    if (listTripsParams) {
      const { start, limit, where } = listTripsParams;
      this.start = start || this.start;
      this.limit = limit || this.limit;
      this.where = where || this.where;
    }

    return this.apollo.query<ResponseGetTripsQuery>({
      query: GET_TRIPS,
      variables: {
        start: this.start,
        limit: this.limit,
        where: this.where
      }
    });
  }

  selfTrips(listTripsParams?: FilterInputParams) {
    if (listTripsParams) {
      const { start, limit, where } = listTripsParams;
      this.start = start || this.start;
      this.limit = limit || this.limit;
      this.where = where || this.where;
    }

    return this.apollo.query<ResponseSelfTripsQuery>({
      query: SELF_TRIPS,
      variables: {
        start: this.start,
        limit: this.limit,
        where: this.where
      }
    });
  }

  getTripDetail(id: string | null) {
    return this.apollo.query<ResponseTripByIDQuery>({
      query: GET_TRIP,
      variables: {
        id
      }
    });
  }

  applyToTrip(comments: string[], trip: string) {
    return this.apollo.mutate({
      mutation: APPLY_TO_TRIP,
      variables: {
        comments,
        trip
      }
    });
  }

  publishTrip(id: string | null) {
    return this.apollo.query<ResponsePublishSelfTripQuery>({
      query: PUBLISH_TRIP,
      variables: {
        id
      }
    });
  }

  createTrip(createTripInput: CreateTripInput) {
    return this.apollo.mutate<ResponseCreateTrip>({
      mutation: CREATE_TRIP,
      variables: {
        input: {
          ...createTripInput
        }
      }
    });
  }

  updateTrip(updateTripInput: UpdateTripInput) {
    return this.apollo.mutate<ResponseUpdateTrip>({
      mutation: UPDATE_TRIP,
      variables: {
        input: {
          data: updateTripInput.data,
          where: updateTripInput.where
        }
      }
    });
  }

  deleteTrip(id: string | null) {
    return this.apollo.mutate<ResponseDeleteTrip>({
      mutation: DELETE_TRIP,
      variables: {
        id
      }
    });
  }

  cancelTrip(cancelTripInput: CancelTripInput) {
    return this.apollo.mutate<ResponseCancelTrip>({
      mutation: CANCEL_TRIP,
      variables: {
        input: {
          ...cancelTripInput
        }
      }
    });
  }
}
