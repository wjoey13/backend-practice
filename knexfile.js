// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgresql://localhost/anime_database'
    }
  },

  
  production: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL
    }
  }

};
