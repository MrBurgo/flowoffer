exports.seed = (knex, Promise) => (
  knex('offers').del()
    .then(() => (
      knex('offers').insert([
        { name: 'hello@me.com', password: 'thereaintnopassword' }
      ])
    ))
    .then(() => knex.raw("SELECT setval('offers_id_seq', (SELECT MAX(id) FROM offers));"))
)
