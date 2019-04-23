export const queriesResolver = {
  author (parents,{ id },{ prisma }) {
    return prisma.author(
      {
        id
      }
    )
  },
  authors (parents, args, { prisma }) {
    return prisma.authors()
  },
  book (parents,{ id },{ prisma }) {
    return prisma.book(
      {
        id
      }
    )
  },
  books (parents, args, { prisma }) {
    return prisma.books()
  }
}