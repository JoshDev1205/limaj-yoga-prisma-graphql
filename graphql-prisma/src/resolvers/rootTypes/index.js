export const bookResolver = {
  author ({ id }, _ ,{ prisma }) {
    return prisma.book({ id }).author()
  }
}

export const authorResolver = {
  books ({ id }, args, { prisma }) {
    return prisma.author({ id }).books()
  }
}
