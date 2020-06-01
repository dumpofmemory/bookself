import { gql } from 'apollo-boost';

export const GET_USERS = gql`
  {
    users {
      id
      name
    }
  }
`;

export const GET_USER = gql`
  query User($uid: String!) {
    user(uid: $uid) {
      name
      email
    }
  }
`;
