import mongoose from 'mongoose'

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
})

const Author = mongoose.model('Author', AuthorSchema)

export default Author
