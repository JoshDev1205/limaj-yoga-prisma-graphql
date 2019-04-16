export const bookResolver = {
  author ({ authorId }, _ ,{ models }) {
    return models.Author.findOne({_id: authorId })
  }
}

export const authorResolver = {
  books ({ _id }, args, { models }) {
    return models.Book.find({ authorId: _id })
  }
}