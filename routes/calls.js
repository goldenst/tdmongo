const express = require('express')
const {getCalls, getCall, createCall, updateCall, deleteCall} = require('../controlers/calls')
const router = express.Router()

router.route('/')
  .get(getCalls)
  .post(createCall)

router.route('/:id')
  .get(getCall)
  .put(updateCall)
  .delete(deleteCall)

module.exports = router