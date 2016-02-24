import jwt from 'jsonwebtoken'

export default function createToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: 1440
  })
}
