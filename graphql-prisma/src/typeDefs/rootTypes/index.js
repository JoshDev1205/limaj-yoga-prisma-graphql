export const rootTypesDef = `
type Author {
  id: ID!
  name: String!
  country: String!
  books: [Book]
}

type Book {
  id: ID!
  title: String!
  desc: String!
  quantity: Int
  author: Author!
}
`