
exports.up = function(knex, Promise) {
    return knex.schema.createTable('anime_info',(anime) => {
        anime.increments('id')
        anime.string('title')
        anime.string('genre')
        anime.string('discription')
        anime.float('rating')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('anime_info')
};
