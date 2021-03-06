import { gql } from 'apollo-angular';
import { FINDER_DATA } from 'src/utils/fragments/fragments';

export const CREATE_SELF_FINDER = gql`
  mutation createSelfFinder($input: CreateFinderInput!) {
    createSelfFinder(input: $input) {
      ...FinderData
    }
  }
  ${FINDER_DATA}
`;
