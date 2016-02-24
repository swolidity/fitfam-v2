import { Router } from 'express'
import User from './models/user'
import createToken from './utils/create-token'

const router = new Router()

router.post('/', (req, res, next) => {
  let user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })

  user.save((err) => {
    if (err) {
      return next(err)
    }

    user = user.toObject() // convert Mongoose Model to POJO
    delete user.password
    const token = createToken(user)

    res.send(token)
  })
})

module.exports = router
