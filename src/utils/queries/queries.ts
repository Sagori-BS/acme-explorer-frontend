import { gql } from 'apollo-angular';
import { APPLICATION_DATA, TRIP_DATA } from '../fragments/fragments';

export const GET_USER = gql`
  query Self {
    self {
      id
      email
      name
      lastName
      telephoneNumber
      address
      profilePicture
      role
    }
  }
`;

export const GET_TRIPS = gql`
  query getTrips($start: Int, $limit: Int, $where: JSON) {
    getTrips(input: { start: $start, limit: $limit, where: $where }) {
      ...TripData
    }
  }
  ${TRIP_DATA}
`;

export const LIST_TRIPS = gql`
  query listTrips($start: Int, $limit: Int, $where: JSON) {
    listTrips(input: { start: $start, limit: $limit, where: $where }) {
      count
      data {
        ...TripData
      }
    }
  }
  ${TRIP_DATA}
`;

export const GET_SELF_APPLICATIONS = gql`
  query getSelfApplications($start: Int, $limit: Int, $where: JSON) {
    getSelfApplications(
      input: { start: $start, limit: $limit, where: $where }
    ) {
      count
      data {
        ...ApplicationData
      }
    }
  }
  ${APPLICATION_DATA}
`;

export const GET_APLICATION_BY_ID = gql`
  query getApplicationById($id: ID!) {
    getApplicationById(id: $id) {
      ...ApplicationData
    }
  }
  ${APPLICATION_DATA}
`;

export const GET_TRIP = gql`
  query getTrip($id: ID!) {
    getTripById(id: $id) {
      ...TripData
    }
  }
  ${TRIP_DATA}
`;

export const PUBLISH_TRIP = gql`
  query publishSelfTrip($id: ID!) {
    publishSelfTrip(id: $id) {
      ...TripData
    }
  }
  ${TRIP_DATA}
`;
