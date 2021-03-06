import { CREATE_SELF_FINDER } from './../graphql/mutations/finder/create-self-finder.mutation';
import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { FilterInputParams } from 'src/utils/inputs/filter-input-params';
import { LOCK_USER } from '../graphql/mutations/user/lock-user.mutation';
import { ResponseLockUserMutation } from '../graphql/types/user/lock-user-response.type';
import { GET_SELF_FINDERS } from '../graphql/queries/self-finders.query';
import { ResponseGetSelfFindersQuery } from '../graphql/types/finder/get-self-finders-reponse.type';
import { UpdateFinderInput } from '../graphql/inputs/finder/update-finder.input';
import { UPDATE_SELF_FINDER } from '../graphql/mutations/finder/update-self-finder.mutation';
import { ResponseUpdateSelfFinderMutation } from '../graphql/types/finder/update-self-finder-response.type';
import { DELETE_SELF_FINDER } from '../graphql/mutations/finder/delete-self-finder.mutation';
import { ResponseDeleteSelfFinderMutation } from '../graphql/types/finder/delete-self-finder-response.type';
import { CreateFinderInput } from '../graphql/inputs/finder/create-finder.input';
import { ResponseCreateSelfFinderMutation } from '../graphql/types/finder/create-self-finder-response.type';

@Injectable({
  providedIn: 'root'
})
export class FinderService {
  start = 0;
  limit = 10;
  where: unknown = {};
  sort: unknown = {};

  constructor(private apollo: Apollo) {}

  list(listTripsParams?: FilterInputParams) {
    if (listTripsParams) {
      const { start, limit, where, sort } = listTripsParams;
      this.start = start || this.start;
      this.limit = limit || this.limit;
      this.where = where || this.where;
      this.sort = sort || this.sort;
    }
    return this.apollo.query<ResponseGetSelfFindersQuery>({
      query: GET_SELF_FINDERS,
      variables: {
        start: this.start,
        limit: this.limit,
        where: this.where,
        sort: this.sort
      }
    });
  }

  create(createFinderInput: CreateFinderInput) {
    return this.apollo.mutate<ResponseCreateSelfFinderMutation>({
      mutation: CREATE_SELF_FINDER,
      variables: {
        input: createFinderInput
      }
    });
  }

  update(updateFinderInput: UpdateFinderInput) {
    return this.apollo.mutate<ResponseUpdateSelfFinderMutation>({
      mutation: UPDATE_SELF_FINDER,
      variables: {
        input: updateFinderInput
      }
    });
  }

  delete(id: string) {
    return this.apollo.mutate<ResponseDeleteSelfFinderMutation>({
      mutation: DELETE_SELF_FINDER,
      variables: {
        id
      }
    });
  }
}
