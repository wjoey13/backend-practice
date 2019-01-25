
exports.up = function(knex, Promise) {
    return knex.schema.createTable('anime_info',(anime) => {
        anime.increments('id')
        anime.string('title')
        anime.text('genre')
        anime.text('description')
        anime.string('rating')
        anime.string('cover')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('anime_info')
};
