export const mutationsDef = `
  input AuthorInput {
    name: String
    country: String
    }
  
  input BookInput {
    title: String
    desc: String
    quantity: Int
  }
  
  type Mutation {
    createAuthor(name: String!, country: String!): Author!
    updateAuthor(id: ID!, input: AuthorInput ): Author!
    createBook(input: BookInput, authorId: ID!): Book!
    updateBook(id: ID!, input: BookInput ): Book!
  }
`