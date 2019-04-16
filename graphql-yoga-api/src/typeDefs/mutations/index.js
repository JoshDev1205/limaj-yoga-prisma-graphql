export const mutationsDef = `
  input AuthorUpdate {
    name: String
    country: String
    }
  
  input BookUpdate {
    title: String
    desc: String
    quantity: Int
  }
  
  type Mutation {
    createAuthor(name: String!, country: String!): Author
    updateAuthor(_id: ID!, input: AuthorUpdate ): Author
    createBook(title: String!, desc: String!, authorId: ID!, quantity: Int): Book
    updateBook(_id: ID!, input: BookUpdate ): Book
  }
`