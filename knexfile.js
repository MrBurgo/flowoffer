module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/flowoffer'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
