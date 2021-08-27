const router = require('express').Router()

const { getChats } = require('../services/localData');

router.get('/', (req, res, next) => {
  const { user } = req.query;

  try {
    const chats = getChats({ user })

    res.json(chats)
  } catch (e) {
    next(e)
  }
})
module.exports = router