const favoritesService = {
  getAllFavorites(knex) {
    return knex.select('*').from('favorites')
  },
  addFavorite(db, newFavorite) {
    return db 
      .insert(newFavorite)
      .into('favorites')
  },
  deleteFavorite(knex, id) {
    return knex('favorites')
      .where('favorites_id', id)
      .delete()
  },
  favoritesByUser(knex, id) {
    return knex.from('favorites').select('*').where('user_id', id)
  },
}

module.exports = favoritesService