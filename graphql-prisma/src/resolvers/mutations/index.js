export const mutationsResolver = {
  createAuthor (parents, args, { prisma }) {
    return prisma.createAuthor(args)
  },
  updateAuthor (parents, { id, input: data }, { prisma }) {
    return prisma.updateAuthor({
      where: {
        id
      }, data
    })
  },
  createBook (parents, { authorId, input }, { prisma }) {
    return prisma.createBook({
      title: input.title,
      desc: input.desc,
      quantity: input.quantity,
      author: {
        connect: {
          id: authorId
        }
      }
    })
  },
  updateBook (parents, { id, input: data}, { prisma }) {
    return prisma.updateBook({
      where: {
        id
      }, data
    })
  }
}