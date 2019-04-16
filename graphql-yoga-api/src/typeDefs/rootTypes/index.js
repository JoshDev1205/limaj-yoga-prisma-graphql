export const rootTypesDef = `
type Author {
  _id: ID!
  name: String!
  country: String!
  createdOn: String!
  books: [Book]
}

type Book {
  _id: ID!
  title: String!
  desc: String!
  authorId: ID!
  quantity: Int
  createdOn: String!
  author: Author
}
`