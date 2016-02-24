import { Router } from 'express'
import User from './models/user'
import createToken from './utils/create-token'

const router = new Router()

router.post('/', (req, res, next) => {
  User
  .findOne({ username: req.body.username })
  .select('+password')
  .exec((err, user) => {
    if (err) return next(err)

    // No user found with that username
    if (!user) return res.status(401).send('Authentication failed. User not found.')

    user.verifyPassword(req.body.password, (err, isMatch) => {
      if (err) { return next(err) }

      // Password did not match
      if (!isMatch) return res.status(401).send('Authentication failed. Invalid password.')

      // user found and password is correct
      // create token
      user = user.toObject() // convert Mongoose Model to POJO
      delete user.password
      let token = createToken(user)

      res.send(token)
    })
  })
})

module.exports = router
