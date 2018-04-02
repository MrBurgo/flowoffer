const express = require('express')

const router = express.Router()

// GET all offers
router.get('/', (req, res, next) => {
  res.send('GET an offer')
})

// GET a single offer
router.get('/:id', (req, res, next) => {
  res.send('GET a single offer')
})

// POST a new offer
router.post('/', (req, res, next) => {
  res.send('POST a new offer')
})

// DELETE an offer
router.delete('/:id', (req, res, next) => {
  res.send('DELETE an offer')
})

// UPDATE an offer
router.patch('/:id', (req, res, next) => {
  res.send('UPDATE an offer')
})

module.exports = router
