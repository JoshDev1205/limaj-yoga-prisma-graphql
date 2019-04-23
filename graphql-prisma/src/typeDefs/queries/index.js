export const queriesDef = `
type Query {
  author(id: ID): Author
  authors: [Author]
  book(id: ID): Book
  books: [Book]
}
`