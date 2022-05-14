import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FilterInputParams } from 'src/utils/inputs/filter-input-params';
import {
  GET_APPLICATIONS,
  GET_SELF_APPLICATIONS
} from 'src/utils/queries/queries';
import {
  ResponseGetApplicationsQuery,
  ResponseListApplicationsQuery
} from 'src/utils/queries/responses';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  start = 0;
  limit = 10;
  where: unknown = {};

  constructor(private apollo: Apollo) {}

  getSelfApplications(params?: FilterInputParams) {
    if (params) {
      const { start, limit, where } = params;
      this.start = start || this.start;
      this.limit = limit || this.limit;
      this.where = where || this.where;
    }
    return this.apollo.query<ResponseListApplicationsQuery>({
      query: GET_SELF_APPLICATIONS,
      variables: {
        start: this.start,
        limit: this.limit,
        where: this.where
      }
    });
  }

  getApplications(params?: FilterInputParams) {
    if (params) {
      this.where = params?.where;
    }
    return this.apollo.query<ResponseGetApplicationsQuery>({
      query: GET_APPLICATIONS,
      variables: {
        where: this.where
      }
    });
  }
}
