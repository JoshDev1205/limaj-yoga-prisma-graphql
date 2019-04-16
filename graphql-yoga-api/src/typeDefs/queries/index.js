export const queriesDef = `
type Query {
  author(_id: ID): Author
  authors: [Author]
  book(_id: ID): Book
  books: [Book]
}
`