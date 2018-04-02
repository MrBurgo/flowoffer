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
    .then((rows) => {
      if (rows.length > 0) {
        res.json(rows)
      } else {
        res.sendStatus(404)
      }
    })
})

// POST a new offer
router.post('/', (req, res, next) => {
  // res.send('POST a new offer')
  const { name } = req.body

  knex('offers')
    .insert([
      { name }
    ])
    .returning('id')
    .then(result => res.send(result))
})

// DELETE an offer
router.delete('/:id', (req, res, next) => {
  // res.send('DELETE an offer')

  const { id } = req.params

  knex('offers')
    .del()
    .where('id', id)
    .then(result => res.json(result))
})

// UPDATE an offer
router.patch('/:id', (req, res, next) => {
  // res.send('UPDATE an offer')

  const { id } = req.params
  const { name } = req.body

  knex('offers')
    .update({ name })
    .where('id', id)
    .returning('id')
    .then(result => res.json(result))
})

module.exports = router
