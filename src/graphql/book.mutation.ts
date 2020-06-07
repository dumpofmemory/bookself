import { gql } from 'apollo-boost';

// export const ADD_BOOK = gql`
//   mutation createBook($book: Book)
//   ) {
//     createBook(data: $book) {
//       title
//     }
//   }
// `;

export const ADD_BOOK = gql`
  mutation createBook($data: BookCreateInput!) {
    createBook(data: $data) {
      id
      title
    }
  }
`;
