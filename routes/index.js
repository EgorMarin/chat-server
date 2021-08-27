const router = require('express').Router()

const chats = require('./chats')
const messages = require('./messages')
const media = require('./media')

router.use('/chats', chats)
router.use('/messages', messages)
router.use('/media', media)

module.exports = router





