const express = require('express')
const knex = require('../knex')

const router = express.Router()

// GET all offers
router.get('/', (req, res, next) => {
  // res.send('GET an offer')
  // SELECT name FROM offer
  knex('offers')
    .select('name')
    .then(rows => res.json(rows))
})

// GET a single offer
router.get('/:id', (req, res, next) => {
  const { id } = req.params

  knex('offers')
    .select('id', 'name')
    .where('id', id)
    .then(rows => res.json(rows))
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
