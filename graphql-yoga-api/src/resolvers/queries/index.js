export const queriesResolver = {
  author (parents,{ _id },{ models }) {
    return models.Author.findOne({ _id })
  },
  authors (parents, args, { models }) {
    return models.Author.find({})
  },
  book (parents,{ _id },{ models }) {
    return models.Book.findOne({ _id })
  },
  books (parents, args, { models }) {
    return models.Book.find({})
  }
}