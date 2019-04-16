import { 
  bookResolver as Book, 
  authorResolver as Author 
} from './rootTypes'
import { queriesResolver as Query } from './queries'
import { mutationsResolver as Mutation } from './mutations'

const resolvers = {
  Query,
  Mutation,
  Author,
  Book
}

export default resolvers