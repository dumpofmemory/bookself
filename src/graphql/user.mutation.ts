import { gql } from 'apollo-boost';

export const CREATE_USER = gql`
  mutation createUser(
    $uid: String
    $name: String
    $email: String
    $photoURL: String
    $isNewUser: Boolean
  ) {
    createUser(uid: $uid, name: $name, email: $email, photoURL: $photoURL, isNewUser: $isNewUser) {
      id
      name
    }
  }
`;
