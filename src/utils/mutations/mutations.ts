import { gql } from 'apollo-angular';

export const SIGN_UP_MUTATION = gql`
  mutation signUp(
    $email: String!
    $name: String!
    $lastName: String!
    $password: String!
    $telephoneNumber: String
    $address: String
  ) {
    signUpUser(
      input: {
        email: $email
        name: $name
        lastName: $lastName
        password: $password
        telephoneNumber: $telephoneNumber
        address: $address
      }
    ) {
      accessToken
      user {
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
  }
`;

export const LOG_IN_MUTATION = gql`
  mutation logIn($email: String!, $password: String!) {
    signInUser(input: { email: $email, password: $password }) {
      accessToken
      user {
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
  }
`;

export const SOCIAL_SIGN_IN_MUTATION = gql`
  mutation socialSignIn($token: String!) {
    socialSignIn(input: { token: $token }) {
      accessToken
      user {
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
  }
`;

export const VALIDATE_TOKEN_MUTATION = gql`
  mutation validateAuthToken($token: String!, $password: String) {
    validateToken(input: { origin: "web", token: $token, password: $password })
  }
`;

export const RESET_USER_PASSWORD_MUTATION = gql`
  mutation resetPW($email: String!) {
    resetUserPassword(input: { origin: "web", email: $email })
  }
`;

export const UPDATE_SELF_PASSWORD_MUTATION = gql`
  mutation updatePassword($newPassword: String!, $oldPassword: String!) {
    updateSelfPassword(
      input: { newPassword: $newPassword, oldPassword: $oldPassword }
    ) {
      passwordUpdated
    }
  }
`;