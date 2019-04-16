import mongoose from 'mongoose'
import { Author, Book } from './models'

mongoose.Promise = global.Promise

export const startDB = ({ user, pwd, url, db }) => mongoose.connect(`mongodb://${user}:${pwd}@${url}/${db}`, { useNewUrlParser: true })

export const models = {
  Author,
  Book
}