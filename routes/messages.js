const router = require('express').Router();
const moment = require('moment')
const { scheduleJob, scheduledJobs } = require('node-schedule');

const { getMessages } = require('../services/localData');

router.get('/', (req, res, next) => {
  const { page, limit } = req.query;

  try {
    const messages = getMessages({ page, limit })

    res.json(messages)
  } catch (e) {
    next(e)
  }
})

router.post('/schedule', (req, res, next) => {
  const { schedule } = req.body;
  
  const dateTime = moment(schedule).toDate();

  try {
    scheduleJob('user1', dateTime, () => {
      console.log('schedule works', 666);
    })

    res.status(200).send()
  } catch (e) {
    next(e)
  }
})

module.exports = router