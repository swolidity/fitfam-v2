import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  photo: {
    type: String
  },
  full_name: {
    type: String
  },
  bio: {
    type: String
  },
  facebook: {
    id: String,
    token: String
  },
  date: {
    type: Date,
    'default': Date.now
  }
})

UserSchema.pre('save', function (cb) {
  const user = this

  if (!user.isModified('password')) return cb()

  bcrypt.genSalt(5, (err, salt) => {
    if (err) return cb(err)

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return cb(err)
      user.password = hash
      cb()
    })
  })
})

UserSchema.methods.verifyPassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return cb(err)
    cb(null, isMatch)
  })
}

module.exports = mongoose.model('User', UserSchema)
