import { Router } from 'express'

const router = new Router()

router.use('/login', require('./login'))
router.use('/signup', require('./signup'))

module.exports = router
