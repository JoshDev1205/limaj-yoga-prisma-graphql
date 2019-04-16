export const mutationsResolver = {
  createAuthor (parents, args, { models }) {
    return models.Author.create(args)
  },
  updateAuthor (parents, { _id, input }, { models }) {
    return models.Author.findOneAndUpdate({_id},input,{new: true})
  },
  createBook (parents, args, { models }) {
    return models.Book.create(args)
  },
  updateBook (parents, {_id, input}, { models }) {
    return models.Book.findOneAndUpdate({_id}, input, {new: true})
  }
}