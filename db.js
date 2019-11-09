const Sequelize = require('sequelize')
const databaseUrl = 'postgres://postgres:secret@localhost:5432/postgres'
const db = new Sequelize(databaseUrl)

const Movie = db.import(__dirname + '/movie/model')

module.exports = {
    db,
    Movie
}
